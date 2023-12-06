export function Ping() {
  return (
    <span className="flex h-[11px] w-[11px]">
      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-vercel-pink animate-ping"></span>
      <span className="bg-vercel-pink relative inline-flex h-[11px] w-[11px] rounded-full"></span>
    </span>
  );
}
