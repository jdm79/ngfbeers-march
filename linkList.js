const links = [
  {
    id: "l1",
    link_url: "https://www.nhs.uk/conditions/coeliac-disease/complications/",
    title: "Coeliac disease potential complications",
    blurb: `If you have coeliac disease, 
              it's crucial you do not eat any gluten. 
              If you have untreated or undiagnosed coeliac disease and you're still eating gluten, 
              several complications can occur.

              It's a common misconception that eating a little gluten will not harm you. 
              Eating even tiny amounts can trigger symptoms of coeliac disease
               and increase your risk of developing the complications outlined below.`,
    source: "National Health Service UK",
    type: "website",
    body: "body",
  },
  {
    id: "l2",
    link_url: "https://www.facebook.com/groups/179311875956380/",
    title: "Zero Tolerance Gluten Free Homebrew Club",
    blurb: `Zero Tolerance is a group for people who want to brew beer without gluten. 
              Many individuals in the group have received a Celiac Disease diagnosis
              or have another medical reason to avoid gluten. 
              Others are interested in learning how to brew beer for friends
              and family who fall into that category,
              or simply have an interest in using alternative grains to brew delicious beer.`,
    source: "Zero Tolerance Gluten Free Homebrew Club Facebook Group",
    type: "facebook",
    body: "body",
  },
  {
    id: "l3",
    link_url: "https://zerotolerance.mywikis.wiki/wiki/Main_Page",
    title: "Zero Tolerance Gluten Free Homebrew Wiki",
    blurb: `The Zero Tolerance Gluten Free Homebrew Club wiki (aka Zero Tolerance Wiki) 
            is a public resource primarily meant to support amateur brewers and members of the club. 
            The wiki is maintained by volunteer club members.`,
    source: "Zero Tolerance Gluten Free Homebrew Club wiki",
    type: "website",
    body: "body",
  },
  {
    id: "l4",
    link_url:
      "https://missmuru.wordpress.com/2019/04/11/safety-of-gluten-free-beer-aoecs-response-to-my-open-letter/",
    title: `Miss Muru's Open Letter to the Association of European Coeliac Societies (AOECS)`,
    blurb: `Please read here prof. Christian Scerri’s response on behalf of 
              AOECS, Association of European Coeliac Societies, 
              to my open letter about safety of gluten free beer in Europe. 
              I have Scerri’s approval for publishing his full response.`,
    source: "https://missmuru.wordpress.com/",
    type: "website",
    body: "",
  },
  {
    id: "l5",
    link_url: "https://zerotolerancegf.podbean.com/",
    title: "Zero Tolerance Podcast",
    blurb: `Co-hosted by Cale Baldwin and Stuart Cole. 
              The one and only dedicated gluten free brewing podcast. 
              Sponsored by Zero Tolerance Gluten Free Homebrewing.`,
    source: `https://zerotolerancegf.podbean.com/`,
    type: "podcast",
    body: "",
  },
  {
    id: "l8",
    link_url: "https://www.coeliac.org.uk/frequently-asked-questions/gfbeer/",
    title:
      "Coeliac UK's most recent explanation on testing gluten levels in beer",
    blurb: `By law, manufacturers can only label their beer gluten free if it contains 20 ppm or less
              of gluten. Laboratory testing is the best way to assess the amount of gluten in a product,
              but there can be difficulties when testing beer using the usual R5 ELISA Sandwich method
              (commonly used for foods), due to the gluten being broken down. 
              An alternative method is available (R5 ELISA Competitive)
              which is a more effective way to measure the gluten in beer and other hydrolysed
              or fermented products.`,
    source: `'How is gluten free beer made?' Coeliac UK website`,
    type: "website",
    body: "",
  },
  {
    id: "l9",
    link_url: "https://naturligtglutenfri.se/",
    title: "Homebrewery blog about naturally gluten-free beer",
    blurb: `Naturally gluten-free beer is not available for purchase in Sweden. I hope to change that! It is made from products that do not contain gluten, in a gluten-free environment.`,
    source: `https://naturligtglutenfri.se/ (This website is in Swedish but you can add a translate extension to your browser to read it)`,
    type: "website",
    body: "",
  },
  {
    id: "l10",
    link_url:
      "https://bestglutenfreebeers.com/dont-drink-gluten-reduced-beers/",
    title: "The Evolution Of Gluten Free Beer",
    blurb: `I think there is a market for gluten reduced beers, but it’s not the Celiac community. Gluten reduced beers should be reserved for those who are simply gluten sensitive, or for those who live a gluten free lifestyle out of choice–rather than necessity.`,
    source: `Blog article from bestglutenfreebeers.com/ on the long-term effects of coeliacs consuming gluten-reduced beers`,
    type: "article",
    body: "",
  },
];

export function getLinkById(id) {
  return links.find((link) => link.id == id);
}

export function getAllLinks() {
  return links;
}
