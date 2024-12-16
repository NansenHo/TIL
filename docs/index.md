# TIL

> Today I Learn

## Blogs

- [フロントエンド単体テスト勉強会 - 第一回](/blog/frontend_unit_testing_1)
- [フロントエンド単体テスト勉強会 - 第二回](/blog/frontend_unit_testing_2)
- [単体テストマニュアル 1 - プロジェクトにテスト環境を構築する](/blog/1_unit_test_env)
- [単体テストマニュアル 2 - 最初の単体テストを作成する](/blog/2_first_unit_test)
- [単体テストマニュアル 3 - Vitest 紹介](/blog/3_vitest)
- [単体テストマニュアル 4 - テストダブル](/blog/4_test_double)
- [単体テストマニュアル 5 - 検証](/blog/5_assertion)
- [git rebase と git merge の使い方と使用シーンを紹介します！](/blog/git_rebase_git_merge)
- [基本的な GitLab CI/CD 設定を紹介します！](/blog/gitlab_ci_cd)

## Notes

### Test

- Unit Test
  - [测试文件命名](test/unit_test/0_测试文件命名.md)
  - [为什么要写测试](test/unit_test/1_为什么要写测试.md)
  - [写单元测试的好处](test/unit_test/2_写单元测试的好处.md)
  - [单元级别的功能测试](test/unit_test/3_单元级别的功能测试.md)
  - [写单元测试的顺序](test/unit_test/4_写单元测试的顺序.md)
  - [不写测试的原因](test/unit_test/5_不写测试的原因.md)
  - [编写第一个单元测试](test/unit_test/6_编写第一个单元测试.md)
  - [The Core APIs of Vitest](test/unit_test/7_the_core_apis_of_vitest.md)
  - [Debug of Vitest](test/unit_test/8_debug_vitest.md)
  - [实现 Mini Test Runner](test/unit_test/9_实现mini_test_runner.md)
  - [Vitest 和 Jest 的差异](test/unit_test/10_vitest_jest.md)
  - [创建测试数据的三种方式](test/unit_test/11_创建测试数据的三种方式.md)
  - [后门操作准备数据](test/unit_test/12_后门操作准备数据.md)
  - [最小准备数据原则](test/unit_test/13_最小准备数据原则.md)
  - [程序的间接输入](test/unit_test/14_程序的间接输入/index.md)
    - [其他模块的函数](test/unit_test/14_程序的间接输入/1_其他模块的函数.md)
    - [第三方库提供的函数](test/unit_test/14_程序的间接输入/2_第三方库提供的函数.md)
    - [对象](test/unit_test/14_程序的间接输入/3_对象.md)
    - [Class](test/unit_test/14_程序的间接输入/4_class.md)
    - [常量](test/unit_test/14_程序的间接输入/5_常量.md)
    - [环境变量](test/unit_test/14_程序的间接输入/6_环境变量.md)
    - [全局变量](test/unit_test/14_程序的间接输入/7_全局变量.md)
    - [全局变量 Mock Image](test/unit_test/14_程序的间接输入/8_全局变量_mock_Image.md)
    - [通过依赖注入解决间接输入](test/unit_test/14_程序的间接输入/9_通过依赖注入解决间接输入.md)
    - [间接层处理技巧](test/unit_test/14_程序的间接输入/10_间接层处理技巧.md)
  - [验证](test/unit_test/15_验证/index.md)
    - [状态验证](test/unit_test/15_验证/1_状态验证.md)
    - [行为验证](test/unit_test/15_验证/2_行为验证.md)
    - [Mock 和 Stub 的区别](test/unit_test/15_验证/3_mock和stub的区别.md)
  - [测试知识地图](test/unit_test/16_测试知识地图.md)
  - [确保 SUT 是可预测的](test/unit_test/17_确保sut是可预测的.md)
  - [处理随机数](test/unit_test/18_处理随机数.md)
  - [处理日期](test/unit_test/19_处理日期.md)
  - [处理 setTimeout](test/unit_test/20_处理setTimeout.md)
  - [处理 setInterval](test/unit_test/21_处理setInterval.md)
  - [处理 Promise](test/unit_test/22_处理promise.md)
  - [API 的多种测试方案](test/unit_test/23_api的多种测试方案.md)
  - [参数化验证](test/unit_test/24_参数化验证.md)
  - [测试的基本策略](test/unit_test/25_测试的基本策略.md)
  - [不值得写测试的代码](test/unit_test/26_不值得写测试的代码.md)
  - [测试替身思想](test/unit_test/27_测试替身思想.md)
  - [测试替身类型](test/unit_test/28_测试替身类型.md)
  - [独居测试和群居测试](test/unit_test/29_独居测试和群居测试.md)
  - [测试的拆卸](test/unit_test/30_测试的拆卸.md)
  - [Vitest 模拟浏览器环境和自定义环境](test/unit_test/31_vitest模拟浏览器环境和自定义环境.md)
  - [测试命名的艺术](test/unit_test/32_测试命名的艺术.md)
  - [快照测试](test/unit_test/33_快照测试.md)
  - React
    - [测试 Custom Hooks](test/unit_test/34_react/1_测试_custom_hooks.md)
  - Vitest 环境配置
    - [基于 Vitest 的单元测试环境构建](test/unit_test/35_vitest_config/vitest_unit_test_env.md)
  - Coverage
    - [解决 Vitest Coverage 下报 JavaScript heap out of memory 错误](test/unit_test/36_coverage/javascript_heap_out_of_memory_under_.md)
  - [The Differences between `jsdom` and `happy-dom`](test/unit_test/37_jsdom_happy-dom_differences.md)
