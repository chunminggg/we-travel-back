const routers = [
//     {
//     path: '/',
//     meta: {
//         title: '登陆'
//     },
//     component: (resolve) => require(['./views/login.vue'], resolve),
// }, 
{
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
         path: '/productStatis',
        name: 'productStatis',
        meta: {
            title: '点击统计'
        },
        component: (resolve) => require(['./views/productStatis.vue'], resolve)
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
        path: '/reserveList',
        name: 'reserveList',
        meta: {
            title: '未完成订单'
        },
        component: (resolve) => require(['./views/reserveList.vue'], resolve)
    },
    {
        path: '/mainScroll',
        name: 'mainScroll',
        meta: {
            title: '首页管理'
        },
        component: (resolve) => require(['./views/mainScroll.vue'], resolve)
    },
    {
        path: '/theme',
        name: 'theme',
        meta: {
            title: '主题发布'
        },
        component: (resolve) => require(['./views/theme.vue'], resolve)
    },
    {
        path: '/themeManage',
        name: 'themeManage',
        meta: {
            title: '主题管理'
        },
        component: (resolve) => require(['./views/themeManage.vue'], resolve)
    },
    ]
}];
export default routers;