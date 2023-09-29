import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const site = lume({
  src: "src",
  // Update locatiom to the url of your site
  // - can be omitted it you host the site at the root of a domain
  location: new URL("https://url.of.site"),
});

site.use(lumocs());

export default site;
