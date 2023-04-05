const companies = [
  {
    id: "e1",
    title: "AltgrainCo",
    website_url: "https://altgrain.co.uk/",
    insta_url: "https://www.instagram.com/altgrainco/",
    fb_url: "https://www.facebook.com/profile.php?id=100076147206544",
    description:
      "AltGrainCo brew and supply alternative, NGCI craft-beer and beer brewing ingredients to customers wishing to avoid gluten altogether.",
    location: "UK",
    region: "EU",
    status: "dedicated",
    image: "images/companies/altgrain-logo.jpg",
    isFeatured: true,
    beers: [
      {
        title: "AltgrainCo",
        beer_name: "Random Pale Ale",
        image_url: "random_pale_ale.jpg",
        beer_url:
          "https://altgrain.co.uk/collections/beer/products/random-pale-ale-330ml-cans-naturally-gluten-free-pale-ale",
        beer_description:
          "Our SILVER award winning (Free From Food Awards 2022), deliciously subtle, citra hops-forward pale ale, with a light-to-medium body and malt profile. Inspired by our American friends but demonstrating some British reserve when it comes to hops! Fermented using Norwegian yeast Kviek, achieving a very clean beer with mellow fruity esters.",
      },
      {
        title: "AltgrainCo",
        beer_name: "Bird Brain Session IPA",
        image_url: "birdbrain.jpg",
        beer_url:
          "https://altgrain.co.uk/collections/beer/products/bird-brain-session-ipa-330ml-cans-naturally-gluten-free-pale-ale",
        beer_description:
          "A low-haze hops-forward session IPA, providing spicy notes and a tangy bitter profile. Incredibly more-ish, so do grab a few if you're planning a session!",
      },
      {
        title: "AltgrainCo",
        beer_name: "Blonde Ale",
        image_url: "blonde.jpg",
        beer_url:
          "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
        beer_description:
          "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly.",
      },
    ],
  },
  {
    id: "e2",
    title: "Green's",
    website_url: "https://www.glutenfreebeers.co.uk/",
    insta_url: "https://www.instagram.com/greensbeers/",
    description:
      "One of the original gluten-free brewers, with a mix of gluten-reduced and gluten-free beers in their range. Although a British company, the beers themselves are brewed in Belgium, and their IPA is an award-winning favourite in the naturally gluten-free beer community here in Europe (and elsewhere).",
    location: "UK",
    region: "EU",
    status: "Mixed",
    image: "images/companies/greens-logo.png",
    isFeatured: true,
    beers: [
      {
        title: "Green's",
        beer_name: "Dry Hopped Lager",
        strength: "ABV 4.0% (1.3 UNITS OF ALCOHOL PER 330ML)",
        image_url: "dry_hopped_lager.png",
        beer_url:
          "https://www.glutenfreebeers.co.uk/shop/product/dry-hopped-lager/",
        beer_description: `A unique bottle re-fermented naturally gluten free lager, lower in carbohydrates. Best served cold. Available in Ocado, selected retailers or buy on-line now.

          Tasting Notes
          Golden pale in colour, the nose is a mix of citrus-floral aroma sensations, clean with a light malt taste, but with hoppy aftertaste. A short clean mouth feel typical for a beer reduced in calories and carbohydrates
          
          `,
        ingredients: `Ingredients: Naturally gluten free; water, buckwheat, millet, sorghum, hops, brown rice and yeast.`,
      },
      {
        title: "Green's",
        beer_name: "India Pale Ale",
        strength: "ABV 5.0% (1.65 UNITS OF ALCOHOL PER 330ML)",
        image_url: "ipa.png",
        beer_url:
          "https://www.glutenfreebeers.co.uk/shop/product/india-pale-ale/",
        beer_description: `Bottle re-fermented and naturally gluten free, this is an elegant and classic IPA. Serve at cellar temperature. Available at Ocado, selected retailers or buy online.

          Tasting Notes
          Amber red in colour with a mix of herbal and pine aroma, a full mouth feel of the special hopping is unique for this IPA.
          
          `,
        ingredients: `Ingredients: Naturally gluten free; water, buckwheat, millet, sorghum, hops, brown rice and yeast.`,
      },
      {
        title: "Green's",
        beer_name: "Tripel Ale",
        strength: "ABV 8.5% (2.81 UNITS OF ALCOHOL PER 330ML)",
        image_url: "tripel_ale.png",
        beer_url: "https://www.glutenfreebeers.co.uk/shop/product/tripel-ale/",
        beer_description: `Bottle re-fermented and naturally gluten free, Triple Ale is the latest edition to our range of beers from ancient grains.

          “Tripel” is a style that was originated by Westmalle Trappist Brewery in the 1930s. Rich and full-flavoured, these are satisfying beers beloved by beer aficionados. Many breweries now produce a tripel, but a tripel made from ancient grains, without barley, is a particular accomplishment.
          
          Tasting Notes
          Light body for beer of this strength; spice and herb nose with flavours of candied fruit. Aromatic, long finish.
          
          `,
        ingredients: `Ingredients: Water, naturally gluten free ancient grains; buckwheat, millet, brown rice, sorghum, hops, yeast.`,
      },
      {
        title: "Green's",
        beer_name: "Dubbel Ale",
        strength: "(ABV 7.0% (2.31 UNITS OF ALCOHOL PER 330ML)",
        image_url: "dubbel_ale.png",
        beer_url: "https://www.glutenfreebeers.co.uk/shop/product/dubbel-ale/",
        beer_description: `Bottle re-fermented and naturally gluten free. The latest edition to our range of beers from ancient grains. The dubbel style originated in Belgium, possibly as a “second style” offered for sale by monastic breweries. Green’s Dubbel is the world’s first version of this style produced from ancient grains, all gluten-free ingredients.

          Tasting Notes
          In the classic dubbel fashion, a hint of dark-sugar and toffee flavour; and a traditional Belgian yeast bouquet.
          
          `,
        ingredients: `Ingredients: Water, naturally gluten free ancient grains; buckwheat, millet, brown rice, sorghum, hops, yeast.`,
      },
    ],
  },
  {
    id: "e3",
    title: "JimBrew Brewing Company",
    website_url: "https://www.jimbrew.co.uk/",
    insta_url: "https://www.instagram.com/jimbrew_brewing/",
    fb_url: "https://www.facebook.com/jimbrewbrewing",
    description: `JimBrew Brewing is a new brewery - and the first NGCI taproom in the UK. 
                    Based in Preston, they use only sustainable brewing methods to produce beers 
                    that are not only vegan, but naturally gluten-free as well. 
                    They follow the philosophy of targeting a non-coeliac audience as well as coeliacs,
                    as gluten-free beer should indeed be good enough for anyone to drink!`,
    location: "UK",
    region: "EU",
    status: "dedicated",
    image: "images/companies/jimbrew-logo.jpeg",
    isFeatured: true,
    taproom_blurb: "JimBrew is the UK's first NGCI taproom in the UK. For a full list of their latest offerings, check their Instagram on the link below.",
    taproom_url: "https://www.instagram.com/jimbrew_brewing/",
    beers: [],
  },
  {
    id: "e4",
    title: "Moulin des Moines",
    website_url:
      "https://www.naturline.fr/boutique/Boissons/Bieres-cidres-panaches-bieres-sans-alcool/Biere-gluten-free-33cl-bio-3791.html",
    insta_url: "",
    fb_url: "https://www.facebook.com/moulindesmoines67",
    description: `
      The Moulin des Moines brand was created in 1970 on the very site of a 13th century mill founded by Cistercian monks, in the heart of the Alsatian countryside, on the banks of the Zorn river. Today, Nicolas and Pascal Meckert continue their parents' commitment by guiding the new generations towards an ever more organic world with ever more vitality!`,
    location: "France",
    region: "EU",
    status: "Mixed",
    image: "images/companies/moulin-logo.png",
    isFeatured: true,
    beers: [
      {
        title: "Moulin des Moines",
        beer_name: "Bière Blonde",
        image_url: "moulin-des-moines.png",
        beer_url:
          "https://www.naturline.fr/boutique/Boissons/Bieres-cidres-panaches-bieres-sans-alcool/Biere-gluten-free-33cl-bio-3791.html",
        beer_description: `
          Gluten-free fruity taste. This recipe has been specially developed for people intolerant to gluten. It offers a drink that complements a supervised diet and allows you to share pleasant moments of tasting.`,
      },
    ],
  },
  {
    id: "e5",
    title: "Riedenburger",
    website_url: "https://shop.riedenburger.de/",
    insta_url: "https://www.instagram.com/riedenburgerbrauhaus/",
    fb_url:
      "https://www.facebook.com/people/Riedenburger-Brauerei-Biergarten/100057273797653",
    description: `Brewed exclusively from millet malt. The first "gluten-free" beer from Bavaria.
        
        Finest ecological specialty brewed only with organic millet malt and organic hops.
        
        Thanks to our long brewing experience, we have succeeded in brewing a very tasty, beery drink from exclusively natural, ecological and GMO-free raw materials.
        Guaranteed gluten-free. Guaranteed organic. Guaranteed good taste.`,
    location: "Germany",
    region: "EU",
    status: "Mixed",
    image: "images/companies/rieden-logo.png",
    isFeatured: true,
    beers: [
      {
        title: "Riedenburger",
        beer_name: "Riedenburger Hirse-Bier Glutenfrei",
        image_url: "riedenburger.png",
        beer_url:
          "https://shop.riedenburger.de/RIEDENBURGER-Hirse-Bier-Glutenfrei",
        beer_description: `
          Grain-mild gluten-free millet beer, naturally cloudy.
          
          
          This gluten-free millet beer in the glass is light yellow and covered with a fine foam. It smells of grain and tastes sweet and sour. Regional organic hops give this millet beer a delicate bitterness.`,
      },
    ],
  },
  {
    id: "e6",
    title: "Schnitzer Bräu",
    website_url: "https://www.schnitzer.eu/",
    fb_url: "https://www.facebook.com/SchnitzerBraeu/",
    description: `Schnitzer Bräu is gluten-free. We only use naturally gluten-free raw materials.`,
    location: "Germany",
    region: "EU",
    status: "Mixed",
    image: "images/companies/schnitz-logo.png",
    isFeatured: true,
    beers: [
      {
        title: "Schnitzer Bräu",
        beer_name: "Schnitzer Bräu",
        image_url: "schnitz.png",
        beer_url: "https://www.facebook.com/SchnitzerBraeu/",
        beer_description:
          "Schnitzer Bräu's organic, gluten-free beer is made from millet malt and brewed in Offenburg in the Black Forest. Classically malt-driven with a persistent refreshing palate and a fresh, clean finish.",
      },
    ],
  },
  {
    id: "e7",
    title: "Stirone Barley Free",
    website_url: "https://www.stirone.com/",
    insta_url: "https://www.instagram.com/stironebarleyfree/",
    fb_url: "https://www.facebook.com/Stironebarleyfree/",
    description: `
      The legal definition of beer in Italy, unlike many other countries, provides that it is made exclusively from barley or wheat. With the transformation of sorghum we can produce a "fermented drink". Our choice is demanding and particularly courageous, but the qualities and advantages of our product have led us to accept the challenge. It is a drink with a great personality that is appreciated by enthusiasts, who discover a new taste to compare with those already known. It is an allergen-free drink that can be consumed by everyone (who can consume alcoholic beverages).`,
    location: "Italy",
    region: "EU",
    status: "dedicated",
    image: "images/companies/stirone-logo.png",
    isFeatured: true,
    beers: [
      {
        title: "Stirone Barley Free",
        beer_name: "Blonde LaGaia",
        image_url: "lablonda.png",
        beer_url: "",
        beer_description: `Inspired by the Blanche style, it is characterized by continental hops, orange peel and spices, excellent for a refreshing break or to accompany delicate dishes. Yellow-orange color, citrus and spicy aroma, sweet taste. It is enriched with spices and orange peels.`,
        ingredients: `Water, white sorghum (20%), orange peel, hops, yeast, spices, stabilizer: E405`,
      },
      {
        title: "Stirone Barley Free",
        beer_name: "LaGaia Amber",
        image_url: "amber.png",
        beer_url: "https://www.stirone.com/lagaia-ambra/",
        beer_description: `The aroma and its taste are given by the use of different American hops in boiling and Dry-Hopping, as in the style of inspiration, the American Pale Ale. Excellent to accompany grilled meat and not too structured dishes; or simply drunk alone, to be able to enjoy the fresh notes of the hops to the fullest.`,
        ingredients: `Water, white sorghum (20%), hops, yeast, caramelized sugar, flavourings, stabilizer: E405.`,
      },
      {
        title: "Stirone Barley Free",
        beer_name: "LaGaia Summer Brau",
        image_url: "summer.png",
        beer_url: "https://www.stirone.com/lagaia-summer-brau/",
        beer_description: `The brewer completed the bitterness of Tettnanang hops with notes of Bergamot and Bitter Orange. A distinctive taste and aroma, an original and unique drink. Excellent in summer as an aperitif or to accompany fresh dishes.`,
        ingredients: `white sorghum water (20%) orange peel, hops, yeast, spices, natural flavourings, stabilizer: E405`,
      },
      {
        title: "Stirone Barley Free",
        beer_name: "Flanders Plot",
        image_url: "flanders.png",
        beer_url: "https://www.stirone.com/trama-di-fiandra/",
        beer_description: `Stirone brewer Stephen was inspired by the Flemish Flemish ale sour beers. With white sorghum he has prepared a drink with vinous and acetic notes typical of the style. The acetic (and lactic) nature that characterizes the style is not too pungent. Hop bitterness and a slight astringency complete the sip. Particularly versatile in pairing with food, both the world of cheese and seafood dishes.`,
        ingredients: `Water, white sorghum (20%), hops, yeast.`,
      },
      {
        title: "Stirone Barley Free",
        beer_name: "Pumpkin Heart",
        image_url: "pumpkin.png",
        beer_url: "https://www.stirone.com/cuore-di-zucca/",
        beer_description: ` Its sugars are perfect for completing the fermentation of sorghum. The bitterness of the hops, the notes of Peruvian cocoa, bourbon vanilla and Belgian yeast make it a sofa drink.`,
        ingredients: `Water, white sorghum (15%), pumpkin puree (4%), orange peel, hops, yeast, spices, flavourings, caramelised sugar, stabilizer: E405.`,
      },
      {
        title: "Stirone Barley Free",
        beer_name: "Ginger Beer",
        image_url: "ginger.png",
        beer_url: "https://www.stirone.com/ginger-beer/",
        beer_description: `The origins of the original Ginger Beer are in 16th century Great Britain where, with the alcoholic fermentation of ginger rhizome, this alcoholic drink was created which has achieved success all over the world even in a non-alcoholic version. With its spicy, robust and aromatic flavour, it is excellent to drink alone, appreciating the properties of gingerol or mixed to create cocktails such as the famous Moskow Mule. Stirone only use Italian ginger, a supply chain guaranteed by the Italian Ginger Consortium.`,
        ingredients: `Water, infusion of Italian ginger (30%), lemon, lime, pear juice and pulp, yeast, spices, acidity regulator: E336(i).`,
      },
    ],
  },
  {
    id: "e8",
    title: "Suspect Brewing",
    website_url: "https://suspectbrewing.co.uk/",
    insta_url: "https://www.instagram.com/suspect_brewing/",
    fb_url: "https://www.facebook.com/SUSBREWING/",
    description: `A dedicated naturally gluten-free micro brewery in Edinburgh, producing Circuit Breaker, a clean and crisp lager.`,
    location: "UK",
    region: "EU",
    status: "dedicated",
    image: "images/companies/suspect-logo.jpg",
    isFeatured: true,
    beers: [
      {
        title: "Suspect Brewing",
        beer_name: "Circuit Breaker",
        image_url: "circuit-breaker.png",
        beer_url: "https://www.facebook.com/SUSBREWING/",
        beer_description:
          "Circuit breaker: our bricks and mortar. Built differently using millet and buckwheat instead of conventional barley malt. ",
      },
    ],
  },
  {
    id: "e9",
    title: "ALT Brew",
    website_url: "https://www.altbrew.com/",
    insta_url: "https://www.instagram.com/altbrew/",
    fb_url: "https://www.facebook.com/altbrew",
    description: `ALT Brew is a craft nanobrewery and taproom located on the east side of Madison, WI (USA). They take pride in designing and brewing a wide variety of beer styles all without using barley, wheat, or rye. From fresh double dry-hopped double IPAs to delightfully drinkable blonde ales to huge bourbon barrel aged stouts and everything in between, ALT Brew offer 100% gluten-free beer that all beer drinkers can enjoy.`,
    location: "USA",
    region: "North America",
    status: "dedicated",
    image: "images/companies/altbrew-logo.jpg",
    isFeatured: true,
    taproom_blurb: "Our current tap list. These varieties are available as full pours, half pours, or served in a flight. *Updated as frequently as possible, actual taplist may differ*",
    taproom_url: `https://www.altbrew.com/taproom`,
  },
  {
    id: "e10",
    title: "Auroch's Brewing Co.",
    website_url: "https://aurochsbrewing.com/",
    insta_url: "https://www.instagram.com/aurochsbrewing/",
    fb_url: "https://www.facebook.com/AurochsBrewing/",
    description: `Naturally Gluten-Free Ingredients. Naturally Gluten-Free Beer. Dedicated Gluten-Free Facility. 

    Auroch's believe everyone should be able to experience the memorable moments in life with friends and family - all while enjoying great beer. They want to bring people back to the table. Beer drinkers shouldn't have to choose between exceptional taste and a safe, gluten-free craft beer.
    
    Their founders are life-long friends who are both medically required to follow a gluten-free diet.  Aurochs Brewing Company was born out of necessity and is fueled by passion to drink, share and enjoy a craft beer, for any occasion, with the important people in your life. `,
    location: "USA",
    region: "North America",
    status: "dedicated",
    image: "images/companies/aurochs-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://aurochsbrewing.com/beers/gluten-free-beers",
  },
  {
    id: "e11",
    title: "Beliveau Farm",
    website_url: "https://www.beliveaufarm.com/brewery",
    insta_url: "https://www.instagram.com/beliveaufarmwinery/",
    fb_url: "https://www.facebook.com/BeliveauFarmWinery/",
    description: `Beliveau Farm are passionate about brewing and their goal is to harness the power of ancient grains to produce beers in both classic and unique styles. Beliveau Brewery opened in September 2019 and currently stands as Virginia's only Gluten-Free brewery. Their beers are made from malted rice, millet and buckwheat, and their brewery is a completely GF facility. Come check out their seasonal rotating taps, enjoy a beer as you relax and savor their scenic property.`,
    location: "USA",
    region: "North America",
    status: "dedicated",
    image: "images/companies/beliveau-logo.svg",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.beliveaufarm.com/brewery"
  },
  {
    id: "e12",
    title: "Bierly Brewing",
    website_url: "https://www.bierlybrewing.com/",
    insta_url: "https://www.instagram.com/bierlybrewing/",
    fb_url: "https://www.facebook.com/bierlybrewing",
    description: `
      Bierly Brewing began brewing commercially in 2016 as Oregon’s second gluten-free brewery.
      In their own words: "At Bierly Brewing, our passion is to provide great gluten-free craft beer and delicious food in a dedicated gluten-free facility while making positive connections with our community. We are proud to be an inclusive space, and we stand with our LGBTQIA+ and BIPOC community members."
      `,
    location: "USA",
    region: "North America",
    status: "dedicated",
    image: "images/companies/bierly-logo.svg",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.bierlybrewing.com/our-beers/"
  },
  {
    id: "e13",
    title: "Brewery NYX",
    website_url: "https://www.brewerynyx.com/",
    insta_url: "https://www.instagram.com/brewerynyx/",
    fb_url: "https://www.facebook.com/BreweryNyx",
    description: `
    Grand Rapids has no shortage of beer for enthusiasts, but for the gluten-free it can feel like wandering through a desert with nothing to drink. 
    Brewery Nyx, Michigan’s first dedicated gluten-free brewery and facility, was created to bring taste, better ingredients, joy and comradery back to the beer experience for everyone.
     From IPAs to lagers to barrel-aged stouts, Brewery Nyx brings those who love beer but can’t enjoy it, back into the fold.
      `,
    location: "USA",
    region: "North America",
    status: "dedicated",
    image: "images/companies/nyx-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.bierlybrewing.com/our-beers/"
  },
];

  export function getCompanyById(id) {
    return companies.find((company) => company.id == id);
  };

  export function getAllCompanies() {
    return companies;
  }