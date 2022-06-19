<template>
  <!-- <q-btn color="primary" :label="label" @click="onCheckInput"></q-btn> -->
  <q-btn color="primary" :label="btnConfig.label" :type="btnConfig.type" />
  <q-btn color="primary" label="Clear" v-if="false" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormButton',
  // 定義元件可接收資料
  props: ['btnConfig'],
  emits: ['checkInput'],
  methods: {
    onCheckInput() {
      // eslint-disable-next-line quotes
      console.log("🚀 ~ file: ButtonItem.vue ~ line 14 ~ checkInput ~ checkInput");

      // 通知上層元件檢查input
      this.$emit('checkInput');
    },
  },
});
</script>
