import useSWRImmutable from "swr/immutable";
import { fetchENS as fetchEnsData } from "fetchers/fetchEns";
import { AddressAvatarMappings, AddressEnsMappings } from "../constants/variables";

function fetchENS(_, address) {
  return fetchEnsData(address);
}

export default function useENS(address) {
  address = address && address.toLowerCase && address.toLowerCase();
  const resp = useSWRImmutable(address ? ["ENS", address] : null, fetchENS, {
    dedupingInterval: 100000,
  });

  const data = resp.data || {};

  return {
    ...data,
    name: AddressEnsMappings[address] || data.name || null,
    displayName: AddressEnsMappings[address] || data.displayName || null,
    avatar: AddressAvatarMappings[address] || data.avatar || null,
  };
}
