import { RenderingInfo } from '@/ui/rendering-info';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // 빌드 시에 두 페이지를 생성하고 나머지(3-100)는 요청에 따라 생성
  return [{ id: '1' }, { id: '2' }];
}

export default async function Page({ params }: { params: { id: string } }) {
  if (Number(params.id) >= 100) {
    notFound();
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const data = (await res.json()) as { title: string; body: string };

  const isOnDemand = Number(params.id) >= 3;

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="space-y-3 col-span-full lg:col-span-4">
        <h1 className="text-2xl font-medium text-gray-600 capitalize truncate">
          {data.title}
        </h1>
        <p className="font-medium text-gray-500 line-clamp-3">{data.body}</p>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        <RenderingInfo type={isOnDemand ? 'ssgod' : 'ssg'} />
      </div>
    </div>
  );
}
