<script>

export default {
  name: 'DeleteButton',
}


</script>

<template>

    <button>
        <slot></slot>
    </button>

</template>

<style scoped>
button {
  padding: 0.25rem 0.5rem;
  font-family: inherit;
  background-color: #000;
  border: 1px solid #000;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

</style>
