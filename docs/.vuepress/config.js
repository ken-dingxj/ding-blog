module.exports = {
  port: "3000",
  base: "/",
  ga: "UA-xxxxx-1",
  title: "茶余饭后",
  description: "docs",
  // theme:'reform',
  markdown: {
    lineNumbers: true,
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  head: [
    // ico
    ["link", { rel: "icon", href: `/favicon.ico` }],
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "pdai" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java javascript全栈知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "script",
      {
        type: "text/javascript",
        src: "https://s4.cnzz.com/z_stat.php?id=1278919995&web_id=1278919995",
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    repo: "https://github.com/ken-dingxj/ding-blog.git",
    repoLabel: "GitHub",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "错别字纠正",
    sidebarDepth: 3,
    nav: [
      { text: "主页", link: "/" },
      {
        text: "心得",
        link: "/read",
        items: [
          { text: "思维", link: "/read/think/readBookStep" },
          {
            text: "认知",
            link: "/read/cognitiveImprovement/cognitiveImprovement",
          },
        ],
      },
      {
        text: "框架",
        items: [
          { text: "webpack", link: "/code/webpack/" },
          { text: "vue", link: "/code/vue/" },
          { text: "react", link: "/code/react/" }
        ],
      },
      {
        text: "前端工程化",
        link: "/engineer/",
      },
      { text: "算法", link: "/algorithm/" },
      {
        text: "js",
        items: [
          { text: "前端思考", link: "/front/think/" },
          { text: "你不知道的javascript上", link: "/front/book/up/" },
          {
            text: "javascript设计模式与开发实践",
            link: "/front/book/designPattern/",
          },
          {
            text: "简单方法库封装",
            link: "/front/npm/",
          },
          {
            text: "ajax详解",
            link: "/front/ajax/",
          },
        ],
      },
      {
        text: "template",
        items: [
          { text: "html", link: "/temp/html/" },
          { text: "ejs", link: "/temp/ejs/" },
        ],
      },
      { text: "css", link: "/css/" },
      {
        text: "node",
        link: "/node/",
      },
      {
        text: "浏览器",
        link: "/webkit/",
        items:[
          {text:"Reflow & Repaint",link: "/webkit/Reflow & Repaint/"}
        ]
      },
      {
        text: "运维",
        items:[
          {text:"deploy",link: "/operation/deploy/"},
          {text:"http",link: "/operation/http/"},
          {text:"ssh",link: "/operation/ssh/"}
        ]
      },

      {
        text: "知识点",
        items:[
          {text:"html",link: "/interview/html/"},
          {text:"css",link: "/interview/css/"},
          {text:"js",link: "/interview/js/"},
          {text:"算法",link: "/interview/sunfa/"},
          {text:"网络",link: "/interview/net/"},
        ]
      },
    ],
    sidebar: {
      "/read/think/": ["readBookStep"],
      "read/cognitiveImprovement": ["cognitiveImprovement"],
      "/book/jsUp/": [""],
      "/algorithm/": [""],
      "/front/think/": [""],
      "/front/book/designPattern/": [""],
      "/front/book/up/": [""],
      "/back/crazy/": [""],
      "/operation/deploy/": [""],
      "/operation/http/": [""],
      "/operation/ssh/": [""],
      "/code/vue/": [""],
      "/project/boke/": [""],
      "/front/npm/": [""],
      "/Engineering/": [""],
      "/code/webpack/": [""],
      "/css/": [""],
      "/code/react/":[""],
      "/interview/html/":[""],
      "/interview/css/":[""],
      "/interview/js/":[""],
      "/interview/sunfa/":[""],
      "/interview/net/":[""],
      "/webkit/Reflow & Repaint/":[""]
    },
  },
};
