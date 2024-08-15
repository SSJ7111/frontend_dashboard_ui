import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="card border-secondary" style={{ width: '200px', height: '80px' }}>
      <div className="card-header bg-secondary text-white">
        <h6 className="mb-0">Text Node</h6>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-2">
          <label className="form-label">Text:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={currText}
            onChange={handleTextChange}
          />
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-output`}
          style={{ top: '50%' }}
        />
      </div>
    </div>
  );
};
