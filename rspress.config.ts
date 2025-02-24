import * as path from 'path';
import { defineConfig } from 'rspress/config';
import readingTime from 'rspress-plugin-reading-time';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  //   root: 'docs',
  base: '/f2e-interview/',
  title: '若川的博客',
  lang: 'zh',
  keywords:
    '若川，微信搜索「若川视野」关注我，长期交流学习。写有《学习源码整体架构系列》。包含jquery源码、underscore源码、lodash源码、sentry源码、vuex源码、axios源码、koa源码、redux源码、vue-devtools源码、vuex4源码。前端路上，PPT爱好者，所知甚少，唯善学。',
  description:
    '若川，微信搜索「若川视野」关注我，长期交流学习。写有《学习源码整体架构系列》。包含jquery源码、underscore源码、lodash源码、sentry源码、vuex源码、axios源码、koa源码、redux源码。前端路上，PPT爱好者，所知甚少，唯善学。',
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
    exclude: [
      'jquery',
      'mini-webpack',
      '**/images/**/*',
      '**/**/README.md',
      'debounce',
    ],
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
        content: 'https://github.com/ruochuan12',
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
    //   {
    //     text: '关于我',
    //     link: '/about/',
    //   },
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
    //   {
    //     text: '曾经写的"诗词"',
    //     link: '/poetry/2012-2016/',
    //   },
      {
        text: '掘金',
        link: 'https://juejin.cn/column/6960551178908205093',
      },
      {
        text: 'Github',
        link: 'https://github.com/ruochuan12/blog',
      },
      {
        text: '公众号：若川视野',
        link: 'https://image-static.segmentfault.com/355/182/3551821948-5df888aa1dc88_articlex',
      },

      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/lxchuan12/activities',
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/lxchuan12/blog',
      },
      {
        text: '其他',
        items: [
          {
            text: 'segmentFault',
            link: 'https://segmentfault.com/u/lxchuan12/articles',
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
          text: '面试',
          items: [{ text: '面试', link: '/index' }],
        }
      ],
    },
  },
});
