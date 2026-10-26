// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
export default {
  appuntiSidebar: [
    {
      type: 'category',
      label: '3CS',
      items: [
        {
              type: 'doc',
              id: '3cs/3cs',
            },
        {
          type: 'category',
          label: "Storia",
          items: [
            {
              type: 'doc',
              id: '3cs/storia/medioevo-intro',
            },
            {
              type: 'doc',
              id: '3cs/storia/regni-romano-barbarici',
            },
            {
              type: 'doc',
              id: '3cs/storia/carlo-magno-e-la-chiesa',
            },
          ]
        },
        {
          type: 'category',
          label: "Italiano",
          items: [
            {
              type: 'doc',
              id: 'work-in-progress',
            },

          ]
        },
        {
          type: 'category',
          label: "Matematica",
          items: [
            {
              type: 'doc',
              id: 'work-in-progress',
            },

          ]
        },

        {
          type: 'category',
          label: "Italiano",
          items: [
            {
              type: 'doc',
              id: 'work-in-progress',
            },

          ]
        },
        {
          type: 'category',
          label: "Cantieri e Sicurezza",
          items: [
            {
              type: 'doc',
              id: 'work-in-progress',
            },

          ]
        },
        {
          type: 'category',
          label: "Progettazione",
          items: [
            {
              type: 'doc',
              id: 'work-in-progress',
            },

          ]
        },
        {
          type: 'category',
          label: "Topografia",
          items: [
            {
              type: 'doc',
              id: 'work-in-progress',
            },

          ]
        },

        {
          type: 'category',
          label: "Geopedologia ed Estimo",
          items: [
            {
              type: 'doc',
              id: '3cs/geopedologia-estimo/minerali',
            },

          ]
        },
      ],
    },

  ],
};
