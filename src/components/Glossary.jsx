import { useEffect, useRef, useState } from "react";
import "./Glossary.css";

const glossaryHtml = `
<h3>General Terms</h3>
<p><strong>Artificial Intelligence (AI):</strong> Broadly refers to computational systems designed to perform tasks that typically require human intelligence, such as language understanding, pattern recognition, prediction, or decision\u2011making.<br/><em>Example:</em> Using an algorithm to automatically classify open\u2011ended survey responses by topic.</p>
<p><strong>Machine Learning (ML):</strong> A subset of AI in which models learn patterns from data rather than following explicitly programmed rules.<br/><em>Example:</em> A model trained on labeled survey texts learns to predict sentiment in new responses.</p>
<p><strong>Generative AI (GenAI):</strong> A subset of ML, it refers to AI systems capable of producing novel content\u2014such as text, images, audio, or synthetic data\u2014rather than retrieving existing material.<br/><em>Example:</em> A GenAI system generates alternative question wordings based on a prompt.</p>
<p><strong>Large Language Model (LLM):</strong> A class of GenAI models trained on very large text corpora to generate, summarize, transform, or classify language by predicting the next unit of text (\u201Ctoken\u201D) in sequence.<br/><em>Example:</em> An LLM drafts a first\u2011pass summary of qualitative interview notes.</p>

<h3>Structural Components</h3>
<p><strong>Parameters:</strong> The internal numerical values learned during training that determine how an AI model processes inputs and produces outputs.<br/><em>Example:</em> An LLM\u2019s billions of parameters jointly shape how it completes a sentence.</p>
<p><strong>Training corpora:</strong> The datasets used to train an AI model, often consisting of large collections of text, images, or other data.<br/><em>Example:</em> An LLM trained on web text and books may reflect the topics and biases common in those sources.</p>
<p><strong>Token:</strong> A basic unit of text that a language model processes, such as a word, word fragment, or punctuation mark.<br/><em>Example:</em> The word \u201Csurveying\u201D may be split into multiple tokens during model processing.</p>
<p><strong>Open\u2011source vs. closed\u2011source models:</strong> Open\u2011source models make model code and/or parameters publicly available, while closed\u2011source models are controlled by a single organization and accessed via proprietary interfaces or APIs.<br/><em>Example:</em> An open\u2011weight model can be run locally, whereas a closed model may only be used through a vendor\u2019s platform.</p>
<p><strong>Chatbot:</strong> A user\u2011facing conversational interface that allows people to interact with an AI system through dialogue.<br/><em>Example:</em> A chatbot answers researcher questions about questionnaire wording.</p>
<p><strong>Agents (AI agents):</strong> AI systems designed to carry out multi\u2011step tasks, potentially invoking tools, making decisions, or interacting with other systems to pursue a goal.<br/><em>Example:</em> An agent automatically retrieves survey documentation, summarizes it, and drafts a methods section.</p>
<p><em>Clarification:</em> In this report, \u201Cchatbots\u201D refers to conversational interfaces, while \u201Cagents\u201D generally refers to systems with task autonomy; the terms may overlap in conversational contexts (e.g., AI interviewers).</p>

<h3>Processes and Practices</h3>
<p><strong>Zero\u2011shot prompting:</strong> Using an AI model to perform a task without providing task\u2011specific examples in the prompt.<br/><em>Example:</em> Asking an LLM to categorize responses without showing any labeled examples.</p>
<p><strong>Few\u2011shot prompting:</strong> Providing a small number of examples in the prompt to guide the model\u2019s behavior.<br/><em>Example:</em> Showing three coded survey responses before asking the model to code new ones.</p>
<p><strong>System prompts vs. user prompts:</strong> System prompts define global instructions or constraints on model behavior, while user prompts are task\u2011specific inputs provided during interaction.<br/><em>Example:</em> A system prompt enforces a neutral tone, while a user prompt asks for a summary.</p>
<p><strong>Prompt engineering:</strong> The practice of designing and refining prompts to improve AI outputs.<br/><em>Example:</em> Iteratively rewording prompts to obtain consistent response classifications.</p>
<p><strong>Retrieval\u2011augmented generation (RAG):</strong> A technique in which an AI model retrieves external documents or data at inference time and incorporates them into its responses.<br/><em>Example:</em> An LLM answers a question using content from a survey\u2019s official documentation.</p>
<p><strong>Human\u2011in\u2011the\u2011loop:</strong> A workflow in which humans review, edit, or approve AI outputs as part of the process.<br/><em>Example:</em> A researcher verifies AI\u2011generated codes before final analysis.</p>
<p><strong>Pre\u2011training:</strong> The initial training phase in which a model learns general patterns from large, broad datasets.<br/><em>Example:</em> An LLM learns grammar and vocabulary during pre\u2011training.</p>
<p><strong>Fine\u2011tuning:</strong> Additional training of a pre\u2011trained model on a smaller, task\u2011specific dataset to adapt it to a particular use case.<br/><em>Example:</em> Fine\u2011tuning a model on survey responses to better match domain\u2011specific language.</p>
<p><strong>Alignment:</strong> The degree to which an AI system\u2019s behavior matches intended goals, norms, or values set by its designers or users.<br/><em>Example:</em> An aligned model follows instructions to avoid speculative or biased interpretations.</p>
<p><strong>Deployment:</strong> The process of making an AI model or system available for use in real\u2011world applications or workflows.<br/><em>Example:</em> Integrating an AI tool into a survey platform\u2019s data\u2011processing pipeline.</p>
<p><strong>Hallucination:</strong> A hallucination occurs when an AI system generates information that is incorrect or fabricated but presents it confidently as factual, often because the output is not grounded in verified data or source material.<br/><em>Example:</em> An AI model may respond to a survey methodology question by citing a plausible\u2011sounding academic paper or statistic that does not actually exist.</p>

<h3>Models and Applications</h3>
<p><strong>GPT, Claude, Gemini, Grok, LLaMA, Mistral, DeepSeek:</strong> Specific families of large language models that differ in architecture, scale, training data, and governance.<br/><em>Example:</em> Researchers may compare outputs from GPT\u2011based and LLaMA\u2011based models on the same task.</p>
<p><strong>ChatGPT, Claude Code:</strong> A commercial application and user interface that provides access to a family of models, often with additional features such as memory, tools, or safety layers.<br/><em>Example:</em> Using ChatGPT to draft a survey summary relies on an underlying GPT model, not the application itself.</p>
<p><em>Distinction:</em> Models (e.g., GPT\u20114\u2011class) generate outputs; applications (e.g., ChatGPT) package models with interfaces, tools, and policies.</p>

<h3>Additional Survey Specific AI Terms</h3>
<p><strong>Synthetic Respondent:</strong> A simulated survey participant, typically generated by an AI model, designed to produce responses that approximate how a real human respondent might answer, without representing an actual human response to a survey.<br/><em>Example:</em> A researcher uses an AI model as a synthetic respondent to generate 10,000 simulated answers to a draft survey questionnaire in order to test question wording, response distributions, and potential bias before fielding the survey to real human participants.</p>
`;

