'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // In production, this would initialize PostHog or Google Analytics
    // and track route changes.
    const url = pathname + searchParams.toString();
    console.log(`[Analytics] PageView tracked: ${url}`);
  }, [pathname, searchParams]);

  return <>{children}</>;
}
