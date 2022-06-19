<template>
  <q-page class="flex flex-center">
    <div style="width: 200px">
      <q-img :alt="imgObj.title" :src="imgObj.link" :style="imgObj.style" class="rounded-borders" v-if="!imgObj.isShow"></q-img>
      <div class="column">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
        >
          {{ iptAccount }}
          <InputItem v-model:value="iptAccount" :iptConfig="iptAccountSet" />
          <InputItem v-model:value="iptPassword" :iptConfig="iptPasswordSet" />
          <div class="col q-my-md q-mx-auto">
            <ButtonItem :btnConfig="btnLoginSet" />
            <ConfirmItem v-model="confirm" :content="confirmContent"/>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import InputItem from '../components/form/InputItem.vue';
import ButtonItem from '../components/form/ButtonItem.vue';
import ConfirmItem from '../components/form/ConfirmItem.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    InputItem,
    ButtonItem,
    ConfirmItem,
  },
  setup() {
    const router = useRouter();

    // 元件使用資料
    const confirm = ref(false);
    const iptAccount = ref(null);
    const iptPassword = ref(null);
    const confirmContent = 'confirm_content';
    const imgObj = {
      title: 'Logo',
      link: 'https://picsum.photos/id/1062/200/200',
      isShow: false,
      style: {
        width: '200px',
        height: '200px',
      },
    };
    // 有需要響應式的變數才需使用ref
    const iptAccountSet = {
      label: 'Account',
      rules: [(val) => !!val || 'Please type account'],
    };

    const iptPasswordSet = {
      label: 'Password',
      rules: [
        (val) => !!val || 'Please type your password',
      ],
      type: 'password',
    };

    const btnLoginSet = {
      label: 'Login',
      type: 'submit',
    };

    const checkInput = () => {
      console.log('iptAccount: ', iptAccount.value);
      console.log('iptPassword: ', iptPassword.value);
      if (iptAccount.value && iptPassword.value) {
        console.log('confirm...');
        confirm.value = true;
      } else {
        console.log('empty...');
      }
    };

    const onSubmit = () => {
      // checkInput();
      console.log('🚀 ~ file: Login.vue ~ line 70 ~ setup ~ onSubmit');

      // router.push({
      //   name: 'Index',
      // });

      router.replace({
        name: 'Index',
      });
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
      iptAccountSet,
      iptPasswordSet,
      btnLoginSet,

      // methods
      checkInput,
      onSubmit,
      onReset,
    };
  },
});
</script>
