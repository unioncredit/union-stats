import { chain } from "constants/app";
import { PONDER_API_URL } from "constants/variables";

// union-ponder only indexes the v2 deployments.
export const PONDER_CHAIN_IDS = [chain.optimism.id, chain.base.id];

export function isPonderChain(chainId) {
  return PONDER_CHAIN_IDS.includes(chainId);
}

export async function ponderQuery(query, variables) {
  const response = await fetch(`${PONDER_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Ponder request failed with status ${response.status}`);
  }

  const json = await response.json();
  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}
