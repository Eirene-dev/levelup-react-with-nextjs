import type { Review } from '@/data/review';
import { ProductReviewCard } from './product-review-card';

export async function Reviews({ data }: { data: Promise<Response> }) {
  const reviews = (await data.then((res) => res.json())) as Review[];

  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-black">고객 후기</div>
      <div className="space-y-8">
        {reviews.map((review) => {
          return <ProductReviewCard key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function Skeleton() {
  return (
    <div className="space-y-4">
      <div className="w-2/6 h-6 bg-gray-400 rounded-lg" />
      <div className="w-1/6 h-4 bg-gray-300 rounded-lg" />
      <div className="w-full h-4 bg-gray-500 rounded-lg" />
      <div className="w-4/6 h-4 bg-gray-100 rounded-lg" />
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <div className="space-y-6">
      <div className={`h-7 w-2/5 rounded-lg bg-gray-300 ${shimmer}`} />

      <div className="space-y-8">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
