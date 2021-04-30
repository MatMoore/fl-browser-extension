// Return the corresponding URL
// TODO: preserve the current path if on a FutureLearn page
const urlFor = (environment) => {
  switch (environment) {
    case "Production":
      return "https://www.futurelearn.com";
    case "Staging":
      return "https://www.staging.futurelearn.com";
    case "Development":
      return "http://localhost:3000";
  }
};

const changeEnvironment = (e) => {
  let desiredEnvironment = e.target.textContent;

  chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    for (let tab of tabs) {
      const url = urlFor(desiredEnvironment);
      chrome.tabs.update(tab.id, { url: url });
    }
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("environment")) {
    changeEnvironment(e);
  }
});
