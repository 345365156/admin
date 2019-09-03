<template>
  <div>
    {{ 123 }}
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
  methods: {
    distinct(a, b) {
      let arr = a.concat(b)
      let result = []
      let obj = {}
      for (let i of arr) {
        if (!obj[i]) {
          result.push(i)
          obj[i] = 1
        }
      }

      return result
    }
  },
  created() {
    const arr1 = Array.from(new Array(100000), (x, index) => {
      return index
    })

    const arr2 = Array.from(new Array(50000), (x, index) => {
      return index+index
    })

    let start = new Date().getTime()
    console.log('开始数组去重')

    distinct(arr1, arr2)

    console.log('去重后的长度', distinct(arr1, arr2).length)

    let end = new Date().getTime()
    console.log('耗时', end - start)
    this.result = end - start
  }
}
</script>

<style scoped>

</style>
