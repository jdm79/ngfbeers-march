const links = [
   
    {
      id: 'l1',
      link_url: 'https://www.nhs.uk/conditions/coeliac-disease/complications/',
      title: 'Coeliac disease potential complications',
      blurb: `If you have coeliac disease, 
              it's crucial you do not eat any gluten. 
              If you have untreated or undiagnosed coeliac disease and you're still eating gluten, 
              several complications can occur.

              It's a common misconception that eating a little gluten will not harm you. 
              Eating even tiny amounts can trigger symptoms of coeliac disease
               and increase your risk of developing the complications outlined below.`,
      link_description: "National Health Service UK",
      link_type: 'website',
      body: "body"
    },
    {
      id: 'l2',
      link_url: 'https://www.facebook.com/groups/179311875956380/',
      title: 'Zero Tolerance Gluten Free Homebrew Club',
      blurb: `Zero Tolerance is a group for people who want to brew beer without gluten. 
              Many individuals in the group have received a Celiac Disease diagnosis
              or have another medical reason to avoid gluten. 
              Others are interested in learning how to brew beer for friends
              and family who fall into that category,
              or simply have an interest in using alternative grains to brew delicious beer.`,
      link_description: "Zero Tolerance Gluten Free Homebrew Club Facebook Group",
      link_type: 'Facebook',
      body: "body"
    },
    {
      id: 'l3',
      link_url: 'https://missmuru.wordpress.com/2019/04/11/safety-of-gluten-free-beer-aoecs-response-to-my-open-letter/',
      title: `Miss Muru's Open Letter to the Association of European Coeliac Societies (AOECS)`,
      blurb: `Please read here prof. Christian Scerri’s response on behalf of 
              AOECS, Association of European Coeliac Societies, 
              to my open letter about safety of gluten free beer in Europe. 
              I have Scerri’s approval for publishing his full response.`,
      link_description: 'https://missmuru.wordpress.com/', 
      link_type: "website",
      body: ""
    },
    {
      id: 'l4',
      link_url: 'https://zerotolerancegf.podbean.com/',
      title: 'Zero Tolerance Podcast',
      blurb: `Co-hosted by Cale Baldwin and Stuart Cole. 
              The one and only dedicated gluten free brewing podcast. 
              Sponsored by Zero Tolerance Gluten Free Homebrewing.`,
      link_description: `https://zerotolerancegf.podbean.com/`,
      link_type: 'podcast',
      body: ""
    },
    {
      id: 'l5',
      link_url: 'https://www.forbes.com/sites/samlemonick/2017/11/01/a-new-test-to-make-sure-your-beer-is-gluten-free/',
      title: 'A New Test To Make Sure Your Beer Is Gluten Free',
      blurb: `Some beers are now being marketed to celiac sufferers and those who try to avoid gluten. 
              The bad news is that new research appears to show that one common method 
              for getting gluten out of beer isn't working, 
              and the test used to find gluten in beer is broken too. 
              Scientists in Australia are working on a new test to ensure these beers, 
              sometimes labelled “gluten reduced,” are safe for those with celiac disease.`,
      link_description: "Forbes article by Sam Lemonick",
      link_type: 'article',
      body: ""
    },
    {
      id: 'l6',
      link_url: 'https://www.abc.net.au/news/science/2018-12-15/looking-for-a-low-gluten-beer-heres-what-you-need-to-know/10562248',
      title: "Looking for a low-gluten beer? Here's what you need to know",
      blurb: `[But] when we looked at beers labelled low-gluten or reduced gluten, 
              there wasn't much difference in the level we saw in those and what we saw in just normal, 
              off-the-shelf beer.`,
      link_description: "ABC article on the inaccuracy of current gluten-free beer testing",
      link_type: 'article',
      body: ""
    },
    {
      id: 'l7',
      link_url: 'https://www.coeliac.org.uk/frequently-asked-questions/gfbeer/',
      title: "Coeliac UK's most recent explanation on testing gluten levels in beer",
      blurb: `By law, manufacturers can only label their beer gluten free if it contains 20 ppm or less
              of gluten. Laboratory testing is the best way to assess the amount of gluten in a product,
              but there can be difficulties when testing beer using the usual R5 ELISA Sandwich method
              (commonly used for foods), due to the gluten being broken down. 
              An alternative method is available (R5 ELISA Competitive)
              which is a more effective way to measure the gluten in beer and other hydrolysed
              or fermented products.`,
      link_description: `'How is gluten free beer made?' Coeliac UK website`,
      link_type: 'website',
      body: ""
    },
  
  ]

  export function getLinkById(id) {
    return links.find((link) => link.id == id);
  };

  export function getAllLinks() {
    return links;
  }