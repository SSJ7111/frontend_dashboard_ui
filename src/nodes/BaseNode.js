import { Handle } from 'reactflow';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const BaseNode = ({
  id,
  data,
  title,
  children,
  handleType,
  handlePosition,
  handleStyle
}) => {
  const [name, setName] = useState(data?.name || id.replace('custom-', ''));

  const handleNameChange = (e) => setName(e.target.value);

  return (
    <div className="card" style={{ width: '200px', height: '80px' }}>
      <div className="card-body">
        {handleType && (
          <Handle
            type={handleType}
            position={handlePosition}
            id={`${id}-value`}
            style={handleStyle}
            className="react-flow__handle" // Add Bootstrap handle style class if needed
          />
        )}
        <h5 className="card-title">{title}</h5>
        <div className="mb-2">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default BaseNode;
