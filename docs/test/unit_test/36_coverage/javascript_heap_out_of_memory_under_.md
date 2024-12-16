# 解决 Vitest Coverage 下报 JavaScript heap out of memory 错误

## 报错详情

运行 `Vitest run --coverage` 后，测试被运行结束后，在生成 coverage 的地方会停顿很久，之后出现 JavaScript heap out of memory 错误信息。

## 报错分析与解决

直接运行测试，而不生成测试覆盖率报告的话，就没有问题，由此可以排除是单测代码上的问题。

又是在生成 coverage 的地方停住，由此可以将问题定位到 `vitest.config.mts` 里的 coverage 配置。

根据报错信息来看，可能是大量数据的循环导致的，

而之前的 coverage 的 `include` 和全局的 `include` 配置项又分别是 `["**/*.{ts,js}"]` 和 `[**/*.spec.{ts,js}]`。

所以首先尝试修改 coverage 的 `include` 范围来解决，将其改为 `["shared/**/*.{ts,js}"]`，发现就可以正常生成覆盖率报告了。

之后将 coverage 的 `include` 和全局的 `include` 配置项都进行了明确地限定，解决了该问题。

下面是修改之后的 `vitest.config.mts` 代码：

```ts title="vitest.config.mts"
import { defineConfig } from "vitest/config";
import path from "path";

// 这里 include 和 coverageInclude 只有文件后缀不一样，可以封装一下
const include = [
  "shared/**/*.spec.{ts,js}",
  "auth/**/*.spec.{ts,js}",
  "public/**/*.spec.{ts,js}",
  "components/**/*.spec.{ts,js}",
  "features/**/*.spec.{ts,js}",
];
const coverageInclude = [
  "shared/**/*.{ts,js}",
  "auth/**/*.{ts,js}",
  "public/**/*.{ts,js}",
  "components/**/*.{ts,js}",
  "features/**/*.{ts,js}",
];
const defaultExclude: string[] = [
  "node_modules/**/*.{ts,js}",
  "out/**/*.{ts,js}",
  "tests/**/*.{ts,js}",
  "**/*.d.ts",
  "**/*.config.{ts,js}",
  "**/*.stories.{ts,js}",
  ".next/**/*.{ts,js}",
  ".storybook/*.{ts,js}",
  "**/types/*.{ts,js}",
  "**/type/*.{ts,js}",
  "**/*dummy*.{ts,js}",
  "**/*sample*.{ts,js}",
  "**/*Style*.{ts,js}",
  "playwright-report/**/*.{ts,js}",
  "shared/unit-test-utils/*.{ts,js}",
  "playwright/**/*.{ts,js}",
  "shared/e2e-test-utils/**/*.{ts,js}",
  "shared/unit-test-utils/**/*.{ts,js}",
];
const specificFilesExclude: string[] = [
  "auth/aw-exports.ts",
  "components/input/IconInputValidation.ts",
  "features/admin/lib/tableHeader.ts",
  "features/map-details/csv-download/lib/tableHeader.ts",
  "features/ipad_status/lib/ipadStatusDetailLabels.ts",
  "features/map-details/index/stores/alertStore.ts",
  "features/map-details/index/stores/analyzeRouteStore.ts",
  "features/map-details/index/stores/cameraStore.ts",
  "features/map-details/index/stores/currentLegendStore.ts",
  "features/map-details/index/stores/heatMapStore.ts",
  "features/map-details/index/stores/locationNameStore.ts",
  "features/map-details/index/stores/pointsStore.ts",
  "features/map-details/map/hooks/useGetAlerts.ts",
  "features/map-details/map/hooks/useGetDevicePosition.ts",
  "features/map-details/map/hooks/useGetPoints.ts",
  "features/map-details/map/store/danger-state.ts",
  "features/user/stores/userDataStore.ts",
  "features/map-details/index/stores/wireOnStore.ts",
  "features/ipad_status/lib/ChartCardLabels.ts",
  "features/map-details/danger/lib/colorMap.ts",
  "features/ipad_status/components/csv-download/lib/tableHeader.ts",
];
const excludedFiles = [...defaultExclude, ...specificFilesExclude];

export default defineConfig({
  test: {
    environment: "happy-dom",
    include,
    exclude: excludedFiles,
    coverage: {
      enabled: true,
      reportOnFailure: true,
      reporter: ["text", "json", "html"],
      include: coverageInclude,
      exclude: excludedFiles,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
```
