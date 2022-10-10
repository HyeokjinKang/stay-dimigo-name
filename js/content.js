const url = window.location.href;

const injectJs = (path) => {
  let script = document.createElement("script");
  script.setAttribute("src", chrome.runtime.getURL(path));
  document.getElementsByTagName("body")[0].appendChild(script);
};

if (url.includes("stay.dimigo.me")) {
  injectJs("js/students.js");
  setTimeout(() => {
    injectJs("js/global.js");
  }, 1000);
}
