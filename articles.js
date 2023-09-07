// import { func } from "prop-types";

const articles = [
  {
    id: "elisa-issue",
    title: "elisa",
    url: "https://www.forbes.com/sites/samlemonick/2017/11/01/a-new-test-to-make-sure-your-beer-is-gluten-free/#102cca301981",
    date: "",
    headline: "The ELISA5 Test Does Not Work",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
  {
    id: "csiro-paper-1",
    title: "csiro",
    url: "https://www.forbes.com/sites/samlemonick/2017/11/01/a-new-test-to-make-sure-your-beer-is-gluten-free/#102cca301981",
    date: "",
    headline: "THIS IS THE HEADLINE",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
  {
    id: "forbes-lemonick",
    title: "A New Test",
    url: "https://www.forbes.com/sites/samlemonick/2017/11/01/a-new-test-to-make-sure-your-beer-is-gluten-free/#102cca301981",
    date: "",
    headline: "THIS IS THE HEADLINE",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
  {
    id: "abc-article",
    title: "abc",
    url: "https://www.abc.net.au/news/science/2018-12-15/looking-for-a-low-gluten-beer-heres-what-you-need-to-know/10562248",
    date: "",
    headline: "Looking for a low-gluten beer? Here's what you need to know",
    country: "",
    image: "images/articles/abc-article.jpg",
    isFeatured: true,
  },
  {
    id: "canadian-celiac-assoc",
    title: "canada celiac assoc",
    url: "",
    date: "",
    headline: "THIS IS THE HEADLINE",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
  {
    id: "zero-tolerance-page",
    title: "zero tolerance",
    url: "",
    date: "",
    headline: "THIS IS THE HEADLINE",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
  {
    id: "altgrain-article",
    title: "altgrain",
    url: "",
    date: "",
    headline: "THIS IS THE HEADLINE",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
  {
    id: "nhs-coeliac-health-risks",
    title: "nhs coeliac risks",
    url: "",
    date: "",
    headline: "THIS IS THE HEADLINE",
    country: "",
    image: "images/articles/forbes-lemonick.jpg",
    isFeatured: true,
  },
];

export function getArticleById(id) {
  return articles.find((article) => article.id == id);
}

export function getAllArticles() {
  return articles;
}
