import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const site = lume({
  src: "src",
  location: new URL("https://lumocs.56k.guru"),
});

site.use(lumocs());

export default site;
