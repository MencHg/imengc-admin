<template>
  <div class="input-group">
    <div :class="['input-container',{'input-container-err':tips}]">
      <i v-if="beforeIcon" :class="['iconfont',beforeIcon]"></i>
      <input class="input-item" :type="type" :placeholder="placeholder" @input="$emit('input',$event.target.value)"/>
      <i v-if="afterIcon" :class="['iconfont',afterIcon]"></i>
    </div>
    <p class="tips-container">
      {{tips}}
    </p>
  </div>
</template>
<script>
export default {
  name: "input-group",
  props:{
    placeholder:{
      type:String,
      default:"请输入内容"
    },
    type:{
      type:String,
      default:"text"
    },
    tips:{
      type:String,
      default:""
    },
    beforeIcon:{
      type:String,
      default:""
    },
    afterIcon:{
      type:String,
      default:""
    },
  },
};
</script>
<style lang="less" scoped>
  .input-group{
    margin: 2px auto;
    width: 100%;
    .input-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 4px 8px;
      border: 1px solid #ccc;
      border-radius: 9px;
      font-size: 18px;
      &:focus-within{
        border-color: #3b6dad;
        box-shadow: 0 0 2px 1px #3b6dad;
      }
      .input-item{
        box-sizing: border-box;
        width: 100%;
        background-color: transparent;
        padding: 2px 6px;
        outline: none;
        border: none;
        font-size: 15px;
      }
      .iconfont{
        font-size: 20px;
      }
    }
    .input-container-err{
      box-shadow: 0 0 2px 1px #d10b46;
      border-color: #d10b46;
    }
    .tips-container{
      height:16px;
      padding-top: 4px;
      font-size: 12px;
      text-indent: 2em;
      color: #d10b46;
    }
  }
</style>