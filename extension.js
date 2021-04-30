(() => {
  let environment = "unknown";

  const url = new URL(document.URL);
  if (
    url.hostname === "futurelearn.com" ||
    url.hostname === "www.futurelearn.com"
  ) {
    environment = "production";
  } else if (url.host === "localhost:3000") {
    environment = "development";
  } else if (
    url.hostname === "staging.futurelearn.com" ||
    url.hostname === "www.staging.futurelearn.com"
  ) {
    environment = "staging";
  }

  console.log(`detected environment: ${environment}`);

  if (environment === "production") {
    document.body.style.border = "5px solid red";
  } else if (environment === "staging") {
    document.body.style.border = "5px dashed green";
  } else if (environment !== "development") {
    document.body.style.border = "5px dashed blue";
  }
})();
