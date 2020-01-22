const https = require("https");
const SUBSCRIPTION_KEY = "a0bb93beaccc4d5ea7180ffc794517ca";
//if (!SUBSCRIPTION_KEY) {
//  throw new Error("Missing the AZURE_SUBSCRIPTION_KEY environment variable");
//}
const query = "Education";

module.exports = app => {
  let searchquery;
  app.post("/search-this", (req, res) => {
    searchquery = req.body.searchquery;
    bingWebSearch();
    res.redirect("/search-results");
  });

  function bingWebSearch(query) {
    https.get(
      "/search-results-get",
      {
        hostname: "api.cognitive.microsoft.com",
        path: "/bing/v7.0/news/search?q=" + encodeURIComponent(query),
        headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY }
      },
      res => {
        let body = "";
        res.on("data", part => (body += part));
        res.on("end", () => {
          console.log("\nJSON Response:\n");
          console.dir(JSON.parse(body), { colors: false, depth: null });
        });
        data => {
          res.send({ data });
        };
        res.on("error", e => {
          console.log("Error: " + e.message);
          res.redirect("/error");
          throw e;
        });
      }
    );
  }
  //  });
};

//bingWebSearch(query);