export default function Glossary() {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      const term = e.detail;
      setOpen(true);
      setTimeout(() => {
        if (!bodyRef.current) return;
        // Find the <strong> that starts with the clicked term
        const strongs = bodyRef.current.querySelectorAll("strong");
        for (const el of strongs) {
          const text = el.textContent.toLowerCase();
          if (
            text.startsWith(term.toLowerCase()) ||
            text.includes(term.toLowerCase())
          ) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.style.background = "#fef08a";
            setTimeout(() => (el.style.background = ""), 1500);
            break;
          }
        }
      }, 250);
    };
    window.addEventListener("glossary-open", handler);
    return () => window.removeEventListener("glossary-open", handler);
  }, []);

  return (
    <>
      <button
        className="glossary-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle glossary"
      >
        📖 Glossary
      </button>

      {open && (
        <div className="glossary-overlay" onClick={() => setOpen(false)} />
      )}

      <nav className={`glossary-sidebar ${open ? "glossary-open" : ""}`}>
        <div className="glossary-header">
          <strong>Glossary</strong>
          <button
            className="glossary-close"
            onClick={() => setOpen(false)}
            aria-label="Close glossary"
          >
            ✕
          </button>
        </div>
        <div
          ref={bodyRef}
          className="glossary-body"
          dangerouslySetInnerHTML={{ __html: glossaryHtml }}
        />
      </nav>
    </>
  );
}
