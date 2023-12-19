import cx from "classnames";
import { Handle, NodeProps, Position } from "reactflow";
import { NodeState } from "./types";
import { getIcon } from "../../utils/icons";
import { useState, useCallback } from "react";
import { useSantaStore } from "src/stores/stores";

export function House(props: NodeProps<NodeState>) {
  const [isEditing, setIsEditing] = useState(false);
  const { updateNodeText, setCurrentNode } = useSantaStore((state) => ({
    updateNodeText: state.updateNodeText,
    setCurrentNode: state.setCurrentNode,
  }));

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
    setCurrentNode(props.id);
  }
  return (
    <div
      onClick={onClick}
      onDoubleClick={toggleEditing}
      className={cx("grid max-w-max aspect-square px-4", isEditing && "border")}
    >
      <Handle type="target" position={Position.Left} />
      <div className="grid place-items-center">
        <img
          src={getIcon(props.data.icon)}
          className={cx(
            "w-[100px] h-[100px] object-contain",
            isEditing && "animate-pulse",
          )}
        />

        {isEditing ? (
          <input
            autoFocus
            onChange={onChange}
            placeholder="Enter name"
            className="font-art nodrag outline-none max-w-[100px] text-center bg-transparent inline"
            onKeyDown={onKeyDown}
            style={{
              color: props.data.color,
            }}
          />
        ) : (
          <span
            className="font-art text-lg"
            style={{
              color: props.data.color,
            }}
          >
            {props.data?.label}
          </span>
        )}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
