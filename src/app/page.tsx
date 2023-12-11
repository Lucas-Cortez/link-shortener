import { ShortenerForm } from "@/components/ShortenerForm";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen h-full bg-gray-200">
      <div className="w-96 bg-white bg-opacity-70 backdrop-blur-2xl bg rounded-[10px] p-8">
        <ShortenerForm />
      </div>
    </main>
  );
}
