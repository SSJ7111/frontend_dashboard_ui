import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

// Import the new nodes
import { InputNode } from './nodes/InputNode';
import { LLMNode } from './nodes/LLMNode';
import { OutputNode } from './nodes/OutputNode';
import { TextNode } from './nodes/TextNode';
import { CustomNode } from './nodes/CustomNode'; // Import CustomNode

import 'reactflow/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const gridSize = 20;
const proOptions = { hideAttribution: true };

// Map node types to their components
const nodeTypes = {
  input: InputNode,
  llm: LLMNode,
  output: OutputNode,
  text: TextNode,
  custom: CustomNode, // Add CustomNode to the nodeTypes mapping
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    // Initialize node data based on type
    switch (type) {
      case 'input':
        return { name: nodeID.replace('input-', 'Input Node '), inputType: 'Text' };
      case 'output':
        return { name: nodeID.replace('output-', 'Output Node '), outputType: 'Text' };
      case 'llm':
        return { name: nodeID.replace('llm-', 'LLM Node ') };
      case 'text':
        return { text: '{{input}}' };
      case 'custom':
        return { name: nodeID.replace('custom-', 'Custom Node ') }; // Initialize data for CustomNode
      default:
        return {};
    }
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;

        // Check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance, getNodeID, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="container-fluid">
      <div ref={reactFlowWrapper} className="d-flex justify-content-center mt-4" style={{ height: '70vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          style={{ width: '100%', height: '100%' }} // Ensure ReactFlow takes full container size
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};
