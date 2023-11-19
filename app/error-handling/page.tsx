import BuggyButton from '@/ui/buggy-button';
import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">에러 처리 UI: error.js</h1>

      <ul>
        <li>
          라우트 세그먼트와 하위 자식들의 에러 경계를 정의
        </li>
        <li>
          에러가 해당 세그먼트에만 국한됨
        </li>
      </ul>

      <div className="flex gap-2">
        <BuggyButton />

        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/error-handling">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
