import { getCategory } from '@/data/category';
import { Boundary } from '@/ui/boundary';
import { Counter } from '../context-click-counter';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = getCategory(params.categorySlug);

  return (
    <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-800/80">
          모든 {category.name}
        </h1>

        <Counter />
      </div>
    </Boundary>
  );
}
