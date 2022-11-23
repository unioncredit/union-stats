import {useState} from "react";
import {Avatar as UIAvatar} from "@unioncredit/ui";
import makeBlockie from "ethereum-blockies-base64";

export function Avatar({address, size, avatar}) {
  const [error, setError] = useState(false);
  const blockie = makeBlockie(address);

  return (
    <UIAvatar
      size={size}
      src={error ? blockie : avatar || blockie}
      onError={() => setError(true)}
    />
  );
}

Avatar.defaultProps = {
  size: 26,
};
