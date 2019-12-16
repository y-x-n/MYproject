<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
body{
	overflow-x:auto;
}
html{
	width: 100%;
	height: 100%;
	min-width: 1366px;
	overflow-x:hidden;
}
html, body {
  overflow-y: hidden;
}
.el-text-small{
  height: 32px;
    line-height: 32px;
    width:300px;
        padding-right: 30px;
     padding-left: 30px;   
}
.formapproval .vue-treeselect__control{
  width:300px;
}
.tags-view-wrapper .tags-view-item{
  margin-bottom:4px;
}
</style>
