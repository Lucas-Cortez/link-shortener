"use client";

import { useRouter } from "next/navigation";
import { useTimer } from "react-timer-hook";

type RedirectTimerProps = { url: string };

export const RedirectTimer: React.FC<RedirectTimerProps> = ({ url }) => {
  const router = useRouter();
  const { totalSeconds } = useTimer({
    expiryTimestamp: new Date(Date.now() + 5000),
    autoStart: true,
    onExpire: () => router.replace(url),
  });

  return <div>Redirecionando em {totalSeconds}...</div>;
};
