chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null, { file: "content.js" });
}, { url: [{ hostSuffix: 'youtube.com' }] });
