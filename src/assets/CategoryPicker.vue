<script setup>
  import { ref } from 'vue'
  import SelectButton from 'primevue/selectbutton';

  const categories = ref([])
  const selected = ref('')
  
  async function getCategories() {
    categories.value = [{"value": "Household"}, {"value": "Service"}]
  }

getCategories()

</script>

<template>
    <SelectButton v-model="selected" :options="categories" optionLabel="value" dataKey="value" aria-labelledby="custom" />
</template>  
  
  
  
