// get links of recent blogs
import { blogs, thoughts,tils,projects, links } from "#site/content";
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
    .filter((blog)=>blog.slugAsParams!="aboutme")
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

export const getRecentTils = () => {
  return tils
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

export const getRecentProjects = () => {
  return projects
    .sort((a, b) => {
      const nextDate = dayjs(a.publishDate);
      const prevDate = dayjs(b.publishDate);
      return nextDate.isBefore(prevDate)
        ? 1
        : nextDate.isSame(prevDate)
        ? 0
        : -1;
    })
    .slice(0, 10);
};

export const getRecentLinks = () => {
  return links
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



