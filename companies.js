const companies = [
    {
      id: 'e1',
      title: 'AltgrainCo',
      website_url: "https://altgrain.co.uk/",
      insta_url: "https://www.instagram.com/altgrainco/",
      description: 'AltGrainCo brew and supply alternative, NGCI craft-beer and beer brewing ingredients to customers wishing to avoid gluten altogether.',
      location: 'UK',
      image: 'images/altgrain-logo.jpg',
      isFeatured: true,
      beers: [
        {
          beer_name: "Random Pale Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194193/random_pale_ale_bezu0k.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/random-pale-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "Our SILVER award winning (Free From Food Awards 2022), deliciously subtle, citra hops-forward pale ale, with a light-to-medium body and malt profile. Inspired by our American friends but demonstrating some British reserve when it comes to hops! Fermented using Norwegian yeast Kviek, achieving a very clean beer with mellow fruity esters."
        },
        {
          beer_name: "Bird Brain Session IPA",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194866/birdbrain-slide_1024x1024_2x_sooz5f.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/bird-brain-session-ipa-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A low-haze hops-forward session IPA, providing spicy notes and a tangy bitter profile. Incredibly more-ish, so do grab a few if you're planning a session!"
        },
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
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
      image: 'images/greens-logo.png',
      isFeatured: true,
      beers: [
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
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
      image: 'images/jimbrew.jpeg',
      isFeatured: true,
      beers: [
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
      ]
    },
    {
      id: 'e4',
      title: 'Riedenberger',
      website_url: "https://shop.riedenburger.de/RIEDENBURGER-Hirse-Bier-Glutenfrei",
      insta_url: "https://www.instagram.com/riedenburgerbrauhaus/",
      description:
        `Brewed exclusively from millet malt. The first "gluten-free" beer from Bavaria.
        
        Finest ecological specialty brewed only with organic millet malt and organic hops.
        
        Thanks to our long brewing experience, we have succeeded in brewing a very tasty, beery drink from exclusively natural, ecological and GMO-free raw materials.
        Guaranteed gluten-free. Guaranteed organic. Guaranteed good taste.`,
      location: 'Germany',
      image: 'images/rieden-logo.png',
      isFeatured: true,
      beers: [
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
      ]
    },
    {
      id: 'e5',
      title: 'Stirone Barley Free',
      website_url: "https://www.stirone.com/",
      insta_url: "https://www.instagram.com/stironebarleyfree/",
      description: `Inspired by the Blanche style, it is characterized by continental hops, orange peel and spices, excellent for a refreshing break or to accompany delicate dishes. Yellow-orange color, citrus and spicy aroma, sweet taste. It is enriched with spices and orange peels`,
      location: 'Italy',
      image: 'images/stirone-logo.png',
      isFeatured: true,
      beers: [
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
      ]
    },
    {
      id: 'e6',
      title: 'Suspect Brewing',
      website_url: "https://suspectbrewing.co.uk/",
      insta_url: "https://www.instagram.com/suspect_brewing/",
      description: `Circuit breaker: our bricks and mortar. Built differently using millet and buckwheat instead of conventional barley malt. `,
      location: 'UK',
      image: 'images/suspect-logo.jpg',
      isFeatured: true,
      beers: [
        {
          beer_name: "Blonde Ale",
          image_url: "https://res.cloudinary.com/dlrwbckxi/image/upload/v1661194972/blonde-slide_1024x1024_2x_dzwtjh.jpg",
          beer_url: "https://altgrain.co.uk/collections/beer/products/blonde-ale-330ml-cans-naturally-gluten-free-pale-ale",
          beer_description: "A pleasant, craft-brewed blonde ale with a biscuit, malt forward flavour. Brewed with non gluten-containing ingredients (NGCI) to be 100% safe for coeliacs and those with intolerances to gluten. This beer is also vegan friendly." 
        }
      ]
    },
  ];

  export function getCompanyById(id) {
    return companies.find((company) => company.id == id);
  };

  export function getAllCompanies() {
    return companies;
  }