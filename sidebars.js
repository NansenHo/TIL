/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Catalogue",
    },
    {
      type: "category",
      label: "Test",
      items: [
        {
          type: "autogenerated",
          dirName: "test",
        },
      ],
    },
    {
      type: "category",
      label: "JavaScript",
      items: [
        {
          type: "autogenerated",
          dirName: "javascript",
        },
      ],
    },
    {
      type: "category",
      label: "TypeScript",
      items: [
        {
          type: "autogenerated",
          dirName: "typescript",
        },
      ],
    },
    {
      type: "category",
      label: "React",
      items: [
        {
          type: "autogenerated",
          dirName: "react",
        },
      ],
    },
    {
      type: "category",
      label: "Vue",
      items: [
        {
          type: "autogenerated",
          dirName: "vue",
        },
      ],
    },
    {
      type: "category",
      label: "Git",
      items: [
        {
          type: "autogenerated",
          dirName: "git",
        },
      ],
    },
  ],
};

module.exports = sidebars;
