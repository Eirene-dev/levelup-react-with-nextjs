import { Boundary } from '@/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['parallel-routes/not-found.tsx']} color="pink">
      <div className="space-y-4 text-vercel-pink">
        <h2 className="text-lg font-bold">페이지 미존재(Not Found)</h2>

        <p className="text-sm">요청한 리소스를 찾을 수 없습니다!!</p>
      </div>
    </Boundary>
  );
}
