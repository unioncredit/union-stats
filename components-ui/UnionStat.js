import React from "react";
import PropTypes from "prop-types";
import { Text, Label } from "@unioncredit/ui";

export default function UnionStat ({
    value,
    label,
    direction,
    valueSize,
    labelSize,
    valueColor,
    labelColor,
 }) {

  return (
      <div className={direction}>
        <Label className={[labelSize, labelColor]} mb={"0"}>
          {label}
        </Label>
        <Text className={[valueSize, valueColor]}>
          {value}
        </Text>
      </div>
  );
}

UnionStat.defaultProps = {
  direction: "vertical",
  align: "start",
  labelSize: "label--primary",
  labelColor: "text--grey400",
  valueSize: "text--small",
  valueColor: "text--grey700"
};

UnionStat.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  after: PropTypes.node,
  align: PropTypes.oneOf(["end", "center", "start" ]),
  size: PropTypes.oneOf(["half", "full" ]),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  labelSize: PropTypes.oneOf(["label--small", "label--primary"]),
  labelColor: PropTypes.oneOf([" text--grey400", "text--grey600", "text--grey700"]),
  valueSize: PropTypes.oneOf(["text--small", "text--large", "text--x--large"]),
  valueColor: PropTypes.oneOf([" text--grey400", "text--grey600", "text--grey700"])
};
