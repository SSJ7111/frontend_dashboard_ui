import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow'; // Import Position if needed for BaseNode

export const CustomNode = ({ id, data }) => {
  // Declare state for input and output
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setOutputValue(value); // Update output value with input value
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Custom Node"
      handleType="source"
      handlePosition={Position.Right}
      handleStyle={{ top: '25%', backgroundColor: '#d1e7dd' }} // Custom styling
    >
      <div className="mt-2 text-center">
        <p className="mb-0">Custom content for Node 1</p>
        <div className="mb-2">
          <label htmlFor={`${id}-input`} className="form-label">Input:</label>
          <input
            id={`${id}-input`}
            type="text"
            className="form-control"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label">Output:</label>
          <div className="form-control" style={{ height: 'auto', padding: '10px', border: '1px solid #ced4da' }}>
            {outputValue}
          </div>
        </div>
      </div>
    </BaseNode>
  );
};
