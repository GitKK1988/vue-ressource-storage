<script>

export default {
  name: 'BaseButton',
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}


</script>

<template>

    <a :href="href" target="_blank">
        <slot></slot>
    </a>

</template>

<style scoped>

    a 
    {
        color: #3a0061;
        background-color: #f3f3f3;
        padding: 0.25rem 0.25rem;
        cursor: pointer;
        text-decoration: none;
        border-radius: 5px;
    }

</style>
