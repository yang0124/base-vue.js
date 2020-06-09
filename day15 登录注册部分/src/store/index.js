import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

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
              "isCheck":true,
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
              "isCheck":false,
              "limit_num": 2, //限制购买数量
              "detail": {
                "color": "#F8ACF4",
                "color_name": "粉色"
              }
            }
          ],
        addressInfo:[
          {
            username:'张三丰',
            phone:'13988886666',
            tel:['023','58762390'],
            loc:[
              {
                name:'北京',
                idx:'0'
              },
              {
                name:'朝阳',
                idx:'2'
              },
              {
                name:'',
                idx:'-1'
              },
            ],
            address:'3号巷子6号胡同',
            isDefault:true
          },
          {
            username:'张无忌',
            phone:'13988886665',
            tel:['023','58762394'],
            loc:[
              {
                name:'山西',
                idx:'3'
              },
              {
                name:'大同',
                idx:'1'
              },
              {
                name:'矿区',
                idx:'1'
              },
            ],
            address:'6号矿山',
            isDefault:false
          }
        ],
        loginState:false  //模拟登录状态
    },
    getters:{ //类似于computed的作用
        allInfo(state){ //用以运算并获取跟购物车总计相关数据
            let allNum=0, //购物车所有商品总数
                allPrice=0,  //购物车所有商品总价
                allCheck=true,   //控制全选按钮状态
                checkNum=0,  //被勾选的商品数量
                checkPrice=0 //被勾选商品总价格
            state.cartData.forEach((item)=>{
                allNum += item.cnum;
                allPrice += item.cnum*item.price;
                if(!item.isCheck){ //如果有其中一个商品未被勾选，则全选状态为 false
                  allCheck=false
                }

                if(item.isCheck){ //计算勾选商品的总计信息
                  checkNum += item.cnum;
                  checkPrice += item.cnum*item.price;
                }
            })
            return {
                allNum,
                allPrice,
                allCheck,
                checkNum,
                checkPrice
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
                Vue.set(obj,'isCheck',true) 
                state.cartData.push(obj)
            } 

        },
        cartCheckMut(state,i){ //购物清单组件中的单选按钮
          state.cartData[i].isCheck = !state.cartData[i].isCheck

        },
        cartAllCheckMut(state,bool){ //购物清单中的全选按钮
          state.cartData.forEach((item)=>{
            item.isCheck = !bool
          })
        },
        cartDelMut(state,i){
          state.cartData.splice(i,1)
        },
        addressMut(state,obj){ //处理编辑与新增地址的mutation
          if(obj.idx==-1){
            state.addressInfo.push(obj.newObj)
          }else{
            state.addressInfo[obj.idx] = obj.newObj
          }
        },
        loginMut(state,str){
          let bool = str=='logout'? false : true; //判断是处理登录，还是退出
          state.loginState = bool
        }
    },
    actions:{
      loginAct(context,obj){ //处理登录异步请求的action
        Vue.prototype.$axios.post('/users/login',obj).then((res)=>{
          console.log(res)
          if(res.data.code==1){  //登录成功
            context.commit('loginMut') //根据服务器在线登录状态修改本地登录状态
            router.push({ 
              path:'/account/address'
            })
            localStorage.setItem('token',res.data.data)
            return false;
          }
          Vue.prototype.$message({  //如果用户名错误或密码错误，则进行提示
            message:res.data.msg,
            type:'warning'
          })
        })
      }
    }
})