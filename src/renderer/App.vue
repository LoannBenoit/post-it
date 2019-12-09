<template>
  <div id="app">
    <test></test>
  </div>
</template>

<script>
import { Test } from "../renderer/components/Test";

  export default {
    name: 'post-it',
    components: { Test }
  }
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom, #833ab4, #b123a4, #d3008c, #eb0070, #f90051, #fe2941, #ff412f, #fe5618, #fe711b, #fd8825, #fd9d33, #fcb045);
}
</style>
