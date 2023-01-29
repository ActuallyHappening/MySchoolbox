console.log("Static content script injected");

// Inject firebase CDN script into head
const dynamicScript = document.createElement('script');
dynamicScript.type = "text/javascript";
const link = "https://raw.githubusercontent.com/ActuallyHappening/MySchoolbox/master/extension_scripts/High%20Level/bundle.js";
const content = fetch(link).then((response) => {
	return response.text();
}).then((text) => {
	console.log("Dynamic script found:", text);
	dynamicScript.innerHTML = text;
	document.head.appendChild(dynamicScript);
	return text;
}).catch((error) => {
	console.error("Dynamic script not found:", error);
});