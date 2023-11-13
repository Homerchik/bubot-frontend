<script setup>
  import { ref } from 'vue'
  // import { WebApp } from 'tg-lib'

  const count = ref(0)
  const vals = new Array(1,2,3,4)


</script>

<template>
  <main>
    <h1>Just some text before button</h1>
    <button @click="count++">You clicked me {{  count }} times.</button>
    <p><select>
      <option v-for="i in vals" :key="i" :value="i">{{ i + " value " + count}}</option>
    </select></p>
  </main>
</template>

<style>
  button {
    background-color: aquamarine;
  }

  main {
    text-align: center;
  }
</style>
