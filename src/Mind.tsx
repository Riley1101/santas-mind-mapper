import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useStoreApi,
  NodeDragHandler,
} from "reactflow";
import type { Connection, Node as FlowNode } from "reactflow";
import { useCallback, useRef } from "react";
import { SantaPanel } from "./components/SantaPanel";
import { SantaControls } from "./components/SantaControl";
import { SantaMiniMap } from "./components/SantaMiniMap";
import { SantaTools } from "./components/SantaTools";
import { Gift } from "./components/nodes/Gift";
import { SantaBackground } from "./components/SantaBackground";

const nodeTypes = {
  gift: Gift,
};

const initialNodes = [
  {
    id: "0",
    type: "gift",
    data: { label: "Node" },
    position: { x: 400, y: 400 },
  },
];

const MIN_DISTANCE = 150;

export function Mind() {
  const connectingNodeId = useRef<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const store = useStoreApi();

  const onConnect = useCallback((params: Connection) => {
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface AdditionNodeTypes {
    className?: string;
    positionAbsolute: {
      x: number;
      y: number;
    };
  }

  interface EdgeBound {
    id: string;
    source: string;
    target: string;
    className?: string;
  }

  const getClosestEdge = useCallback(
    (node: FlowNode & AdditionNodeTypes): EdgeBound | null => {
      const { nodeInternals } = store.getState();
      const storeNodes = Array.from(nodeInternals.values());

      const closestNode = storeNodes.reduce(
        (res, n) => {
          if (n.id !== node.id) {
            if (n.positionAbsolute == undefined) {
              return res;
            }
            const dx: number = (n.positionAbsolute.x -
              node.positionAbsolute.x) as number;
            const dy: number = (n.positionAbsolute.y -
              node.positionAbsolute.y) as number;
            const d = Math.sqrt(dx * dx + dy * dy);

            if (d < res.distance && d < MIN_DISTANCE) {
              res.distance = d;
              res.node = n;
            }
          }

          return res;
        },
        {
          distance: Number.MAX_VALUE,
          node: null as FlowNode | null,
        },
      );

      if (!closestNode.node) {
        return null;
      }

      if (!closestNode.node.positionAbsolute) {
        return null;
      }
      const closeNodeIsSource =
        closestNode.node.positionAbsolute.x < node.positionAbsolute.x;

      return {
        id: closeNodeIsSource
          ? `${closestNode.node.id}-${node.id}`
          : `${node.id}-${closestNode.node.id}`,
        source: closeNodeIsSource ? closestNode.node.id : node.id,
        target: closeNodeIsSource ? node.id : closestNode.node.id,
      };
    },
    [],
  );

  const onNodeDrag = useCallback<NodeDragHandler>(
    (_, node: FlowNode | AdditionNodeTypes) => {
      const closeEdge = getClosestEdge(node as FlowNode & AdditionNodeTypes);

      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== "temp");

        if (
          closeEdge &&
          !nextEdges.find(
            (ne) =>
              ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          closeEdge.className = "temp";
          nextEdges.push(closeEdge);
        }

        return nextEdges;
      });
    },
    [getClosestEdge, setEdges],
  );

  const onNodeDragStop = useCallback(
    (_: React.MouseEvent, node: FlowNode) => {
      const closeEdge = getClosestEdge(node as FlowNode & AdditionNodeTypes);
      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== "temp");

        if (
          closeEdge &&
          !nextEdges.find(
            (ne) =>
              ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          nextEdges.push(closeEdge);
        }
        return nextEdges;
      });
    },
    [getClosestEdge],
  );

  return (
    <ReactFlow
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeDragStop={onNodeDragStop}
      onNodeDrag={onNodeDrag}
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
