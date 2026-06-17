import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Code ReViewer',
  description: 'Documentation for the Code ReViewer VS Code extension',

  theme: defaultTheme({
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.ln-cdn.com%2Fimage%2Fplaceholder-logo-full.png&f=1&nofb=1&ipt=0c0893374cd052c86cec2277d66adb7f6cd4e920aa3c046c070003fd32e40274',
    navbar: ['/', '/guide/get-started.html'],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/introduction.html',
            '/guide/get-started.html',
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})
