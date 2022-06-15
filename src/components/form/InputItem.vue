<template>
    <q-input v-model="text" :label="label" clearable clear-icon="close">
    </q-input>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormInput',
  props: ['label'],
});
</script>
