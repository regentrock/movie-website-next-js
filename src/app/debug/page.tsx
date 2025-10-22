// src/app/debug/page.tsx
export default function Debug() {
  return (
    <div>
      <p>URL: {process.env.TMDB_API_URL}</p>
      <p>KEY: {process.env.TMDB_API_KEY ? "OK" : "NOT FOUND"}</p>
    </div>
  );
}
