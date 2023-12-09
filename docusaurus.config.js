const config = {
  title: "Today I Learned",
  tagline: "A collection of concise notes and personal tech blogs",
  favicon: "img/logo.svg",

  url: "https://til-nansenho.netlify.app/",
  baseUrl: "/",

  organizationName: "NansenHo",
  projectName: "TIL",
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/nansenho/til/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/nansenho/til/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "TIL",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Notes",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/nansenho/til",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Notes",
          items: [
            {
              label: "Notes",
              to: "/docs",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/nansenho/til",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/_n_a_n_s_e_n_",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nansen_nansong/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
