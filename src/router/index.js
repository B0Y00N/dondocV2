import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore.js';
import HomePage from '../pages/HomePage.vue';
import AccountPage from '../pages/AccountPage.vue';
import StatisticsPage from '../pages/StatisticsPage.vue';
import SettingPage from '../pages/SettingPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import SetupPage from '../pages/SetupPage.vue';
import GuidePage from '../pages/GuidePage.vue';
import FarmPage from '../pages/FarmPage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { public: true },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage,
    meta: { public: true },
  },
  { path: '/setup', name: 'Setup', component: SetupPage },
  { path: '/', name: 'Home', component: HomePage },
  { path: '/guide', name: 'Guide', component: GuidePage },
  { path: '/account', name: 'Account', component: AccountPage },
  { path: '/statistics', name: 'Statistics', component: StatisticsPage },
  { path: '/farm', name: 'Farm', component: FarmPage },
  { path: '/settings', name: 'Settings', component: SettingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  // 1. 비로그인 상태에서 퍼블릭 페이지가 아닌 곳에 접근하면 로그인으로
  if (!to.meta.public && !authStore.isLoggedIn) {
    return { name: 'Login' };
  }

  // 2. 로그인 상태에서 로그인/회원가입 페이지 접근하면 홈으로
  if ((to.name === 'Login' || to.name === 'Signup') && authStore.isLoggedIn) {
    return { name: 'Home' };
  }

  // 3. 로그인 상태인데 아직 나이 정보가 없으면 설정 페이지로 (단, 가이드/설정 페이지면 제외)
  if (
    authStore.isLoggedIn &&
    !authStore.currentUser.age &&
    to.name !== 'Guide' &&
    to.name !== 'Setup'
  ) {
    return { name: 'Setup' };
  }
});

export default router;
