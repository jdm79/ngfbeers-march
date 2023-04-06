const companies = [
  {
    id: "e1",
    title: "AltgrainCo",
    website_url: "https://altgrain.co.uk/",
    insta_url: "https://www.instagram.com/altgrainco/",
    fb_url: "https://www.facebook.com/profile.php?id=100076147206544",
    untappd_url: "https://untappd.com/AltGrainCo",
    description:
      "AltGrainCo brew and supply alternative, NGCI craft-beer and beer brewing ingredients to customers wishing to avoid gluten altogether.",
    country: "UK",
    state: "Essex",
    city: "",
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
    untappd_url: "https://untappd.com/GreensGlutenFree",
    description:
      "One of the original gluten-free brewers, with a mix of gluten-reduced and gluten-free beers in their range. Although a British company, the beers themselves are brewed in Belgium, and their IPA is an award-winning favourite in the naturally gluten-free beer community here in Europe (and elsewhere).",
    country: "UK",
    state: "Chesire",
    city: "Stockport",
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
    untappd_url: "https://untappd.com/JimbrewBrewingCompany",
    description: `JimBrew Brewing is a new brewery - and the first NGCI taproom in the UK. 
                    Based in Preston, they use only sustainable brewing methods to produce beers 
                    that are not only vegan, but naturally gluten-free as well. 
                    They follow the philosophy of targeting a non-coeliac audience as well as coeliacs,
                    as gluten-free beer should indeed be good enough for anyone to drink!`,
    country: "UK",
    state: "Lancashire",
    city: "Preston",
    region: "EU",
    status: "dedicated",
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
    description: `
      The Moulin des Moines brand was created in 1970 on the very site of a 13th century mill founded by Cistercian monks, in the heart of the Alsatian countryside, on the banks of the Zorn river. Today, Nicolas and Pascal Meckert continue their parents' commitment by guiding the new generations towards an ever more organic world with ever more vitality!`,
    country: "France",
    state: "Bas Rhin",
    city: "Krautwiller",
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
    untappd_url: "https://untappd.com/RiedenburgerBrauhaus",
    description: `Brewed exclusively from millet malt. The first "gluten-free" beer from Bavaria.
        
        Finest ecological specialty brewed only with organic millet malt and organic hops.
        
        Thanks to our long brewing experience, we have succeeded in brewing a very tasty, beery drink from exclusively natural, ecological and GMO-free raw materials.
        Guaranteed gluten-free. Guaranteed organic. Guaranteed good taste.`,
    country: "Germany",
    state: "Bavaria",
    city: "Riedenburg",
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
    untappd_url: "https://untappd.com/w/schnitzer-brau/8772",
    description: `Schnitzer Bräu is gluten-free. We only use naturally gluten-free raw materials.`,
    country: "Germany",
    state: "Baden-Württemberg",
    city: "Offenburg",
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
    untappd_url: "https://untappd.com/w/stirone-barleyfree/430197",
    description: `
      The legal definition of beer in Italy, unlike many other countries, provides that it is made exclusively from barley or wheat. With the transformation of sorghum we can produce a "fermented drink". Our choice is demanding and particularly courageous, but the qualities and advantages of our product have led us to accept the challenge. It is a drink with a great personality that is appreciated by enthusiasts, who discover a new taste to compare with those already known. It is an allergen-free drink that can be consumed by everyone (who can consume alcoholic beverages).`,
    country: "Italy",
    state: "Parma",
    city: "Fidenza",
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
    untappd_url: "https://untappd.com/SuspectBrewing",
    description: `A dedicated naturally gluten-free micro brewery in Edinburgh, producing Circuit Breaker, a clean and crisp lager.`,
    country: "UK",
    state: "Lothian",
    city: "Edinburgh",
    region: "EU",
    status: "dedicated",
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
    description: `ALT Brew is a craft nanobrewery and taproom located on the east side of Madison, WI (USA). They take pride in designing and brewing a wide variety of beer styles all without using barley, wheat, or rye. From fresh double dry-hopped double IPAs to delightfully drinkable blonde ales to huge bourbon barrel aged stouts and everything in between, ALT Brew offer 100% gluten-free beer that all beer drinkers can enjoy.`,
    country: "USA",
    state: "Wisconsin",
    city: "Madison",
    region: "North America",
    status: "dedicated",
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
    description: `Naturally Gluten-Free Ingredients. Naturally Gluten-Free Beer. Dedicated Gluten-Free Facility. 

    Auroch's believe everyone should be able to experience the memorable moments in life with friends and family - all while enjoying great beer. They want to bring people back to the table. Beer drinkers shouldn't have to choose between exceptional taste and a safe, gluten-free craft beer.
    
    Their founders are life-long friends who are both medically required to follow a gluten-free diet.  Aurochs Brewing Company was born out of necessity and is fueled by passion to drink, share and enjoy a craft beer, for any occasion, with the important people in your life. `,
    country: "USA",
    state: "Pennsylvania",
    city: "Emsworth",
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
    untappd_url: "https://untappd.com/BeliveauFarmBrewery",
    description: `Beliveau Farm are passionate about brewing and their goal is to harness the power of ancient grains to produce beers in both classic and unique styles. Beliveau Brewery opened in September 2019 and currently stands as Virginia's only Gluten-Free brewery. Their beers are made from malted rice, millet and buckwheat, and their brewery is a completely GF facility. Come check out their seasonal rotating taps, enjoy a beer as you relax and savor their scenic property.`,
    country: "USA",
    state: "Virginia",
    city: "Blacksburg",
    region: "North America",
    status: "dedicated",
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
    description: `
      Bierly Brewing began brewing commercially in 2016 as Oregon’s second gluten-free brewery.
      In their own words: "At Bierly Brewing, our passion is to provide great gluten-free craft beer and delicious food in a dedicated gluten-free facility while making positive connections with our community. We are proud to be an inclusive space, and we stand with our LGBTQIA+ and BIPOC community members."
      `,
    country: "USA",
    state: "Oregon",
    city: "McMinnville",
    region: "North America",
    status: "dedicated",
    image: "images/companies/bierly-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.bierlybrewing.com/our-beers/",
  },
  {
    id: "e13",
    title: "Brewery NYX",
    website_url: "https://www.brewerynyx.com/",
    insta_url: "https://www.instagram.com/brewerynyx/",
    fb_url: "https://www.facebook.com/BreweryNyx",
    untappd_url: "https://untappd.com/BreweryNyx",
    description: `
    Grand Rapids has no shortage of beer for enthusiasts, but for the gluten-free it can feel like wandering through a desert with nothing to drink. 
    Brewery Nyx, Michigan’s first dedicated gluten-free brewery and facility, was created to bring taste, better ingredients, joy and comradery back to the beer experience for everyone.
     From IPAs to lagers to barrel-aged stouts, Brewery Nyx brings those who love beer but can’t enjoy it, back into the fold.
      `,
    country: "USA",
    state: "Michigan",
    city: "Grand Rapids",
    region: "North America",
    status: "dedicated",
    image: "images/companies/nyx-logo.png",
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
    description: `
    Nested in the scenic and lively Jack London Square district of Oakland, surrounded by diverse landscapes and culture in every direction, spoiled with adventure to California’s dynamic environment. 
    In their own words: "Simply put, we believe in craft beer for all. With millions of Americans living with gluten intolerances, allergies, and gluten-free lifestyles, many are deprived from enjoying the simple pleasure of having a beer. We’re here to change that, and are uncomprimising on ingredients, flavor.

    What ingredients do you use?
    The ingredients we use have been found in beer recipes for thousands of years all around the world. Buckwheat, millet, and rice make up the majority of our malts, but we also use oats, maize, and other ingredients that do not contain any gluten."
    `,
    country: "USA",
    state: "California",
    city: "Oakland",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words: "At Burning Brothers, we believe the only way to brew great gluten-free beer is to make it in a dedicated gluten-free facility.  This means our beer is crafted using completely gluten-free grains, never containing wheat, barley or rye.  We don’t use special filters, enzymes or other gluten-free gimmicks.  Instead, we brew great-tasting beers that you KNOW are truly gluten-free.

    Burning Brothers, gluten-free from grain to glass.
    
    Don’t fear the beer."
    `,
    country: "USA",
    state: "Minnesota",
    city: "Saint Paul",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words: "We're a very pleasant and scenic drive through the hills and hollers of McDonald County, Missouri. Just north of Pea Ridge, Arkansas.
    We pride ourselves on our large selection of Gluten Free brews.
We typically have at least 6 of our own unique brews on tap to choose from. And speaking of non-drinkers, we keep our own handmade non-alcoholic
Root Beer on tap.

Yes, we are a FAMILY & PET-FRIENDLY establishment!"

    
    `,
    country: "USA",
    state: "Missouri",
    city: "Seligman",
    region: "North America",
    status: "dedicated",
    image: "images/companies/darkhills-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://www.darkhillsbrew.com/gallery.html",
  },
  {
    id: "e17",
    title: "Divine Science Brewing",
    website_url: "https://divinesciencebrewing.com/",
    insta_url: "https://www.instagram.com/divinesciencebrewing/?hl=en",
    fb_url: "https://www.facebook.com/divinesciencebrewing/",
    untappd_url: "https://untappd.com/Divine_Science",
    description: `
  
    In their own words: "All of our California craft beers are made from premium malted gluten-free grains like millet, buckwheat, rice, and lentils. We focus on ingredients so you don’t have to worry.
    We are sold at Total Wine & More, BevMo across California – located in their gluten-free section! We never make anything that is less than 0ppm. Gluten-reduced is not allowed in this brewery. We have the highest standards because your safety matters! Join us for a pint at the tasting room and try the following beers along with our small batch special releases."
    
    `,
    country: "USA",
    state: "California",
    city: "Tustin",
    region: "North America",
    status: "dedicated",
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
    description: `
  
    In their own words: "While barley is highly regarded in the world of beer, corn is often disregarded as a brewing grain and even, at times, treated with disdain. However, the history of brewing with corn goes back at least as far as that for barley, and is rooted right here in the Western Hemisphere. At Dos Luces Brewery, we have explored the history behind some of the many styles of beer traditionally brewed with corn, and have embraced corn as our core grain. The “Dos” Luces (Two Lights) represent our two core types of beer, a corn-based Chicha and a corn and maguey-based Pulque.

    Dos Luces. The sun and the moon. Inti and Metztli. Chicha and Pulque. We chose the name Dos Luces because it represents the duality of light – While you might be tempted to imagine this as light and darkness, we prefer to consider the bright light of day in contrast to the brightest beacon of light at night. Call it divine inspiration or simply the accumulation of ideas within two swirling brains, Dos Luces represents the idea that there is always light when you look for it."
    `,
    country: "USA",
    state: "Colorado",
    city: "Denver",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words: 
    "After more than four years of development and some pivotal advice along the way from a few people in the brewing and rice industry, I have created several styles of ales and lagers. The ales and beers I produce are naturally malted and brewed using California rice, hops, water and gluten-free yeast. I have established a gluten-free facility in order to eliminate any chance of cross-contamination. In contrast, many of the currently available gluten-free beers are produced in breweries that also brew traditional barley and wheat beers."
    `,
    country: "USA",
    state: "California",
    city: "Chico",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words:
    "Our brewery is a dedicated gluten free facility. That means no gluten passes through our doors. We source our ingredients from suppliers that sell certified gluten free ingredients, or (if not certified) can show us thier tests to prove their intensive cleaning and handling have resulted in no cross contamination. Even though we use all gluten free ingredients, we take our gluten free claim very seriously and test each and every batch we produce for gluten contamination, just to be triple sure. You may notice lot numbers printed on each of our cans, this is so we can track the batches tested for gluten. It is ultimately our responsibility to make sure we are producing a truly gluten free product for you to consume, that’s why we test all our beer before it leaves the brewery."
    `,
    country: "USA",
    state: "Oregon",
    city: "McMinnville",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words:
    "We are on a mission to show the world the radical flavors that are only possible by reinventing beer from the grain up. With artisan malts of unusual grains like millet, buckwheat, and heirloom rice, combined with hops from small family farms, our beers are crafted to transcend the previous limits of GF beer. "
    `,
    country: "USA",
    state: "WA",
    city: "Seattle",
    state: "Washington",
    city: "Seattle",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words:
    "In 2010, the idea of brewing a gluten-free beer in Quebec was first discussed by two long-time friends and entrepreneurs. One of the co-founders, who had been living with gluten intolerance for several years, remained dissatisfied with the gluten-free beer on the market. He and his partner then saw a unique opportunity to meet a growing need and to realize what both of them had long dreamed of: running their own business. The microbrewery enjoyed its very first international success at the 2012 World Beer Cup, where Glutenberg beers won all three medals in the “Gluten-Free Beer” category at the world’s most prestigious brewing competition. Currently with a team of 10 brand ambassadors working in both Canada and the United States, the company plans to maintain its rapid growth rate in the coming years and continue to brew the best gluten-free beers available."
    `,
    country: "Canada",
    state: "Québec",
    city: "Montréal",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words:
    "Crafted from carefully sourced ingredients and brewed in a dedicated gluten-free facility in Kelowna, BC, Grey Fox Brewing aims to challenge the perception of gluten-free beer through uncompromised craftsmanship and modern brewing techniques. True gluten-free beer is crafted by carefully sourcing ingredients and brewing in a dedicated facility to provide the full craft beer experience without the gluten content. We choice select a combination of millet and rice along with hops and yeast, to produce excellent gluten-free beer true to the craft drinking experience."
    `,
    country: "Canada",
    state: "British Colombia",
    city: "Kelowna",
    region: "North America",
    status: "dedicated",
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
    description: `
    In their own words:
"A dedicated gluten-free brewery & gastropub,
making 100% gluten-free beer & food. Ground Breaker opened in 2011 as the first dedicated & certified gluten-free brewery in the United States. Our approach to making superior gluten-free craft beer is a simple one: use only premium ingredients which are naturally gluten-free."

`,
    country: "USA",
    state: "Oregon",
    city: "Portland",
    region: "North America",
    status: "dedicated",
    image: "images/companies/groundbreaker-logo.png",
    isFeatured: true,
    taproom_blurb: "",
    taproom_url: "https://groundbreakerbrewing.com/our-gluten-free-brewery",
  },
];

export function getCompanyById(id) {
  return companies.find((company) => company.id == id);
}

export function getAllCompanies() {
  return companies;
}
