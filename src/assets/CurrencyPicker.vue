<script setup>
  import { ref } from 'vue'
  import Dropdown from 'primevue/dropdown';

  const currencies = ref([])
  const selected = ref('')
  
  async function getCurrencies() {
    currencies.value = ["EUR", "USD", "UAH", "GBP", "RUB", "USDT", "BTC", "ETH"]
  }

getCurrencies()

</script>

<template>
    <Dropdown v-model="selected" :options="currencies" placeholder="Currency" class="w-full md:w-14rem" />
</template>