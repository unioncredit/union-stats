import { config, fetchStakers } from "@unioncredit/data";

export const fetchStakerAddresses = async (chainId) => {
  config.set("chainId", chainId);
  const stakers = await fetchStakers();
  return stakers.map((s) => s.account);
};
