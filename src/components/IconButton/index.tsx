import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type IconButtonProps = { children: ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const IconButton: React.FC<IconButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="font-medium px-2 py-2 text-gray-800 rounded-full hover:text-black disabled:text-[#DBDBDB]"
      {...rest}
    >
      {children}
    </button>
  );
};
