import { createFileRoute } from "@tanstack/react-router";
import { SlideDeck } from "@/components/SlideDeck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IVF Intelligence Platform — AI Clinical Decision Support" },
      { name: "description", content: "Predict, explain and optimize IVF outcomes with machine learning, RAG architecture and explainable AI." },
      { property: "og:title", content: "IVF Intelligence Platform" },
      { property: "og:description", content: "AI-powered clinical decision support for fertility medicine." },
    ],
  }),
  component: Index,
});

function Index() {
  return <SlideDeck />;
}
