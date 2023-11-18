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
  <WalletPicker style="width: 360px; "/>
  <SelectButton v-model="ftType" :options="['Funding', 'Withdrawal']" aria-labelledby="custom" style="padding-top:25px; padding-bottom:10px;"/>
  <p>
    <InputNumber v-model="amount" placeholder="Enter amount" :minFractionDigits="0" :maxFractionDigits="2" style="padding-bottom:10px; width:195px; margin-right:5px"/>
    <CurrencyPicker style="margin-left: 10px; width: 150px;"/>
  </p>
  <CategoryPicker style="padding-bottom: 25px;"/>
  <span class="p-float-label">
    <Textarea v-model="value" rows="5" cols="30" />
    <label>Commentary</label>
  </span>
  <Button label="Add" style="margin-top:20px"/>    
  <h1>{{ TWA.initDataUnsafe.user }}</h1>

</template>