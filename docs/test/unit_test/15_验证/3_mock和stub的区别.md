# mock 和 stub 的区别

单元测试中

1. stub 是一种控制间接输入的方式，替换掉了间接输入的真实实现。

   stub 只用返回一个值即可。

   ```js
   // stub
   vi.mock("packageName", () => {
     return {
       functionName: () => 2,
     };
   });
   ```

2. mock 是指一种**测试替身**。

   mock 作为测试替身，不仅可以记录行为验证所需的交互信息，还可以提供验证。

   mock 比 stub 多了**记录交互的信息**和进行**验证**的功能。

   mock 在 stub 的基础上，还要记录交互信息。

   ```js
   // mock
   vi.mock("packageName", () => {
     return {
       functionName: vi.fn(() => 2),
     };
   });
   ```
