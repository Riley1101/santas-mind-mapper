import { create } from "zustand";
import { mapNodeTypeToIcon } from "src/utils/icons";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { NodeType } from "src/components/nodes/types";

const initialNodes = [
  {
    id: "0",
    type: "house",
    data: {
      label: "Name!",
      icon: mapNodeTypeToIcon["house"],
      color: "text-black",
    },
    position: { x: 400, y: 400 },
  },
];

export type SantaState = {
  currentNode?: string | null;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: NodeType) => void;
  setCurrentNode: (nodeId: string) => void;
  updateNodeText: (nodeId: string, text: string) => void;
  updateNodeColor: (nodeId: string, color: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
export const useSantaStore = create<SantaState>((set, get) => ({
  currentNode: null,
  nodes: initialNodes,
  edges: [],
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
  setCurrentNode: (nodeId: string) => {
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
  updateNodeIcon: (nodeId: string, icon: string) => {
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
      },
      position: { x: lastNode.position.x + 100, y: lastNode.position.y + 100 },
    };
    const nodes = get().nodes.concat(newNode);
    set({ nodes });
  },
}));
