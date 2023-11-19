import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">Client Context</h1>

      <ul>
        <li>
          서버/클라이언트 컴포넌트 경계를 넘나드는 클라이언트 컴포넌트 간 상태를 공유하기 위해 컨텍스트를 사용
        </li>
        <li>
          카운터를 증가시키고 페이지 간 이동을 해도, 서로 다른 레이아웃과 서버 컴포넌트인 페이지 내부에 있음에도 불구하고 앱 전체에서 카운터 상태가 공유됨
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/getting-started/react-essentials#context">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
