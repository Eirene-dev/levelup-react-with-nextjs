'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({
  isActive,
  searchParams,
  children,
}: {
  isActive: boolean;
  searchParams: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={clsx('rounded-lg px-3 py-1 text-sm font-medium no-underline', {
        'bg-gray-700 text-gray-600 hover:bg-gray-500 hover:text-gray-400':
          !isActive,
        'bg-vercel-blue text-pink': isActive,
      })}
      href={pathname + '?' + searchParams}
    >
      {children}
    </Link>
  );
}
