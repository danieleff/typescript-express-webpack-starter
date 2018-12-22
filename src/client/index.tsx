console.log("Loaded");

const root = document.getElementById("root")!;
root.innerHTML = "Loaded";

declare var WEBPACK_DEFINE_SERVER_URL: string;

fetch(WEBPACK_DEFINE_SERVER_URL).then(res => res.text()).then(text => root.innerHTML = text);
