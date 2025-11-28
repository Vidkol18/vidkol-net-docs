import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const contentPlugins = [];
const navbarItems = [];
const footerItems = [];

const createContentDocs = (id: string, label: string) => {
  contentPlugins.push([
    "@docusaurus/plugin-content-docs",
    {
      id: id,
      path: id,
      routeBasePath: id,
      sidebarPath: `./sidebar/${id}.ts`,
    },
  ]);

  navbarItems.push({
    type: "docSidebar",
    sidebarId: `${id}Sidebar`,
    position: "left",
    docsPluginId: id,
    label: label,
  });

  footerItems.push({
    to: `/${id}`,
    label: label,
  });
};

createContentDocs("notes", "Notes");

const config: Config = {
  title: "Vidkol Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.vidkol.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vidkol18", // Usually your GitHub org/user name.
  projectName: "vidkol-net-docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [...contentPlugins],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Homepage",
      logo: {
        alt: "Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Tutorial",
        },
        ...navbarItems,
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            ...footerItems,
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/chicken-scheme",
            },
            {
              label: "Discord",
              href: "https://discord.gg/sykkuno",
            },
            {
              label: "GitHub",
              href: "https://github.com/vidkol18/vidkol-net-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vidkol. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: "theme-code-block-error-line",
          line: "error-next-line",
          block: { start: "error-start", end: "error-end" },
        },
      ],
    },
    markdown: {
      mermaid: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
