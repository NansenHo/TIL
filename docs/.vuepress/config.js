import { defaultTheme } from "@vuepress/theme-default";

export default {
  title: "TIL",
  description: "Today I Learned",
  navbar: [
    {
      text: "Today I Learned",
      link: "/",
    },
    {
      text: "About Me",
      link: "https://github.com/nansenho",
    },
  ],
  theme: defaultTheme({
    sidebar: [
      {
        text: "Git",
        link: "/git/",
        children: [
          {
            text: "Rewrite Commit Message",
            link: "/git/rewrite_commit_msg.md",
          },
        ],
      },
      {
        text: "HTML",
        link: "/html/",
        children: [
          {
            text: "Using Code in HTML",
            link: "/html/code_pre.md",
          },
          {
            text: "contenteditable Attribute",
            link: "/html/contexteditable.md",
          },
          {
            text: "data-* Attribute",
            link: "/html/data-*.md",
          },
          {
            text: "<form> Element",
            link: "/html/form_element.md",
          },
          {
            text: "<input> Element",
            link: "/html/input_element.md",
          },
          {
            text: "<head> Element and <meta> Element",
            link: "/html/head_meta_element.md",
          },
        ],
      },
      {
        text: "Java",
        link: "/java/",
        children: [
          {
            text: "廖雪峰 Java 教程",
            link: "/java/java教程-廖雪峰",
            children: [
              {
                text: "Java 快速入门",
                link: "/java/java教程-廖雪峰/1_java快速入门",
                children: [
                  {
                    text: "Java 简介",
                    link: "/java/java教程-廖雪峰/1_java快速入门/1_java简介.md",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
};
