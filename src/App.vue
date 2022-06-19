<template>
  <router-view />
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'stores/auth';

export default defineComponent({
  name: 'App',
  setup() {
    console.log('🚀 ~ file: App.vue ~ line 18 ~ App.vue');
    // step 1. 從localstorages 取得token（每頁都需驗正，故應將此驗正寫在App.vue)
    // step 2. 判斷token
    //  正確－index, 從 pinia 取得 token/account 並顯示
    //  錯誤－login, 並執行登出動作, 清除localstorage資料

    const $q = useQuasar();
    const router = useRouter();
    const auth = useAuthStore();
    const { token, isLogin, account } = storeToRefs(auth);
    // const setAccount = auth;
    console.log('🚀 ~ file: App.vue ~ line 26 ~ setup ~ account', account.value);
    console.log('🚀 ~ file: App.vue ~ line 26 ~ setup ~ isLogin', isLogin.value);
    console.log('🚀 ~ file: App.vue ~ line 26 ~ setup ~ token', token.value);
    console.log('🚀 ~ file: App.vue ~ line 29 ~ setup ~ account', account.value);

    $q.localStorage.set('token', 'quasar.....');
    const storageToken = $q.localStorage.getItem('token');
    console.log('🚀 ~ file: App.vue ~ line 17 ~ setup ~ storageToken', storageToken);

    onBeforeMount(() => {
      if (token === 'quasar') {
        console.log('🚀 ~ file: App.vue ~ line 29 ~ onBeforeMount ~ has auth');
        console.log('🚀 ~ file: App.vue ~ line 26 ~ setup ~ token', auth.setAccount('123'));
        router.replace({
          name: 'Index',
        });
      } else {
        console.log('🚀 ~ file: App.vue ~ line 29 ~ onBeforeMount ~ no auth');
        router.replace({
          name: 'Login',
        });
      }
    });
  },
});
</script>
