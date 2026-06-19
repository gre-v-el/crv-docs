import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/crv-docs/',

  title: 'Code ReViewer',
  description: 'VS Code extension to visualize code structure and analyze code quality',

  theme: defaultTheme({
    // logo: '/images/logo.png',
    navbar: ['/', '/guide/'],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/1-introduction.html',
            '/guide/2-get-started.html',
            '/guide/3-triggering-the-analysis.html',
            '/guide/4-graph-view-interface.html',
            '/guide/5-language-support.html',
            '/guide/6-metrics-reference.html',
            '/guide/7-custom-metrics.html',
            '/guide/8-troubleshooting.html',
          ],
        },
      ],
    },
    lastUpdated: false,
    contributors: false
  }),

  bundler: viteBundler(),
})
