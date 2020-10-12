const getPosts = async (tag) => {
  var finalPost = "";
  const response = await fetch(`https://dev.to/api/articles?tag=${tag}`);
  const postsJson = await response.json();

  const posts = postsJson.map(async (post) => {
    const posts_titles = post.title;
    const posts_description = post.description;
    const posts_url = post.url;
    const posts_image = post.cover_image;

    finalPost +=
      `<a href="${posts_url}" target="_blank" class=article-card>` +
      (posts_image !== null
        ? `<div class="user-img"><img src="${posts_image}"></div>`
        : "") +
      `<h1>${posts_titles}</h1><h2>${posts_description}</h2></a>`;
    document.getElementById(`tag`).innerHTML = tag;
    document.getElementById(`articles`).innerHTML = finalPost;
  });
};
