# 面试题

1. 哪些操作会触发重新渲染？

2. 有哪些操作可以避免无谓的重新渲染？

   1. `React.memo`
   2. `useMemo()` 缓存计算结果
   3. `useCallback()` 用来创建函数的，但只有依赖项变化的时候才去创建一个函数。
   4. `shouldComponentUpdate`
   5. `React.PureComponent`

3. 受控组件和非受控组件？

   重点：二者区别和使用场景

4. 高阶组件和普通组件的区别，及其使用场景？

   高阶组件是一个函数，只能传入一个组件，且返回一个组件。

   是一种 React 的设计模式。

   类似题：React 中，组件/代码复用都有哪些方案？

5. 如何理解 React 中的虚拟 DOM？

6. 为什么要用虚拟 DOM？

   - 保证性能下限
   - 因为虚拟 DOM 是 JS 对象，所以可以跨平台
   - 虚拟 DOM 并不比原生快

7. Redux 的工作原理和流程

8. Redux 中间件的机制是什么？

   在 action 和 reduce 中间隔了一层，可以在这里进行数据监控等操作。

9. Redux 中间件一般写在哪里？

10. Redux 中，异步请求有哪些方案？

    回答出各个方案，和其优缺点。

11. Redux 和 VueX/Pinia 有什么区别和共通的设计？

12. 介绍 React 和 Vue 的 diff 算法流程，有什么区别？

13. diff 算法的原则是什么？

    - 只进行同一层级的比较
    - type 不同会被认为是不同的元素
    - 通过 key 来判断是否直接删除或添加元素

14. diff 算法的策略有哪些？

    - 单节点 diff
    - 多节点 diff
    - Component diff
    - ...

15. JSX 的本质是什么？

16. React 如何将 JSX 代码转换成真实的 DOM？

17. React Hooks 到底解决了哪些问题？

    1. 组件间状态和逻辑复用

18. `useMemo` 和 `useCallback` 的区别？

19. 为什么要用 `useCallback`？

20. 为什么要用 `useLayoutEffect`？

21. `useEffect` 的依赖项是空数组，会如何被执行？

22. `useEffect` 没写依赖项的话，会如何被执行？

23. `useEffect` 返回一个函数有什么用？

24. `useState` 为什么返回一个数组而不是对象？

    1. 可以用自己的想法来命名。但对象就只能用其内部的命名。

25. `useEffect` 是如何去判断依赖项变化的？

26. 说一下 `useRef` 的理解？

27. 说一下 `useContext` 的理解？

    优点：传值

    缺点：调试变得困难，组件更难复用

28. React Hook 有什么限制，为什么要限制？

29. 说一下 React 事件系统的理解？

30. 说一下 React 事件合成的理解？

31. 在 fiber 中是如何优化性能的？

32. fiber 和虚拟 DOM 的区别？

33. 说一下对 fiber 中的调度器的理解？

34. 说一下对 React 中的 fiber 优先级的理解？

35. React fiber 是如何实现时间切片的？

36. React fiber 时间切片的本质？

37. React fiber 时间切片的流程？

    > React 18 的新特性是高频考点。

38. `link` 标签和 `a` 标签有什么区别？

39. React 中是怎么处理异常的？
