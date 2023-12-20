import { Panel } from "reactflow";
import { NodeType } from "./nodes/types";
import { useSantaStore } from "src/stores/stores";
import { ToolButton } from "./common/ToolButton";
import { useState } from "react";

export function SantaTools() {
  const [isOpen, setIsOpen] = useState(false);
  const { addNode, nodes, edges } = useSantaStore((state) => ({
    addNode: state.addNode,
    nodes: state.nodes,
    edges: state.edges,
  }));

  /**
   * Add a new node to the graph
   * Can set node x position to a max with screen
   */
  function handleAddNode(type: NodeType) {
    addNode(type);
  }

  function copyCode() {
    const data = {
      nodes: nodes,
      edges: edges,
    };
    navigator.clipboard.writeText(JSON.stringify(data));
  }

  return (
    <>
      <Panel position="bottom-center">
        <div className="w-full p-1 bg-dark/80 backdrop-blur text-light rounded-md">
          <div className="flex gap-1">
            <ToolButton
              icon="house_one"
              onClick={() => handleAddNode("house")}
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={
                "w-12 h-12 hover:border border-dark/30 rounded-md bg-opacity-80 grid place-items-center group hover:bg-primary/30"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Panel>
      {isOpen && (
        <Panel position="top-right">
          <div className="w-[500px] p-4 bg-dark/80 backdrop-blur text-light rounded-md max-h-[300px] overflow-y-scroll">
            <button
              className=" px-4 py-2 border rounded-md border-dark/30 hover:border-dark mb-4"
              onClick={copyCode}
            >
              Copy to clipboard !
            </button>
            <code>
              <pre>{JSON.stringify({ nodes, edges }, null, 2)}</pre>
            </code>
          </div>
        </Panel>
      )}
    </>
  );
}
