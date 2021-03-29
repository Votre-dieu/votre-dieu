// .vuepress/config.js
module.exports = {
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        repo: 'votre-dieu/votre-dieu',
        repoLabel: '查看源码',
        logo: 'https://i.loli.net/2021/03/29/cswYpBOdMNZnmCL.png',
        smoothScroll: true,
        docsRepo: 'votre-dieu/votre-dieu',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: 'Last Updated',
        sidebar: [
            {
                title: '快速上手',   
                path: '/start/start',
                sidebarDepth: 1,
                children: [
                    {
                        title:"安装votre-dieu",
                        path:'/start/start'
                    },
                    {
                        title:"在vue中使用",
                        path:'/start/use'
                    }
                ]
            },
            {
                title: '组件',
                children: [ 
                    {
                        title:"Button",
                        path:'/components/vd-button'
                    },
                    {
                        title:"Input",
                        path:'/components/vd-input'
                    },
                    {
                        title:"Card",
                        path:'/components/vd-card'
                    }
                ],
            }
        ]
    }
}