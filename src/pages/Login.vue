<template>
  <q-page class="flex flex-center">
    <div style="width: 200px">
      <q-img :alt="imgObj.title" :src="imgObj.link" :style="imgObj.style" class="rounded-borders" v-if="!imgObj.isShow"></q-img>
      <div class="column">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
        >
          <InputItem v-model="iptAccount" class="col" style="width: 200px" label="Account" />
          <InputItem v-model="iptPassword" class="col" style="width: 200px" label="Password" type="password" />
          <div class="col q-my-md q-mx-auto">
            <!-- <ButtonItem label="Login" type="submit" @checkInput="checkInput()" /> -->
            <q-btn label="Login" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
            <ConfirmItem v-model="confirm" >{{ confirmContent.value }}</ConfirmItem>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
import InputItem from '../components/form/InputItem.vue';
// import ButtonItem from '../components/form/ButtonItem.vue';
import ConfirmItem from '../components/form/ConfirmItem.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    InputItem,
    // ButtonItem,
    ConfirmItem,
  },
  setup() {
    // 元件使用資料
    const confirm = ref(false);
    const iptAccount = ref(null);
    const iptPassword = ref(null);
    const confirmContent = ref('confirm_content');
    const imgObj = ref({
      title: 'Logo',
      link: 'https://picsum.photos/id/1062/200/200',
      isShow: false,
      style: {
        width: '200px',
        height: '200px',
      },
    });

    const checkInput = () => {
      console.log('iptAccount: ', iptAccount.value);
      console.log('iptPassword: ', iptPassword.value);
      if (iptAccount.value === null || iptPassword.value === null || iptAccount.value === '' || iptPassword.value === '') {
        console.log('empty...');
      } else {
        console.log('confirm...');
        confirm.value = true;
      }
    };

    const onSubmit = () => {
      console.log('🚀 ~ file: Login.vue ~ line 70 ~ setup ~ onSubmit');
    };

    const onReset = () => {
      console.log('🚀 ~ file: Login.vue ~ line 66 ~ onReset ~ onReset');
      iptAccount.value = null;
      iptPassword.value = null;
    };

    return {
      confirm,
      iptAccount,
      iptPassword,
      confirmContent,
      imgObj,

      // methods
      checkInput,
      onSubmit,
      onReset,
    };
  },
});
</script>
