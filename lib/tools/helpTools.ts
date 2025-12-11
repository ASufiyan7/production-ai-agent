
import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";

export const helpTool = new DynamicStructuredTool({
  name: "help",
  description: "Provides help information and lists all available tools.",
  schema: z.object({}),
  func: async () => {
    return "You can use the following tools: youtube_transcript, google_books, wikipedia, curl_comments, jsonata.";
  },
});
