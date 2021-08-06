import "./article-item.js";
import article from "./article.js";

const containerElements = document.querySelector(".container");

const articleItemElements = document.createElement("article-item");
articleItemElements.article = article

containerElements.appendChild(articleItemElements);