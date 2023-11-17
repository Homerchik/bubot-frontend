<script setup>
  import { ref } from 'vue'

  const wallets = ref([])
  const selected = ref(Object)
  
  async function getWallets() {
    let r = fetch("http://localhost:8080/api/tg/user/353966118/wallets").then(r => r.json())
    wallets.value = await r
  }

getWallets()

</script>

<template>
        <label for="walletPicker">Wallet: </label>
        <select id="walletPicker" class="walletSelect" v-model="selected">
            <option v-for="w in wallets" :key="w.name" :value="w">{{ w.name }}</option>
        </select>
        <label for="walletPicker" v-show="selected.currency !== undefined">
            {{ ` ${selected.balance !== undefined? selected.balance.toFixed(2) : 0} ${selected.currency}` }}
        </label>
</template>