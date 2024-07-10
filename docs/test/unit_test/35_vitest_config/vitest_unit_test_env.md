# 基于 Vitest 的单元测试环境构建

##

```ts
// vitest.config.mts
import { defineConfig } from "vitest/config";
import path from "path";

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
    include: ["**/*.spec.{js,ts}"],
    exclude: excludedFiles,
    coverage: {
      provider: "v8",
      enabled: true,
      reportOnFailure: true,
      reporter: ["text", "json", "html"],
      include: ["**/*.{ts,js}"],
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

```json
// package.json
{
  "scripts": {
    "test-ut": "vitest"
  }
}
```

## 为什么使用 `.mts` 文件后缀
