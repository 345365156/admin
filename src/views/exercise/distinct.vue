<template>
  <div>
    动态路由传过来的ID：{{ this.$route.params.id }}（this.$route.params.id）
    <br>
    name + params路由传过来的ID：{{ this.$route.params.id }}（this.$route.params.id）路由里加path后参数刷新不会消失但是会展示在URL中
    <br>
    path + query路由传过来的ID：{{ this.$route.query.id }}（ this.$route.query.id ）刷新不会消失，展示在路由里问号拼接
  </div>
</template>

<script>
export default {
  name: 'Distinct',
  data() {
    return {
      result: ''
    }
  },
  created() {
    const arr1 = Array.from(new Array(100000), (x, index) => {
      return index
    })

    const arr2 = Array.from(new Array(50000), (x, index) => {
      return index + index
    })

    const start = new Date().getTime()
    console.log('开始数组去重')

    this.distinct(arr1, arr2)

    console.log('去重后的长度', this.distinct(arr1, arr2).length)

    const end = new Date().getTime()
    console.log('耗时', end - start)
    this.result = end - start
  },
  mounted() {
    console.log(this.$route.params.id)
  },
  methods: {
    distinct(a, b) {
      const arr = a.concat(b)
      const result = []
      const obj = {}
      for (const i of arr) {
        if (!obj[i]) {
          result.push(i)
          obj[i] = 1
        }
      }

      return result
    }
  }
}
</script>

<style scoped>

</style>
