import React from "react";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
      customContent={<span>This is an LLM node.</span>}
    />
  );
};
