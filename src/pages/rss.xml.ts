import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("posts");
  const topics = await getCollection("topics");
  return rss({
    title: "function()",
    description:
      "Arash's blog to share experiences, thoughts, and stories about tech as an individual and student.",
    site: context.site || "",
    trailingSlash: false,
    stylesheet: "/rss/styles.xsl",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/posts/${post.id}`,
      categories:
        post.data.topics?.map((topic) => {
          const topicData = topics.find((t) => t.id === topic.id);
          return topicData?.data.name || "";
        }) || [],
    })),
  });
};
