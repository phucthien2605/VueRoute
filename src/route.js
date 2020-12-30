import Home from './component/Home'
import PageHeader from "./component/layouts/Header.vue"

const Post = resolve => {
    require.ensure(['./component/post/Post'], () => {
        resolve(require('./component/post/Post'))
    }, 'post')
}
const PostDetail = resolve => {
    require.ensure(['./component/post/PostDetail'], () => {
        resolve(require('./component/post/PostDetail'))
    }, 'post')
}
const Index = resolve => {
    require.ensure(['./component/post/Index'], () => {
        resolve(require('./component/post/Index'))
    }, 'post')
}

const About = resolve => {
    require.ensure(['./component/About'], () => {
        resolve(require('./component/About'))
    })
}
import Error from './component/404'


export const routes = [
    {
        path: '/', name: 'homepage', components: {
            default: Home,
            'page-header': PageHeader

        }
    },
    {
        path: '/about', name: 'about', components: {
            default: About,
            'page-header': PageHeader

        }
    },
    {
        path: '/posts', name: 'post', component: Post, children: [
            { path: '', name: 'index', component: Index },
            {
                path: ':id', name: 'postdetail', component: PostDetail, beforeEnter: (to, from, next) => {
                    console.log('Action route guards')
                    next()
                }
            },
        ]
    },
    { path: '/auth-redirect', redirect: { name: 'homepage' } },
    { path: '/404', name: 'error page', component: Error },
    { path: '*', redirect: '/404' }

]