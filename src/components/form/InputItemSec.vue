<template>
    <q-input :model-value="value" @update:model-value="(val) => $emit('update:value', val)" :label="label" clearable clear-icon="close">
    </q-input>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'FormInput',
  props: ['label', 'value'],
  emits: ['update:value'],
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    // const iptValue = computed({
    //   get: () => props.value,
    //   set: (val) => {
    //     console.log(val);
    //     emit('update:value', val);
    //   },
    // });
    const chkIpt = (val) => {
      console.log('🚀 ~ file: InputItemSec.vue ~ line 21 ~ chkIpt ~ val', val);
    };

    return { chkIpt };
  },
});
</script>
