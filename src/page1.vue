<template>
  <onekit-page id='app'>
    <onekit-input value="hello motherfucker what's my name"
                  type="dight"
                  :password="true"
                  :focus="focus" />
  </onekit-page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  export default OnekitPage({}, {
    data: {
      focus: false
    },
    onLoad() {
      setTimeout(() => {
        this.focus = true
      }, 3000)
    }
  })
</script>

<style>

</style>