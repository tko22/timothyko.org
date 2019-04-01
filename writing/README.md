# Timothy Ko's Writing Blog

Uses Gatsby and MDX. Modified from [Gatsby Starter Blog Mdx](https://github.com/hagnerd/gatsby-starter-blog-mdx).
Served under `https://timothyko.org/writing`. 

A little hack to use Zeit Now and have this blog serve under `/writing` is by putting all blog content inside `/content/blog/writing` instead of `/content/blog`. This is so all posts would have the similar link `/writing/[blog-post-name]` instead of `/[blog-post-name]`, which wouldn't exist.

To run in development:
```
yarn
yarn dev
```
