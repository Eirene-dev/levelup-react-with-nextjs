import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">정적 데이터</h1>

      <ul>
        <li>Next.js에서 데이터 가져오기는 기본적으로 정적으로 캐시됨(포스트 1과 2)</li>
        <li>
          세 번째 포스트는 사용자 요청 시 데이터를 랜덤으로 가져옴
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
