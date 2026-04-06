import { forwardRef, useEffect, useRef } from "react";
import glossaryTerms from "../data/glossaryTerms";
import "./Section.css";

function extractSectionId(text) {
  const m = text.match(/^([A-Za-z]?\d+(?:\.\d+)*\.?)\s/);
  if (!m) return undefined;
  return "sec-" + m[1].replace(/\.$/, "").toLowerCase().replace(/\./g, "-");
}

// Build a single regex matching all glossary terms + abbreviations (longest first)
const glossaryLookup = {};
const allPhrases = [];
glossaryTerms.forEach(({ term, abbr, definition }) => {
  glossaryLookup[term.toLowerCase()] = definition;
  allPhrases.push(term);
  if (abbr) {
    glossaryLookup[abbr.toLowerCase()] = definition;
    allPhrases.push(abbr);
  }
});
allPhrases.sort((a, b) => b.length - a.length);
const glossaryRegex = new RegExp(
  `(?<!\\()\\b(${allPhrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\u2011/g, "[\u2011-]")).join("|")})\\b(?!\\))`,
  "gi",
);

function applyGlossaryTooltips(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      // Skip if already inside a tooltip, heading, strong, link, or references
      if (
        p.closest(".glossary-tip") ||
        p.closest(".references") ||
        tag === "STRONG" ||
        tag === "A" ||
        tag === "SUMMARY" ||
        tag === "H1" ||
        tag === "H2" ||
        tag === "H3" ||
        tag === "H4" ||
        tag === "BUTTON"
      )
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const seen = new Set();
  for (const node of textNodes) {
    const text = node.nodeValue;
    glossaryRegex.lastIndex = 0;
    if (!glossaryRegex.test(text)) continue;
    glossaryRegex.lastIndex = 0;

    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    let match;
    while ((match = glossaryRegex.exec(text)) !== null) {
      const key = match[1].toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      const def = glossaryLookup[key];
      if (!def) continue;

      if (match.index > lastIndex)
        frag.appendChild(
          document.createTextNode(text.slice(lastIndex, match.index)),
        );

      const span = document.createElement("span");
      span.className = "glossary-tip";
      span.textContent = match[1];
      span.setAttribute("data-tip", def);
      const termName = match[1];
      span.addEventListener("mouseenter", (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = Math.min(
          Math.max(rect.left + rect.width / 2 - 160, 8),
          window.innerWidth - 328,
        );
        const y = rect.top - 8;
        e.target.style.setProperty("--tip-x", x + "px");
        e.target.style.setProperty("--tip-y", y + "px");
      });
      span.addEventListener("click", () => {
        window.dispatchEvent(
          new CustomEvent("glossary-open", { detail: termName }),
        );
      });
      frag.appendChild(span);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex === 0) continue; // no new matches applied
    if (lastIndex < text.length)
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    node.parentNode.replaceChild(frag, node);
  }
}

function useAutoIds(ref) {
  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll("h3, h4").forEach((el) => {
      const id = extractSectionId(el.textContent);
      if (id && !el.id) el.id = id;
    });
    ref.current.querySelectorAll("table").forEach((el) => {
      const caption = el.querySelector("caption");
      if (caption) {
        const m = caption.textContent.match(/Table\s+(\d+)/i);
        if (m && !el.id) el.id = "table-" + m[1];
      }
    });
  }, []);
}

function Subsection({ title, html }) {
  const id = extractSectionId(title);
  const contentRef = useRef(null);
  useAutoIds(contentRef);
  useEffect(() => {
    applyGlossaryTooltips(contentRef.current);
  }, []);

  return (
    <details className="subsection" id={id}>
      <summary>{title}</summary>
      <div
        ref={contentRef}
        className="subsection-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <button
        className="collapse-btn"
        onClick={(e) => {
          e.target.closest("details").open = false;
          e.target
            .closest("details")
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        ▲ Collapse
      </button>
    </details>
  );
}

const Section = forwardRef(function Section(
  { id, title, defaultOpen, html, highlighted, subsections },
  ref,
) {
  const className = ["section", highlighted && "section--highlighted"]
    .filter(Boolean)
    .join(" ");

  const contentRef = useRef(null);
  useAutoIds(contentRef);
  useEffect(() => {
    if (title !== "References") applyGlossaryTooltips(contentRef.current);
  }, []);

  return (
    <details
      id={id}
      className={className}
      open={defaultOpen || highlighted || undefined}
      ref={ref}
    >
      <summary>
        {title}
        {highlighted && <span className="highlight-badge">Recommended</span>}
      </summary>
      <div className="section-content" ref={contentRef}>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
        {subsections && subsections.length > 0 && (
          <div className="subsections">
            {subsections.map((sub, i) => (
              <Subsection key={i} title={sub.title} html={sub.content} />
            ))}
          </div>
        )}
        <button
          className="collapse-btn"
          onClick={(e) => {
            e.target.closest("details").open = false;
            e.target
              .closest("details")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          ▲ Collapse
        </button>
      </div>
    </details>
  );
});

export default Section;
