<template>
    <div>
        <p>p标签</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:1,
        }
    },
    //destroy访问不到页面上节点
    beforeDestroy(){
    console.log('beforedestroy，可以访问data和methods，界面上的节点可以访问','1.data',this.num,'2.页面上的节点',document.getElementById('p'))  
    },
  destroyed(){
    console.log('destroyed，这个时候进入销毁状态','1.data',this.num)
  },
}
</script>

<style>

</style>