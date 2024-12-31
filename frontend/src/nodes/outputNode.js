import React, { useState } from "react";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || "Output");
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: "value" }]}
      outputs={[]}
      customContent={
        <div>
          <label>
            Name:{" "}
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label>
            Type:
            <select value={outputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="Image">Image</option>
            </select>
          </label>
        </div>
      }
    />
  );
};
