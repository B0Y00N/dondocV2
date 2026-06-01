import { defineStore } from 'pinia';
import { ref, computed, watchEffect } from 'vue';
import { login as apiLogin, signup as apiSignup, getMe, updateMe } from '../api/auth.js';
import { setUserId } from '../api/http.js';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const currentUser = ref(null);
    const isLoggedIn = computed(() => !!currentUser.value);

    watchEffect(() => {
      setUserId(currentUser.value?.id ?? null);
    });

    const MOCK_USER = {
      id: 1,
      name: '테스트유저',
      age: 25,
      currentPigLevel: 7,
      currentHouseLevel: 3,
      currentCharacterLevel: 4,
      monthlyIncome: 3000000,
      targetExpenseRatio: 50,
      monthlyBudget: 1500000,
      dailyBudget: 48387,
    };

    async function login(userId, password) {
      currentUser.value = MOCK_USER;
    }

    async function signup(userId, password, name) {
      currentUser.value = { ...MOCK_USER, name };
    }

    function logout() {
      currentUser.value = null;
      setUserId(null);
    }

    async function updateProfile(updates) {
      if (!currentUser.value) throw new Error('로그인 정보가 없어요');
      const res = await updateMe(updates);
      const updated = res.data.data;
      currentUser.value = { ...currentUser.value, ...updated };
      return currentUser.value;
    }

    return {
      currentUser,
      isLoggedIn,
      login,
      signup,
      logout,
      updateProfile,
    };
  },
  {
    persist: {
      pick: ['currentUser'],
    },
  },
);
