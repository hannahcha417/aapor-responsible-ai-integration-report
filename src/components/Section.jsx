import { forwardRef, useEffect, useRef } from "react";
import "./Section.css";

function extractSectionId(text) {
  const m = text.match(/^([A-Za-z]?\d+(?:\.\d+)*\.?)\s/);
  if (!m) return undefined;
  return "sec-" + m[1].replace(/\.$/, "").toLowerCase().replace(/\./g, "-");
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
