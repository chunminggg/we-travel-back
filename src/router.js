const routers = [{
    path: '/',
    meta: {
        title: '超想去旅行'
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [{
            path: '/upload/:productId',
            name: 'upload',
            meta: {
                title: '发布产品'
            },
            component: (resolve) => require(['./views/upload.vue'], resolve)
        },
        {
            path: '/productManage',
            name: 'productManage',
            meta: {
                title: '产品管理'
            },
            component: (resolve) => require(['./views/productManage.vue'], resolve)
        },
        {
            path: '/users',
            name: 'users',
            meta: {
                title: '客户管理'
            },
            component: (resolve) => require(['./views/users.vue'], resolve)
        },
        {
            path: '/theme',
            name: 'theme',
            meta: {
                title: '主题发布'
            },
            component: (resolve) => require(['./views/theme.vue'], resolve)
        },
    ]
}];
export default routers;