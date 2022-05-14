const covalentKey = "ckey_fa62ab999dd44386a43ce36d2ab";
// TODO: this block needs to change based on chainID
// best solution would be to create a config with startBlock
// { [chainID.Mainnet]: startBlock }
const startBlock = 13816719;
const endBlock = "latest";
const chainId = 1;

export default async function fetchLogs(topicHash) {
  const url = `https://api.covalenthq.com/v1/${chainId}/events/topics/${topicHash}/?&key=${covalentKey}&starting-block=${startBlock}&ending-block=${endBlock}&page-size=999`;
  const resp = await fetch(url);
  const json = await resp.json();

  return json;
}
