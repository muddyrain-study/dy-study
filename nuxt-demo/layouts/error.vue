<template>
  <div>
    <el-button>{{ error.message }}</el-button>
    <el-button>{{ error.statusCode }}</el-button>
    <el-button>{{ error.path }}</el-button>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
