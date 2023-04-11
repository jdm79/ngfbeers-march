const companies = [
  {
    id: "e1",
    title: "AltgrainCo",
    website_url: "https://altgrain.co.uk/",
    insta_url: "https://www.instagram.com/altgrainco/",
    fb_url: "https://www.facebook.com/profile.php?id=100076147206544",
    untappd_url: "https://untappd.com/AltGrainCo",
    founded: "2012",
    description:
      "AltGrainCo brew and supply alternative, NGCI craft-beer and beer brewing ingredients to customers wishing to avoid gluten altogether.",
    country: "United Kingdom",
    state: "Essex",
    stateCode: "Essex",
    city: "",
    region: "Europe",
    flag: "GB",
    status: "dedicated",
    company_type: "Dedicated GF maltster and brewery",
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
    untappd_url: "https://untappd.com/GreensGlutenFree",
    founded: "2011",
    description:
      "One of the original gluten-free brewers, with a mix of gluten-reduced and gluten-free beers in their range. Although a British company, the beers themselves are brewed in Belgium, and their IPA is an award-winning favourite in the naturally gluten-free beer community here in Europe (and elsewhere).",
    country: "United Kingdom",
    state: "Cheshire",
    stateCode: "Cheshire",
    city: "Stockport",
    region: "Europe",
    flag: "GB",
    status: "Mixed",
    company_type:
      "Contract brewery. Not dedicated GF facilities but cleaning protocols monitored closely",
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
    untappd_url: "https://untappd.com/JimbrewBrewingCompany",
    founded: "2022",
    description: `JimBrew Brewing is a new brewery - and the first NGCI taproom in the UK. 
                    Based in Preston, they use only sustainable brewing methods to produce beers 
                    that are not only vegan, but naturally gluten-free as well. 
                    They follow the philosophy of targeting a non-coeliac audience as well as coeliacs,
                    as gluten-free beer should indeed be good enough for anyone to drink!`,
    country: "United Kingdom",
    state: "Lancashire",
    stateCode: "Lancashire",
    city: "Preston",
    region: "Europe",
    flag: "GB",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/jimbrew-logo.jpeg",
    isFeatured: true,
    taproom_blurb:
      "JimBrew is the UK's first NGCI taproom in the UK. For a full list of their latest offerings, check their Instagram on the link below.",
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
    untappd_url: "https://untappd.com/w/moulin-des-moines/8201",
    founded: "",
    description: `
      The Moulin des Moines brand was created in 1970 on the very site of a 13th century mill founded by Cistercian monks, in the heart of the Alsatian countryside, on the banks of the Zorn river. Today, Nicolas and Pascal Meckert continue their parents' commitment by guiding the new generations towards an ever more organic world with ever more vitality!`,
    country: "France",
    countryCode: "France",
    state: "Bas Rhin",
    stateCode: "Bas Rhin",
    city: "Krautwiller",
    region: "Europe",
    flag: "FR",
    status: "Mixed",
    company_type: "",
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
    untappd_url: "https://untappd.com/RiedenburgerBrauhaus",
    founded: "",
    description: `Brewed exclusively from millet malt. The first "gluten-free" beer from Bavaria.
        
        Finest ecological specialty brewed only with organic millet malt and organic hops.
        
        Thanks to our long brewing experience, we have succeeded in brewing a very tasty, beery drink from exclusively natural, ecological and GMO-free raw materials.
        Guaranteed gluten-free. Guaranteed organic. Guaranteed good taste.`,
    country: "Germany",
    state: "Bavaria",
    stateCode: "Bavaria",
    city: "Riedenburg",
    region: "Europe",
    flag: "DE",
    status: "Mixed",
    company_type: "",
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
    untappd_url: "https://untappd.com/w/schnitzer-brau/8772",
    founded: "",
    description: `Schnitzer Bräu is gluten-free. We only use naturally gluten-free raw materials.`,
    country: "Germany",
    state: "Baden-Württemberg",
    stateCode: "Baden-Württemberg",
    city: "Offenburg",
    region: "Europe",
    flag: "DE",
    status: "Mixed",
    company_type: "",
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
    untappd_url: "https://untappd.com/w/stirone-barleyfree/430197",
    founded: "",
    description: `
      The legal definition of beer in Italy, unlike many other countries, provides that it is made exclusively from barley or wheat. With the transformation of sorghum we can produce a "fermented drink". Our choice is demanding and particularly courageous, but the qualities and advantages of our product have led us to accept the challenge. It is a drink with a great personality that is appreciated by enthusiasts, who discover a new taste to compare with those already known.`,
    description2: `It is an allergen-free drink that can be consumed by everyone (who can consume alcoholic beverages).`,
    country: "Italy",
    state: "Parma",
    stateCode: "Parma",
    city: "Fidenza",
    region: "Europe",
    flag: "IT",
    status: "dedicated",
    company_type: "Dedicated GF brewery with supermarket/convenience store",
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
    untappd_url: "https://untappd.com/SuspectBrewing",
    founded: "2021",
    description: `A dedicated naturally gluten-free micro brewery in Edinburgh, producing Circuit Breaker, a clean and crisp lager.`,
    country: "United Kingdom",
    state: "Lothian",
    stateCode: "Lothian",
    city: "Edinburgh",
    region: "Europe",
    flag: "GB",
    status: "dedicated",
    company_type: "Dedicated GF brewery",
    image: "images/companies/suspect-logo.png",
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
    untappd_url: "https://untappd.com/ALT-Brew",
    founded: "2016",
    description: `ALT Brew is a craft nanobrewery and taproom located on the east side of Madison, WI (USA). They take pride in designing and brewing a wide variety of beer styles all without using barley, wheat, or rye. From fresh double dry-hopped double IPAs to delightfully drinkable blonde ales to huge bourbon barrel aged stouts and everything in between, ALT Brew offer 100% gluten-free beer that all beer drinkers can enjoy.`,
    country: "USA",
    state: "Wisconsin",
    state: "WI",
    city: "Madison",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/altbrew-logo.jpg",
    isFeatured: true,
    taproom_blurb:
      "Our current tap list. These varieties are available as full pours, half pours, or served in a flight. *Updated as frequently as possible, actual taplist may differ*",
    taproom_url: `https://www.altbrew.com/taproom`,
  },
  {
    id: "e10",
    title: "Auroch's Brewing Co.",
    website_url: "https://aurochsbrewing.com/",
    insta_url: "https://www.instagram.com/aurochsbrewing/",
    fb_url: "https://www.facebook.com/AurochsBrewing/",
    untappd_url: "https://untappd.com/AurochsBrewing",
    founded: "2012",
    description: `Naturally Gluten-Free Ingredients. Naturally Gluten-Free Beer. Dedicated Gluten-Free Facility.`,

    description2: `    Auroch's believe everyone should be able to experience the memorable moments in life with friends and family - all while enjoying great beer. They want to bring people back to the table. Beer drinkers shouldn't have to choose between exceptional taste and a safe, gluten-free craft beer.
    `,
    description3: `    Their founders are life-long friends who are both medically required to follow a gluten-free diet.  Aurochs Brewing Company was born out of necessity and is fueled by passion to drink, share and enjoy a craft beer, for any occasion, with the important people in your life. `,

    country: "USA",
    state: "Pennsylvania",
    stateCode: "PA",
    city: "Emsworth",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/aurochs-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://aurochsbrewing.com/beers/gluten-free-beers",
  },
  {
    id: "e38",
    title: "Bard's Tale Beer Company",
    website_url: "https://bardsbeer.com/",
    insta_url: "https://www.instagram.com/bardsbeer/",
    fb_url: "https://www.facebook.com/bardsbeer/",
    untappd_url: "https://untappd.com/BardsTaleBeerCompany",
    founded: "2005",
    description: `In their own words: "The Original Gluten-Free Sorghum Malt Beer, Bard’s, is back to beer aisles in the US and Canada! The “original” founder of Bards, Craig Belser – celiac, mad scientist, straight-shooting inventor – and his team, have brought this special brew back to market.`,
    description2: `Even more exciting, Bard’s is now in cans to better suit your active lifestyle. Truly great for any occasion – it’s lighter, less breakable and fully recyclable.`,
    description3: `All the Flavor.  None of the BS.`,
    description4: ``,
    country: "USA",
    state: "Missouri",
    stateCode: "MO",
    city: "Lees Summit",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Contract breweries in US and Canada. Not dedicated GF facilities but cleaning protocols monitored closely.",
    image: "images/companies/bards-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://bardsbeer.com/find-bards/",
  },
  {
    id: "e11",
    title: "Beliveau Farm",
    website_url: "https://www.beliveaufarm.com/brewery",
    insta_url: "https://www.instagram.com/beliveaufarmwinery/",
    fb_url: "https://www.facebook.com/BeliveauFarmWinery/",
    untappd_url: "https://untappd.com/BeliveauFarmBrewery",
    founded: "2019",
    description: `Beliveau Farm are passionate about brewing and their goal is to harness 
    the power of ancient grains to produce beers in both classic and unique styles. 
    Beliveau Brewery opened in September 2019 and currently stands as Virginia's only Gluten-Free brewery. 
`,
    description2: `    Their beers are made from malted rice, millet and buckwheat, 
    and their brewery is a completely GF facility. `,
    description3: `
    Come check out their seasonal rotating taps, enjoy a beer as you relax and savor their scenic property.`,
    country: "USA",
    state: "Virginia",
    stateCode: "VA",
    city: "Blacksburg",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Inn, winery and dedicated GF brewing facility",
    image: "images/companies/beliveau-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.beliveaufarm.com/brewery",
  },
  {
    id: "e12",
    title: "Bierly Brewing",
    website_url: "https://www.bierlybrewing.com/",
    insta_url: "https://www.instagram.com/bierlybrewing/",
    fb_url: "https://www.facebook.com/bierlybrewing",
    untappd_url: "https://untappd.com/BierlyBrewing",
    founded: "2016",
    description: `
      Bierly Brewing began brewing commercially in 2016 as Oregon’s second gluten-free brewery.
      In their own words: "At Bierly Brewing, our passion is to provide great gluten-free craft beer and delicious food in a dedicated gluten-free facility while making positive connections with our community. We are proud to be an inclusive space, and we stand with our LGBTQIA+ and BIPOC community members."
      `,
    country: "USA",
    state: "Oregon",
    stateCode: "OR",
    city: "McMinnville",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/bierly-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.bierlybrewing.com/our-beers/",
  },
  {
    id: "e14",
    title: "Buck Wild Brewing",
    website_url: "https://www.buckwildbrew.com/",
    insta_url: "https://www.instagram.com/buckwildbrewing/",
    fb_url: "https://www.facebook.com/buckwildbeer",
    untappd_url: "https://untappd.com/AlpenglowBeerCompany",
    founded: "2020",
    description: `
    Nested in the scenic and lively Jack London Square district of Oakland, surrounded by diverse landscapes 
    and culture in every direction, spoiled with adventure to California’s dynamic environment. 
    `,
    description2: `In their own words: "Simply put, we believe in craft beer for all. With millions of Americans 
    living with gluten intolerances, allergies, and gluten-free lifestyles, 
    many are deprived from enjoying the simple pleasure of having a beer. `,
    description3: ` We’re here to change that, and are uncomprimising on ingredients, flavor.
    The ingredients we use have been found in beer recipes for thousands of years all around the world. 
    Buckwheat, millet, and rice make up the majority of our malts, but we also use oats, maize, 
    and other ingredients that do not contain any gluten."`,
    country: "USA",
    state: "California",
    stateCode: "CA",
    city: "Oakland",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/buckwild-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.buckwildbrew.com/our-beer",
  },
  {
    id: "e15",
    title: "Burning Brothers Brewing",
    website_url: "https://www.burnbrosbrew.com/",
    insta_url: "https://www.instagram.com/burnbrosbrew/",
    fb_url: "https://www.facebook.com/BurnBrosBrew",
    untappd_url: "https://untappd.com/BurningBrothersBrewing",
    founded: "2014",
    description: `
    In their own words: "At Burning Brothers, we believe the only way to brew great gluten-free beer 
    is to make it in a dedicated gluten-free facility.  
    `,
    description2: `    This means our beer is crafted using completely gluten-free grains, never containing wheat, barley or rye.
    We don’t use special filters, enzymes or other gluten-free gimmicks.  
    Instead, we brew great-tasting beers that you KNOW are truly gluten-free.`,
    description3: `    Burning Brothers, gluten-free from grain to glass.
    
    Don’t fear the beer."`,
    country: "USA",
    state: "Minnesota",
    stateCode: "MN",
    city: "Saint Paul",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/burning-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.burnbrosbrew.com/beer/beer-styles/",
  },
  {
    id: "e16",
    title: "Dark Hills Brewery",
    website_url: "https://www.darkhillsbrew.com/",
    insta_url: "",
    fb_url: "https://www.facebook.com/DarkHillsBrewery/",
    untappd_url: "https://untappd.com/w/dark-hills-brewery/150006",
    founded: "2017",
    description: `
    In their own words: "We're a very pleasant and scenic drive through the hills and hollers of McDonald County, Missouri. Just north of Pea Ridge, Arkansas.
    We pride ourselves on our large selection of Gluten Free brews.

    `,
    description2: `    We typically have at least 6 of our own unique brews on tap to choose from. And speaking of non-drinkers, we keep our own handmade non-alcoholic
    Root Beer on tap.
    Yes, we are a FAMILY & PET-FRIENDLY establishment!"`,
    country: "USA",
    state: "Missouri",
    stateCode: "MO",
    city: "Seligman",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type:
      "Dedicated GF brewery with taproom connected to conventional brewery",
    image: "images/companies/darkhills-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.darkhillsbrew.com/gallery.html",
  },
  {
    id: "e36",
    title: "Departed Soles Brewing Company",
    website_url: "https://www.departedsoles.com/gluten-free-beers",
    insta_url: "https://www.instagram.com/departedsoles/",
    fb_url: "https://www.facebook.com/DepartedSolesBrewery/",
    untappd_url: "https://untappd.com/DSBC",
    founded: "2015",
    description: `In their own words: "At Departed Soles Brewing Company, we understand that the brewing industry and tastes are constantly changing, and we embrace that evolution!`,
    description2: `Since our opening back in 2015, we strive to have a tap list as diverse as Jersey City, with something for everyone, and not leaning towards one style or another. Haze Boiz, Lager Heads, Sour Sallies, and Gluten Free Folk welcome! `,
    description3: `We are always working to improve ourselves, and our beer, and know you'll find something you like!"`,
    description4: ``,
    country: "USA",
    state: "New Jersey",
    stateCode: "NJ",
    city: "Jersey City",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated fermenters, canning system, draft lines",
    image: "images/companies/departed-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.departedsoles.com/gluten-free-beers",
  },
  {
    id: "e17",
    title: "Divine Science Brewing",
    website_url: "https://divinesciencebrewing.com/",
    insta_url: "https://www.instagram.com/divinesciencebrewing/?hl=en",
    fb_url: "https://www.facebook.com/divinesciencebrewing/",
    untappd_url: "https://untappd.com/Divine_Science",
    founded: "2019",
    description: `
    In their own words: "All of our California craft beers are made from premium malted gluten-free grains 
    like millet, buckwheat, rice, and lentils. We focus on ingredients so you don’t have to worry.
    `,
    description2: `  We are sold at Total Wine & More, BevMo across California – located in their gluten-free section! 
    We never make anything that is less than 0ppm. Gluten-reduced is not allowed in this brewery. `,
    description3: `    We have the highest standards because your safety matters! Join us for a pint at the tasting room 
    and try the following beers along with our small batch special releases."`,
    country: "USA",
    state: "California",
    stateCode: "CA",
    city: "Tustin",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type:
      "Contract brewery. Not dedicated GF facilities but cleaning protocols monitored closely",
    image: "images/companies/divine-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://divinesciencebrewing.com/craft-beers/",
  },
  {
    id: "e18",
    title: "Dos Luces",
    website_url: "https://dosluces.com/",
    insta_url: "https://www.instagram.com/doslucesbrewery/",
    fb_url: "https://www.facebook.com/doslucesbrewery/",
    untappd_url: "https://untappd.com/DosLucesBrewery",
    founded: "2018",
    description: `
  
    In their own words: "While barley is highly regarded in the world of beer, corn is often disregarded 
    as a brewing grain and even, at times, treated with disdain. 
    However, the history of brewing with corn goes back at least as far as that for barley, 
    and is rooted right here in the Western Hemisphere. 
    `,
    description2: `    At Dos Luces Brewery, we have explored the history behind some of the many styles of beer 
    traditionally brewed with corn, and have embraced corn as our core grain. 
    The “Dos” Luces (Two Lights) represent our two core types of beer, a corn-based Chicha and a corn 
    and maguey-based Pulque.Dos Luces. The sun and the moon. Inti and Metztli. Chicha and Pulque. `,
    description3: `    We chose the name Dos Luces because it represents the duality of light – 
    While you might be tempted to imagine this as light and darkness, 
    we prefer to consider the bright light of day in contrast to the brightest beacon of light at night. 
    Call it divine inspiration or simply the accumulation of ideas within two swirling brains, 
    Dos Luces represents the idea that there is always light when you look for it."`,
    country: "USA",
    state: "Colorado",
    stateCode: "CO",
    city: "Denver",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/dos-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://dosluces.com/brews/",
  },
  {
    id: "e19",
    title: "Eckert Malting & Brewing",
    website_url: "https://eckertmaltingandbrewing.com/",
    insta_url: "",
    fb_url: "",
    untappd_url: "https://untappd.com/w/eckert-malting-brewing-co/176353",
    founded: "2012",
    description: `
    In their own words: 
    "After more than four years of development and some pivotal advice along the way from a few people 
    in the brewing and rice industry, I have created several styles of ales and lagers. 
    `,
    description2: `    The ales and beers I produce are naturally malted and brewed using California rice, hops, water and 
    gluten-free yeast. I have established a gluten-free facility in order to eliminate any chance 
    of cross-contamination. `,
    description3: `    In contrast, many of the currently available gluten-free beers are produced in breweries 
    that also brew traditional barley and wheat beers."`,
    country: "USA",
    state: "California",
    stateCode: "CA",
    city: "Chico",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF malthouse and brewery with taproom",
    image: "images/companies/eckert-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://eckertmaltingandbrewing.com/brewing/",
  },
  {
    id: "e20",
    title: "Evasion Brewing",
    website_url: "https://evasionbrewing.com/home",
    insta_url: "https://www.instagram.com/evasionbrewing/?hl=en",
    fb_url: "https://www.facebook.com/EvasionBrewing/",
    untappd_url: "https://untappd.com/EvasionBrewing",
    founded: "2018",
    description: `
    In their own words:
    "Our brewery is a dedicated gluten free facility. 
    That means no gluten passes through our doors. 
    We source our ingredients from suppliers that sell certified gluten free ingredients, 
    or (if not certified) can show us their tests to prove their intensive cleaning and handling 
    have resulted in no cross contamination. 
    `,
    description2: `    
    Even though we use all gluten free ingredients, we take our gluten free claim very seriously 
    and test each and every batch we produce for gluten contamination, just to be triple sure. 
    You may notice lot numbers printed on each of our cans, 
    this is so we can track the batches tested for gluten. `,
    description3: `    It is ultimately our responsibility to make sure we are producing a truly gluten free product 
    for you to consume, that’s why we test all our beer before it leaves the brewery."`,
    country: "USA",
    state: "Oregon",
    stateCode: "OR",
    city: "McMinnville",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/evasion-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://evasionbrewing.com/store",
  },
  {
    id: "e21",
    title: "Ghostfish Brewing Company",
    website_url: "https://ghostfishbrewing.com/",
    insta_url: "https://www.instagram.com/ghostfishbrewco/",
    fb_url: "https://www.facebook.com/GhostfishBrewingCompany",
    untappd_url: "https://untappd.com/GhostfishBrewingCompany",
    founded: "2015",
    description: `
    In their own words:
    "We are on a mission to show the world the radical flavors that are only possible by reinventing beer from the grain up. With artisan malts of unusual grains like millet, buckwheat, and heirloom rice, combined with hops from small family farms, our beers are crafted to transcend the previous limits of GF beer. "
    `,
    country: "USA",
    state: "Washington",
    stateCode: "WA",
    city: "Seattle",
    state: "Washington",
    city: "Seattle",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF production brewery with taproom",
    image: "images/companies/ghostfish-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://ghostfishbrewing.com/beers/",
  },
  {
    id: "e22",
    title: "Glutenberg",
    website_url: "https://glutenberg.ca/en",
    insta_url: "https://www.instagram.com/glutenbergbeer/",
    fb_url: "https://www.facebook.com/GlutenbergCAN",
    untappd_url: "https://untappd.com/BrasseursSansGlutenBSG",
    founded: "2011",
    description: `
    In their own words:
    "In 2010, the idea of brewing a gluten-free beer in Quebec was first discussed by two long-time friends 
    and entrepreneurs. 
    One of the co-founders, who had been living with gluten intolerance for several years, 
    remained dissatisfied with the gluten-free beer on the market. 
    
    He and his partner then saw a unique opportunity to meet a growing need and to realize 
    what both of them had long dreamed of: running their own business. 
    `,
    description2: `    The microbrewery enjoyed its very first international success at the 2012 World Beer Cup, 
    where Glutenberg beers won all three medals in the “Gluten-Free Beer” category
    at the world’s most prestigious brewing competition. `,
    description3: `
    Currently with a team of 10 brand ambassadors working in both Canada and the United States, 
    the company plans to maintain its rapid growth rate in the coming years
     and continue to brew the best gluten-free beers available."`,
    country: "Canada",
    state: "Quebec",
    stateCode: "QC",
    city: "Montréal",
    region: "North America",
    flag: "CA",
    status: "dedicated",
    company_type: "Dedicated GF production brewery",
    image: "images/companies/glutenberg-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://glutenberg.ca/en/products",
  },
  {
    id: "e23",
    title: "Grey Fox Brewing",
    website_url: "https://www.greyfoxbrewing.com/",
    insta_url: "https://www.instagram.com/greyfoxbrewing",
    fb_url: "https://www.facebook.com/greyfoxbrewing/",
    untappd_url: "https://untappd.com/GreyFoxBrewing",
    founded: "2022",
    description: `
    In their own words:
    "Crafted from carefully sourced ingredients and brewed in a dedicated gluten-free facility
     in Kelowna, BC, Grey Fox Brewing aims to challenge the perception of gluten-free beer 
     through uncompromised craftsmanship and modern brewing techniques. 
     

    `,
    description2: `     True gluten-free beer is crafted by carefully sourcing ingredients and brewing in a dedicated facility 
    to provide the full craft beer experience without the gluten content. 
    We choice select a combination of millet and rice along with hops and yeast, 
    to produce excellent gluten-free beer true to the craft drinking experience."`,
    country: "Canada",
    state: "British Columbia",
    stateCode: "BC",
    city: "Kelowna",
    region: "North America",
    flag: "CA",
    status: "dedicated",
    company_type: "Dedicated GF production brewery with tasting room",
    image: "images/companies/greyfox-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "",
  },
  {
    id: "e24",
    title: "Ground Breaker Brewing",
    website_url: "https://groundbreakerbrewing.com/",
    insta_url: "https://www.instagram.com/groundbreakerbrewing/",
    fb_url: "https://www.facebook.com/groundbreakerbrewing",
    untappd_url: "https://untappd.com/GroundBreakerBrewing",
    founded: "2011",
    description: `
    In their own words:
    "A dedicated gluten-free brewery & gastropub,
    making 100% gluten-free beer & food. Ground Breaker opened in 2011 
    as the first dedicated & certified gluten-free brewery in the United States. 


`,
    description2: `    
    Our approach to making superior gluten-free craft beer is a simple one: 
    use only premium ingredients which are naturally gluten-free."`,
    country: "USA",
    state: "Oregon",
    stateCode: "OR",
    city: "Portland",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/groundbreaker-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://groundbreakerbrewing.com/our-gluten-free-brewery",
  },
  {
    id: "e25",
    title: "Heathen's Brewing",
    website_url: "https://heathensbrewingshop.square.site/",
    insta_url: "https://www.instagram.com/heathensbrewing",
    fb_url: "https://www.facebook.com/HeathensBrewing/",
    untappd_url: "https://untappd.com/HeathensBrewing",
    founded: "2019",
    description: `
    In their own words:
    "Heathen's Brewing is a dedicated Gluten Free Brewery located in Calgary, Alberta Canada. We are Western Canada's first Gluten Free Craft Brewery, come join us for a great experience."
`,
    country: "Canada",
    state: "Alberta",
    stateCode: "AB",
    city: "Calgary",
    region: "North America",
    flag: "CA",
    status: "",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/heathens-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://heathensbrewingshop.square.site/",
  },
  {
    id: "e26",
    title: "Holidaily Brewing",
    website_url: "https://holidailybrewing.com/",
    insta_url: "https://www.instagram.com/holidailybrew/",
    fb_url: "https://www.facebook.com/holidailybrewingcompany",
    untappd_url: "https://untappd.com/HolidailyBrewingCo",
    founded: "2012",
    description: `
    In their own words: "Holidaily Brewing Company
    Is the passion project of Karen Hertz, a craft beer enthusiast and lover of living life to the fullest. Karen survived melanoma and thyroid cancer in her early 30’s, leading to a treatment plan including a gluten-free diet. Along with beating cancer came the desire to focus on health, happiness and a commitment to celebrate life every single day.`,

    description2: `    As a beer lover, going gluten-free meant only drinking gluten-free beer or not partaking in social activities in the same way her friends and family could. The lack of good tasting, gluten-free options was a challenge for Karen – one that she was driven to overcome. Years of taste-testing, research on gluten-free ingredients and an understanding of processes other brewing companies utilized led her to believe there was a better way.
    `,
    description3: `    And so, the idea of Holidaily Brewing Company was born: a company dedicated to creating excellent tasting gluten-free beer."`,
    country: "USA",
    state: "Colorado",
    stateCode: "CO",
    city: "Golden",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF production brewery with taproom",
    image: "images/companies/holidaily-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://holidailybrewing.com/beers/",
  },
  {
    id: "e27",
    title: "Lucky Pigeon Brewing Co.",
    website_url: "https://www.luckypigeonbrewing.com/",
    insta_url: "https://www.instagram.com/luckypigeonbrewing/",
    fb_url: "https://www.facebook.com/luckypigeonbrewing",
    untappd_url: "https://untappd.com/w/lucky-pigeon-brewing-co/505825/",
    founded: "2012",
    description: `
    In their own words: "Maine's First Dedicated Gluten-Free Brewery. Our dedicated gluten-free brewing process allows for those with gluten sensitivities, including Celiac disease, to enjoy the variety and excitement of a small craft brewery without the risk of immune reactions that barley-based beers can induce."`,
    country: "USA",
    state: "Maine",
    stateCode: "ME",
    city: "Biddeford",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/luckypigeon-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.luckypigeonbrewing.com/?page_id=146",
  },
  {
    id: "e28",
    title: "Moonshrimp Brewing",
    website_url: "https://www.moonshrimpbrewing.com/",
    insta_url: "https://www.instagram.com/moonshrimp_brewing/",
    fb_url: "https://www.facebook.com/Moonshrimp.Brewing/",
    untappd_url: "https://untappd.com/w/moonshrimp-brewing/67232",
    founded: "2016",
    description: `
    In their own words: "Gluten free beer with no shortcuts. 
    Truly Gluten Free & Vegan Beer. Always.

    Locally made, sustainably and responsibly produced, small batch fermented and hand bottled."`,

    description2: `What do we mean when we say gluten free and vegan?

    No wheat, barley, malt, or other gluten source anywhere in the brewery property, ever.
    
    No oats or oat products regardless of certifications or source.
    
    All brand new equipment to eliminate the possibility of residual gluten.
    
    No gelatin or isenglass used to clarify the beer, so it is vegan.`,
    description3: `All verified beet sugar (cane sugar is objectionable to some vegans due to the way it is processed).

    No food is allowed in the brewing or bottling area at any time, ever. 
    
    Caramel made from rice syrup to remain vegan.
    
   `,
    description4: ` Note: Moonshrimp beer does not contain actual shrimp."`,
    country: "USA",
    state: "Oregon",
    stateCode: "OR",
    city: "Portland",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF brewery	",
    image: "images/companies/moonshrimp-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.moonshrimpbrewing.com/beers",
  },
  {
    id: "e29",
    title: "Mutantis Brewery & Bottle Shop",
    website_url: "https://mutantis.beer/",
    insta_url: "https://www.instagram.com/mutantisbeer/",
    fb_url: "https://www.facebook.com/mutantisbeer/",
    untappd_url: "https://untappd.com/MutantisBreweryBottleShop",
    founded: "2019",
    description: `
    In their own words: "Mutantis Brewery & Bottle Shop was founded in 2019 in the most oversaturated 
    gluten-free beer city in the world: Portland, OR. We’re a scrappy little operation with a singular purpose: bring people together to geek out 
    about gluten-free beer!
    
    For us, that means an endless quest to explore and innovate in brewing, showcasing an 
    ever-changing mix of underrepresented styles and hot new hype brews borrowed from the barley world. 
    But it also means including and supporting people and communities who are underrepresented 
    and under-served by the larger craft brewing industry.`,
    description2: `    Not only are all of our beers naturally gluten-free, they are also soy-free, oat-free, 
    peanut-free, cane sugar-free, and vegan! We also make sure to always have at least one beer 
    available that is corn-free, one that is rice-free, and one that is millet-free for those with 
    additional grain sensitivities.`,
    description3: `    We’re a trans & queer worker-owned business with no outside investors, venture capital, or 
    bank financing. Our taproom is a queer-positive, trans-inclusive feminist space. 
    Whenever possible, we donate proceeds to progressive organizations, 
    with our most recent donations going to the National Network of Abortion Funds and Free Geek.`,
    description4: `    We also recognize that as a white-owned business in a historically a black neighborhood, 
    that it is not enough to simply welcome the BIPOC community into our space. 
    We are constantly looking for ways to counteract the trend of gentrification and 
    support the BIPOC community in whatever ways we can."`,
    country: "USA",
    state: "Oregon",
    stateCode: "OR",
    city: "Portland",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF brewery and bottleshop with taproom",
    image: "images/companies/mutantis-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://mutantis.beer/beers",
  },
  {
    id: "e30",
    title: "Necromantic Brew Co.",
    website_url: "http://www.necromanticbrewco.com/",
    insta_url: "https://www.instagram.com/necromanticbrewco/",
    fb_url: "https://www.facebook.com/necromanticbrewco",
    untappd_url: "https://untappd.com/w/necromantic-brew-co/531269",
    founded: "2020",
    description: `In their own words: "Attention all horror-lovin’ gals and ghouls! 
    Necromantic Brew Co., a horror-movie themed brewery, will host fun & unique events, 
    including special celebrity guests. 
    We harness the power of the ancient grains to make great tasting gluten free beer. 
    We are proud to be the ONLY dedicated gluten free brewery with a taproom in NY!"`,
    description2: ``,
    description3: ``,
    description4: ``,
    country: "USA",
    state: "New York",
    stateCode: "NY",
    city: "Farmingdale",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF production brewery",
    image: "images/companies/necro-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "http://www.necromanticbrewco.com/",
  },
  {
    id: "e31",
    title: "NEFF Brewing",
    website_url: "https://www.neffbrewing.com/",
    insta_url: "https://www.instagram.com/neffbrewing/",
    fb_url: "https://www.facebook.com/NEFFBrewing",
    untappd_url: "https://untappd.com/NewEraFineFermentations",
    founded: "2018",
    description: `In their own words: "NEFF Brewing is a family owned business, founded by father & son team, Jon & Jonathan Neff. Their brewing venture began when Jonathan was diagnosed with celiacs disease in 2012. After he was told that he could no longer drink “regular” beer with out having an allergic reaction, Jonathan began his search for quality, craft, gluten-free beer. Disappointed with what was available in the market, Jonathan utilized his background in chemistry & engineering and began his adventure into homebrewing of gluten-free beers.`,
    description2: `NEFF Brewing is proud to serve the greater Tulsa area and beyond. Located in the national historic building known as “The Dock,” we are smack dab in the middle of downtown Tulsa’s Blue Dome and East Village Districts. With a beautiful art-deco taproom and large covered patio for outdoor seating, NEFF Brewing is a craft beer destination in Tulsa.`,
    description3: `Since opening in 2018 NEFF Brewing has won awards for both it’s beer and it’s food, both judged against a gluten-full competition. NEFF Brewing crafts beers which are naturally gluten-free, specializing in brewing with new types of artisan malts of millet, buckwheat, rice, & quinoa, creating delicious beers that are “Brewed For Everyone.`,
    description4: `Come visit us at 321 S. Frankfort Avenue, just south of the BoxYard! Cheers!"

    `,
    country: "USA",
    state: "Oklahoma",
    stateCode: "OK",
    city: "Tulsa",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/neff-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.neffbrewing.com/our-beers/",
  },
  {
    id: "e13",
    title: "Brewery NYX",
    website_url: "https://www.brewerynyx.com/",
    insta_url: "https://www.instagram.com/brewerynyx/",
    fb_url: "https://www.facebook.com/BreweryNyx",
    untappd_url: "https://untappd.com/BreweryNyx",
    founded: "2021",
    description: `
    Grand Rapids has no shortage of beer for enthusiasts, but for the gluten-free it can feel like wandering through a desert with nothing to drink. 
    Brewery Nyx, Michigan’s first dedicated gluten-free brewery and facility, was created to bring taste, better ingredients, joy and comradery back to the beer experience for everyone.
     
      `,
    description2: `From IPAs to lagers to barrel-aged stouts, Brewery Nyx brings those who love beer but can’t enjoy it, 
    back into the fold.`,
    country: "USA",
    state: "Michigan",
    stateCode: "MI",
    city: "Grand Rapids",
    region: "North America",
    flag: "US",
    status: "dedicated",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/nyx-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.bierlybrewing.com/our-beers/",
  },
  {
    id: "e32",
    title: "O'Brien Beer",
    website_url: "https://www.rebellionbrewing.com.au/",
    insta_url: "https://www.instagram.com/obrienbeer/",
    fb_url: "https://www.facebook.com/OBrienBeer/",
    untappd_url: "https://untappd.com/OBrienBeer",
    founded: "2005",
    description: `In their own words: "John O’Brien is a legend of Australia’s beer industry.  In 2003, he dreamed of producing a great tasting beer that could be enjoyed by everyone, free from the ill effects of mass-produced wheat and barley.`,
    description2: `Upon blending the unique aromas and flavours offered by ancient grains such as sorghum and millet, John realised he needed to modify the standard brewing process and equipment.  For years he worked with local Aussie farmers to produce the right malted ancient grains and through extensive trial and error (and a fair bit of tasting!), he created his masterpiece!`,
    description3: `Since that first commercial brew launched in August 2005, O’Brien has won over 40 local and international awards, making it Australia’s most awarded gluten free beer."`,
    description4: ``,
    country: "Australia",
    state: "Victoria",
    stateCode: "VIC",
    city: "Wendouree",
    region: "Oceania",
    flag: "AU",
    status: "",
    company_type: "Dedicated GF production brewery",
    image: "images/companies/obrien-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.rebellionbrewing.com.au/shop/",
  },
  {
    id: "e33",
    title: "Otherwise Brewing",
    website_url: "https://www.otherwisebrewing.com/",
    insta_url: "https://www.instagram.com/otherwisebrewing/",
    fb_url: "https://www.facebook.com/otherwisebrewing",
    untappd_url: "https://untappd.com/OtherwiseBrewing",
    founded: "2021",
    description: `In their own words: "Founded in the spirit of discovery.
    
    `,
    description2: `    With all the creativity in today’s craft beer scene, why is almost every beer still made with the same mass-produced, commodity barley? What happens if we make beer without using barley at all?
    `,
    description3: `    Delicious things happen, that’s what.
    `,
    description4: `
    In fact, there are so many good reasons to take beer beyond barley that we decided to launch an entire brewery around it!"`,
    country: "USA",
    state: "California",
    stateCode: "CA",
    city: "San Francisco",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF brewery	",
    image: "images/companies/otherwise-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.otherwisebrewing.com/beers",
  },
  {
    id: "e34",
    title: "Red Leaf Gluten Free Brewing",
    website_url: "https://linkin.bio/redleafgfbrewing",
    insta_url: "https://www.instagram.com/redleafgfbrewing/",
    fb_url: "https://www.facebook.com/redleafgfbrewing/",
    untappd_url: "https://untappd.com/RedLeafGlutenFreeBrewing",
    founded: "2019",
    description: `In their own words: "Vermont's Dedicated Gluten-Free Brewery.
    Smuggled to the Notch since 2019."`,
    description2: ``,
    description3: ``,
    description4: ``,
    country: "USA",
    state: "Vermont",
    stateCode: "VT",
    city: "Jeffersonville",
    region: "North America",
    flag: "US",
    status: "",
    company_type: "Dedicated GF brewery with taproom",
    image: "images/companies/redleaf-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://linkin.bio/redleafgfbrewing",
  },
  {
    id: "e35",
    title: "TWØBAYS Brewing Co.",
    website_url: "https://www.twobays.beer/",
    insta_url: "https://www.instagram.com/twobaysbeer/",
    fb_url: "https://www.facebook.com/twobaysbeer",
    untappd_url: "https://untappd.com/TWOBAYS",
    founded: "2018",
    description: `In their own words: "Whether you miss heading to the pub with friends, or cracking a tinnie with family, we're brewing great gluten free beer that's safe for all to enjoy – without compromise. `,
    description2: `In order to journey through a new world of beer that everyone can explore, we built a dedicated gluten free brewery. And it's not just about accessing quality beer, it's about the whole experience; from the flavour to the look, feel and smell – and not forgetting great company to share it in.`,
    description3: `Proudly situated in Dromana amongst Victoria's great Mornington Peninsula breweries, we are Australia's first dedicated gluten free Brewery and Taproom. "`,
    description4: ``,
    country: "Australia",
    state: "Victoria",
    stateCode: "VIC",
    city: "Dromana",
    region: "Oceania",
    flag: "AU",
    status: "",
    company_type: "Dedicated GF production brewery with taproom",
    image: "images/companies/twobays-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.twobays.beer/pages/gluten-free-beer",
  },
  {
    id: "e37",
    title: "Port Rexton Brewing",
    website_url: "https://www.portrextonbrewing.com/",
    insta_url: "https://www.instagram.com/portrextonbrew/",
    fb_url: "https://www.facebook.com/portrextonbrew/",
    untappd_url: "https://untappd.com/PortRextonBrewingCompany",
    founded: "2020",
    description: `In their own words: "We're a small craft brewery located in Port Rexton, Newfoundland with a taproom open year round!"`,
    description2: ``,
    description3: ``,
    description4: ``,
    country: "Canada",
    state: "Newfoundland",
    stateCode: "NL",
    city: "Port Rexton",
    region: "North America",
    flag: "CA",
    status: "",
    company_type: "Separate pilot-sized brewery fully dedicated to gluten free brewing",
    image: "images/companies/portrexton-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.portrextonbrewing.com/",
  },

  // {
  //   id: "e35",
  //   title: "",
  //   website_url: "",
  //   insta_url: "",
  //   fb_url: "",
  //   untappd_url: "",
  //   founded: "",
  //   description: `In their own words: ""`,
  //   description2: ``,
  //   description3: ``,
  //   description4: ``,
  //   country: "",
  //   state: "",
  //   city: "",
  //   region: "",
  //   status: "",
  //   company_type: "",
  //   image: "images/companies/",
  //   isFeatured: true,
  //   taproom_blurb: "",
  //   taproom_url: "",
  // },

  
];



export function getCompanyById(id) {
  return companies.find((company) => company.id == id);
}

export function getCompanyByCountry(country) {
  return companies.find((company) => company.country == country);
}

export function getAllCompanies() {
  return companies;
}
