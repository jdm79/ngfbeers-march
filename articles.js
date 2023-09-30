// import { func } from "prop-types";

const articles = [
  {
    id: "csiro-paper-1",
    title: "MDPI Journal",
    author: "CSIRO, Edith Cowan University",
    url: "https://www.mdpi.com/2304-8158/12/17/3252",
    date: "29 August 2023",
    headline:
      "Low Gluten Beers Contain Variable Gluten and Immunogenic Epitope Content",
    country: "",
    image: "images/articles/mdpi-logo.png",
    isFeatured: true,
  },
  {
    id: "abc-article",
    title: "abc",
    author: "Genelle Weule",
    url: "https://www.abc.net.au/news/science/2018-12-15/looking-for-a-low-gluten-beer-heres-what-you-need-to-know/10562248",
    date: "14 December 2018",
    headline: "Looking for a low-gluten beer? Here's what you need to know",
    country: "",
    image: "images/articles/abc-logosvg.png",
    isFeatured: true,
  },
  {
    id: "forbes-lemonick",
    title: "A New Test",
    author: "Sam Lemonick",
    url: "https://www.forbes.com/sites/samlemonick/2017/11/01/a-new-test-to-make-sure-your-beer-is-gluten-free/#102cca301981",
    date: "1 November 2017",
    headline: "A New Test To Make Sure Your Beer Is Gluten Free",
    country: "",
    image: "images/articles/forbes-logo.png",
    isFeatured: true,
  },
  // {
  //   id: "canadian-celiac-assoc",
  //   title: "canada celiac assoc",
  //   url: "",
  //   date: "",
  //   headline: "THIS IS THE HEADLINE",
  //   country: "",
  //   image: "images/articles/forbes-lemonick.jpg",
  //   isFeatured: true,
  // },
  // {
  //   id: "zero-tolerance-page",
  //   title: "zero tolerance",
  //   url: "",
  //   date: "",
  //   headline: "THIS IS THE HEADLINE",
  //   country: "",
  //   image: "images/articles/forbes-lemonick.jpg",
  //   isFeatured: true,
  // },
  // {
  //   id: "altgrain-article",
  //   title: "altgrain",
  //   url: "",
  //   date: "",
  //   headline: "THIS IS THE HEADLINE",
  //   country: "",
  //   image: "images/articles/forbes-lemonick.jpg",
  //   isFeatured: true,
  // },
  // {
  //   id: "nhs-coeliac-health-risks",
  //   title: "nhs coeliac risks",
  //   url: "",
  //   date: "",
  //   headline: "THIS IS THE HEADLINE",
  //   country: "",
  //   image: "images/articles/forbes-lemonick.jpg",
  //   isFeatured: true,
  // },
];

export function getArticleById(id) {
  return articles.find((article) => article.id == id);
}

export function getAllArticles() {
  return articles;
}
