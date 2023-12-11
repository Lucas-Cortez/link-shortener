import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

type LabelProps = { children: React.ReactNode } & DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <label {...rest}>{children}</label>;
};
