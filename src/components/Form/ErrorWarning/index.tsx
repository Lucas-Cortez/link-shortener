import { RiErrorWarningFill } from "react-icons/ri";

type ErrorWarningProps = { message: string };

export const ErrorWarning: React.FC<ErrorWarningProps> = ({ message }) => {
  return (
    <span className="flex text-[#C83532] items-center gap-1">
      <RiErrorWarningFill />
      <span className="text-xs">{message}</span>
    </span>
  );
};
