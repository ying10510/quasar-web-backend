<template>
  <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">{{ content }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ConfirmItem',
  setup() {
    return {
      confirm: ref(false),
      content: ref(''),
    };
  },
};
</script>>
