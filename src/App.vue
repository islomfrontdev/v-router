<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
.active-link {
  color: #01aee7 !important;
}
</style>
