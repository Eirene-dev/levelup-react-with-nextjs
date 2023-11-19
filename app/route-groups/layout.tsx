import React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '레벨업 Next.js: 라우트 그룹',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
