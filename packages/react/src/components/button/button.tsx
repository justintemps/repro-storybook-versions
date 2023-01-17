import { ButtonProps } from "./button.props";

const Button = (props: ButtonProps) => (
  <button style={{ backgroundColor: props.color }}>{props.label}</button>
);

export { Button };
