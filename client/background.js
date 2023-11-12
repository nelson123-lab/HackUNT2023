// background.js
let currentUrl = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.url) {
    currentUrl = message.url;
    chrome.runtime.sendMessage({ currentUrl });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    currentUrl = changeInfo.url;
    chrome.runtime.sendMessage({ currentUrl });
  }
});