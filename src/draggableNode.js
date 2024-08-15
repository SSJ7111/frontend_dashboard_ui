import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`border rounded p-2 d-flex flex-column align-items-center justify-content-center text-white ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{ 
        cursor: 'grab',
        minWidth: '80px', 
        height: '60px',
        backgroundColor: '#1C2536' // Custom color as per original style
      }} 
      draggable
    >
      <span>{label}</span>
    </div>
  );
};
