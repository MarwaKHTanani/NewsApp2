window.addEventListener("DOMContentLoaded", () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const slider = document.getElementById("slider");
  let current = 0;

  const showNews = (index) => {
    const news = topNews[index];
    slider.innerHTML = `
    <img src="${news.urlToImage}" alt="${news.title}" class="w-full h-64 object-cover rounded-t-lg"/>
    <div class="p-4 bg-[#fdf0d5]">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">${news.title}</h3>
      <p class="text-gray-700 text-sm">${news.description}</p>
    </div>
  `;
  };
  const categoryrender = (category, categoryclass) => {
    const classes = document.querySelector(`.${categoryclass}`);
    classes.innerHTML = "";
    newsData[category].forEach((news) => {
      const card = document.createElement("div");
      card.className = "news-card";

      card.innerHTML = `
        <img src="${news.urlToImage}" alt="${news.title}">
        <h4>${news.title}</h4>
        <p>${news.description}</p>
        `;
        classes.appendChild(card)
    });
  };
  categoryrender('politics','politics-news')
  categoryrender('tech','tech-news')


  const blogrender = (blogs, blogclass) => {
    const classes = document.querySelector(`.${blogclass}`);
    classes.innerHTML = "";
    blogs.forEach(blog => {
      const card = document.createElement("div");
      card.className = "news-blog";

        card.innerHTML = `
      <img src="${blog.urlToImage}" alt="${blog.title}">
      <h4>${blog.title}</h4>
      <p>${blog.description}</p>
      <button class="read-more">Read More and Give Your Opinion</button>
    `;
        classes.appendChild(card)
    });
  };
  blogrender(topBlogs,'blog-news')


  prev.addEventListener("click", () => {
    current = current === 0 ? topNews.length - 1 : current - 1;
    showNews(current);
  });
  next.addEventListener("click", () => {
    current = current === topNews.length - 1 ? 0 : current + 1;
    showNews(current);
  });
  showNews(current);
});
