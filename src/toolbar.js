import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="p-3">
      <div className="mt-4 d-flex flex-wrap gap-3">
        <DraggableNode type="input" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="output" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="custom" label="Custom" /> {/* Updated to match the new type */}
      </div>
    </div>
  );
};
