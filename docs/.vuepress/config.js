import { defaultTheme } from "@vuepress/theme-default";
import { front_end_test } from "./sidebar/front-end_test";
import { java } from "./sidebar/java";
import { html } from "./sidebar/html";
import { git } from "./sidebar/git";
import { books } from "./sidebar/books";

export default {
  title: "TIL",
  description: "Today I Learned",
  editLink: true,
  editLinkPattern: "https://github.com/nansenho/til/",
  lastUpdated: true,
  contributors: true,
  colorModeSwitch: true,
  navbar: [],
  theme: defaultTheme({
    repo: "https://github.com/nansenho/til",
    repoLabel: "Star",
    sidebar: [front_end_test, books, git, html, java],
  }),
};
