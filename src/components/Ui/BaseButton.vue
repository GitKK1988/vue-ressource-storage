<script>

export default {
  name: 'BaseButton',
}


</script>

<template>

    <button>
        <slot></slot>
    </button>

</template>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

</style>
