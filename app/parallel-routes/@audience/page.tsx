import { Boundary } from '@/ui/boundary';

export default function Page() {
  return (
    <Boundary labels={['@audience/page.tsx']} size="small">
      <div className="prose-sm prose max-w-none">
        <h2 className="text-lg font-bold">소비자 홈</h2>
      </div>
    </Boundary>
  );
}
