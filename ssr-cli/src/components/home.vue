<template>
  <div>
    <h1>我是home 页面</h1>
    <div>欢迎 {{ name }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      val: "SSR",
    };
  },
  computed: {
    ...mapState(["name"]),
  },
  created() {
    this.$store.dispatch("getName");
  },
  asyncData(store) {
    return store.dispatch("getName");
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
