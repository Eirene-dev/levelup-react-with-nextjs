import { RenderedTimeAgo } from '@/ui/rendered-time-ago';

export function RenderingInfo({
  type,
}: {
  type: 'ssg' | 'ssgod' | 'ssr' | 'isr';
}) {
  let msg = '';
  switch (type) {
    case 'ssg':
      msg = '빌드 시점에 정적으로 사전 렌더링됨';
      break;
    case 'ssgod':
      msg = '사용자 요청 시 정적으로 렌더링됨';
      break;
    case 'isr':
      msg =
        '빌드 시점에 정적으로 사전 렌더링되고 주기적으로 재검증됨';
      break;
    case 'ssr':
      msg = '요청 시점 마다 동적으로 렌더링됨';
      break;
  }

  return (
    <div className="p-3 space-y-3 bg-gray-100 rounded-lg">
      <div className="text-sm text-gray-800">{msg}</div>

      <div className="flex">
        <RenderedTimeAgo timestamp={Date.now()} />
      </div>
    </div>
  );
}
