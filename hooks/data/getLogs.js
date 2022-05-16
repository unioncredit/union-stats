const covalentKey = "ckey_fa62ab999dd44386a43ce36d2ab";
const startBlock = 13816719;
const endBlock = "latest";

export default async function getLogs(topicHash: string) {
  const url = `https://api.covalenthq.com/v1/1/events/topics/${topicHash}/?&key=${covalentKey}&starting-block=${startBlock}&ending-block=${endBlock}&page-size=999`;
  const resp = await fetch(url);
  const json = await resp.json();

  return json;
}
