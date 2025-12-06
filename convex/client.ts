import { ConvexReactClient } from "convex/react";

// Fallback address — used during convex dev analysis
const fallbackAddress = "https://content-donkey-821.convex.cloud";

// Try to read from environment, fallback if missing
const address =
  process.env.NEXT_PUBLIC_CONVEX_URL || fallbackAddress;

export const convex = new ConvexReactClient(address);
