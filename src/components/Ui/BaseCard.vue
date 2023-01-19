<script>

export default {
  name: 'BaseCard'
}


</script>

<template>

    <div class="card">
        <slot></slot>
    </div>

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
