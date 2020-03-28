let routes = [
  {
    path: '/',
    name: 'goodsQuotation',
    component: () => import('@/views/goodsQuotation/index'),
    meta:{tabbar:true}
  },
  {
    path: '/transRecord',
    name: 'transRecord',
    component: () => import('@/views/transRecord/index'),
    meta:{tabbar:true}
  },
  {
    path: '/kLine',
    name: 'kLine',
    component: () => import('@/views/kLine/index')
  },
]
export {
  routes
}
