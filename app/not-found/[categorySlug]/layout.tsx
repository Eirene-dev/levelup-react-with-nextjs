import { getCategories, getCategory } from '@/data/category';
import { ClickCounter } from '@/ui/click-counter';
import { TabGroup } from '@/ui/tab-group';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  // - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
  // - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
  // - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
  // - For `page.js`, the closest `not-found.tsx` starts from the same segment.
  // - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.
  const category = getCategory(params.categorySlug);
  const items = getCategories(params.categorySlug);

  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/not-found/${category.slug}`}
            items={[
              {
                text: '전체',
              },
              ...items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              {
                text: '❗미존재 하위항목❗',
                slug: 'does-not-exist',
              },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
