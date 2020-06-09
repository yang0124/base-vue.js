import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from "@/components/Nav";
import Home from "@/views/Home";
import Detail from "@/views/Detail";
import Cart from "@/views/Cart";
import CheckOut from "@/views/CheckOut";
import Account from "@/views/account/Account";
import Address from "@/views/account/Address";
import Order from "@/views/account/Order";
import Login from "@/views/Login";
import store from '../store'

Vue.use(VueRouter)

const router =  new VueRouter({
    routes:[
        {
            path:'/login',
            components:{
                default:Login
            }
        },
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
        },
        {
            path:'/cart',
            components:{
                nav:Nav,
                default:Cart
            }
        },
        {
            path:'/checkout',
            components:{
                nav:Nav,
                default:CheckOut
            }
        },
        {
            path:'/account',
            components:{
                nav:Nav,
                default:Account
            },
            children:[
                {
                    path:'address',
                    component:Address
                },
                {
                    path:'order',
                    component:Order
                }
            ],
            beforeEnter(to,from,next){ //路由独享的守卫
                console.log(to)
                console.log(from)
                let {loginState} = store.state
                if(loginState){
                    next()
                }else{
                    next({
                        path:'/login'
                    })
                }
            }
        },
    ]
})

// router.beforeEach((to,from,next)=>{  //全局前置守卫
//     // console.log(to)
//     console.log(from)
//     // console.log(next)
//     if(to.matched[0].path!='/account'){
//         next()
//     }else{
//         console.log(store.state)
//         let {loginState} = store.state
//         if(loginState){
//             next()
//         }else{
//             next({
//                 path:'/login'
//             })
//         }
//     }
// })

export default router