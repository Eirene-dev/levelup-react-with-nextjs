import { Boundary } from '@/ui/boundary';

export default function Page() {
  return (
    <Boundary labels={['@views/impressions/page.tsx']} size="small">
      <div className="prose-sm prose max-w-none">
        <h2 className="text-lg font-bold">시청 횟수</h2>
      </div>
    </Boundary>
  );
}
