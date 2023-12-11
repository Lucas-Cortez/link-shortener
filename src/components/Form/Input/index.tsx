import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = { error?: boolean } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      data-error={props.error && String(props.error)}
      className="w-full border border-[#D5D4DC] p-3 rounded-lg focus:border-2 focus:border-[#6B6B6B] focus-visible:outline-none data-[error=true]:bg-[#FBEFEF] data-[error=true]:border-2 data-[error=true]:border-[#C83532]"
      {...props}
    />
  );
};
