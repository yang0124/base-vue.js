<template>
  <div id="pop">
    <div class="module-dialog-layer" style="display: block;"></div>
    <div @click="handleClose" class="module-dialog clear module-dialog-address module-dialog-show">
      <div class="dialog-panel" @click.stop="''">
        <div class="topbar">
          <div class="dialog-tit clear">
            <h4 class="js-dialog-title">管理收货地址</h4>
          </div>
          <span class="dialog-close" @click="handleClose">x</span>
        </div>
        <div class="dialog-con js-dialog-container">
          <div class="animate-layer">
            <div class="dialog-inner js-address-add">
              <div class="save-address-box">
                <div class="address-form">
                  <div class="module-form-row">
                    <div class="form-item-v3">
                      <input v-model="newLoc.username" type="text" class="js-verify" placeholder="收货人姓名"/>
                      <div class="verify-error"></div>
                    </div>
                  </div>
                  <div class="module-form-row">
                    <div class="form-item-v3">
                      <input v-model="newLoc.phone" type="text" class="js-verify" placeholder="手机号"/>
                      <div class="verify-error"></div>
                    </div>
                  </div>
                  <div class="module-form-row clear">
                    <div class="form-item-v3 area-code-w fn-left form-valid-item">
                      <input v-model="newLoc.tel[0]" type="text" class="js-verify js-address-area-code" placeholder="区号（可选）" />
                      <div class="verify-error"></div>
                    </div>
                    <div class="form-item-v3 telephone-w fn-right form-valid-item">
                      <input v-model="newLoc.tel[1]" type="text" class="js-verify js-address-telephone" placeholder="固定电话（可选）" />
                      <div class="verify-error"></div>
                    </div>
                  </div>
                  <div class="module-form-row clear">
                    <div class="form-item-v3 select-item province-wrapper">
                      <select
                        name="province_code"
                        class="province select-province js-form-province js-verify" 
                        v-model="lv1" 
                        @change="handleChange"
                      >
                        <option value="-1">请选择省份</option>
                        <option v-for="(item,index) in loc1" :key="index" :value="index">
                          {{item.Name}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="module-form-row clear">
                    <div class="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                      <select v-model="lv2" class="city select-city js-form-city js-verify">
                        <option value="-1">请选择城市</option>
                        <option v-for="(item,index) in loc2" :key="index" :value="index">
                          {{item.Name}}
                        </option>
                      </select>
                    </div>
                    <div class="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                      <select v-model="lv3" class="city select-city js-form-city js-verify">
                        <option value="-1">请选择区县</option>
                        <option v-for="(item,index) in loc3" :key="index" :value="index">
                          {{item.Name}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="module-form-row">
                    <div class="form-item-v3">
                      <input v-model="newLoc.address" type="text" class="js-verify" placeholder="详细地址，如街道名称，楼层，门牌号码等" />
                      <div class="verify-error"></div>
                    </div>
                  </div>
                  <div class="module-form-row fn-clear">
                    <input type="checkbox" class="hide" checked/>
                    <span class="blue-checkbox"></span>设为默认
                  </div>
                  <div 
                  class="dialog-blue-btn big-main-btn  js-verify-address" 
                  :class="saveBtnState?'':'disabled-btn'" 
                  @click="handleSave">
                    <a>保存</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import city from '@/assets/js/city.js' 
export default {
  props:['aidx'], //获取Checkout.vue组件传递的下标
  data() {
    return {
      loc1: city.State,
      lv1:'-1',  //控制被选中的省份
      lv2:'-1',   //控制被选中的城市
      lv3:'-1',    //控制被选中的地区
      newLoc:{
        username:'',
        phone:'',
        tel:['',''],
        address:'',
        isDefault:false
      }
    }
  },
  computed: {
    loc2(){  //根据一级选中的lv1,提取对应城市数据，渲染二级select
      if(this.lv1!=-1){
        return this.loc1[this.lv1].City
      }else{
        return []
      }
    },
    loc3(){  //根据二级选中的lv2,提取对应区县，渲染三级select
      if(this.lv2!=-1){
        return this.loc2[this.lv2].Region
      }else{
        return []
      }
    },
    saveBtnState(){ //根据用户是否输入了必填信息，决定【保存】按钮是否激活
      let {username,phone,address} = this.newLoc;
      let bool=true;
      if(username==''||phone==''||address==''||this.lv1==-1||this.lv2==-1){
        bool = false;
      }
      return bool
    },
    addressInfo(){
      return this.$store.state.addressInfo
    } 
  },
  // watch: {  //这个方案会在编辑地址时，影响二三级联动数据的初始化显示
  //   lv1(){  //处理选完城市后，重新切换省份时的报错问题
  //     console.log('监听到了lv1的变化')
  //     this.lv2 = this.lv3 = -1
  //   }
  // },
  created() {
    if(this.aidx!=-1){ //如果为编辑触发状态
      this.newLoc = JSON.parse(JSON.stringify(this.addressInfo[this.aidx]));  //初始化弹窗输入框的内容
      this.lv1 = this.addressInfo[this.aidx].loc[0].idx //初始化三级联动的内容
      this.lv2 = this.addressInfo[this.aidx].loc[1].idx
      this.lv3 = this.addressInfo[this.aidx].loc[2].idx
    }
  },
  methods: {
    handleClose(){ //关闭地址弹窗
      this.$emit('trans-click')
    },
    handleSave(){ //地址弹窗保存按钮
      let newObj = this.newLoc;
      let region = this.lv3==-1?'':this.loc3[this.lv3].Name //解决用户未选择第三级地址的报错
      newObj.loc=[ //向新地址数据包中，新增省市区的数据
            {
              name:this.loc1[this.lv1].Name,
              idx:this.lv1
            },
            {
              name:this.loc2[this.lv2].Name,
              idx:this.lv2
            },
            {
              name:region,
              idx:this.lv3
            }
          ]
      this.$store.commit('addressMut',{
        newObj,
        idx:this.aidx //为了让mutsion知道，我们是要编辑还是新增
      }) //触发mutaion并携带新地址数据包
      this.handleClose()
    },
    handleChange(){ //替代上面watch的功能
      this.lv2 = this.lv3 = -1
    }
  },
  // created() 
  //   console.log('执行created')
  // },
  // destroyed() {
  //   console.log('执行destroyed')
  // },
};
</script>

<style>
@charset "utf-8";
#pop .module-dialog-layer {
  display: none;
  position: fixed;
  _position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
}
#pop .module-dialog .dialog-panel,
.module-dialog:after {
  display: inline-block;
  vertical-align: middle;
}
#pop .module-dialog:after {
  content: "";
  height: 100%;
  margin-left: -0.25em;
}
#pop .module-dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
#pop .module-dialog-show {
  opacity: 1;
}
#pop .module-dialog .dialog-panel {
  position: relative;
  width: 450px;
  min-width: 200px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 1px 0 3px rgba(0, 0, 0, 0.1);
  text-align: left;
  height: 592px;
}
#pop .module-dialog .topbar {
  overflow: hidden;
  width: 100%;
  height: 60px;
  background: linear-gradient(#fff, #f5f5f5);
  border-bottom: 1px solid #dcdcdc;
  border-radius: 10px 10px 0 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
#pop .module-dialog-address .topbar {
  position: relative;
  z-index: 10;
}
#pop .module-dialog .dialog-tit {
  height: 60px;
  padding: 0 15px;
  line-height: 60px;
}
#pop .module-dialog .dialog-tit h4 {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #666;
}
#pop .module-dialog .dialog-close {
  overflow: hidden;
  display: block;
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 20;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 30px;
  color: #000;
  opacity: 0.2;
  cursor: pointer;
  transition: all 0.3s linear;
}
#pop .module-dialog .dialog-close:hover {
  opacity: 0.3;
}
#pop .module-dialog .animate-layer {
  position: relative;
}
#pop .module-dialog-address .save-address-box {
  width: 450px;
  padding-top: 29px;
}
#pop .address-form {
  width: 370px;
  margin: 0 auto;
}
#pop .account-address .address-form {
  padding: 30px;
  margin: 0;
}
#pop .module-form-row {
  position: relative;
  padding-bottom: 10px;
  margin: 0 auto;
}
#pop .address-form .module-form-row {
  padding-bottom: 15px;
}
#pop .module-form-row .form-item-v3 {
  position: relative;
  height: 46px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
    -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
  line-height: 46px;
  font-size: 18px;
  opacity: 0.618;
  transition: opacity 0.3s ease;
}
#pop .module-form-row .form-item-v3 i {
  position: absolute;
  left: 15px;
  top: 0;
  font-size: 16px;
  color: #bebebe;
}
#pop .module-form-row .form-item-v3 input {
  padding: 0 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
}
#pop .address-form .form-item-v3 input {
  width: 330px;
}
#pop .address-form .area-code-w {
  width: 118px;
}
#pop .address-form .telephone-w {
  width: 238px;
}
#pop .module-form-row div.select-item {
  width: auto;
  height: auto;
  margin: 0;
  background: 0 0;
  border: none;
  box-shadow: none;
  opacity: 1;
}
#pop .module-form-row .form-item-v3 select {
  margin: 0 0 0 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #333;
}
#pop .address-form .select-province {
  width: 370px;
}
#pop .form-focus-item {
  z-index: 1;
  opacity: 1;
  border: 1px solid #6b93f2;
}
#pop .module-form-row div.select-item {
  width: auto;
  height: auto;
  margin: 0;
  background: 0 0;
  border: none;
  box-shadow: none;
  opacity: 1;
}
#pop .module-form-row .form-item-v3 select {
  height: 48px;
  padding: 0 15px;
  margin: 0;
  background: -webkit-linear-gradient(top, #fafafa, #f5f5f5);
  background: linear-gradient(#fafafa, #f5f5f5);
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 2px 0 0 rgba(255, 255, 255, 0.4) inset,
    1px 0 0 rgba(255, 255, 255, 0.3);
  line-height: 48px;
  text-indent: 0;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}
#pop .address-form .select-city,
.address-form .select-district {
  width: 180px;
}
#pop .blue-checkbox,
.blue-checkbox-disable,
.blue-checkbox-on {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  background: url(../assets/img/checkbox-bg.png) no-repeat;
  cursor: pointer;
}
#pop .address-form .blue-checkbox {
  top: 0;
  float: left;
  margin-right: 5px;
}
#pop .dialog-blue-btn {
  padding: 1px;
  background: #6383c6;
  background: linear-gradient(#6383c6, #4262af);
  border-radius: 6px;
  text-align: center;
  color: #fff;
}
#pop .disabled-btn {
  opacity: 0.4;
}
#pop .disabled-btn,
.disabled-btn a {
  cursor: not-allowed;
  -webkit-transition: none;
  transition: none;
  pointer-events: none;
}
#pop .dialog-blue-btn a {
  display: block;
  padding: 2px 0;
  background: #5f7ed7;
  background: linear-gradient(#6f97e5, #527ed9);
  border-radius: 5px;
  box-shadow: inset 0 1px 2px #7ea1e8;
  text-shadow: 0 -1px 0 #4f70b3;
  color: #fff;
}
#pop .big-main-btn a {
  height: 42px;
  line-height: 42px;
  font-size: 18px;
}
#pop .module-form-row .form-invalid-item {
  opacity: 1;
  border: 1px solid #d16d62;
}
#pop .module-form-row .form-invalid-item:after {
  visibility: visible;
  opacity: 1;
}
</style>