import { Boundary } from '@/ui/boundary';
import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <Boundary labels={['parallel-routes/page.tsx']} size="small">
      <div className="prose-sm prose max-w-none">
        <h2 className="text-lg font-bold">병렬 라우팅</h2>
        <ul>
          <li>
            병렬 라우트는 동일한 레이아웃에서 여러 페이지를 동시에 또는 조건부로 독립적인 내비게이션과 함께 렌더링됨
          </li>
          <li>
            조건부 라우트와 중단된 라우트와 같은 고급 라우팅 패턴에 사용됨
          </li>
          <li>
            한 병렬 라우트의 탭을 사용해 내비게이션 시, URL은 변경되지만 영향을 받지 않는 다른 병렬 라우트는 유지됨
          </li>
          <li>
            브라우저의 뒤로 가기와 앞으로 가기 시, 브라우저의 URL 이력 상태와 활성 UI 상태가 올바르게 동기화됨
          </li>
          <li>
            한 병렬 라우트의 탭으로 이동한 후 브라우저를 새로 고침 시, 초기 URL과 일치하지 않는 병렬 라우트에 어떤 UI를 표시할지 선택 가능함.
          </li>
        </ul>
        <div className="flex gap-2">
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes">
            문서
          </ExternalLink>
        </div>
      </div>
    </Boundary>
  );
}
