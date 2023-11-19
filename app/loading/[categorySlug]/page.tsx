import type { Category } from '@/data/category';
import { SkeletonCard } from '@/ui/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const res = await fetch(
    // 느린 데이터 요청을 시뮬레이션하기 위해 의도적으로 응답을 지연시킵니다.
    `https://app-router-api.vercel.app/api/categories?delay=3000&slug=${params.categorySlug}`,
    {
      // `loading.js`의 데모를 더 잘 보여주기 위해 Next.js 캐시를 의도적으로 비활성화합니다.
      cache: 'no-cache',
    },
  );

  if (!res.ok) {
    // 가장 가까운 `error.js` 에러 경계를 렌더링합니다.
    throw new Error('무언가 잘못되었습니다!');
  }

  const category = (await res.json()) as Category;

  if (!category) {
    // 가장 가까운 `not-found.js` 에러 경계를 렌더링합니다.
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
