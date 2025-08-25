import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_dingjia from '../views/lanhu_dingjia/index.vue'
import lanhu_zhanghaoguanli from '../views/lanhu_zhanghaoguanli/index.vue'
import lanhu_xiazai from '../views/lanhu_xiazai/index.vue'
import lanhu_zhanghaoguanlidanchuang from '../views/lanhu_zhanghaoguanlidanchuang/index.vue'
import lanhu_shouye from '../views/lanhu_shouye/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/prise',
    name: 'lanhu_dingjia',
    component: lanhu_dingjia
  },
  {
    path: '/lanhu_zhanghaoguanli',
    name: 'lanhu_zhanghaoguanli',
    component: lanhu_zhanghaoguanli
  },
  {
    path: '/lanhu_xiazai',
    name: 'lanhu_xiazai',
    component: lanhu_xiazai
  },
  {
    path: '/lanhu_zhanghaoguanlidanchuang',
    name: 'lanhu_zhanghaoguanlidanchuang',
    component: lanhu_zhanghaoguanlidanchuang
  },
  {
    path: '/index',
    name: 'lanhu_shouye',
    component: lanhu_shouye
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
