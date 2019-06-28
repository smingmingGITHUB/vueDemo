
<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :collapse="isCollapse"
             :default-active="$route.path">
         <menu-item :menus="menus"></menu-item>   //传递的是user中的menus
    </el-menu>
  </el-scrollbar>
</template>

<script>
  export default {
    name: 'left-menus',
    components: { MenuItem },
      isCollapse() {
        return !this.barEffect.open
      }
    }
  
</script>
