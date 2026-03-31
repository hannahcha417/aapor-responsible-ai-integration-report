import { useRef, useState } from "react";
import Section from "./components/Section";
import Quiz from "./components/Quiz";
import PasswordGate from "./components/PasswordGate";
import sections from "./data/sections.js";
import "./App.css";

function App() {
  const detailsRefs = useRef([]);
  const [highlightedSections, setHighlightedSections] = useState(null);

  const handleQuizComplete = (sectionIndices) => {
    setHighlightedSections(sectionIndices);
    // Auto-expand highlighted sections
    if (sectionIndices) {
      setTimeout(() => {
        detailsRefs.current.forEach((el, i) => {
          if (el) el.open = sectionIndices.includes(i);
        });
      }, 50);
    }
  };

  const toggleAll = (open) => {
    detailsRefs.current.forEach((el) => {
      if (el) el.open = open;
    });
  };

  return (
    <PasswordGate>
    <div className="container">
      <header>
        <h1>
          AAPOR Task Force on Responsible AI Integration in Survey Research
          Report
        </h1>
        <p>
          David M. Rothschild (Microsoft Research)*, Jenny Marlar (Gallup)*,
          Ashley Amaya (Pew) , Soubhik Barari (NORC at the University of
          Chicago), Trent Buskirk (Old Dominion University), Curtiss Cobb
          (Meta), Jen Gennai (T3), Sunshine Hillygus (Duke), Masha Krupenkin
          (University of Maryland), Sunghee Lee (University of Michigan), Darby
          Steiger (SSRS), Brock Webb (US Census Bureau), Ramya Korlakai Vinayak
          (University of Wisconsin)
        </p>
        <p>*Co-chairs</p>

        <div className="abstract">
          <p>
            <strong>Abstract</strong>
          </p>
          <p>
            Artificial Intelligence (AI), particularly large language models
            (LLM) and other generative systems, is rapidly transforming survey
            research across the full research lifecycle: from question design
            and data collection to analysis and dissemination. While algorithmic
            tools have long influenced survey methods, recent advances in scale,
            flexibility, and accessibility raise novel methodological, ethical,
            and governance challenges that existing standards do not fully
            address. This report, produced by the AAPOR Task Force on
            Responsible AI Integration in Survey Research, provides a structured
            framework for understanding where and how AI is being used in
            surveys, evaluates associated benefits and risks, along with
            necessary research and development, through the lens of total survey
            error and human-subject protections, and offers guidance for
            responsible practice. We propose principles for evaluation and human
            oversight, and use that to introduce a practical and tractable
            disclosure framework designed to promote transparency, informed
            interpretation, and reproducibility of AI-enabled survey research.
            Together these contributions aim to support innovation while
            safeguarding data quality, trust, and credibility of survey-based
            research.
          </p>
        </div>
      </header>

      <Quiz onComplete={handleQuizComplete} />

      <div className="controls">
        <button onClick={() => toggleAll(true)}>Expand All</button>
        <button onClick={() => toggleAll(false)}>Collapse All</button>
      </div>

      {sections.map((section, i) => (
        <Section
          key={i}
          title={section.title}
          defaultOpen={section.defaultOpen}
          html={section.content}
          subsections={section.subsections}
          highlighted={
            highlightedSections ? highlightedSections.includes(i) : false
          }
          ref={(el) => (detailsRefs.current[i] = el)}
        />
      ))}

      <footer>
        <p>&copy; 2026 &middot; AAPOR</p>
      </footer>
    </div>
    </PasswordGate>
  );
}

export default App;
