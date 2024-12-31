import React from "react";
import { BaseNode } from "./baseNode";

export const CustomNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Custom"
      inputs={[{ id: "input1" }, { id: "input2" }]}
      outputs={[{ id: "output1" }, { id: "output2" }]}
      customContent={<span>Custom node content here.</span>}
    />
  );
};
