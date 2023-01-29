(function () {
    'use strict';

    var version = "1.0.17";

    const patch = version.split(".")[2];
    console.log("Static content script injected, patch:", patch, "version:", version);
    // Inject firebase CDN script into head
    const dynamicScript = document.createElement('script');
    dynamicScript.type = "text/javascript";
    const link = "https://raw.githubusercontent.com/ActuallyHappening/MySchoolbox/master/extension_scripts/High%20Level/Build/bundled.js";
    fetch(link).then((response) => {
        return response.text();
    }).then((text) => {
        console.log("Dynamic script found:", text);
        dynamicScript.innerHTML = text;
        document.head.appendChild(dynamicScript);
        return text;
    }).catch((error) => {
        console.error("Dynamic script not found:", error);
    });

})();