- E2E Test
  - Playwright
    - [不要并行地执行 Playwright E2E 测试](test/e2e_test/playwright/no_parallel.md)

### JavaScript

- Advanced JavaScript
  - [ignition](javascript/advanced_javascript/ignition.md)
  - [JavaScript 代码在浏览器里是如何被执行的](javascript/advanced_javascript/javaScript代码在浏览器里是如何被执行的.md)
  - [JavaScript 引擎](javascript/advanced_javascript/js引擎.md)
  - [Parse](javascript/advanced_javascript/parse.md)
  - [script 标签的 async 和 defer 属性](javascript/advanced_javascript/script标签的async和defer属性.md)
  - [v8 引擎运行原理](javascript/advanced_javascript/v8引擎运行原理.md)
  - [抽象语法树](javascript/advanced_javascript/抽象语法树.md)
  - [浏览器内核和 JavaScript 引擎的关系](javascript/advanced_javascript/浏览器内核和js引擎的关系.md)
  - [浏览器渲染过程](javascript/advanced_javascript/浏览器渲染过程.md)
  - [编程语言的三个阶段](javascript/advanced_javascript/编程语言的三个阶段.md)
- Function
  - [Function Arguments](javascript/function/arguments.md)
  - [The differences between `bind` and `apply` and `call`](javascript/function/bind_apply_call.md)
- Promise
  - [Async / Await](javascript/promise/async_await.md)
- Map
  - [1. whats map](javascript/map/1_whats_map.md)
  - [2. usage of map](javascript/map/2_usage_of_map.md)
  - [3. map 和 object 的区别](javascript/map/3_map和object的区别.md)
  - [4. Iterator](javascript/map/4_Iterator.md)
  - [5. map 和 array 互相转换](javascript/map/5_map和array互相转换.md)
- Object
  - [`Object.entries(obj)` 和 `Object.fromEntries(iterable)`](javascript/object/entries_fromEntries.md)
- Array
  - [loop array](javascript/array/loop_array.md)
  - [the nature of array](javascript/array/the_nature_of_array.md)
  - Currying
    - [Currying - Arrow Function](javascript/array/currying/arrow_function.md)
    - [Currying - Achieve functionality across different compatibilities](javascript/array/currying/browser_monitoring.md)
    - [Curring - Defered Execution](javascript/array/currying/defered_execute.md)
    - [Currying - Reuse Parameter](javascript/array/currying/repeated_parameter.md)
- Number
  - [Convert Number to Currency](javascript/number/number_convert_to_currency.md)
  - [Convert Number to Percentage](javascript/number/number_convert_to_percentage.md)
- String
  - [URL Parameters to Object](javascript/string/url_parameters_to_object.md)
- Operator
  - [difference](javascript/operator/difference.md)
  - [question dot ](javascript/operator/question_dot_.md)
- Books
  - JavaScript 设计模式与开发实践
    - [前言](javascript/books/javascript设计模式与开发实践/index.md)
    - [第一部分 基础知识](javascript/books/javascript设计模式与开发实践/第一部分/index.md)
    - [1.1. 面向对象的 javascript](javascript/books/javascript设计模式与开发实践/第一部分/1_1_面向对象的javascript.md)
    - [1.2. this call apply](javascript/books/javascript设计模式与开发实践/第一部分/1_2_this_call_apply.md)
    - [1.3. 闭包和高阶函数](javascript/books/javascript设计模式与开发实践/第一部分/1_3_闭包和高阶函数.md)
    - [第二部分 设计模式](javascript/books/javascript设计模式与开发实践/第二部分/index.md)
    - [2.4. 单例模式](javascript/books/javascript设计模式与开发实践/第二部分/2_4_单例模式.md)
    - [2.5. 策略模式](javascript/books/javascript设计模式与开发实践/第二部分/2_5_策略模式.md)
    - [2.6. 代理模式](javascript/books/javascript设计模式与开发实践/第二部分/2_6_代理模式.md)
    - [2.7. 迭代器模式](javascript/books/javascript设计模式与开发实践/第二部分/2_7_迭代器模式.md)
    - [2.8. 发布-订阅模式](javascript/books/javascript设计模式与开发实践/第二部分/2_8_发布-订阅模式.md)
    - [2.9. 命令模式](javascript/books/javascript设计模式与开发实践/第二部分/2_9_命令模式.md)
    - [2.10. 组合模式](javascript/books/javascript设计模式与开发实践/第二部分/2_10_组合模式.md)

