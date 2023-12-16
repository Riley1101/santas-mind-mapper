import { ReactFlowProvider } from "reactflow";
type Props = {
  children: React.ReactNode;
};
export function AppProviders({ children }: Props) {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
}
