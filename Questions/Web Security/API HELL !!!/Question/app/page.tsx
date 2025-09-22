
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl xl:max-w-6xl mx-auto text-center">
        <h1
          className="text-4xl xl:text-6xl font-bold mb-4"
          dangerouslySetInnerHTML={{
            __html: "UUT_CTF_2025&#123;everybody_likes_api&#125; \n :D",
          }}
        />
      </div>
    </main>
  );
}
