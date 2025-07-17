const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.getElementById("slider");
let current = 0;

// const showNewsold = (index) => {
//   const news = topNews[index];
//   slider.innerHTML = `
//     <img src="${news.urlToImage}" alt="${news.title}" class="w-full h-64 object-cover rounded-t-lg"/>
//     <div class="p-4 bg-[#fdf0d5]">
//       <h3 class="text-xl font-semibold mb-2 text-gray-900">${news.title}</h3>
//       <p class="text-gray-700 text-sm">${news.description}</p>
//     </div>
//   `;
// };

const createElement = (tag, classes) => {
  const el = document.createElement(tag);
  classes.forEach((className) => {
    el.classList.add(className);
  });
  return el;
};

const elementsAppender = (parent, children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

const showNews = (data, index) => {
  const news = data[index];

  const wraper = createElement("div", []);
  const image = createElement("img", [
    "w-full",
    "h-64",
    "object-cover",
    "rounded-t-lg",
  ]);
  image.src = news?.urlToImage;
  image.alt = news?.title;

  const card = createElement("div", ["p-4", "bg-[#fdf0d5]"]);
  const header = createElement("h3", [
    "text-xl",
    "font-semibold",
    "mb-2",
    "text-gray-900",
  ]);
  header.innerHTML = news.title;
  const paragraph = createElement("p", ["text-gray-700", "text-sm"]);
  paragraph.innerHTML = news.description;

  elementsAppender(card, [header, paragraph]);
  elementsAppender(wraper, [image, card]);

  return wraper;
};

const categoryrender = (category, categoryclass) => {
  const classes = document.querySelector(`.${categoryclass}`);
  classes.innerHTML = "";

  newsData[category].forEach((news) => {
    const card = createElement("div", ["news-card"]);
    const image = createElement("img", []);
    image.src = news.urlToImage;
    image.alt = news.title;
    const title = createElement("h4", []);
    title.textContent = news.title;
    const paragraph = createElement("p", []);
    paragraph.textContent = news.description;
    elementsAppender(card, [image, title, paragraph]);
    classes.appendChild(card);
  });
};

categoryrender("politics", "politics-news");
categoryrender("tech", "tech-news");
//     const card = document.createElement('div');
//     card.className = 'news-card';

//     card.innerHTML = `
//         <img src="${news.urlToImage}" alt="${news.title}">
//         <h4>${news.title}</h4>
//         <p>${news.description}</p>
//         `;
//     classes.appendChild(card);
//   });
// };

const blogrender = (blogs, blogclass) => {
  const classes = document.querySelector(`.${blogclass}`);
  classes.innerHTML = "";
  blogs.forEach((blog) => {
    const card = createElement("div", ["news-blog"]);
    const image = createElement("img", []);
    image.src = blog.urlToImage;
    image.alt = blog.title;
    const title = createElement("h4", []);
    title.textContent = blog.title;
    const paragraph = createElement("p", []);
    paragraph.textContent = blog.description;
    const button = createElement("button", ["read-more"]);
    button.textContent = "Read More and Give Your Opinion";
    elementsAppender(card,[image,title,paragraph,button])
    classes.appendChild(card)
  });
};
blogrender(topBlogs, 'blog-news');

//     const card = document.createElement('div');
//     card.className = 'news-blog';

//     card.innerHTML = `
//       <img src="${blog.urlToImage}" alt="${blog.title}">
//       <h4>${blog.title}</h4>
//       <p>${blog.description}</p>
//       <button class="read-more">Read More and Give Your Opinion</button>
//     `;
//     classes.appendChild(card);
//   });
// };
// blogrender(topBlogs, 'blog-news');

prev.addEventListener("click", () => {
  current = current === 0 ? topNews.length - 1 : current - 1;
  const wrapper = showNews(topNews, current);
  slider.innerHTML = "";
  elementsAppender(slider, [wrapper]);
});

next.addEventListener("click", () => {
  current = current === topNews.length - 1 ? 0 : current + 1;
  const wrapper = showNews(topNews, current);
  slider.innerHTML = "";
  elementsAppender(slider, [wrapper]);
});

const wrapper = showNews(topNews, current);

elementsAppender(slider, [wrapper]);
