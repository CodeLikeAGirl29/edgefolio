/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { TfiHome, TfiPencilAlt } from "react-icons/tfi";
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from "react-icons/sl";

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: "Home",
    slug: "/",
    Icon: TfiHome,
  },
  {
    name: "About",
    slug: "/about",
    Icon: SlUser,
  },
  {
    name: "Services",
    slug: "/services",
    Icon: SlBriefcase,
  },
  {
    name: "Articles",
    slug: "/blog",
    Icon: TfiPencilAlt,
  },
  {
    name: "Projects",
    slug: "/projects",
    Icon: SlTrophy,
  },
  {
    name: "Contact",
    slug: "/contact",
    Icon: SlEnvolope,
  },
];

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: "Twitter",
    url: "https://www.twitter.com/dev_lindseyk",
    Icon: IoLogoTwitter,
  },
  {
    name: "Github",
    url: "https://www.github.com/codelikeagirl29",
    Icon: IoLogoGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lindsey-howard",
    Icon: IoLogoLinkedin,
  },
];

/**
 * General configurations
 */

export const config = {
  dateLocale: "en-US",
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "CST",
  },
  convertKit: {
    tipUrl: "https://fantastic-mover-3439.ck.page/products/blog",
  },
  contactForm: {
    inputs: require("./content/contact-form.json"),
    recipient: "RECIPIENT@EXAMPLE.com",
    sender: "SENDER@EXAMPLE.com",
    subject: "EMAIL NOTIFICATION SUBJECT",
  },
};

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: "public",
  pagesDir: "content",
  fileExt: ".md",
  collections: ["/blog", "/projects"],
  remarkPlugins: [],
  rehypePlugins: [],
};

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000",
  authorName: "Lindsey Howard",
  siteName: "edgeFolio",
  defaultTitle: "Lindsey Howard Site",
  titleTemplate: "Lindsey Howard | %s",
  description: "A short description goes here.",
  email: "lindseykdev@gmail.com",
  locale: "en_US",
  twitter: {
    handle: "@dev_lindseyk",
    site: "@site",
    cardType: "summary_large_image",
  },
};
