// get links of recent blogs
import { blogs, thoughts } from "#site/content";
import dayjs from "dayjs";

export const getRecentBlogs = () => {
  return blogs
    .filter((blog) => blog.published)
    .sort((a, b) => {
      const newBlogDate = dayjs(a.date);
      const prevBlogDate = dayjs(b.date);
      return newBlogDate.isBefore(prevBlogDate)
        ? 1
        : newBlogDate.isSame(prevBlogDate)
        ? 0
        : -1;
    })
    .slice(0, 10);
};

export const getRecentThoughts = () => {
  return thoughts
    .filter((thought) => thought.published)
    .sort((a, b) => {
      const nextDate = dayjs(a.date);
      const prevDate = dayjs(b.date);
      return nextDate.isBefore(prevDate)
        ? 1
        : nextDate.isSame(prevDate)
        ? 0
        : -1;
    })
    .slice(0, 10);
};
