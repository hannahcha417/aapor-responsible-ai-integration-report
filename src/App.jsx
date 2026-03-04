import { useRef, useState } from "react";
import Section from "./components/Section";
import Quiz from "./components/Quiz";
import sections from "./data/sections.json";
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
  );
}

export default App;
