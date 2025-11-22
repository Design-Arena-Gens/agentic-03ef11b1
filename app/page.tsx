/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

const PROMPT = `Respond only in Hindi for all answers.

Task: Give 10 practical morning home-health practices to do right after waking up that help maintain good health.

Requirements:
- Include eating a small portion of mixed dry fruits and drinking warm water in the morning among the tips.
- Use clear, simple Hindi with a friendly, motivational tone.
- Present as a numbered list (1?10).
- For each point, include: what to do, brief benefits, and a simple how-to (1?2 lines).
- Keep claims reasonable; avoid medical promises or diagnoses.
- End with a short safety disclaimer advising people to consult a doctor if they have medical conditions or concerns.

Important: Always continue replying in Hindi in this conversation. If the user switches languages, still reply in Hindi.`;

export default function Page() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API not available
      const textarea = document.createElement("textarea");
      textarea.value = PROMPT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 880,
          background: "white",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.05), 0 10px 25px -5px rgba(0,0,0,0.1)",
          borderRadius: 16,
          padding: 24,
          border: "1px solid #e2e8f0",
        }}
      >
        <header style={{ marginBottom: 16 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 28,
              lineHeight: 1.2,
              letterSpacing: -0.5,
            }}
          >
            English Prompt ? Hindi Health Tips (10)
          </h1>
          <p style={{ marginTop: 8, color: "#475569" }}>
            Copy the prompt below and paste it into your AI chat. The AI will
            always reply in Hindi and include dry fruits and warm water in the
            morning tips.
          </p>
        </header>

        <section
          style={{
            position: "relative",
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            background:
              "linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #ffffff 100%)",
          }}
        >
          <pre
            style={{
              margin: 0,
              padding: "18px 16px 60px 16px",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontSize: 14.5,
              lineHeight: 1.6,
              color: "#0f172a",
            }}
          >
            {PROMPT}
          </pre>
          <div
            style={{
              position: "absolute",
              right: 12,
              bottom: 12,
              display: "flex",
              gap: 8,
            }}
          >
            <button
              onClick={handleCopy}
              style={{
                background: copied ? "#16a34a" : "#0ea5e9",
                color: "white",
                border: "none",
                padding: "10px 14px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 600,
                boxShadow:
                  "0 1px 1px rgba(0,0,0,0.04), 0 6px 14px -6px rgba(2,132,199,0.6)",
              }}
            >
              {copied ? "Copied ?" : "Copy prompt"}
            </button>
          </div>
        </section>

        <footer style={{ marginTop: 18, color: "#64748b", fontSize: 13 }}>
          Tip: After pasting, ask follow-ups in Hindi. The AI will keep
          answering in Hindi.
        </footer>
      </div>
    </main>
  );
}
