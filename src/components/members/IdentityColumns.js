import style from "./IdentityColumns.module.scss";

import { chain } from "constants/app";
import { Avatar } from "components/Avatar";
import truncateAddress from "util/truncateAddress";
import useChainId from "hooks/useChainId";
import useCopy from "hooks/useCopy";
import useENS from "hooks/useENS";

export const IdentityColumns = ({ address, isMember }) => {
  const [isCopied, copy] = useCopy();
  const chainId = useChainId();
  const ens = useENS(address);
  let etherscanUrl, appUrl;

  switch (chainId) {
    case chain.mainnet.id:
      etherscanUrl = `https://etherscan.io/address/${address}`;
      appUrl = `https://app.union.finance/profile/eth:${address}`;
      break;

    case chain.arbitrum.id:
      etherscanUrl = `https://arbiscan.io/address/${address}`;
      appUrl = `https://app.union.finance/profile/arb1:${address}`;
      break;

    case chain.opgoerli.id:
      etherscanUrl = `https://goerli-optimism.etherscan.io/address/${address}`;
      appUrl = `https://app.union.finance/profile/optgoe:${address}`;
      break;

    case chain.optimism.id:
      etherscanUrl = `https://optimistic.etherscan.io/address/${address}`;
      appUrl = `https://app.union.finance/profile/opt:${address}`;
      break;

    case chain.base.id:
      etherscanUrl = `https://basescan.org/address/${address}`;
      appUrl = `https://app.union.finance/profile/base:${address}`;
      break;
  }

  return (
    <>
      <td className={style.avatar}>
        <Avatar address={address} size={24} avatar={ens.avatar} />
        <span className={style.member}>
          {isMember && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7Z"
                fill="#D1FAE5"
              />
              <path
                d="M4.5 7.5L6 9L9.5 5.5"
                stroke="#10B981"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 12C4.23858 12 2 9.76142 2 7H0C0 10.866 3.13401 14 7 14V12ZM12 7C12 9.76142 9.76142 12 7 12V14C10.866 14 14 10.866 14 7H12ZM7 2C9.76142 2 12 4.23858 12 7H14C14 3.13401 10.866 0 7 0V2ZM7 0C3.13401 0 0 3.13401 0 7H2C2 4.23858 4.23858 2 7 2V0Z"
                fill="white"
              />
            </svg>
          )}
        </span>
      </td>

      <td className={style.account}>
        <a href={appUrl} target="_blank" rel="noreferrer" className={style.ens}>
          {truncateAddress(address)}
        </a>

        {ens.name && (
          <span className={style.address} onClick={() => copy(ens.name)}>
            {isCopied ? "Copied" : ens.name}
          </span>
        )}

        <a href={etherscanUrl} target="_blank" rel="noreferrer">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.249988 5C0.249988 3.48122 1.4812 2.25 2.99999 2.25L5.99999 2.25C6.4142 2.25 6.74999 2.58579 6.74999 3C6.74999 3.41421 6.4142 3.75 5.99999 3.75L2.99999 3.75C2.30963 3.75 1.74999 4.30964 1.74999 5L1.74999 10C1.74999 10.6904 2.30963 11.25 2.99999 11.25L7.99999 11.25C8.69034 11.25 9.24999 10.6904 9.24999 10L9.24999 7C9.24999 6.58579 9.58577 6.25 9.99999 6.25C10.4142 6.25 10.75 6.58579 10.75 7L10.75 10C10.75 11.5188 9.51877 12.75 7.99999 12.75L2.99999 12.75C1.48121 12.75 0.249988 11.5188 0.249988 10V5ZM7.24999 1.46445C7.24999 1.05024 7.58577 0.714451 7.99999 0.714452L11.5355 0.714452C11.7344 0.714451 11.9252 0.793469 12.0659 0.934121C12.2065 1.07477 12.2855 1.26554 12.2855 1.46445L12.2855 5C12.2855 5.41421 11.9497 5.75 11.5355 5.75C11.1213 5.75 10.7855 5.41421 10.7855 5V3.27511L5.53031 8.53033C5.23742 8.82322 4.76254 8.82322 4.46965 8.53033C4.17676 8.23744 4.17676 7.76256 4.46965 7.46967L9.72487 2.21445L7.99999 2.21445C7.58577 2.21445 7.24999 1.87867 7.24999 1.46445Z"
              fill="#A8A29E"
            />
          </svg>
        </a>
      </td>
    </>
  );
};
