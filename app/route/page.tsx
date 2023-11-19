import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">라우팅 기본: 파일 시스템 기반 디렉터리를 사용</h1>
      <ul>
        <li>
          레이아웃(Layouts): 여러 페이지에 걸쳐 공유되는 UI
        </li>
        <li>
          페이지(Pages): 각각의 라우팅에 특화된 UI
        </li>
        <li>
          템플릿(Templates): 특정한 레이아웃이나 구조를 재사용하기 위한 공통 UI
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
