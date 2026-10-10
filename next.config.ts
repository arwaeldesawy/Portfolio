import type { NextConfig } from 'next';
const githubPages = process.env.GITHUB_PAGES === '1';
const config: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: githubPages ? '/Portfolio' : '' },
  ...(githubPages ? {
    output: 'export' as const,
    distDir: 'out',
    basePath: '/Portfolio',
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};
export default config;
