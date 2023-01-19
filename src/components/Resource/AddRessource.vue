<script>

export default {
  name: 'addRessource',
  data(){
    return{
        inputIsInvalid: false,
    }
  },
  inject: ['addRessource'],
  methods: {
    addRes(){
        const titleinput = this.$refs.title.value;
        const descriptioninput = this.$refs.description.value;
        const linkinput = this.$refs.link.value;

        // Validation that inputs not empty, trim() removes whitespace, inputIsInvalid is used to show error message with dialog
        if(titleinput.trim() === '' || descriptioninput.trim() === '' || linkinput.trim() === ''){
            this.inputIsInvalid = true;
            return;
        }

        this.addRessource(titleinput, descriptioninput, linkinput);
    }, confirmError(){
        this.inputIsInvalid = false;
    }
  }
}


</script>

<template>

    <div>
        <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
            <!-- #default refers to the default slot that is not named, you could also yoe  -->
            <template #default>
                <p>Unfortunately, at least one input value is invalid.</p>
                <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
            </template>
            <template #actions>
                <base-button @click="confirmError">Okay</base-button>
            </template>
        </BaseDialog>
        <BaseCard>
            <h2>Add Ressource</h2>
       
                <label for="title">Title</label><br>
                <input type="text" id="title" ref="title" /><br>
                <div class="spacer"></div>
                <label for="description">Description</label><br>
                <input type="text" id="description" ref="description" /><br>
                <div class="spacer"></div>
                <label for="link">Link</label><br>
                <input type="text" id="link" ref="link" /><br>
                <div class="spacer"></div>
                <BaseButton @click="addRes()">add</BaseButton>
           
        </BaseCard>
    </div>

</template>

<style scoped>

.spacer
{
    width: 100px;
    height: 20px;
}

input
{
    width: 100%;
    max-width: 400px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}


</style>
