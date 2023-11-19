import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">증분적 정적 재생성</h1>

      <ul>
        <li>3개 포스트는 ISR을 사용하여 데이터를 가져옴</li>
        <li>캐시된 응답은 10초 동안 최신 상태로 유지</li>
        <li>
          각 포스트로 이동하여 페이지가 렌더링된 시간을 확인 가능. 10초 후 새로 고침하여 다음 요청에 대한 재검증을 트리거하세요. 다시 새로 고침하여 재검증된 페이지를 확인하세요.
        </li>
        <li>빌드 간에도 가져오기 캐시를 유지할 수 있음</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#revalidating-data">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
