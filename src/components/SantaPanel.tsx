import cx from "classnames";
import { FontSizeType, FontSize } from "src/utils/tools";
import { IconButton } from "components/common/IconButton";
import { Panel } from "reactflow";
import { icons } from "utils/icons";
import { useSantaStore } from "src/stores/stores";

const colors = [
  "#EF4444", // "bg-red-500"
  "#F59E0B", // "bg-yellow-500"
  "#10B981", // "bg-green-500"
  "#3B82F6", // "bg-blue-500"
  "#6366F1", // "bg-indigo-500"
];

export function SantaPanel() {
  const { updateNodeColor, currentNode, updateNodeIcon, updateNodeSize } =
    useSantaStore((state) => ({
      updateNodeColor: state.updateNodeColor,
      currentNode: state.currentNode,
      updateNodeIcon: state.updateNodeIcon,
      updateNodeSize: state.updateNodeSize,
    }));

  if (!currentNode) return null;

  function handleColorUpdate(color: string) {
    if (!currentNode) return;
    updateNodeColor(currentNode, color);
  }

  function handleIconUpdate(icon: string | null) {
    if (!currentNode) return;
    updateNodeIcon(currentNode, icon);
  }

  function handleSizeUpdate(size: FontSizeType) {
    if (!currentNode) return;
    updateNodeSize(currentNode, size);
  }

  return (
    <Panel position="top-left">
      <div className="w-full p-2 bg-dark/80 backdrop-blur text-light rounded-md  ">
        <div>
          <span className="text-xxs">Color</span>
          <div className="flex gap-1">
            {colors.map((c) => (
              <button
                onMouseDown={() => handleColorUpdate(c)}
                key={c}
                className={`w-5 h-5 hover:border border-light rounded-md bg-opacity-80 bg-dark`}
                style={{ backgroundColor: c }}
              ></button>
            ))}
            <div className="border-l border-dark/30"></div>
            <label
              className={
                cx(
                  "cursor-pointer w-5 h-5 hover:border border-light rounded-md bg-opacity-80 ",
                ) + "bg-dark"
              }
              htmlFor="color"
            ></label>
            <input
              type="color"
              className="hidden"
              id="color"
              onChange={(e) => handleColorUpdate(e.target.value)}
            />
          </div>
        </div>

        <div>
          <span className="text-xxs">Font Size</span>
          <div className="flex gap-1">
            {FontSize.map((c) => (
              <button
                onClick={() => handleSizeUpdate(c)}
                key={c}
                className="hover:bg-primary/30 uppercase border border-dark/30 text-xxs w-8 h-8 hover:border rounded-md bg-opacity-80 "
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xxs">Icons</span>
          <div className="grid grid-cols-5 gap-1">
            {icons.map((c) => (
              <IconButton
                key={c}
                icon={c}
                onClick={() => handleIconUpdate(c)}
              />
            ))}
            <IconButton icon={null} onClick={() => handleIconUpdate(null)} />
          </div>
        </div>
      </div>
    </Panel>
  );
}
