const automationData = [
  {
    title: "Voice-Activated Telegram Assistant",
    description:
      "An AI assistant that accepts text or voice messages in Telegram, keeps conversational context, and completes everyday tasks through connected tools.",
    highlights: [
      "Transcribes Telegram voice notes before sending them to the AI agent.",
      "Summarizes email, creates drafts, and gets or creates calendar events.",
      "Calls a reusable Hacker News and Wikipedia research subworkflow.",
    ],
    technologies: ["n8n", "Telegram", "OpenAI", "Gmail", "Google Calendar"],
    images: [
      {
        src: "/images/AutomationScreenshots/telegram-ai-agent.webp",
        alt: "n8n workflow for the voice-activated Telegram assistant",
        label: "Main workflow",
      },
      {
        src: "/images/AutomationScreenshots/research-subworkflow.webp",
        alt: "n8n Hacker News and Wikipedia research subworkflow",
        label: "Research subworkflow",
      },
    ],
  },
  {
    title: "Slack RAG Knowledge Assistant",
    description:
      "An end-to-end retrieval-augmented generation system that turns PDFs from Google Drive into a searchable knowledge base and answers Slack questions with grounded, source-aware responses.",
    highlights: [
      "Ingests new or updated PDFs from Google Drive and skips unchanged files using a hash registry.",
      "Extracts and chunks document text, creates OpenAI embeddings, and stores vectors and metadata in PostgreSQL.",
      "Retrieves the most relevant passages for each Slack question and returns a formatted answer with source citations.",
    ],
    technologies: ["n8n", "Slack", "OpenAI", "Google Drive", "PostgreSQL", "pgvector"],
    images: [
      {
        src: "/images/AutomationScreenshots/slack-rag-ingestion.png",
        alt: "n8n ingestion workflow for the Slack RAG knowledge assistant",
        label: "Document ingestion workflow",
      },
      {
        src: "/images/AutomationScreenshots/slack-rag-bot.png",
        alt: "n8n question-answer workflow for the Slack RAG knowledge assistant",
        label: "Slack question-answer workflow",
      },
    ],
  },
  {
    title: "Circuit & Co. | Store Policy Assistant",
    liveDemo: "https://circuit-and-co-sigma.vercel.app/",
    description:
      "A grounded store-policy assistant for a fictional gadget shop that answers questions about returns, refunds, shipping, warranties, and product compatibility beside the full source policy.",
    highlights: [
      "Routes questions through a protected Next.js API endpoint to n8n, which retrieves the current policy from Google Docs and sends it to OpenAI.",
      "Returns a structured status, answer, and quote, then verifies that every citation appears verbatim in the policy before showing the response.",
      "Asks clarifying questions when needed, handles broad or uncovered topics, and returns a friendly HTTP 503 response when a service fails.",
    ],
    technologies: ["Next.js", "Vercel", "n8n", "Google Docs", "OpenAI API"],
    images: [
      {
        src: "/images/AutomationScreenshots/circuit-and-co-policy-assistant.png",
        alt: "Circuit & Co. store policy assistant displayed beside the full store policy",
        label: "Live policy assistant",
      },
      {
        src: "/images/AutomationScreenshots/circuit-and-co-n8n-workflow.png",
        alt: "n8n workflow for the Circuit & Co. store policy assistant, including policy retrieval, OpenAI answering, citation verification, and service error branches",
        label: "n8n policy assistant workflow",
      },
    ],
  },
];

export default automationData;
