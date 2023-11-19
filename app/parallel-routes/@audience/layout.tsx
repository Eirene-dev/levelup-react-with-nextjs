import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['parallel-routes/@audience/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/parallel-routes"
          items={[
            {
              text: '홈',
            },
            {
              text: '접속 통계',
              slug: 'demographics',
            },
            {
              text: '가입자',
              slug: 'subscribers',
            },
          ]}
        />

        {children}
      </div>
    </Boundary>
  );
}
