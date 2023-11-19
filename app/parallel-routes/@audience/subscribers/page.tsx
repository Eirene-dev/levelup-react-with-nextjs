import { Boundary } from '@/ui/boundary';

export default function Page() {
  return (
    <Boundary labels={['@audience/subscribers/page.tsx']} size="small">
      <div className="prose-sm prose max-w-none">
        <h2 className="text-lg font-bold">가입자</h2>
      </div>
    </Boundary>
  );
}
