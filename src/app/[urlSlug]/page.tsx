import { RedirectTimer } from "@/components/RedirectTimer";
import { getShortenedUrl } from "@/services/getShortenedUrl";

type RedirectPageProps = { params: { urlSlug: string } };

export default async function RedirectPage({ params }: RedirectPageProps) {
  const response = await getShortenedUrl(params.urlSlug);

  return (
    <main className="flex justify-center items-center min-h-screen h-full bg-gray-200">
      <div className="w-96 bg-white bg-opacity-70 backdrop-blur-2xl bg rounded-[10px] p-8">
        {response ? <RedirectTimer url={response.url} /> : <p>Link inexistente</p>}
      </div>
    </main>
  );
}
