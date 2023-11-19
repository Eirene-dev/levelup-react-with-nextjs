const SkeletonCard = () => (
  <div className="p-4 space-y-3 rounded-2xl bg-gray-900/30">
    <div className="bg-gray-600 rounded-lg h-14" />
    <div className="w-3/12 h-3 rounded-lg bg-vercel-cyan" />
    <div className="w-11/12 h-3 bg-gray-500 rounded-lg" />
    <div className="w-8/12 h-3 bg-gray-500 rounded-lg" />
  </div>
);

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled with Tailwind CSS
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
