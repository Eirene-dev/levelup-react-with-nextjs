import { getTopCategories } from '@/data/category';
import { Boundary } from '@/ui/boundary';
import { ClickCounter } from '@/ui/click-counter';
import { TabGroup } from '@/ui/tab-group';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getTopCategories();

  return (
    <Boundary
      labels={['marketing layout']}
      color="violet"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              {
                text: 'Home',
              },
              ...categories.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              { text: '장바구니', slug: 'cart' },
              { text: '후기', slug: 'review' },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
