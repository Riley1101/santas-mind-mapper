import { Panel } from "reactflow";
import { IconButton } from "./common/IconButton";
import cx from "classnames";
import { icons } from "../utils/icons";
import { useSantaStore } from "src/stores/stores";

const colors = [
  "#EF4444", // "bg-red-500"
  "#F59E0B", // "bg-yellow-500"
  "#10B981", // "bg-green-500"
  "#3B82F6", // "bg-blue-500"
  "#6366F1", // "bg-indigo-500"
];

export function SantaPanel() {
  const { updateNodeColor, currentNode } = useSantaStore((state) => ({
    updateNodeColor: state.updateNodeColor,
    currentNode: state.currentNode,
  }));
  function updateColor(color: string) {
    if (!currentNode) return;
    updateNodeColor(currentNode, color);
  }
  return (
    <Panel position="top-left">
      <div className="w-full border p-2 bg-dark/80 backdrop-blur text-light rounded-md  ">
        <div>
          <span className="text-xxs">Color</span>
          <div className="flex gap-1">
            {colors.map((c) => (
              <button
                onClick={() => updateColor(c)}
                key={c}
                className="w-5 h-5 hover:border border-light rounded-md bg-opacity-80 i"
                style={{ backgroundColor: c }}
              ></button>
            ))}
            <div className="border-l border-dark/30"></div>
            <button
              className={
                cx(
                  "w-5 h-5 hover:border border-light rounded-md bg-opacity-80 ",
                ) + "bg-dark"
              }
            ></button>
          </div>
        </div>

        <div>
          <span className="text-xxs">Icons</span>
          <div className="grid grid-cols-5 gap-1">
            {icons.map((c) => (
              <IconButton key={c} icon={c} />
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
