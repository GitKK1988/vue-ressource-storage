<script>

import StoredRessources from './StoredRessources.vue';
import AddRessource from './AddRessource.vue';

export default {
  name: 'TheRessource',
  components: {
    StoredRessources,
    AddRessource
  },
  data (){
    return{
        ressourceselected: 'StoredRessources',
        storedres: [],
    }
  },
  provide(){
    return{
      ressources: this.storedres,
      addRessource: this.addRessource,
      deleteRes: this.deleteRes
    }
  },
  methods: {
    setRessource(ressourceroute){
        this.ressourceselected = ressourceroute;
    },
    addRessource(title, description, link){
      const newRessource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link
      }
      // use unshift to add the new ressource to the beginning of the array isntead of filter
      // with filter you would create a new array and replace the old one and vue would not know that the array has changed
      this.storedres.unshift(newRessource);
    },
    deleteRes(id){
      const resIndex = this.storedres.findIndex(res => res.id === id);
      this.storedres.splice(resIndex, 1);
    }
  }
}


</script>

<template>

    <BaseButton @click="setRessource('StoredRessources')" >Stored Ressources</BaseButton>

    <BaseButton @click="setRessource('AddRessource')" >Add Ressource</BaseButton>

    <keep-alive>
        <component :is="ressourceselected" />
    </keep-alive>

</template>

<style scoped>

.card
{
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}

</style>
