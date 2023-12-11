import { TbCopy } from "react-icons/tb";
import { IconButton } from "../IconButton";

type ShortenerFormStatusProps = { url: string; errorMessage: string };

export const ShortenerFormStatus: React.FC<ShortenerFormStatusProps> = ({ errorMessage, url }) => {
  if (errorMessage) return <div className="text-center text-[#C83532]">{errorMessage}</div>;

  if (url)
    return (
      <div className="flex items-start justify-between gap-6 bg-gray-100 rounded-lg p-2">
        <p className="break-all">{url}</p>

        <IconButton type="button" onClick={() => navigator.clipboard.writeText(url)}>
          <TbCopy />
        </IconButton>
      </div>
    );

  return null;
};
