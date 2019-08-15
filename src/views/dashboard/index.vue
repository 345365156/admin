<template>
  <div>
    dashboard
    {{ exercise }}
    <!--<img src="https://image.kongapi.com/xyzc/headline/image/article46035767843f482497eac49d8d8616f2.gif">-->
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      exercise: ''
    }
  },
  methods: {
    arrow() {
      this.$api.post('admin/login', { userName: 123, password: 456 }, res => {
        if (res.code === 0) {
          console.log(this)
        } else {
          this.$message.error('err')
        }
      })
    }
  },
  created() {
    console.log('created:', this)
    this.arrow()
  }
}

</script>

<style scoped>

</style>
