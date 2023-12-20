import cx from "classnames";
import { Handle, NodeProps, Position } from "reactflow";
import { NodeState } from "./types";
import { getIcon } from "../../utils/icons";
import { useState, useCallback } from "react";
import { useSantaStore } from "src/stores/stores";

function SantaNode(props: NodeProps<NodeState>) {
  const [isEditing, setIsEditing] = useState(false);

  const { updateNodeText, setCurrentNode, currentNode } = useSantaStore(
    (state) => ({
      updateNodeText: state.updateNodeText,
      setCurrentNode: state.setCurrentNode,
      currentNode: state.currentNode,
    }),
  );

  const toggleEditing = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateNodeText(props.id, e.target.value);
  }

  const onKeyDown = useCallback(
    (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === "Enter") {
        toggleEditing();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  function onClick() {
    if (props.id == currentNode) {
      setCurrentNode(null);
      return;
    }
    setCurrentNode(props.id);
  }
  return (
    <div
      onClick={onClick}
      onDoubleClick={toggleEditing}
      className={cx(
        "relative max-w-max p-12 rounded-xl  max-h-max group ",
        isEditing ||
          (currentNode === props.id &&
            "bg-white/20 backdrop-blur border border-gray-200 "),
        props.data.icon == null &&
          "bg-white/20 backdrop-blur border border-gray-200 ",
      )}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!w-4 !h-24 !bg-primary !rounded-md !opacity-0 group-hover:!opacity-100"
      />
      <div className="grid place-items-center cursor-pointer">
        {props.data.icon && (
          <img
            src={getIcon(props.data.icon)}
            className={cx(
              "h-full object-contain w-auto  transition-transform duration-300 ease-in-out transform-gpu mb-4",
              isEditing && "animate-pulse",
            )}
          />
        )}

        {isEditing ? (
          <input
            autoFocus
            onChange={onChange}
            placeholder="Enter name"
            className="font-art font-bold nodrag outline-none  text-center bg-transparent inline"
            onKeyDown={onKeyDown}
            style={{
              color: props.data.color,
              fontSize: `${props.data.size}rem`,
            }}
          />
        ) : (
          <p
            className="font-art  block mx-auto text-inherit font-bold"
            style={{
              color: props.data.color,
              fontSize: `${props.data.size}rem`,
            }}
          >
            {props.data?.label}
          </p>
        )}
      </div>
      <Handle
        className="!w-4 !h-24 !bg-primary !rounded-md !opacity-0 group-hover:!opacity-100"
        type="source"
        position={Position.Right}
      />
    </div>
  );
}
export default SantaNode;
