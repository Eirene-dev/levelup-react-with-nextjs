import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['parallel-routes/@views/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/parallel-routes"
          items={[
            {
              text: '홈',
            },
            {
              text: '시청 횟수',
              slug: 'impressions',
            },
            {
              text: '시청 시간',
              slug: 'view-duration',
            },
          ]}
        />
        {children}
      </div>
    </Boundary>
  );
}
