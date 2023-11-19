import { Boundary } from '@/ui/boundary';

export default function NotFound() {
  return (
    <Boundary
      labels={['./[categorySlug]/[subCategorySlug]/not-found.tsx']}
      color="pink"
    >
      <div className="space-y-3 text-vercel-pink">
        <h2 className="text-lg font-bold">하위 항목 페이지 없음(Not Found)</h2>

        <p className="text-sm">요청한 리소스를 찾을 수 없습니다.</p>
      </div>
    </Boundary>
  );
}
