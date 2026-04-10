import { useEffect, useRef, useState } from "react";
import referencesHtml from "../data/referencesHtml";
import "./References.css";

function generateRefId(text) {
  const m = text.match(
    /^([A-Z][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]+).*?\((\d{4})/,
  );
  if (!m) return null;
  return m[1].toLowerCase() + "-" + m[2];
}

export default function References() {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  // Add IDs to reference paragraphs after mount
  useEffect(() => {
    if (!bodyRef.current) return;
    const counts = {};
    bodyRef.current.querySelectorAll("p").forEach((p) => {
      const id = generateRefId(p.textContent);
      if (id && !p.id) {
        counts[id] = (counts[id] || 0) + 1;
        p.id = counts[id] > 1 ? "ref-" + id + "-" + counts[id] : "ref-" + id;
      }
    });
  }, []);

  // Listen for citation clicks
  useEffect(() => {
    const handler = (e) => {
      const { refKey } = e.detail;
      setOpen(true);
      setTimeout(() => {
        if (!bodyRef.current) return;
        // Try exact ID match first
        let el = bodyRef.current.querySelector("#ref-" + CSS.escape(refKey));
        if (!el) {
          // Fallback: search by author + year in text
          const parts = refKey.match(/^(.+)-(\d{4}[a-d]?)$/);
          if (parts) {
            const [, author, year] = parts;
            const ps = bodyRef.current.querySelectorAll("p");
            for (const p of ps) {
              if (
                p.textContent.toLowerCase().includes(author) &&
                p.textContent.includes(year)
              ) {
                el = p;
                break;
              }
            }
          }
        }
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ref-highlight");
          setTimeout(() => el.classList.remove("ref-highlight"), 2000);
        }
      }, 250);
    };
    window.addEventListener("references-open", handler);
    return () => window.removeEventListener("references-open", handler);
  }, []);

  return (
    <>
      <button
        className="references-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle references"
      >
        {"\ud83d\udcda"} References
      </button>

      {open && (
        <div className="references-overlay" onClick={() => setOpen(false)} />
      )}

      <nav className={`references-sidebar ${open ? "references-open" : ""}`}>
        <div className="references-header">
          <strong>References</strong>
          <button
            className="references-close"
            onClick={() => setOpen(false)}
            aria-label="Close references"
          >
            {"\u2715"}
          </button>
        </div>
        <div
          ref={bodyRef}
          className="references-body"
          dangerouslySetInnerHTML={{ __html: referencesHtml }}
        />
      </nav>
    </>
  );
}
