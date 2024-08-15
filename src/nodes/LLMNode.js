import BaseNode from './BaseNode';
import { Position } from 'reactflow'; // Import Position
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const LLMNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="LLM"
    handleType="source"
    handlePosition={Position.Right}
    handleStyle={{ top: '50%' }}
  >
    <div className="p-3 text-center bg-light border rounded">
      <h6 className="mb-1">LLM Node</h6>
      <p className="mb-0 text-muted">This is an LLM.</p>
    </div>
  </BaseNode>
);