### TypeScript

- 基础知识
  - [any](typescript/base/any.md)
  - [array](typescript/base/array.md)
  - [class](typescript/base/class.md)
  - [enums](typescript/base/enums.md)
  - [function](typescript/base/function.md)
  - [generics](typescript/base/generics.md)
  - [index signatures & record type](typescript/base/index_signatures_record_type.md)
  - [index signatures](typescript/base/index_signatures.md)
  - [keyof assertions](typescript/base/keyof_assertions.md)
  - [literal](typescript/base/literal.md)
  - [never](typescript/base/never.md)
  - [non-null assertion](typescript/base/non-null_assertion.md)
  - [object](typescript/base/object.md)
  - [reg exp](typescript/base/reg_exp.md)
  - [tuple](typescript/base/tuple.md)
  - [type assertions](typescript/base/type_assertions.md)
  - [type interface](typescript/base/type_interface.md)
  - [typescript](typescript/base/typescript.md)
  - [union type](typescript/base/union_type.md)
  - [unknown](typescript/base/unknown.md)
  - [utility types](typescript/base/utility_types.md)
- tsconfig
  - [path](typescript/tsconfig/path.md)
- tsc
  - [tsconfig](typescript/tsc/tsconfig.md)
  - [cli](typescript/tsc/cli.md)

### React

- [useState](react/1_useState.md)
- [useRef](react/2_useRef.md)
- [useEffect](react/3_useEffect.md)
- Mini React
  - [实现最简 Mini React](react/mini-react/1_实现最简mini_react.md)
  - [JavaScript Pragma](react/mini-react/2_js_pragma.md)
  - [利用浏览器的空闲时间](react/mini-react/3_利用浏览器的空闲时间.md)
  - [fiber](react/mini-react/4_fiber.md)
  - [统一提交](react/mini-react/5_统一提交.md)
  - [实现函数组件](react/mini-react/6_实现函数组件.md)
  - [更新 VDom](react/mini-react/7_更新_vdom.md)
  - [更新 children](react/mini-react/8_更新_children.md)
- Bad Codes
  - [滥用 useLayoutEffect 和 useState](react/bad_codes/overusing_useLayoutEffect_useState.md)

### Vue

- Mini Vue
  - [Vue3 源码介绍](vue/mini-vue/0_vue3_source_code.md)
  - [1. Happy path of reactivity](vue/mini-vue/1_dependenciesCollection_dependenciesTriggering.md)
  - [2. `track()` process](vue/mini-vue/2_track.md)
  - [3. `runner` function](vue/mini-vue/3_effect_return_runner_function.md)
  - [4. The second parameter `scheduler` of `effect`](vue/mini-vue/4_scheduler.md)
  - [5. `stop()` and `onStop()`](vue/mini-vue/5_stop_onStop.md)
  - [6. readonly](vue/mini-vue/6_readonly.md)
  - [7. Implementation of `isReactive()`](vue/mini-vue/7_isReactive_isReadonly.md)
  - [8. ref](vue/mini-vue/8_ref.md)
  - [9. implementing component proxy object](vue/mini-vue/9_implementing_component_proxy_object.md)
  - [23. 实现代理对象](vue/mini-vue/23_代理对象.md)
  - [26. 实现组件 `props` 功能](vue/mini-vue/26_实现组件props功能.md)
  - [27. `emit` 功能](vue/mini-vue/27_emit.md)
  - [30. 实现 `getCurrentInstance`](vue/mini-vue/30_getCurrentInstance.md)
  - [31. 实现 `provide` 和 `inject` 功能](vue/mini-vue/31_provide_inject.md)
  - [47. parse 的实现原理](vue/mini-vue/47_parse的实现原理.md)

### Git

- [Git Flow](git/git_flow.md)
- [`git rebase` 和 `git merge` 的使用方法和使用场景](git/git_rebase_git_merge.md)
- [Git Commit Date](git/git_commit_date.md)
- [Rewrite Commit Message](git/rewrite_commit_msg.md)
