import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //为vuex设置数据包
        num:100,
        cartData:[ //购物车数据包
            {
              "stock_id": 1000701,
              "title": "畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）",
              "sub_title": "五层防护、高达 98% 的平均过滤效率",
              "image": "https://resource.smartisan.com/resource/ef67ff9577c62979930b356a37b86251.jpg",
              "imgs": [
                "https://resource.smartisan.com/resource/ef67ff9577c62979930b356a37b86251.jpg",
                "https://resource.smartisan.com/resource/6e21fd5af69965142e1a50dca189eb7e.jpg"
              ],
              "price": 99,
              "cnum":3,
              "limit_num": 5, //限制购买数量
              "detail": {
                "color": "#FBF084",
                "color_name": "绿色"
              }
            },
            {
              "stock_id": 1000702,
              "title": "畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）",
              "sub_title": "五层防护、高达 98% 的平均过滤效率 粉色",
              "image": "https://resource.smartisan.com/resource/07d77f3a1921fa06e4e5b2f1cdf1a7c8.jpg",
              "imgs": [
                "https://resource.smartisan.com/resource/07d77f3a1921fa06e4e5b2f1cdf1a7c8.jpg",
                "https://resource.smartisan.com/resource/967c4d4519aaae1734c727a22def2537.jpg"
              ],
              "price": 99,
              "cnum":1,
              "limit_num": 5, //限制购买数量
              "detail": {
                "color": "#F8ACF4",
                "color_name": "粉色"
              }
            }
          ]
    },
    getters:{ //类似于computed的作用
        allInfo(state){ //用以运算并获取跟购物车总计相关数据
            let allNum=0,
                allPrice=0
            state.cartData.forEach((item)=>{
                allNum += item.cnum;
                allPrice += item.cnum*item.price
            })
            return {
                allNum,
                allPrice
            }
        }
    },
    mutations:{  //为vuex设置mutations，一旦指定的mutation被触发了，它会修改对应state值
        plusNumMut(state){
            state.num++
        },
        cartAddMut(state,obj){ //向购物车数据包新增数据的mutation
            // state.cartData.push(obj) 
            let bool = true; //开关变量 ，控制是否执行新增商品的逻辑代码
            state.cartData.forEach((item)=>{
                if(item.stock_id==obj.stock_id){ //如果新提交的商品在cartData中已存在，增加其数量
                    item.cnum++;
                    bool = false;
                    return false;
                }
            })
            
            if(bool){
                // obj.cnum = 1;  //这种方式新增的cnum是非响应式数据，变化后视图不能实时监听
                Vue.set(obj,'cnum',1)  //为某个对象新增响应式字段的方法
                state.cartData.push(obj)
            } 

        }
    }
})