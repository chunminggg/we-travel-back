const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[{
            path: '/upload',
            name: 'upload',
            meta: {
                title: '发布产品'
            },
            component: (resolve) => require(['./views/upload.vue'], resolve)
    }]
}
];
export default routers;