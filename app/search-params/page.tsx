import { Boundary } from '@/ui/boundary';
import { ExternalLink } from '@/ui/external-link';
import { Suspense } from 'react';
import ActiveLink from './active-link';
import Client from './client';

const options = [
  {
    name: 'Sort',
    value: 'sort',
    items: ['asc', 'desc'],
  },
  {
    name: 'Page',
    value: 'page',
    items: ['1', '2', '3'],
  },
  {
    name: 'Items Per Page',
    value: 'perPage',
    items: ['10', '25', '100'],
  },
];

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: { searchParams: any }) {
  return (
    <div className="prose-sm prose max-w-none">
      <h1 className="text-lg font-bold">
        URL 검색 파라미터인 <code>searchParams</code> 업데이트
      </h1>
      <p>
        Next.js에서 제공하는 <code>useSearchParams</code> 훅은 설정이 불가능한 읽기 전용인{' '}
        <code>URLSearchParams</code>만 반환함. 그래서, 다른 방식인 
        <code>useRouter&#40;&#41;</code> 또는 <code>&lt;Link&gt;</code>를 통해{' '}
        <code>searchParams</code>를 설정해야함.
      </p>
      <div className="mt-12 space-y-12">
        <div className="space-y-4">
          <Boundary color="blue" labels={['From the Client']}>
            <h3 className="mt-0">
              <code>useRouter&#40;&#41;</code> 사용하여 검색 파라미터 설정
            </h3>

            <Suspense>
              <Client options={options} />
            </Suspense>
          </Boundary>

          <ExternalLink href="https://nextjs.org/docs/app/api-reference/functions/use-search-params">
            문서
          </ExternalLink>
        </div>

        <div className="space-y-4">
          <Boundary labels={['From the Server']}>
            <h3 className="mt-0">
              <code>&lt;Link&gt;</code> 사용하여 검색 파라미터 설정
            </h3>

            <div className="flex items-center gap-6">
              {options.map((option) => {
                return (
                  <div key={option.name}>
                    <div className="text-gray-400">{option.name}</div>

                    <div className="flex gap-2 mt-1">
                      {option.items.map((item, i) => {
                        const isActive =
                          // set the first item as active if no search param is set
                          (!searchParams[option.value] && i === 0) ||
                          // otherwise check if the current item is the active one
                          item === searchParams[option.value];

                        // create new searchParams object for easier manipulation
                        const params = new URLSearchParams(searchParams);
                        params.set(option.value, item);
                        return (
                          <ActiveLink
                            key={item}
                            isActive={isActive}
                            searchParams={params.toString()}
                          >
                            {item}
                          </ActiveLink>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Boundary>

          <ExternalLink href="https://nextjs.org/docs/app/api-reference/file-conventions/page">
            문서
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
