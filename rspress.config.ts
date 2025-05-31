import * as path from 'path';
import { defineConfig } from 'rspress/config';
import readingTime from 'rspress-plugin-reading-time';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  //   root: 'docs',
  base: '/f2e-interview/',
  title: '前端面试-by@若川',
  lang: 'zh',
  keywords:
    '前端面试，前端面试题，前端面试经验，前端面试技巧，前端面试准备，前端面试指南，前端面试问题，前端面试总结，前端面试分享，前端面试资料，前端面试资源',
  description:
    '前端面试，前端面试题，前端面试经验，前端面试技巧，前端面试准备，前端面试指南，前端面试问题，前端面试总结，前端面试分享，前端面试资料，前端面试资源',
  //   lang: 'zh',
  //   icon: '/favicon.ico',
  // logo: {
  // 	light: "/logo-2.jpg",
  // 	dark: "/logo-2.jpg",
  // },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'mainfest', href: '/mainfest.json' }],
    // [
    // 	'script',
    // 	{ charset: 'utf-8', src: 'https://my.openwrite.cn/js/readmore.js' },
    // ],
    // 添加百度统计
    '<script defer src="https://hm.baidu.com/hm.js?b0077938fa555dbb43c9dd96d20e9b79"></script>',
    // [
    // 	"script",
    // 	{
    // 		defer: "defer",
    // 	},
    // 	`
    // var _hmt = _hmt || [];
    // (function() {
    // var hm = document.createElement("script");
    // hm.src = "https://hm.baidu.com/hm.js?b0077938fa555dbb43c9dd96d20e9b79";
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(hm, s);
    // })();
    // `,
    // ],
  ],
  route: {
    exclude: ['**/images/**/*', '**/**/README.md'],
    // exclude: ['**/fragments/**'],
    // extensions: ['.jsx', '.md', '.mdx'],
    cleanUrls: true,
  },

  plugins: [
    readingTime({ defaultLocale: 'zh-CN' }),
    pluginGoogleAnalytics({
      id: 'UA-145436866-1',
    }),
    pluginFontOpenSans(),
  ],

  themeConfig: {
    enableContentAnimation: true,
    footer: {
      message: '© 2024 若川',
    },
    lastUpdated: true,
    // hideNavbar: 'auto',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/ruochuan-f2e/f2e-interview',
      },
      //   {
      //     icon: 'discord',
      //     mode: 'link',
      //     content: 'https://discord.gg/mkVw5zPAtf',
      //   },
      {
        icon: 'x',
        mode: 'link',
        content: 'https://x.com/ruochuan12',
      },
    ],
    // locales: [
    //   {
    //     lang: 'zh',
    //     label: '简体中文',
    //     editLink: {
    //       docRepoBaseUrl:
    //         'https://github.com/web-infra-dev/rspress/tree/main/packages/document/docs',
    //       text: '📝 在 GitHub 上编辑此页',
    //     },
    //     prevPageText: '上一篇',
    //     nextPageText: '下一篇',
    //     outlineTitle: '目录',
    //     searchPlaceholderText: '搜索',
    //     searchNoResultsText: '未搜索到相关结果',
    //     searchSuggestedQueryText: '可更换不同的关键字后重试',
    //   },
    //   {
    //     lang: 'en',
    //     label: 'English',
    //     editLink: {
    //       docRepoBaseUrl:
    //         'https://github.com/web-infra-dev/rspress/tree/main/packages/document/docs',
    //       text: '📝 Edit this page on GitHub',
    //     },
    //     searchPlaceholderText: 'Search',
    //   },
    // ],

    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '加群交流',
        link: '/services/group/index',
      },
      {
        text: '公众号：若川视野',
        link: 'https://image-static.segmentfault.com/355/182/3551821948-5df888aa1dc88_articlex',
      },
      {
        text: '掘金',
        link: 'https://juejin.cn/column/6960551178908205093',
      },
      {
        text: 'Github',
        link: 'https://github.com/ruochuan12/blog',
      },
      {
        text: '源码共读',
        link: 'https://www.yuque.com/ruochuan12/notice/p0',
        items: [
          {
            text: '语雀链接',
            link: 'https://www.yuque.com/ruochuan12/notice/p0',
          },
          {
            text: '掘金链接',
            link: 'https://juejin.cn/post/7079706017579139102',
          },
          {
            text: '自建网站',
            link: 'https://ruochuan-f2e.github.io/read-source-code/',
          },
          {
            text: 'github仓库',
            link: 'https://github.com/ruochuan-f2e/read-source-code',
          },
        ],
      },
      {
        text: '其他',
        items: [
          {
            text: '知乎',
            link: 'https://www.zhihu.com/people/lxchuan12/activities',
          },
          {
            text: '语雀',
            link: 'https://www.yuque.com/lxchuan12/blog',
          },
          {
            text: 'segmentFault',
            link: 'https://segmentfault.com/u/ruochuan12/articles',
          },
          {
            text: '微博',
            link: 'http://weibo.com/lxchuan12',
          },
          {
            text: '简书',
            link: 'http://www.jianshu.com/users/83129d433d72/latest_articles',
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: '目录',
          prefix: '/',
        },
        {
          text: '面试须知',
          items: [
            { text: '须知', link: '/interview/index' },
          ],
        },
        {
          text: 'JavaScript',
          items: [{ text: '基础', link: '/js/index' }],
        },
        {
          text: '前端框架',
          items: [
            { text: 'vue', link: '/framework/vue/index' },
            { text: 'react', link: '/framework/react/index' },
            { text: 'umi', link: '/framework/umi/index' },
          ],
        },
        {
          text: '前端工程化',
          items: [
            { text: 'webpack', link: '/engineering/webpack/index' },
            { text: 'vite', link: '/engineering/vite/index' },
          ],
        },
        {
          text: 'nodejs',
          items: [{ text: '基础', link: '/nodejs/index' }],
        },
        {
          text: '小程序',
          items: [{ text: '微信小程序', link: '/miniprogram/index' }],
        },
        {
          text: '跨端',
          items: [
            {
              text: 'React Native',
              link: '/cross-platform/react-native/index',
            },
            {
              text: 'Flutter',
              link: '/cross-platform/flutter/index',
            },
            {
              text: 'Electron',
              link: '/cross-platform/electron/index',
            },
          ],
        },
        // {
        //   text: '计算机基础',
        //   items: [
        //     { text: 'webpack', link: '/engineering/webpack/index' },
        //   ],
        // },
        // {
        //   text: '浏览器原理',
        //   items: [
        //     { text: 'webpack', link: '/engineering/webpack/index' },
        //   ],
        // },
        // {
        //   text: '算法和数据结构',
        //   items: [
        //     { text: 'webpack', link: '/engineering/webpack/index' },
        //   ],
        // },
        // {
        //   text: '项目和场景题',
        //   items: [{ text: 'webpack', link: '/engineering/webpack/index' }],
        // },
        {
          text: '其他',
          items: [{ text: '面试合集', link: '/other/index' }],
        },
        {
          text: '参与贡献和加群交流',
          items: [
            {
              text: '参与贡献',
              link: '/services/contributing/index',
            },
            {
              text: '加群交流',
              link: '/services/group/index',
            },
          ],
        },
      ],
    },
  },
});
