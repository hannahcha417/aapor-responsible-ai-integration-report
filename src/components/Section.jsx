import { forwardRef } from "react";
import "./Section.css";

function Subsection({ title, html }) {
  return (
    <details className="subsection">
      <summary>{title}</summary>
      <div
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
  { title, defaultOpen, html, highlighted, subsections },
  ref,
) {
  const className = ["section", highlighted && "section--highlighted"]
    .filter(Boolean)
    .join(" ");

  return (
    <details
      className={className}
      open={defaultOpen || highlighted || undefined}
      ref={ref}
    >
      <summary>
        {title}
        {highlighted && <span className="highlight-badge">Recommended</span>}
      </summary>
      <div className="section-content">
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
