import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";
import { NodeType } from "src/components/nodes/types";
import { mapNodeTypeToIcon } from "src/utils/icons";
import { FontSizeType } from "src/utils/tools";
import { create } from "zustand";
import demo1 from "src/samples/demo1";

const initialNodes = demo1;

export type SantaState = {
  currentNode?: string | null;
  size?: number;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: NodeType) => void;
  setCurrentNode: (nodeId: string | null) => void;
  updateNodeText: (nodeId: string, text: string) => void;
  updateNodeColor: (nodeId: string, color: string) => void;
  updateNodeIcon: (nodeId: string, icon: string | null) => void;
  updateNodeSize: (nodeId: string, size: FontSizeType) => void;
};

// this is our useStore hook that we can use in our components to get parts of
// the store and call actions
export const useSantaStore = create<SantaState>((set, get) => ({
  currentNode: null,
  nodes: initialNodes.nodes,
  size: 1,
  edges: initialNodes.edges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setCurrentNode: (nodeId: string | null) => {
    set({ currentNode: nodeId });
  },
  updateNodeColor: (nodeId: string, color: string) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          color,
        };
      }
      return node;
    });
    set({ nodes });
  },

  updateNodeText: (nodeId: string, text: string) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          label: text,
        };
      }
      return node;
    });
    set({ nodes });
  },
  updateNodeIcon: (nodeId: string, icon: string | null) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          icon,
        };
      }
      return node;
    });
    set({ nodes });
  },

  addNode: (type: NodeType) => {
    const lastNode = get().nodes[get().nodes.length - 1];
    const newNode = {
      id: `${parseInt(lastNode.id) + 1}`,
      type,
      data: {
        label: "Name!",
        icon: mapNodeTypeToIcon[type],
        size: 3,
      },
      position: { x: lastNode.position.x + 100, y: lastNode.position.y + 100 },
    };
    const nodes = get().nodes.concat(newNode);
    set({ nodes });
  },

  updateNodeSize: (nodeId: string, size: FontSizeType) => {
    let fontSize = 1;
    switch (size) {
      case "sm":
        fontSize = 1;
        break;
      case "md":
        fontSize = 2;
        break;
      case "lg":
        fontSize = 3;
        break;
      case "xl":
        fontSize = 4;
    }
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          size: fontSize,
        };
      }
      return node;
    });
    set({ nodes });
  },
}));
