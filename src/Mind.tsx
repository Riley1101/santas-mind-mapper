import ReactFlow from "reactflow";
import type { NodeProps } from "reactflow";
import { SantaPanel } from "./components/SantaPanel";
import { SantaControls } from "./components/SantaControl";
import { SantaMiniMap } from "./components/SantaMiniMap";
import { SantaTools } from "./components/SantaTools";
import { Gift } from "./components/nodes/Gift";
import { SantaBackground } from "./components/SantaBackground";
import { House } from "./components/nodes/House";
import { NodeType } from "./components/nodes/types";
import { useSantaStore } from "./stores/stores";
import { shallow } from "zustand/shallow";

const nodeTypes: Record<NodeType, (node: NodeProps) => React.ReactNode> = {
  gift: Gift,
  house: House,
};

export function Mind() {
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
  });

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useSantaStore(selector, shallow);

  return (
    <ReactFlow
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      nodeOrigin={[0.5, 0]}
    >
      <SantaPanel />
      <SantaControls />
      <SantaMiniMap />
      <SantaBackground />
      <SantaTools />
    </ReactFlow>
  );
}
