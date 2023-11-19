import { ExternalLink } from '@/ui/external-link';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">페이지 없음</h1>

      <ul>
        <li>
        현재 <code>notFound()</code> 함수에 의해 트리거 될 때만 렌더링
        </li>
        <li>
          <em>
            주의: 매치되지 않는 경로(404)를 잡는 기능에 대한 지원은 미지원 (Next.js 개발 중)
          </em>
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/api-reference/file-conventions/not-found">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
