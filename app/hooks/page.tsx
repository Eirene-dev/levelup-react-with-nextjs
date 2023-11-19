import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="space-y-9">
      <div className="prose-sm prose max-w-none">
        <h1 className="text-xl font-bold">Next.js 제공 훅</h1>

        <ul>
          <li>
            Next.js는 클라이언트 컴포넌트에서 라우팅 정보에 접근하기 위한 다양한 훅을 제공
          </li>
        </ul>

        <div className="flex gap-2">
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#revalidating-data">
            문서
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
