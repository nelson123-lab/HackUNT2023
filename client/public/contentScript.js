// contentScript.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Received message in content script:', request);
  if (request.action === 'getSelectedText') {
    const selectedText = window.getSelection().toString().trim();
    console.log('Selected text:', selectedText);
    sendResponse({ selectedText });
  }
});

  