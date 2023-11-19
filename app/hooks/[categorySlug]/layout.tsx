import { getCategories, getCategory } from '@/data/category';
import { LayoutHooks } from '@/app/hooks/_components/router-context-layout';
import { ClickCounter } from '@/ui/click-counter';
import { TabGroup } from '@/ui/tab-group';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = getCategory(params.categorySlug);
  const items = getCategories(params.categorySlug);

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/hooks/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            ...items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <LayoutHooks />

      <div>{children}</div>
    </div>
  );
}
