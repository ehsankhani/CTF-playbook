import { NextResponse } from "next/server";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: Request) {
  const url = new URL(request.url);
  const part = url.searchParams.get('part');
  
  // If requesting a specific part based on timestamp
  if (part === 'flag') {
    // Return the flag message directly without waiting
    return NextResponse.json({
      message: "UUT_CTF_2025{no_mercy_for_apis}",
      timestamp: new Date().toISOString(),
    });
  }
  
  // Original streaming implementation for the first message
  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  (async () => {
    try {
      await wait(2000);
      await writer.write(
        encoder.encode(
          JSON.stringify({
            message: "I Hate APIs :(",
            timestamp: new Date().toISOString(),
          }) + "\n"
        )
      );

      // Close the stream after sending the first message
      await writer.close();
    } catch (error) {
      console.error("Error in API:", error);
      await writer.abort(error);
    }
  })();

  return new Response(stream.readable, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}

export const dynamic = "force-dynamic";
