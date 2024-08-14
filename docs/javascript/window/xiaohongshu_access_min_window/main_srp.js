let popupWindow = null;

const popupWindowFeatures = {
  left: 100,
  top: 100,
  width: 430,
  height: 1200,
};

function handlePopupWindowClick(event) {
  if (isWindowClosedOrNotInitialized(popupWindow)) {
    popupWindow = openNewPopupWindow();
  } else {
    focusOnPopupWindow(popupWindow);
  }
}

function isWindowClosedOrNotInitialized(window) {
  return window === null || window.closed;
}

function openNewPopupWindow() {
  const url = "https://www.xiaohongshu.com/explore";
  const name = "xiaohongshu";
  const featuresString = formatFeaturesToString(popupWindowFeatures);
  return window.open(url, name, featuresString);
}

function focusOnPopupWindow(window) {
  window.focus();
}

function formatFeaturesToString(features) {
  return Object.entries(features)
    .map(([key, value]) => `${key}=${value}`)
    .join(",");
}

document
  .querySelector("#access-min-window")
  .addEventListener("click", handlePopupWindowClick, false);
