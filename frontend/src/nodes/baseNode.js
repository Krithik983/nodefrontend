// BaseNode.js

import React from "react";
import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs,
  outputs,
  customContent,
  onChange,
}) => {
  return (
    <div className="base-node">
      <div className="node-title">{title}</div>
      <div className="node-content">{customContent}</div>
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(100 / (inputs.length + 1)) * (index + 1)}%` }}
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(100 / (outputs.length + 1)) * (index + 1)}%` }}
        />
      ))}
    </div>
  );
};

BaseNode.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  outputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  customContent: PropTypes.node,
  onChange: PropTypes.func,
};

BaseNode.defaultProps = {
  inputs: [],
  outputs: [],
  customContent: null,
  onChange: null,
};
