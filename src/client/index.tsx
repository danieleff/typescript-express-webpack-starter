console.log("Loaded");

const root = document.getElementById("root")!;
root.innerHTML = "Loaded";

fetch("/api/test").then(res => res.text()).then(text => root.innerHTML = text);
