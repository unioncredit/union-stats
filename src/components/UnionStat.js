import React from "react";
import PropTypes from "prop-types";
import { Label, Text } from "@unioncredit/ui";

export default function UnionStat({
  value,
  label,
  direction,
  valueSize,
  labelSize,
  valueColor,
  labelColor,
  valueTwo,
  indicatorLabelColor,
  specialChar,
  labelPosition,
}) {
  return (
    <div className={direction}>
      <Label className={[labelSize, labelColor, labelPosition]} mb={"0"}>
        {label}
      </Label>
      <span className={[indicatorLabelColor]}></span>
      <Text className={[valueSize, valueColor]}>
        {value}
        {specialChar}
        {valueTwo}
      </Text>
    </div>
  );
}

UnionStat.defaultProps = {
  direction: "vertical",
  valueTwo: [],
  specialChar: [],
  align: "start",
  labelSize: "label--small",
  labelColor: "text--grey400",
  valueSize: "text--small",
  valueColor: "text--grey600",
  indicatorLabelColor: [],
  labelPosition: [],
};

UnionStat.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  valueTwo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  specialChar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  after: PropTypes.node,
  align: PropTypes.oneOf(["end", "center", "start"]),
  size: PropTypes.oneOf(["half", "full"]),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  labelSize: PropTypes.oneOf([
    "label--small",
    "label--primary",
    "label--medium",
  ]),
  labelColor: PropTypes.oneOf([
    " text--grey400",
    "text--grey600",
    "text--grey700",
  ]),
  labelPosition: PropTypes.oneOf(["label-left", "label-right"]),
  valueSize: PropTypes.oneOf(["text--small", "text--large", "text--x--large"]),
  valueColor: PropTypes.oneOf([
    " text--grey400",
    "text--grey600",
    "text--grey700",
  ]),
  indicatorLabelColor: PropTypes.oneOf([
    "blue-500-label",
    "label",
    "purple-indicator",
    "blue-indicator",
    "yellow-indicator",
  ]),
};
