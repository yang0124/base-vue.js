import Vue from 'vue'
import VueRouter from 'vue-router' 
import Nav from '@/components/Nav'
import Aside from '@/components/Aside'
import Main1 from '@/views/Main1'
import Main2 from '@/views/Main2'
import Main3 from '@/views/Main3'
Vue.use(VueRouter)

let router= new VueRouter({
    routes:[
        {
            path:'/',
            components:{
                nav:Nav,
                aside:Aside,
                default:Main1
            }
        },
        {
            path:'/prod',
            components:{
                nav:Nav,
                aside:Aside,
                default:Main2
            }
        },
        {
            path:'/contact',
            components:{
                nav:Nav,
                aside:Aside,
                default:Main3
            }
        }
    ]
})

export default router