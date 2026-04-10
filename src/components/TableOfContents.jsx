import { useState } from "react";
import "./TableOfContents.css";

const tocData = [
  { label: "1. Introduction and Executive Summary", id: "sec-0" },
  { label: "2. Brief Background on AI", id: "sec-1" },
  {
    label: "3. AI's Use in Surveys",
    id: "sec-2",
    children: [
      {
        label: "3.1 AI in Data Collection",
        children: [
          { label: "3.1.1 AI as an Interviewer" },
          { label: "3.1.2 AI as a Respondent" },
        ],
      },
      {
        label: "3.2 AI as an Analyst",
        children: [
          { label: "3.2.1 AI as a Transcriber and Translator" },
          { label: "3.2.2 AI as a Data Cleaner" },
          { label: "3.2.3 AI as a Labeler/Annotator" },
          { label: "3.2.4 AI as a Modeler or Estimator" },
          { label: "3.2.5 Summary of Key Benefits and Risks" },
        ],
      },
      {
        label: "3.3 AI as a Briefer",
        children: [
          { label: "3.3.1 AI as Report Creator" },
          { label: "3.3.2 AI as Interactive Retrieval Experience" },
          { label: "3.3.3 Summary of AI as a Briefer" },
        ],
      },
      {
        label: "3.4 AI as a Colleague",
        children: [
          { label: "3.4.1 AI as a Question Writer" },
          { label: "3.4.2 AI as a Question Editor" },
          { label: "3.4.3 AI as a Question Translator" },
          { label: "3.4.4 Summary of AI as a Colleague" },
        ],
      },
      { label: "3.5 AI as a Workflow" },
    ],
  },
  {
    label: "4. Evaluating the Usage of AI for Survey Research",
    id: "sec-3",
    children: [
      {
        label: "4.1 A Few Do's and Don'ts",
        children: [
          {
            label:
              "4.1.1 Do involve humans in all GenAI‑mediated survey research activities",
          },
          {
            label:
              "4.1.2 Do not assume performance generalizes across use cases",
          },
          {
            label: "4.1.3 Do not assume past performance generalizes to future",
          },
          { label: "4.1.4 Do document all decisions and procedures" },
          {
            label:
              "4.1.5 Do not solely rely on LLMs to evaluate LLM activities",
          },
        ],
      },
      {
        label: "4.2 Evaluation Criteria",
        children: [
          { label: "4.2.1 Validity" },
          { label: "4.2.2 Performance" },
          { label: "4.2.3 Sensitivity" },
          { label: "4.2.4 Reliability" },
        ],
      },
      {
        label: "4.3 Examples of Evaluation",
        children: [
          { label: "4.3.1 AI as a Colleague" },
          { label: "4.3.2 AI as an Interviewer" },
          { label: "4.3.3 AI as a Respondent" },
          { label: "4.3.4 AI as an Analyst" },
        ],
      },
      { label: "4.4 Other Evaluation Considerations" },
    ],
  },
  {
    label: "5. Recommendations for Transparency and Reporting",
    id: "sec-4",
    children: [
      {
        label: "5.1 AAPOR's Disclosure Checklist for AI in Surveys",
        children: [
          { label: "5.1.1 Task Performed by AI" },
          { label: "5.1.2 Human Oversight or Validation" },
          { label: "5.1.3 Human Respondents Disclosure" },
          { label: "5.1.4 Access and Infrastructure" },
          { label: "5.1.5 Model Details, Core Prompts and Instructions" },
        ],
      },
      { label: "5.2 Examples/Vignettes" },
      { label: "5.3 Infrastructure and Audience Transparency and Reporting" },
    ],
  },
  {
    label: "6. Responsibility to Human Subjects",
    id: "sec-5",
    children: [
      {
        label: "6.1 Transparency and Disclosure",
        children: [
          { label: "6.1.1 Why disclosure is necessary" },
          { label: "6.1.2 What should be disclosed" },
          { label: "6.1.3 How disclosure should occur" },
        ],
      },
      {
        label: "6.2 Respondent Protections in AI for Survey Research",
        children: [
          { label: "6.2.1 Human subjects and AI-enabled research" },
          { label: "6.2.2 Risk assessment and proportional safeguards" },
          { label: "6.2.3 Data protection, PII, and data governance" },
          { label: "6.2.4 Emerging and future concerns" },
        ],
      },
      {
        label: "6.3 Ethical Considerations for AI in Survey Research",
        children: [
          { label: "6.3.1 Inaccuracy" },
          { label: "6.3.2 Bias and Discrimination" },
          { label: "6.3.3 Ethics with Generative AI" },
        ],
      },
    ],
  },
  {
    label: "Appendix",
    id: "sec-6",
    children: [
      {
        label: "A1. Background on AI (Full)",
        children: [
          { label: "A1.1 Description of AI models and tooling" },
          {
            label:
              "A1.2 Overview of how AI models and tooling are useful or not",
            children: [
              { label: "A1.2.1 What is AI and what is an LLM?" },
              { label: "A1.2.2 What AI is good for" },
              {
                label: "A1.2.3 How AI is currently being used for productivity",
              },
              { label: "A1.2.4 Where AI is not useful or risky" },
            ],
          },
          {
            label: "A1.3 Potential benefit of increased use of AI",
            children: [
              { label: "A1.3.1 Global" },
              { label: "A1.3.2 Societal & Civic" },
              { label: "A1.3.3 Individual / Personal" },
              { label: "A1.3.4 Economic / Commercial" },
            ],
          },
          {
            label: "A1.4 Potential risks of increased use of AI",
            children: [
              { label: "A1.4.1 Bias, accuracy, hallucinations, confabulation" },
              { label: "A1.4.2 Misinformation, disinformation, trust" },
              { label: "A1.4.3 Economic impacts" },
              { label: "A1.4.4 Model misalignment" },
              { label: "A1.4.5 Lack of interpretability, explainability" },
              { label: "A1.4.6 Abuse and Harassment" },
              { label: "A1.4.7 Energy, water, and land costs" },
              { label: "A1.4.8 Emotional dependence, human actualization" },
            ],
          },
        ],
      },
    ],
  },
];

function TocItem({ item, depth = 0 }) {
  const handleClick = () => {
    if (item.id) {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <li className={`toc-depth-${depth}`}>
      <span
        className={item.id ? "toc-link" : "toc-label"}
        onClick={item.id ? handleClick : undefined}
      >
        {item.label}
      </span>
      {item.children && (
        <ul>
          {item.children.map((child, i) => (
            <TocItem key={i} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="toc-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle table of contents"
      >
        ☰ Table of Contents
      </button>

      {open && <div className="toc-overlay" onClick={() => setOpen(false)} />}

      <nav className={`toc-sidebar ${open ? "toc-open" : ""}`}>
        <div className="toc-header">
          <strong>Table of Contents</strong>
          <button
            className="toc-close"
            onClick={() => setOpen(false)}
            aria-label="Close table of contents"
          >
            ✕
          </button>
        </div>
        <ul className="toc-list">
          {tocData.map((item, i) => (
            <TocItem key={i} item={item} />
          ))}
        </ul>
      </nav>
    </>
  );
}
