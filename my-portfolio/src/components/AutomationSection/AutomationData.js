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
];

export default automationData;
