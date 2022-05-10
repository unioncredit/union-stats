import { Heading, Box, Text, Divider } from "@unioncredit/ui";
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

        <Divider></Divider>
      </Box>

      <table className={style.tableWrapper}>
        <tbody className={style.border}>
          <div className={style.tableBodyInnerWrapper}>
            <tr className={style.tableHeaderRow}>
              <td className={style.headerItemEmpty}></td>
              <td className={style.headerItemAccount}>Account</td>
              <td className={style.headerItem}>Vouches Received</td>
              <td className={style.headerItem}>Trust (DAI)</td>
              <td className={style.headerItem}>Available Credit (DAI)</td>
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
                <a
                  href="https://etherscan.io/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.memberLink}
                >
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
                <a
                  href="https://etherscan.io/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.memberLink}
                >
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
                <a
                  href="https://etherscan.io/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.memberLink}
                >
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
