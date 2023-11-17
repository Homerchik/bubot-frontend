<script setup>
  import { ref } from 'vue'
  import Dropdown from 'primevue/dropdown';

  const wallets = ref([])
  const selected = ref(Object)
  
  async function getWallets() {
    let r = fetch("http://localhost:8080/api/tg/user/353966118/wallets")
      .then(r => r.json())
      .then(r => r.map(_ => {_.label = `${_.name} (${_.balance.toFixed(2)} ${_.currency})`; return _;}));
    wallets.value = await r;
  }

getWallets()

</script>

<template>
  <Dropdown v-model="selected" :options="wallets" optionLabel="label" placeholder="Select wallet" class="w-full md:w-14rem" />
</template>