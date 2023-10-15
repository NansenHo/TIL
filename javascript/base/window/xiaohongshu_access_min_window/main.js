let minWindow = null;
const windowFeatures = {
  left: 100,
  top: 100,
  width: 430,
  height: 1200,
};

function accessMinWindow(event) {
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
  .getElementById("access-min-window")
  .addEventListener("click", accessMinWindow, false);
