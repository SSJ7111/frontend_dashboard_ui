import { useState } from 'react'; // Import useState
import BaseNode from './BaseNode';
import { Position } from 'reactflow'; // Import Position
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const InputNode = ({ id, data }) => {
  // Declare state for inputType
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      handleType="source"
      handlePosition={Position.Right}
      handleStyle={{ top: '50%' }}
    >
      <div className="mb-2">
        <label className="form-label">Type:</label>
        <select
          className="form-select"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
