let minWindow = null;
const windowFeatures = {
  left: 100,
  top: 100,
  width: 430,
  height: 1200,
};

// 单一职责原则 (Single Responsibility Principle, SRP) 是面向对象编程中的一个原则，它提倡一个类（或函数、模块等）应该应该只有一个任务或职责。

// 从 accessMinWindow 函数只处理与 minWindow 相关的逻辑，也可以说它遵循了单一职责原则。
// 但如果从更宏观的角度来看，accessMinWindow 函数似乎正在处理几个不同的职责：
// 1. 检查窗口是否存在，
// 2. 打开新窗口，以及
// 3. 聚焦已存在的窗口。

// 如果你想让代码更严格地遵循单一职责原则，你可能会将这些职责分离到不同的函数中，例如，
// 1. 一个函数用于检查窗口状态，
// 2. 一个函数用于打开新窗口，
// 3. 另一个用于聚焦窗口等。

// 但是，在实际的应用程序中，过度分解函数可能会导致不必要的复杂性。
// 因此，是否遵循单一职责原则要根据实际情况和代码的可维护性、可读性进行权衡。
// 在当前的情况下，这段代码的结构是合理的，因为它保持简单，而且职责划分清晰。

// 但我还是觉得要分解函数的代码风格更好，代码的可复用性更高，可维护性更好。

// 分解函数时，有一个注意点：
// 函数职责范围一旦变化，函数名很可能也要做相应的调整。
function openOrFocusWindow(event) {
  if (minWindow === null || minWindow.closed) {
    minWindow = window.open(
      "https://www.xiaohongshu.com/explore",
      "xiaohongshu",
      objectToFeatureString(windowFeatures)
    );
  } else {
    minWindow.focus();
  }
}

function objectToFeatureString(features) {
  return Object.entries(features)
    .map(([key, value]) => `${key}=${value}`)
    .join(",");
}

document
  .querySelector("#access-min-window")
  .addEventListener("click", openOrFocusWindow, false);
