module.exports = {
    base: '/',
    title: '技术博客',
    description: 'Vuepress blog demo',
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
            { text: '系统', items:[{text: 'a', link: '/x/a'},{text: 'b', link: '/x/b'}] },
            { text: '工具', items:[{text: 'c', link: '/y/c'},{text: 'd', link: '/y/c'}] },
            { text: '算法', link: '/c' },
            { text: '产品', link: '/product' },
            { text: '前端', link: '/foreEnd' },
            { text: '后端', link: '/backEnd' },
            { text: '运维', link: '/operationMaintenance' },
            { text: '其他', link: '/v' },
        ],
        sidebar: [
            ['/', '首页'],
            ['/product/FirstBlog.md', '需求文档']
          ]
    }
}