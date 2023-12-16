import { Panel } from "reactflow";
import { useReactFlow } from "reactflow";
import type { Node as FlowNode } from "reactflow";

export function SantaTools() {
  const { addNodes, getNodes } = useReactFlow();

  /**
   * Add a new node to the graph
   * Can set node x position to a max with screen
   */
  function addNode() {
    const nodes = getNodes();
    const lastNode = nodes[0] as FlowNode;
    const newNode = {
      id: `${Number(lastNode.id) + 1}` || "0",
      position: {
        x: lastNode.position.x + 200 || 400,
        y: lastNode.position.y || 400,
      },
      data: { label: `${Number(lastNode.id) + 1}` },
      type: "gift",
    };
    addNodes(newNode);
  }

  return (
    <Panel position="top-center">
      <div className="w-full border p-2 bg-dark/80 backdrop-blur text-light rounded-md">
        <div className="flex gap-1">
          <button
            onClick={addNode}
            className={"w-10 h-10  border-light rounded-md bg-primary/90"}
          >
            +
          </button>
        </div>
      </div>
    </Panel>
  );
}
