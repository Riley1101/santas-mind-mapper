import { Panel } from "reactflow";
import { NodeType } from "./nodes/types";
import { useSantaStore } from "src/stores/stores";

import { ToolButton } from "./common/ToolButton";

export function SantaTools() {
  const { addNode } = useSantaStore((state) => ({ addNode: state.addNode }));

  /**
   * Add a new node to the graph
   * Can set node x position to a max with screen
   */
  function handleAddNode(type: NodeType) {
    addNode(type);
  }

  function printNodes() {}

  return (
    <Panel position="top-center">
      <div className="w-full border p-1 bg-dark/80 backdrop-blur text-light rounded-md">
        <div className="flex gap-1">
          <ToolButton icon="house_one" onClick={() => handleAddNode("house")} />
          <ToolButton icon="bell" />
          <ToolButton icon="candy_stick" onClick={() => printNodes()} />
        </div>
      </div>
    </Panel>
  );
}
