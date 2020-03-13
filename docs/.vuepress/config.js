module.exports = {
    port: "3000",
    base: '/',
    ga: "UA-xxxxx-1",
    title: '茶余饭后',
    description: 'docs',
    theme:'reform',
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "pdai"}],
        ["meta", {name: "keywords", content: "Java javascript全栈知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
    ],
    plugins: [
    ],
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/ken-dingxj/ding-blog.git',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '错别字纠正',
        sidebarDepth: 3,
        nav: [
            { text: '主页', link: '/' },
            { text: '阅读', link: '/read',items:[{text:'思维',link:'/read/think/readBookStep'},{text:'其他',link:'/read/other/'}]},
            { text: '算法', link: '/algorithm' },
            { text: '产品', link: '/product' },
            { text: '前端', link: '/front/frontTechnologySchemeThink' },
            { text: '后端', link: '/backEnd' },
            { text: '运维', link: '/operationMaintenance' },
            { text: '项目', items: [{text:'接口测试平台',link:'/project/yapi'},{text:'云笔记',link:'/project/yapi'}]},
            { text: '工具', items:[{text: 'webpack', link: '/webpack'},{text: 'rollup', link: '/rollup'}] },
        ],
        sidebar:{
           '/front/':[
               'frontTechnologySchemeThink',
           ],
           '/read/think/':[
                'readBookStep'
           ]
        }
    }
}