/* global chrome */

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.executeScript(
      tabId,
      {
        code: `
          document.addEventListener('mouseup', () => {
            const selection = window.getSelection().toString().trim();
            if (selection) {
              chrome.runtime.sendMessage({ text: selection });
  }
});
        `
      },
      () => {
        console.log('Content script executed successfully.');
      }
    );
}
});
