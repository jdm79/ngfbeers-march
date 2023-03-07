const companies = [
    {
      id: 'e1',
      title: 'AltgrainCo',
      website_url: "https://altgrain.co.uk/",
      insta_url: "https://www.instagram.com/altgrainco/",
      fb_url: "https://www.facebook.com/profile.php?id=100076147206544",
      description: 'AltGrainCo brew and supply alternative, NGCI craft-beer and beer brewing ingredients to customers wishing to avoid gluten altogether.',
      location: 'UK',
      region: "EU",
      image: 'images/companies/altgrain-logo.jpg',
      isFeatured: true,
      beers: [
        {
          beer_name: "Random Pale Ale",
          image_url: "random_pale_ale.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/random-pale-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "Our SILVER award winning (Free From Food Awards 2022), deliciously subtle, citra hops-forward pale ale, with a light-to-medium body and malt profile. Inspired by our American friends but demonstrating some British reserve when it comes to hops! Fermented using Norwegian yeast Kviek, achieving a very clean beer with mellow fruity esters."
        },
        {
          beer_name: "Bird Brain Session IPA",
          image_url: "birdbrain.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/bird-brain-session-ipa-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A low-haze hops-forward session IPA, providing spicy notes and a tangy bitter profile. Incredibly more-ish, so do grab a few if you're planning a session!"
        },
        {
          beer_name: "Blonde Ale",
          image_url: "blonde.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
      ]
    },
    {
      id: 'e2',
      title: "Green's Beers",
      website_url: "https://www.glutenfreebeers.co.uk/",
      insta_url: "https://www.instagram.com/greensbeers/",
      description:
        "One of the original gluten-free brewers, with a mix of gluten-reduced and gluten-free beers in their range. Although a British company, the beers themselves are brewed in Belgium, and their IPA is an award-winning favourite in the naturally gluten-free beer community here in Europe (and elsewhere).",
      location: 'UK',
      region: "EU",
      image: 'images/companies/greens-logo.png',
      isFeatured: true,
      beers: [
        {
          beer_name: "Dry Hopped Lager",
          strength: "ABV 4.0% (1.3 UNITS OF ALCOHOL PER 330ML)",
          image_url: "dry_hopped_lager.png",
          beer_url: "https://www.glutenfreebeers.co.uk/shop/product/dry-hopped-lager/",
          beer_description: `A unique bottle re-fermented naturally gluten free lager, lower in carbohydrates. Best served cold. Available in Ocado, selected retailers or buy on-line now.

          Tasting Notes
          Golden pale in colour, the nose is a mix of citrus-floral aroma sensations, clean with a light malt taste, but with hoppy aftertaste. A short clean mouth feel typical for a beer reduced in calories and carbohydrates
          
          `,
          ingredients: `Ingredients: Naturally gluten free; water, buckwheat, millet, sorghum, hops, brown rice and yeast.`
        },
        {
          beer_name: "India Pale Ale",
          strength: "ABV 5.0% (1.65 UNITS OF ALCOHOL PER 330ML)",
          image_url: "ipa.png",
          beer_url: "https://www.glutenfreebeers.co.uk/shop/product/india-pale-ale/",
          beer_description: `Bottle re-fermented and naturally gluten free, this is an elegant and classic IPA. Serve at cellar temperature. Available at Ocado, selected retailers or buy online.

          Tasting Notes
          Amber red in colour with a mix of herbal and pine aroma, a full mouth feel of the special hopping is unique for this IPA.
          
          `,
          ingredients: `Ingredients: Naturally gluten free; water, buckwheat, millet, sorghum, hops, brown rice and yeast.`
        },
        {
          beer_name: "Tripel Ale",
          strength: "ABV 8.5% (2.81 UNITS OF ALCOHOL PER 330ML)",
          image_url: "tripel_ale.png",
          beer_url: "https://www.glutenfreebeers.co.uk/shop/product/tripel-ale/",
          beer_description: `Bottle re-fermented and naturally gluten free, Triple Ale is the latest edition to our range of beers from ancient grains.

          “Tripel” is a style that was originated by Westmalle Trappist Brewery in the 1930s. Rich and full-flavoured, these are satisfying beers beloved by beer aficionados. Many breweries now produce a tripel, but a tripel made from ancient grains, without barley, is a particular accomplishment.
          
          Tasting Notes
          Light body for beer of this strength; spice and herb nose with flavours of candied fruit. Aromatic, long finish.
          
          `,
          ingredients: `Ingredients: Water, naturally gluten free ancient grains; buckwheat, millet, brown rice, sorghum, hops, yeast.`
        },
        {
          beer_name: "Dubbel Ale",
          strength: "(ABV 7.0% (2.31 UNITS OF ALCOHOL PER 330ML)",
          image_url: "dubbel_ale.png",
          beer_url: "https://www.glutenfreebeers.co.uk/shop/product/dubbel-ale/",
          beer_description: `Bottle re-fermented and naturally gluten free. The latest edition to our range of beers from ancient grains. The dubbel style originated in Belgium, possibly as a “second style” offered for sale by monastic breweries. Green’s Dubbel is the world’s first version of this style produced from ancient grains, all gluten-free ingredients.

          Tasting Notes
          In the classic dubbel fashion, a hint of dark-sugar and toffee flavour; and a traditional Belgian yeast bouquet.
          
          `,
          ingredients: `Ingredients: Water, naturally gluten free ancient grains; buckwheat, millet, brown rice, sorghum, hops, yeast.`
        },
      ]
    },
    {
      id: 'e3',
      title: "JimBrew Brewing Company",
      website_url: "https://www.jimbrew.co.uk/",
      insta_url: "https://www.instagram.com/jimbrew_brewing/",
      fb_url: "https://www.facebook.com/jimbrewbrewing",
      description: "JimBrew Brewing is the first NGCI taproom in the UK. Based up near Preston, they use only sustainable brewing methods to produce beers that are not only vegan, but naturally gluten-free as well. ",
      location: 'UK',
      region: "EU",
      image: 'images/companies/jimbrew.jpeg',
      isFeatured: true,
      beers: [
        {
          beer_name: "",
          image_url: "",
          beer_url: "",
          beer_description: "" 
        },
      ]
    },
    {
      id: 'e4',
      title: 'Riedenburger',
      website_url: "https://shop.riedenburger.de/RIEDENBURGER-Hirse-Bier-Glutenfrei",
      insta_url: "https://www.instagram.com/riedenburgerbrauhaus/",
      fb_url: "https://www.facebook.com/people/Riedenburger-Brauerei-Biergarten/100057273797653",
      description:
        `Brewed exclusively from millet malt. The first "gluten-free" beer from Bavaria.
        
        Finest ecological specialty brewed only with organic millet malt and organic hops.
        
        Thanks to our long brewing experience, we have succeeded in brewing a very tasty, beery drink from exclusively natural, ecological and GMO-free raw materials.
        Guaranteed gluten-free. Guaranteed organic. Guaranteed good taste.`,
      location: 'Germany',
      region: "EU",
      image: 'images/companies/rieden-logo.png',
      isFeatured: true,
      beers: [
        {
          beer_name: "",
          image_url: "",
          beer_url: "",
          beer_description: "" 
        },
      ]
    },
    {
      id: 'e5',
      title: 'Stirone Barley Free',
      website_url: "https://www.stirone.com/",
      insta_url: "https://www.instagram.com/stironebarleyfree/",
      fb_url: "https://www.facebook.com/Stironebarleyfree/",
      description: `Inspired by the Blanche style, it is characterized by continental hops, orange peel and spices, excellent for a refreshing break or to accompany delicate dishes. Yellow-orange color, citrus and spicy aroma, sweet taste. It is enriched with spices and orange peels`,
      location: 'Italy',
      region: "EU",
      image: 'images/companies/stirone-logo.png',
      isFeatured: true,
      beers: [
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
          beer_url: "",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
      ]
    },
    {
      id: 'e6',
      title: 'Suspect Brewing',
      website_url: "https://suspectbrewing.co.uk/",
      insta_url: "https://www.instagram.com/suspect_brewing/",
      fb_url: "https://www.facebook.com/SUSBREWING/",
      description: `Circuit breaker: our bricks and mortar. Built differently using millet and buckwheat instead of conventional barley malt. `,
      location: 'UK',
      region: "EU",
      image: 'images/companies/suspect-logo.jpg',
      isFeatured: true,
      beers: [
        {
          beer_name: "Circuit Breaker",
          image_url: "",
          beer_url: "",
          beer_description: "Circuit breaker: our bricks and mortar. Built differently using millet and buckwheat instead of conventional barley malt. " 
        },
      ]
    },
  ];

  export function getCompanyById(id) {
    return companies.find((company) => company.id == id);
  };

  export function getAllCompanies() {
    return companies;
  }