import ReactFlow, { SelectionMode } from "reactflow";
import SantaNode from "./components/nodes/SantaNode";
import type { NodeProps } from "reactflow";
import type { SantaState } from "./stores/stores";
import { NodeType } from "./components/nodes/types";
import { SantaBackground } from "./components/SantaBackground";
import { SantaControls } from "./components/SantaControl";
import { SantaMiniMap } from "./components/SantaMiniMap";
import { SantaPanel } from "./components/SantaPanel";
import { SantaTools } from "./components/SantaTools";
import { shallow } from "zustand/shallow";
import { useSantaStore } from "./stores/stores";

const nodeTypes: Record<NodeType, (node: NodeProps) => React.ReactNode> = {
  santa: SantaNode,
};

/**
 * Main Mind component that represents the Santa Mind application.
 */
export function Mind() {
  const selector = (state: SantaState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
  });

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useSantaStore(selector, shallow);

  const panOnDrag = [1, 2];
  return (
    <ReactFlow
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      nodeOrigin={[0.5, 0]}
      minZoom={0.1}
      maxZoom={2}
      selectionOnDrag
      panOnScroll
      panOnDrag={panOnDrag}
      selectionMode={SelectionMode.Partial}
    >
      <SantaPanel />
      <SantaControls />
      <SantaMiniMap />
      <SantaBackground />
      <SantaTools />
    </ReactFlow>
  );
}
