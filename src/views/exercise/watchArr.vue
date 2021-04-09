<template>
  <div>
    <h1>替换数组某一项的值监听方法：</h1>
    <code>Vue.set(vm.items, indexOfItem, newValue)</code><br/>
    <p>watchArr的第一项的name的值为： {{ watchArr[0].name }}</p>
    <p>watchArr的第二项的name的值为： {{ watchArr[1].name }}</p>
    <p>watchArr的第三项的值为： {{ watchArr[2] }}</p>
    <p>objVal的name为： {{ objVal.name }}</p>
    <button @click="routerChange">动态路由传参</button>路径后面跟:id 刷新消失，路由path也加，会加在URL中刷新不消失,this.$route.params.id获取
    <br>
    <button @click="routerChange2">路由传参</button>name匹配路由，params传参,路由里加path后参数刷新不会消失但是会展示在URL中,路由不加刷新会消失
    <br>
    <button @click="routerChange3">路由传参</button>name匹配路由，params传参,路由里加path后参数刷新不会消失但是会展示在URL中,路由不加刷新会消失
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
    routerChange(id) {
      id = 123;
      this.$router.push({
          path: `/exercise/distinct/${id}`,
      })
    },
    routerChange2(id) {
      id = 321;
      this.$router.push({
          name: 'distinct',
          params: {
              id: id
          }
      })
    },
    routerChange3(id) {
      this.$router.push({
          path: 'distinct',
          query: {
              id: '321query'
          }
      })
    }
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
