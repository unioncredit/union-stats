export function Token({ value, symbol }) {
  return (
    <>
      {value}
      <span className="token-wording">{symbol}</span>
    </>
  );
}
