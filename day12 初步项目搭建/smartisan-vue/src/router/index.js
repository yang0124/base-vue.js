import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from "@/components/Nav";
import Home from "@/views/Home";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            components:{
                nav:Nav,
                default:Home
            }
        }
    ]
})