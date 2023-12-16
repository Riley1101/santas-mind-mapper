import { Container } from "./components/Container";
import { SantaPanel } from "./components/SantaPanel";
import { SantaControls } from "./components/SantaControl";
import { SantaMiniMap } from "./components/SantaMiniMap";
import { SantaTools } from "./components/SantaTools";

import { Gift } from "./components/nodes/Gift";

import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { SantaBackground } from "./components/SantaBackground";

const nodeTypes = {
  gift: Gift,
};

const initialNodes = [
  { id: "1", position: { x: 200, y: 200 }, data: { label: "1" }, type: "gift" },
  { id: "2", position: { x: 400, y: 400 }, data: { label: "2" }, type: "gift" },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  return (
    <Container>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
        >
          <SantaPanel />
          <SantaControls />
          <SantaMiniMap />
          <SantaBackground />
          <SantaTools />
        </ReactFlow>
      </ReactFlowProvider>
    </Container>
  );
}

export default App;
