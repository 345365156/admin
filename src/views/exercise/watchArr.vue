<template>
  <div>
    <h1>替换数组某一项的值监听方法：</h1>
    <code>Vue.set(vm.items, indexOfItem, newValue)</code><br/>
    <p>watchArr的第一项的name的值为： {{ watchArr[0].name }}</p>
    <p>watchArr的第二项的name的值为： {{ watchArr[1].name }}</p>
    <p>watchArr的第三项的值为： {{ watchArr[2] }}</p>
    <p>objVal的name为： {{ objVal.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      watchArr: [{
        name: 'Tom',
      },{
        name: 'Listen',
      }, 3],
      objVal: {
        name: 'obj',
        type: 'obj'
      }
    }
  },
  watch: {
    watchArr (newVal) {
      console.log(newVal);
    },
    objVal:{
      handler(newVal, oldVal){
        console.log(newVal, oldVal)
      },
      deep: true, // 深度监听对象的改变
    }

  },
  methods: {
  },
  created() {
    setTimeout(() => {
      // this.watchArr[0] = {name: 'haha'}
      // this.watchArr[1].name = 'hahaha'
      // this.watchArr[1].name = 'hahaha'   //无法触发watch数组绑定的方法
      this.$set(this.watchArr, 0, {name: 'Jerry'});
      this.$set(this.watchArr, 1, {name: 'Jerry'});
      this.$set(this.watchArr, 2, 333); //触发watch数组绑定的方法
      this.objVal.name = 'newName'
    }, 3000);
  }
}

</script>

<style scoped>

</style>
