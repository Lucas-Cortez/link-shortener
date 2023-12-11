import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = { children: React.ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="font-medium px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-black disabled:bg-[#DBDBDB]"
      {...rest}
    >
      {children}
    </button>
  );
};
