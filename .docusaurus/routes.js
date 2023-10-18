import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6e0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9bf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '171'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'cf3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a2d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '752'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f66'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '85a'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '151'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4fc'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '89b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '80a'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e3b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '63f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'f79'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '983'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a3f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1e4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2da'),
    routes: [
      {
        path: '/docs/algorithm/hello-algo/初识算法/算法无处不在',
        component: ComponentCreator('/docs/algorithm/hello-algo/初识算法/算法无处不在', 'b3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/hello-algo/初识算法/算法是什么',
        component: ComponentCreator('/docs/algorithm/hello-algo/初识算法/算法是什么', 'e24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/leetcode/lru_cache/Keep-alive组件中的lru_cache缓存机制',
        component: ComponentCreator('/docs/algorithm/leetcode/lru_cache/Keep-alive组件中的lru_cache缓存机制', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/leetcode/single_number/异或',
        component: ComponentCreator('/docs/algorithm/leetcode/single_number/异或', 'b92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/linked_list/js实现简单链表',
        component: ComponentCreator('/docs/algorithm/linked_list/js实现简单链表', 'd07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/linked_list/从react虚拟dom架构升级看树和链表的关系',
        component: ComponentCreator('/docs/algorithm/linked_list/从react虚拟dom架构升级看树和链表的关系', 'c1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/从数据结构层面理解JS对象',
        component: ComponentCreator('/docs/algorithm/从数据结构层面理解JS对象', 'af1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/位运算/',
        component: ComponentCreator('/docs/algorithm/位运算/', '65b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/位运算/位运算在Vue源码中的运用',
        component: ComponentCreator('/docs/algorithm/位运算/位运算在Vue源码中的运用', 'ff6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithm/算法复杂度的计算',
        component: ComponentCreator('/docs/algorithm/算法复杂度的计算', 'e8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/books/javascript设计模式与开发实践/',
        component: ComponentCreator('/docs/books/javascript设计模式与开发实践/', '6a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/books/the_clean_coder/',
        component: ComponentCreator('/docs/books/the_clean_coder/', 'a5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/devtools/$',
        component: ComponentCreator('/docs/browser/devtools/$', '35f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/devtools/bug_of_console_log',
        component: ComponentCreator('/docs/browser/devtools/bug_of_console_log', 'eaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/devtools/command',
        component: ComponentCreator('/docs/browser/devtools/command', '3c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/browser/devtools/hot_keys',
        component: ComponentCreator('/docs/browser/devtools/hot_keys', '665'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bugs/react/react-datepicker_wrong_date',
        component: ComponentCreator('/docs/bugs/react/react-datepicker_wrong_date', 'a36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/algorithm',
        component: ComponentCreator('/docs/category/algorithm', 'bec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/computer_fundamentals/absolute_relative_path',
        component: ComponentCreator('/docs/computer_fundamentals/absolute_relative_path', 'a19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/css/@',
        component: ComponentCreator('/docs/css/@', 'bdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/css/image-rendering',
        component: ComponentCreator('/docs/css/image-rendering', 'a39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/css/styly_of_scrollbar',
        component: ComponentCreator('/docs/css/styly_of_scrollbar', '09c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/css/uiux/mask',
        component: ComponentCreator('/docs/css/uiux/mask', '930'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data_structures/数据结构本质上只有数组和链表',
        component: ComponentCreator('/docs/data_structures/数据结构本质上只有数组和链表', '7ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data_structures/树结构入门',
        component: ComponentCreator('/docs/data_structures/树结构入门', 'ca1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data_structures/链表和数组',
        component: ComponentCreator('/docs/data_structures/链表和数组', '05d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design_patterns/',
        component: ComponentCreator('/docs/design_patterns/', 'c2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design_patterns/creational_patterns/factory_method',
        component: ComponentCreator('/docs/design_patterns/creational_patterns/factory_method', 'c19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_engineering/webpack/proxy_events',
        component: ComponentCreator('/docs/front-end_engineering/webpack/proxy_events', 'c06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_security/note',
        component: ComponentCreator('/docs/front-end_security/note', 'fe6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/',
        component: ComponentCreator('/docs/front-end_test/', '8de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/', 'f3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/debug_vitest',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/debug_vitest', '7cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/the_core_apis_of_vitest',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/the_core_apis_of_vitest', '0ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/不写测试的原因',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/不写测试的原因', '6de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/为什么要写测试',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/为什么要写测试', '787'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/写单元测试的好处',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/写单元测试的好处', '861'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/写单元测试的顺序',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/写单元测试的顺序', '18c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/单元级别的功能测试',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/单元级别的功能测试', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/实现mini_test_runner',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/实现mini_test_runner', '192'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/测试文件命名',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/测试文件命名', 'c8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/front-end_test/front-end_unit_testing/编写第一个单元测试',
        component: ComponentCreator('/docs/front-end_test/front-end_unit_testing/编写第一个单元测试', '90e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/git/',
        component: ComponentCreator('/docs/git/', 'ce6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/git/rewrite_commit_msg',
        component: ComponentCreator('/docs/git/rewrite_commit_msg', 'fea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/',
        component: ComponentCreator('/docs/html/', '770'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/code_pre',
        component: ComponentCreator('/docs/html/code_pre', 'aff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/contexteditable',
        component: ComponentCreator('/docs/html/contexteditable', '30d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/data-*',
        component: ComponentCreator('/docs/html/data-*', 'eee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/form_element',
        component: ComponentCreator('/docs/html/form_element', '0f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/head_meta_element',
        component: ComponentCreator('/docs/html/head_meta_element', 'bc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/html/input_element',
        component: ComponentCreator('/docs/html/input_element', '7c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/http/download/ban_download_pdf',
        component: ComponentCreator('/docs/http/download/ban_download_pdf', '1e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/http/request_methods',
        component: ComponentCreator('/docs/http/request_methods', '9d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/http/sstatus_code',
        component: ComponentCreator('/docs/http/sstatus_code', '299'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/image/base64',
        component: ComponentCreator('/docs/image/base64', 'feb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/',
        component: ComponentCreator('/docs/java/', 'e31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/', '0cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/', 'd65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/java简介',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/java简介', '2d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/变量与数据类型',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/变量与数据类型', '867'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/命令行参数',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/命令行参数', 'c8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/多维数组',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/多维数组', '55e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/如何执行java程序',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/如何执行java程序', '1a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/字符和字符串',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/字符和字符串', '219'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/布尔运算',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/布尔运算', '8c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/数组排序',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/数组排序', 'cda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/数组类型',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/数组类型', '1e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/整数的运算',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/整数的运算', 'deb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/浮点数计算',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/浮点数计算', '873'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/第一个java程序',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/第一个java程序', '914'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/输入和输出',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/输入和输出', '7a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/java快速入门/遍历',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/java快速入门/遍历', '0a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/', '80b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/多态',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/多态', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/抽象方法',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/抽象方法', '347'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/接口',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/接口', '594'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/方法',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/方法', 'd25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/方法重载',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/方法重载', 'e20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/构造方法',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/构造方法', '0ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/继承',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/继承', '68b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/面向对象编程',
        component: ComponentCreator('/docs/java/java教程-廖雪峰/面向对象编程/面向对象基础/面向对象编程', '1e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/array/',
        component: ComponentCreator('/docs/javascript/base/array/', '16e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/array/loop_array',
        component: ComponentCreator('/docs/javascript/base/array/loop_array', '9b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/currentTarget_target',
        component: ComponentCreator('/docs/javascript/base/currentTarget_target', '844'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/currying/arrow_function',
        component: ComponentCreator('/docs/javascript/base/currying/arrow_function', '04c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/currying/browser_monitoring',
        component: ComponentCreator('/docs/javascript/base/currying/browser_monitoring', '083'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/currying/defered_execute',
        component: ComponentCreator('/docs/javascript/base/currying/defered_execute', '86c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/currying/repeated_parameter',
        component: ComponentCreator('/docs/javascript/base/currying/repeated_parameter', '642'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/destructuring_assignment',
        component: ComponentCreator('/docs/javascript/base/destructuring_assignment', '865'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/function/arguments',
        component: ComponentCreator('/docs/javascript/base/function/arguments', '4e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/function/bind_apply_call',
        component: ComponentCreator('/docs/javascript/base/function/bind_apply_call', 'b97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/map/Iterator',
        component: ComponentCreator('/docs/javascript/base/map/Iterator', 'bbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/map/map和array互相转换',
        component: ComponentCreator('/docs/javascript/base/map/map和array互相转换', '9e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/map/map和object的区别',
        component: ComponentCreator('/docs/javascript/base/map/map和object的区别', 'ed4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/map/usage_of_map',
        component: ComponentCreator('/docs/javascript/base/map/usage_of_map', 'd08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/map/whats_map',
        component: ComponentCreator('/docs/javascript/base/map/whats_map', 'df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/microtasks_macrotasks',
        component: ComponentCreator('/docs/javascript/base/microtasks_macrotasks', '1be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/object/entries_fromEntries',
        component: ComponentCreator('/docs/javascript/base/object/entries_fromEntries', 'f70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/operator/difference',
        component: ComponentCreator('/docs/javascript/base/operator/difference', '72b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/operator/question_dot_',
        component: ComponentCreator('/docs/javascript/base/operator/question_dot_', '99d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/optional_chaining',
        component: ComponentCreator('/docs/javascript/base/optional_chaining', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/other/abort_controller',
        component: ComponentCreator('/docs/javascript/base/other/abort_controller', '239'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/other/closures',
        component: ComponentCreator('/docs/javascript/base/other/closures', '6ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/other/intersection_observer_api',
        component: ComponentCreator('/docs/javascript/base/other/intersection_observer_api', 'e0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/promise',
        component: ComponentCreator('/docs/javascript/base/promise', '8aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/promise/async_await',
        component: ComponentCreator('/docs/javascript/base/promise/async_await', '6a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/base/string/convert_string_to_number',
        component: ComponentCreator('/docs/javascript/base/string/convert_string_to_number', '219'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/bugs/array.splice',
        component: ComponentCreator('/docs/javascript/bugs/array.splice', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/ignition',
        component: ComponentCreator('/docs/javascript/codewhy_js/ignition', '80c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/javaScript代码在浏览器里是如何被执行的',
        component: ComponentCreator('/docs/javascript/codewhy_js/javaScript代码在浏览器里是如何被执行的', 'dbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/js引擎',
        component: ComponentCreator('/docs/javascript/codewhy_js/js引擎', '53e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/parse',
        component: ComponentCreator('/docs/javascript/codewhy_js/parse', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/script标签的async和defer属性',
        component: ComponentCreator('/docs/javascript/codewhy_js/script标签的async和defer属性', '465'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/v8引擎运行原理',
        component: ComponentCreator('/docs/javascript/codewhy_js/v8引擎运行原理', 'c20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/抽象语法树',
        component: ComponentCreator('/docs/javascript/codewhy_js/抽象语法树', '929'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/浏览器内核（渲染引擎）',
        component: ComponentCreator('/docs/javascript/codewhy_js/浏览器内核（渲染引擎）', '802'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/浏览器内核和js引擎的关系',
        component: ComponentCreator('/docs/javascript/codewhy_js/浏览器内核和js引擎的关系', '1fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/浏览器渲染过程',
        component: ComponentCreator('/docs/javascript/codewhy_js/浏览器渲染过程', 'a9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/javascript/codewhy_js/编程语言的三个阶段',
        component: ComponentCreator('/docs/javascript/codewhy_js/编程语言的三个阶段', 'a9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/buffer',
        component: ComponentCreator('/docs/nodejs/buffer', 'a2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/fs',
        component: ComponentCreator('/docs/nodejs/fs', 'eaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/global',
        component: ComponentCreator('/docs/nodejs/global', '8e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/npm/additional_flags_npm_install',
        component: ComponentCreator('/docs/nodejs/npm/additional_flags_npm_install', 'd3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/npm/package_versions',
        component: ComponentCreator('/docs/nodejs/npm/package_versions', '2b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/udemy_max/basics/http_https',
        component: ComponentCreator('/docs/nodejs/udemy_max/basics/http_https', 'ebf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/udemy_max/basics/node_server',
        component: ComponentCreator('/docs/nodejs/udemy_max/basics/node_server', '8f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/udemy_max/basics/require',
        component: ComponentCreator('/docs/nodejs/udemy_max/basics/require', '2d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nodejs/udemy_max/introduction/nodejs',
        component: ComponentCreator('/docs/nodejs/udemy_max/introduction/nodejs', 'ed8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/env',
        component: ComponentCreator('/docs/python/env', '850'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/函数/内置函数',
        component: ComponentCreator('/docs/python/ryf/函数/内置函数', '09c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/函数/函数',
        component: ComponentCreator('/docs/python/ryf/函数/函数', '663'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/函数/函数的参数',
        component: ComponentCreator('/docs/python/ryf/函数/函数的参数', 'da2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/函数/定义函数',
        component: ComponentCreator('/docs/python/ryf/函数/定义函数', '0ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/函数/调用函数',
        component: ComponentCreator('/docs/python/ryf/函数/调用函数', 'e05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/函数/递归函数',
        component: ComponentCreator('/docs/python/ryf/函数/递归函数', '6f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/使用dict和set',
        component: ComponentCreator('/docs/python/ryf/基础/使用dict和set', 'b16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/使用list和tuple',
        component: ComponentCreator('/docs/python/ryf/基础/使用list和tuple', '057'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/基础',
        component: ComponentCreator('/docs/python/ryf/基础/基础', '9b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/字符串和编码',
        component: ComponentCreator('/docs/python/ryf/基础/字符串和编码', 'e25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/循环',
        component: ComponentCreator('/docs/python/ryf/基础/循环', 'bcb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/数据类型和变量',
        component: ComponentCreator('/docs/python/ryf/基础/数据类型和变量', '983'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/基础/条件判断',
        component: ComponentCreator('/docs/python/ryf/基础/条件判断', '956'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/安装/python解释器',
        component: ComponentCreator('/docs/python/ryf/安装/python解释器', '7c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/安装/安装',
        component: ComponentCreator('/docs/python/ryf/安装/安装', '018'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/第一个程序/第一个程序',
        component: ComponentCreator('/docs/python/ryf/第一个程序/第一个程序', '2b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/第一个程序/输入输出',
        component: ComponentCreator('/docs/python/ryf/第一个程序/输入输出', '322'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/简介/start',
        component: ComponentCreator('/docs/python/ryf/简介/start', 'c3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/简介/简介',
        component: ComponentCreator('/docs/python/ryf/简介/简介', '257'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/高级特性/切片',
        component: ComponentCreator('/docs/python/ryf/高级特性/切片', '4ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/高级特性/列表生成式',
        component: ComponentCreator('/docs/python/ryf/高级特性/列表生成式', 'ca3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/高级特性/生成器',
        component: ComponentCreator('/docs/python/ryf/高级特性/生成器', 'f2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/高级特性/迭代',
        component: ComponentCreator('/docs/python/ryf/高级特性/迭代', 'dcf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/python/ryf/高级特性/迭代器',
        component: ComponentCreator('/docs/python/ryf/高级特性/迭代器', '7c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/built-in_hooks/performance/memo',
        component: ComponentCreator('/docs/react/built-in_hooks/performance/memo', '937'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/built-in_hooks/performance/useCallback',
        component: ComponentCreator('/docs/react/built-in_hooks/performance/useCallback', 'a80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/built-in_hooks/useContext',
        component: ComponentCreator('/docs/react/built-in_hooks/useContext', '845'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/built-in_hooks/useState',
        component: ComponentCreator('/docs/react/built-in_hooks/useState', '0a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/adding_interactivity',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/adding_interactivity', '8ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/queueing_a_series_of_state_updates',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/queueing_a_series_of_state_updates', '1de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/render_and_commit',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/render_and_commit', 'f46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/responding_to_events',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/responding_to_events', 'ab2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/state_a_componts_memory',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/state_a_componts_memory', '3f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/state_as_a_snapshot',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/state_as_a_snapshot', 'e0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/updating_arrays_in_state',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/updating_arrays_in_state', 'eac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/adding_interactivity/updating_objects_in_state',
        component: ComponentCreator('/docs/react/docs/adding_interactivity/updating_objects_in_state', '673'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/conditional_rendering',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/conditional_rendering', '308'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/importing_and_exporting_components',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/importing_and_exporting_components', '4f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/jsx_curly_braces',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/jsx_curly_braces', 'a82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/keeping_components_pure',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/keeping_components_pure', 'ebf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/passing_props_to_components',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/passing_props_to_components', '7ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/quick_start',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/quick_start', '945'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/rendering_lists',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/rendering_lists', '997'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/thinging_in_react',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/thinging_in_react', 'df5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/tic-tac-toe',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/tic-tac-toe', '518'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/describing_the_ui/writing_markup_with_jsx',
        component: ComponentCreator('/docs/react/docs/describing_the_ui/writing_markup_with_jsx', 'b92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/escape_hatches',
        component: ComponentCreator('/docs/react/docs/escape_hatches/escape_hatches', 'e72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/lifecycle_reactive_effects',
        component: ComponentCreator('/docs/react/docs/escape_hatches/lifecycle_reactive_effects', 'cdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/manipulating_the_dom_with_refs',
        component: ComponentCreator('/docs/react/docs/escape_hatches/manipulating_the_dom_with_refs', '00f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/referencing_values_with_refs',
        component: ComponentCreator('/docs/react/docs/escape_hatches/referencing_values_with_refs', '7f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/separating_events_from_events',
        component: ComponentCreator('/docs/react/docs/escape_hatches/separating_events_from_events', '462'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/synchronizing_with_effects',
        component: ComponentCreator('/docs/react/docs/escape_hatches/synchronizing_with_effects', 'ad2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/escape_hatches/you_might_not_need_a_effect',
        component: ComponentCreator('/docs/react/docs/escape_hatches/you_might_not_need_a_effect', '520'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/choosing_the_state_structure',
        component: ComponentCreator('/docs/react/docs/managing_state/choosing_the_state_structure', '74f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/extracting_state_logic_into_a_reducer',
        component: ComponentCreator('/docs/react/docs/managing_state/extracting_state_logic_into_a_reducer', '7d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/managing_state',
        component: ComponentCreator('/docs/react/docs/managing_state/managing_state', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/passing_data_deeply_with_context',
        component: ComponentCreator('/docs/react/docs/managing_state/passing_data_deeply_with_context', '15e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/preserving_and_resetting_state',
        component: ComponentCreator('/docs/react/docs/managing_state/preserving_and_resetting_state', 'a83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/reacting_to_input_with_state',
        component: ComponentCreator('/docs/react/docs/managing_state/reacting_to_input_with_state', '249'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/scaling_up_with_reducer_and_context',
        component: ComponentCreator('/docs/react/docs/managing_state/scaling_up_with_reducer_and_context', 'aef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/managing_state/sharing_state_between_components',
        component: ComponentCreator('/docs/react/docs/managing_state/sharing_state_between_components', '4a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/docs/other/fixing_race_conditions_in_react_with_useEffect',
        component: ComponentCreator('/docs/react/docs/other/fixing_race_conditions_in_react_with_useEffect', '806'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/next/nest_next_nuxt',
        component: ComponentCreator('/docs/react/next/nest_next_nuxt', 'b78'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/react/next/use_client',
        component: ComponentCreator('/docs/react/next/use_client', '3f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/rust/base/start/links',
        component: ComponentCreator('/docs/rust/base/start/links', '84a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/rust/base/start/认识cargo',
        component: ComponentCreator('/docs/rust/base/start/认识cargo', '403'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/base/d.ts_Files',
        component: ComponentCreator('/docs/typescript/base/d.ts_Files', 'aef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/base/keyof_assertions',
        component: ComponentCreator('/docs/typescript/base/keyof_assertions', '251'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/base/non-null_assertion',
        component: ComponentCreator('/docs/typescript/base/non-null_assertion', 'a9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/base/typescript',
        component: ComponentCreator('/docs/typescript/base/typescript', 'f03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/tsc/cli',
        component: ComponentCreator('/docs/typescript/tsc/cli', 'be4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/tsc/tsconfig',
        component: ComponentCreator('/docs/typescript/tsc/tsconfig', '1bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/tsconfig/path',
        component: ComponentCreator('/docs/typescript/tsconfig/path', 'c8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/any',
        component: ComponentCreator('/docs/typescript/types/any', 'b5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/array',
        component: ComponentCreator('/docs/typescript/types/array', 'f52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/class',
        component: ComponentCreator('/docs/typescript/types/class', '82c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/enums',
        component: ComponentCreator('/docs/typescript/types/enums', '2d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/function',
        component: ComponentCreator('/docs/typescript/types/function', '0cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/generics',
        component: ComponentCreator('/docs/typescript/types/generics', '897'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/index_signatures',
        component: ComponentCreator('/docs/typescript/types/index_signatures', 'd24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/index_signatures_record_type',
        component: ComponentCreator('/docs/typescript/types/index_signatures_record_type', 'c57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/literal',
        component: ComponentCreator('/docs/typescript/types/literal', '32e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/never',
        component: ComponentCreator('/docs/typescript/types/never', 'b25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/object',
        component: ComponentCreator('/docs/typescript/types/object', '95f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/reg_exp',
        component: ComponentCreator('/docs/typescript/types/reg_exp', 'c90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/tuple',
        component: ComponentCreator('/docs/typescript/types/tuple', '381'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/type_assertions',
        component: ComponentCreator('/docs/typescript/types/type_assertions', '5e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/type_interface',
        component: ComponentCreator('/docs/typescript/types/type_interface', 'a96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/union_type',
        component: ComponentCreator('/docs/typescript/types/union_type', '03e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/unknown',
        component: ComponentCreator('/docs/typescript/types/unknown', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/typescript/types/utility_types',
        component: ComponentCreator('/docs/typescript/types/utility_types', '4e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vim/base/vim',
        component: ComponentCreator('/docs/vim/base/vim', '8ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vim/base/vim_commands',
        component: ComponentCreator('/docs/vim/base/vim_commands', 'a63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vim/hhkb',
        component: ComponentCreator('/docs/vim/hhkb', 'b1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/vim/vimium/keyboard_bindings',
        component: ComponentCreator('/docs/vim/vimium/keyboard_bindings', 'd0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f21'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
