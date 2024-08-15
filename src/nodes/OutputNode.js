import { useState } from 'react'; // Import useState
import BaseNode from './BaseNode';
import { Position } from 'reactflow'; // Import Position
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const OutputNode = ({ id, data }) => {
  // Declare state for outputType
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      handleType="target"
      handlePosition={Position.Left}
    >
      <div className="p-3">
        <div className="mb-3">
          <label className="form-label">Type:</label>
          <select
            className="form-select"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
