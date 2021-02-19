<template>
    <div>我是列表页主页</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.axios.get('/api/test', {})
      .then(function (data) {
        console.log(data)
      })
  }
}
</script>
