module.exports = {
    base: '/vue-wheel/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title: '开发指南',
                children: [
                    '/get-start/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/button/',
                    '/input/'
                ]
            }
        ]
    }
}