import style from "./DataTableHead.module.scss";
import { SortableHeader } from "./SortableHeader";
import { SortOptions } from "constants/sorting";
import useChainId from "hooks/useChainId";
import useCurToken from "hooks/useCurToken";
import { chain, NETWORK_NAMES } from "constants/app";

export const DataTableHead = ({ sort, handleSort }) => {
  const chainId = useChainId();
  const curToken = useCurToken();

  return (
    <tr className={style.row}>
      <td style={{ minWidth: "34px" }}></td>
      <td className={style["item--account"]}>Account</td>

      <SortableHeader
        sort={sort}
        title="Vouches Received"
        options={SortOptions.VOUCHES_RECEIVED}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title="Vouches Given"
        options={SortOptions.VOUCHES_GIVEN}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title={`Trust (${curToken})`}
        options={SortOptions.TRUST}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title={`Available Credit (${curToken})`}
        options={SortOptions.AVAILABLE_CREDIT}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title={`Balance Owed (${curToken})`}
        options={SortOptions.BALANCE_OWED}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title="Loan status"
        options={SortOptions.LOAN_STATUS}
        handleSort={handleSort}
        className={[style["item--status"]]}
      />

      <SortableHeader
        sort={sort}
        title={`Staked (${curToken})`}
        options={SortOptions.STAKE_TOTAL}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title={`Utilised Stake (${curToken})`}
        options={SortOptions.STAKE_UTILISED}
        handleSort={handleSort}
      />

      <SortableHeader
        sort={sort}
        title={`Frozen Stake (${curToken})`}
        options={SortOptions.STAKE_FROZEN}
        handleSort={handleSort}
      />

      {NETWORK_NAMES[chainId] === "mainnet" && (
        <>
          <SortableHeader
            sort={sort}
            title="UNION Balance"
            options={SortOptions.UNION_BALANCE}
            handleSort={handleSort}
          />

          <SortableHeader
            sort={sort}
            title="UNION Votes"
            options={SortOptions.UNION_VOTES}
            handleSort={handleSort}
          />

          <SortableHeader
            sort={sort}
            title="UNION Delegated"
            options={SortOptions.UNION_DELEGATED}
            handleSort={handleSort}
          />
        </>
      )}
    </tr>
  );
};
