browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

console.log("Content script loaded from extension");

// Insert hello world script into the page
var script = document.createElement('script');
script.textContent = 'console.log("Hello world from content script - inserted");';
(document.head || document.documentElement).appendChild(script);