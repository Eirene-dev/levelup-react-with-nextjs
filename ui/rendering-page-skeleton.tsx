const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export function RenderingPageSkeleton() {
  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="space-y-3 col-span-full lg:col-span-4">
        <div className={`h-8 rounded-lg bg-gray-300 ${shimmer}`} />
        <div className={`h-[72px] rounded-lg bg-gray-400 ${shimmer}`} />
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        <div className={`space-y-3 rounded-lg bg-gray-500 p-3 ${shimmer}`}>
          <div className="h-5 bg-gray-400 rounded-lg lg:h-10"></div>
          <div className="w-16 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
