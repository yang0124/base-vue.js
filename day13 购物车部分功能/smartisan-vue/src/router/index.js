import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from "@/components/Nav";
import Home from "@/views/Home";
import Detail from "@/views/Detail";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            components:{
                nav:Nav,
                default:Home
            }
        },
        {
            path:'/detail/:idx', //【三-1】设置路由形参，这个idx携带的实参会被传递到Detail.vue
            components:{
                nav:Nav,
                default:Detail
            }
        }
    ]
})