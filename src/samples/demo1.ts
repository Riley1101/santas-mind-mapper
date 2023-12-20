const demo = {
  nodes: [
    {
      id: "0",
      type: "santa",
      data: {
        label: "Starts at the North pole",
        icon: "ready_santa",
        color: "text-black",
        size: 3,
      },
      position: { x: -547.1151948715096, y: 705.2833600903218 },
      width: 668,
      height: 452,
      selected: false,
      positionAbsolute: { x: -547.1151948715096, y: 705.2833600903218 },
      dragging: false,
    },
    {
      id: "1",
      type: "santa",
      data: {
        label: "Visit to someplace",
        icon: "christmas_tree_two",
        size: 3,
        color: "#6366F1",
      },
      position: { x: 1157.2679848862783, y: -100.28613634262865 },
      width: 342,
      height: 576,
      selected: false,
      positionAbsolute: { x: 1157.2679848862783, y: -100.28613634262865 },
      dragging: false,
    },
    {
      id: "2",
      type: "santa",
      data: { label: "Go somewhere", icon: "christmas_tree_two", size: 4 },
      position: { x: 811.019388824153, y: 1255.3117182753297 },
      width: 342,
      height: 600,
      selected: false,
      positionAbsolute: { x: 811.019388824153, y: 1255.3117182753297 },
      dragging: false,
    },
    {
      id: "3",
      type: "santa",
      data: { label: "I love it", icon: "star", size: 3 },
      position: { x: 1955.892121210623, y: 68.9848787890968 },
      width: 250,
      height: 299,
      selected: false,
      positionAbsolute: { x: 1955.892121210623, y: 68.9848787890968 },
      dragging: false,
    },
    {
      id: "4",
      type: "santa",
      data: { label: "Visit to ella ", icon: "santa_two", size: 3 },
      position: { x: 1578.0678249152252, y: 1550.7947889855807 },
      width: 304,
      height: 409,
      selected: false,
      positionAbsolute: { x: 1578.0678249152252, y: 1550.7947889855807 },
      dragging: false,
    },
    {
      id: "5",
      type: "santa",
      data: { label: "Pick up more gifts", icon: "gift", size: 3 },
      position: { x: 2824.089927015798, y: 666.1827277792331 },
      width: 316,
      height: 340,
      selected: false,
      positionAbsolute: { x: 2824.089927015798, y: 666.1827277792331 },
      dragging: false,
    },
    {
      id: "6",
      type: "santa",
      data: { label: "Ring the bell", icon: "bell", size: 3 },
      position: { x: 1608.8306084261635, y: 618.1814803571458 },
      width: 238,
      height: 403,
      selected: false,
      positionAbsolute: { x: 1608.8306084261635, y: 618.1814803571458 },
      dragging: false,
    },
    {
      id: "7",
      type: "santa",
      data: { label: "Name!", icon: "ready_date", size: 3, color: "#10B981" },
      position: { x: 172.68131241210818, y: 277.9364339065845 },
      width: 261,
      height: 321,
      selected: true,
      positionAbsolute: { x: 172.68131241210818, y: 277.9364339065845 },
      dragging: false,
    },
    {
      id: "8",
      type: "santa",
      data: { label: "Name!", icon: "lollipop", size: 3 },
      position: { x: 2256.220779819091, y: 1079.982463990522 },
      width: 245,
      height: 472,
      selected: false,
      positionAbsolute: { x: 2256.220779819091, y: 1079.982463990522 },
      dragging: false,
    },
  ],
  edges: [
    {
      source: "0",
      sourceHandle: null,
      target: "7",
      targetHandle: null,
      id: "reactflow__edge-0-7",
    },
    {
      source: "7",
      sourceHandle: null,
      target: "1",
      targetHandle: null,
      id: "reactflow__edge-7-1",
    },
    {
      source: "1",
      sourceHandle: null,
      target: "3",
      targetHandle: null,
      id: "reactflow__edge-1-3",
    },
    {
      source: "0",
      sourceHandle: null,
      target: "6",
      targetHandle: null,
      id: "reactflow__edge-0-6",
    },
    {
      source: "6",
      sourceHandle: null,
      target: "5",
      targetHandle: null,
      id: "reactflow__edge-6-5",
    },
    {
      source: "3",
      sourceHandle: null,
      target: "5",
      targetHandle: null,
      id: "reactflow__edge-3-5",
    },
    {
      source: "4",
      sourceHandle: null,
      target: "8",
      targetHandle: null,
      id: "reactflow__edge-4-8",
    },
    {
      source: "8",
      sourceHandle: null,
      target: "5",
      targetHandle: null,
      id: "reactflow__edge-8-5",
    },
    {
      source: "2",
      sourceHandle: null,
      target: "4",
      targetHandle: null,
      id: "reactflow__edge-2-4",
    },
    {
      source: "0",
      sourceHandle: null,
      target: "2",
      targetHandle: null,
      id: "reactflow__edge-0-2",
    },
    {
      source: "2",
      sourceHandle: null,
      target: "6",
      targetHandle: null,
      id: "reactflow__edge-2-6",
    },
    {
      source: "1",
      sourceHandle: null,
      target: "6",
      targetHandle: null,
      id: "reactflow__edge-1-6",
    },
    {
      source: "7",
      sourceHandle: null,
      target: "6",
      targetHandle: null,
      id: "reactflow__edge-7-6",
    },
  ],
};
export default demo;
