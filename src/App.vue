<script>
import TheHeader from './components/Layout/TheHeader.vue'
import TheRessource from './components/Resource/TheRessource.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheRessource
  }
}

</script>

<template>

    <TheHeader />

    <TheRessource></TheRessource>
    
</template>

<style scoped>

</style>
