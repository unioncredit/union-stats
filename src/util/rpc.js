import { createPublicClient, fallback, http } from "viem";
import { Web3Provider } from "@ethersproject/providers";

import { chain } from "constants/app";

const providers = {};

// Returns an ethers provider whose requests go through a viem fallback
// transport, so every existing ethers Contract read fails over across the
// chain's rpcUrls list instead of depending on a single endpoint.
export default function getReadProvider(chainId) {
  if (!(chainId in providers)) {
    const network = Object.values(chain).find((c) => c.id === chainId);
    const urls = network?.rpcUrls || [];

    if (urls.length === 0) {
      providers[chainId] = undefined;
    } else {
      const client = createPublicClient({
        transport: fallback(
          // retryCount 0 per endpoint: a rate-limited endpoint should fall
          // through to the next URL immediately; the fallback wrapper still
          // retries the whole list on total failure.
          urls.map((url) => http(url, { retryCount: 0 })),
          { retryCount: 2 }
        ),
      });

      providers[chainId] = new Web3Provider(
        (method, params) => client.request({ method, params }),
        chainId
      );
    }
  }

  return providers[chainId];
}
