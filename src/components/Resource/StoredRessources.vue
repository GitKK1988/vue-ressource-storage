<script>
import LearningRessource from './LearningRessource.vue';

export default {
    name: "StoredRessources",
    data() {
        return {};
    },
    inject: ["ressources"],
    components: { LearningRessource }
}


</script>

<template>

  <div v-if="ressources.length == 0">
    noch keine Ressourcen angelegt
  </div>

  <LearningRessource v-for="ress in ressources" :key="ress.id" :id="ress.id" :title="ress.title" :description="ress.description" :link="ress.link" />

</template>

<style scoped>

</style>
