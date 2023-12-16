type Props = {
  children: React.ReactNode;
};
export function Container({ children }: Props) {
  return <div className="w-full h-screen">{children}</div>;
}
