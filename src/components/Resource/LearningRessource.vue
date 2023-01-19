<script>
import DeleteButton from '../Ui/DeleteButton.vue'



export default {
  components: { DeleteButton },
    name: "LearningRessource",
    props: ['id', 'title', 'description', 'link'],
    inject: ["deleteRes"],
}


</script>

<template>


    <BaseCard>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <BaseLink :href="link">{{ link }}</BaseLink>
        <br>
        <DeleteButton @click="deleteRes(id)">löschen</DeleteButton>
    </BaseCard>



</template>

<style scoped>



</style>
