module.exports = {
    plugins: ['demo-container'],
    // base:"/votre-dieu/",
    head: [
        ['link', { rel: 'icon', href: 'https://lovemysoul.vip/votre-dieu/logo.png'} ]
    ],
    port: 3000,
    markdown: {
        lineNumbers: false
    },
    locales:{
        '/': {
            lang: "zh-CN",
            "demo-block": {
                "hide-text": "隐藏代码",
                "show-text": "显示代码",
                "copy-text": "复制代码",
                "copy-success": "复制成功"
            }
        }
    },
    title: "votre-dieu",
    themeConfig: {
        lastUpdated:"上次更新",
        repo: 'votre-dieu/votre-dieu',
        repoLabel: '查看源码',
        logo: 'https://lovemysoul.vip/votre-dieu/logo.png',
        smoothScroll: true,
        docsRepo: 'votre-dieu/votre-dieu',
        docsDir: 'docs',
        docsBranch: 'main',
        description: "vueui,组件库，votre-dieu，vue2components",
        editLinks: true,
        editLinkText: '有错误？帮助我们去修改',
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
                        title:"按钮 Button",
                        path:'/components/vd-button'
                    },
                    {
                        title:"输入框 Input",
                        path:'/components/vd-input'
                    },
                    {
                        title:"卡片 Card",
                        path:'/components/vd-card'
                    },
                    {
                        title:"进度条 Progress",
                        path:'/components/vd-progress'
                    },
                ],
            }
        ]
    }
}