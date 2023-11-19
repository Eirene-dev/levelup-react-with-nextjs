import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '@/ui/product/recommended-products';
import { Reviews, ReviewsSkeleton } from '@/ui/product/reviews';
import { SingleProduct } from '@/ui/product/single-product';
import { Ping } from '@/ui/product/ping';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct
        data={fetch(
          `https://app-router-api.vercel.app/api/products?id=${params.id}`,
        )}
      />

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts
          path="/streaming/"
          data={fetch(
            // 스트리밍에 유리한 느린 데이터 요청을 시뮬레이션하기 위해 의도적으로 응답을 지연시킵니다
            `https://app-router-api.vercel.app/api/products?delay=500&filter=${params.id}`,
            {
              // 스트리밍을 더 잘 보여주기 위해 Next.js 캐시를 의도적으로 비활성화합니다
              cache: 'no-store',
            },
          )}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews
          data={fetch(
            // 스트리밍에 유리한 느린 데이터 요청을 시뮬레이션하기 위해 의도적으로 응답을 지연시킵니다
            `https://app-router-api.vercel.app/api/reviews?delay=1000`,
            {
              // 스트리밍을 더 잘 보여주기 위해 Next.js 캐시를 의도적으로 비활성화합니다
              cache: 'no-store',
            },
          )}
        />
      </Suspense>
    </div>
  );
}
