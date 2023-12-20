import { ReactNode } from "react";
/**
 * Container Component
 *
 * A flexible container component that occupies the full width and height of the screen.
 * @component
 * @param {Props} props - The properties of the Container component.
 * @param {ReactNode} props.children - The content to be placed inside the container.
 */
type Props = {
  children: ReactNode;
};

/**
 * Renders a Container component.
 *
 * @example
 * <Container>
 *   <p>This content is placed inside a full-screen container.</p>
 * </Container>
 *
 * @param {Props} props - The properties of the Container component.
 * @param {ReactNode} props.children - The content to be placed inside the container.
 * @returns {JSX.Element} - The rendered Container component.
 */
export function Container({ children }: Props): JSX.Element {
  return <div className="w-full h-screen">{children}</div>;
}
