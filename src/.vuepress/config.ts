const { description } = require('../../package')

// https://github.com/vuepress/vuepress-next/blob/98b7a57856c7b81a82291642e3cf7218699f3523/packages/%40vuepress/markdown/src/utils/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

module.exports = {
    title: 'Meson Network',
    description: description,

    head: [
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: 'https://ipfs.io/ipfs/bafybeiauxbhdc4nmp52ydhk6wbq3xctitm5ox622stbmil2tg7arqugiy4/meson-logo.svg' }]
    ],

    markdown: {
        extractHeaders: {
            level: [1, 2, 3, 4, 5],
        },
        anchor: {
            slugify: (str) => str
                .normalize('NFKD')
                // Remove accents
                .replace(rCombining, '')
                // Remove control characters
                .replace(rControl, '')
                // Replace special characters
                .replace(rSpecial, '-')
                // Remove continuos separators
                .replace(/-{2,}/g, '-')
                // Remove prefixing and trailing separators
                .replace(/^-+|-+$/g, '')
                // ensure it doesn't start with a number (#121)
                // .replace(/^(\d)/, '_$1')
                // lowercase
                .toLowerCase()
        }
    },

    plugins: [
        '@vuepress/plugin-shiki',
        ['@vuepress/plugin-docsearch', {
            apiKey: 'a9bd399b495e1f6a542c545d43329f6d',
            indexName: 'meson',
            appId: '6EJE6R29QB',
        }],
        ['@vuepress/plugin-google-analytics', {
            id: 'G-8BSS4K59LF',
        }],
    ],

    themeConfig: {
        repo: 'daqnext',
        docsRepo: 'daqnext/meson-docs',
        sidebarDepth: 3,
        docsDir: 'src',
        logo: 'https://ipfs.io/ipfs/bafybeiauxbhdc4nmp52ydhk6wbq3xctitm5ox622stbmil2tg7arqugiy4/meson-logo.svg',
        themePlugins: {
            activeHeaderLinks: false,
        },
        navbar: [
            {
                text: 'Home',
                link: 'https://meson.network/',
            },
            {
                text: 'Guide',
                link: '/',
            },
            {
                text: 'Whitepaper',
                link: 'https://assets.meson.network:10443/static/docs/Meson-Network-v1.6.pdf'
            },
            {
                text: 'Blog',
                link: 'https://medium.com/meson-network'
            },
            {
                text: 'Learn More',
                children: [
                    {
                        text: 'Discord',
                        link: 'https://meson.network/discord'
                    },
                    {
                        text: 'Telegram',
                        link: 'https://t.me/mesonnetwork'
                    },
                    {
                        text: 'Twitter',
                        link: 'https://twitter.com/NetworkMeson'
                    },
                    {
                        text: 'YouTube',
                        link: 'https://www.youtube.com/c/MesonNetwork'
                    },
                ]
            },
        ],
        sidebar: {
            '/': [
                {
                    text: '👋 Guide',
                    collapsible: true,
                    link: '/README.md',
                    children: [
                        '/README.md',
                        '/meson-token.md',
                        '/bandwidth-marketplace.md',
                        '/roadmap.md',
                        '/thanks.md',
                    ],
                },
                {
                    text: '🚀 Run Meson Nodes',
                    collapsible: true,
                    link: '/nodes/README.md',
                    children: [
                        '/nodes/README.md',
                        '/nodes/run-meson-nodes.md',
                    ],
                },
                {
                    text: '⚒️ Use Meson Network',
                    collapsible: true,
                    link: '/using/README.md',
                    children: [
                        '/using/README.md',
                        '/using/meson-enhances-arweave.md',
                        '/using/meson-enhances-wordpress.md',
                    ],
                },
                {
                    text: '🌀 Open Source',
                    collapsible: true,
                    link: '/opensource.md',
                },
                {
                    text: '💰 Manage a Wallet',
                    collapsible: true,
                    link: '/meson-testtokens-to-ethereum.md',
                },
                '/community.md',
                '/glossary.md',
                '/faq.md',
            ],
        },
    },
}
