import React, { useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => setCurrText(e.target.value);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={[]}
      outputs={[{ id: "output" }]}
      customContent={
        <div>
          <label>
            Text:{" "}
            <input type="text" value={currText} onChange={handleTextChange} />
          </label>
        </div>
      }
    />
  );
};
