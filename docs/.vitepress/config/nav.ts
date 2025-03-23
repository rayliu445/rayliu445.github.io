import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的分类',
    items: [
      { text: 'Bug万象集', link: '/categories/issues/index', activeMatch: '/categories/issues/' },
      { text: '"杂碎"逆袭史', link: '/categories/fragments/index', activeMatch: '/categories/fragments/' },
      { text: '工具四海谈', link: '/categories/tools/index', activeMatch: '/categories/tools/' },
      { text: '方案春秋志', link: '/categories/solutions/index', activeMatch: '/categories/solutions/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的小册',
    items: [
      { text: 'Java生态', link: '/courses/java/index', activeMatch: '/courses/java/' },
      { text: 'MySQL生态', link: '/courses/mysql/index', activeMatch: '/courses/mysql/' },
      { text: 'Web3生态', link: '/courses/web3/index', activeMatch: '/courses/web3/' },
      { text: 'MyBatis快速入门', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' }
    ],
    activeMatch: '/courses/'
  },
  {text:'读书笔记',
    items: [
      { text: '编程', link: '/notes/code/index', activeMatch: '/notes/code/' },
      { text: '社科人文', link: '/notes/humanities/index', activeMatch: '/notes/humanities/' }
    ],
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];