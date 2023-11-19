import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-xl font-bold">스타일링</h1>

      <ul>
        <li>다양한 CSS 스타일링 방법 보기</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/styling/css-modules">
          문서
        </ExternalLink>
      </div>
    </div>
  );
}
