<template>
  <div class="warraper">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components:{
    Navbar
  }
}
</script>
