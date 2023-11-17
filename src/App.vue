<script setup>
  import 'primevue/resources/themes/lara-light-indigo/theme.css'
  import InputNumber from 'primevue/inputnumber';
  import WalletPicker from './assets/WalletPicker.vue'
  import CurrencyPicker from './assets/CurrencyPicker.vue'
  import CategoryPicker from './assets/CategoryPicker.vue'
  import Button from 'primevue/button';
  import Textarea from 'primevue/textarea';
  import SelectButton from 'primevue/selectbutton';


  import { ref } from 'vue'
  const amount=ref()
  const ftType=ref()

</script>

<template class="form">
  <WalletPicker/>
  <SelectButton v-model="ftType" :options="['Funding', 'Withdrawal']" aria-labelledby="custom" />
  <p>
    <InputNumber v-model="amount" placeholder="Enter amount" :minFractionDigits="0" :maxFractionDigits="2"/>
    <CurrencyPicker/>
  </p>
  <CategoryPicker/>
  <span class="p-float-label">
    <Textarea v-model="value" rows="5" cols="30" />
    <label>Commentary</label>
  </span>
  <Button label="Add" />    
  <h1>{{ TWA.initDataUnsafe.user }}</h1>

</template>