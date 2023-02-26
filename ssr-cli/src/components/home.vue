<template>
  <div>
    <h1>我是home 页面</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "SSR",
    };
  },
  methods: {
    show() {
      alert(this.val);
    },
  },
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 100px;
  background: #fac;
  text-align: center;
  line-height: 100px;
}
</style>
