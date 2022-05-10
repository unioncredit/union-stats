import { Heading, Box, Text } from "@unioncredit/ui";
import useIsMobile from "hooks/useIsMobile";
import { Footer } from "components-ui";
import style from "./dataTable.module.css";

export default function StatsView() {
  const isMobile = useIsMobile();

  return (
    <div>
      <Box mb="56px" fluid align="center" justify="center" direction="vertical">
        <Heading
          size={isMobile ? "large" : "xxlarge"}
          align="center"
          mt={"60px"}
          className={"text--grey700"}
        >
          Union Member Statistics
        </Heading>

        <Text align="center" mb="24px" className={"text--grey400"}>
          Multi-chain statistics and analysis related to Union Protocol
        </Text>
      </Box>

      <table className={style.tableWrapper}>
        <tbody className={style.border}>
          <div className={style.tableRowHeaderWrapper}></div>

          <div className={style.tableBodyInnerWrapper}>
            <tr className={style.tableHeaderRow}>
              <td className={style.headerItemEmpty}></td>
              <td className={style.headerItemAccount}>Account</td>
              <td className={style.headerItem}>Vouches</td>
              <td className={style.headerItem}>Trust (DAI)</td>
              <td className={style.headerItem}>Available (DAI)</td>
              <td className={style.headerItem}>Balance Owed (DAI)</td>
              <td className={style.headerItem}>Loan Status</td>
              <td className={style.headerItem}>Staked (DAI)</td>
              <td className={style.headerItem}>Backing</td>
              <td className={style.headerItem}>Utilized Stake (DAI)</td>
              <td className={style.headerItem}>Frozen Stake (DAI)</td>
            </tr>
            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>
            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xtestssss.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>elses.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>

            <tr className={style.tableBodyRow}>
              <td className={style.ensImage}>
                <img src="/images/ens-placeholder.png" />
                <img
                  className={style.isMember}
                  src="/images/member-check.png"
                />
              </td>
              <td className={style.bodyItemAccount}>
                <span className={style.ensName}>0xmunter.eth</span>
                <span className={style.address}>0xxdvWJ...g68QG</span>
              </td>
              <td className={style.bodyItem}>10</td>
              <td className={style.bodyItem}>2935.09</td>
              <td className={style.bodyItem}>1177.74</td>
              <td className={style.bodyItem}>402.67</td>
              <td className={style.bodyItem}>badge</td>
              <td className={style.bodyItem}>8480.06</td>
              <td className={style.bodyItem}>24</td>
              <td className={style.bodyItem}>167.89</td>
              <td className={style.bodyItem}>1</td>
            </tr>
          </div>
        </tbody>
      </table>

      <Footer></Footer>
    </div>
  );
}
