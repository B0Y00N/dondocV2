<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore.js';
import PixelIcon from '../components/PixelIcon.vue';

const router = useRouter();
const authStore = useAuthStore();

const userId = ref('');
const password = ref('');
const errorMsg = ref('');
const loading = ref(false);

async function handleLogin() {
  errorMsg.value = '';
  if (!userId.value.trim() || !password.value.trim()) {
    errorMsg.value = '아이디와 비밀번호를 입력해주세요';
    return;
  }

  try {
    loading.value = true;
    await authStore.login(userId.value.trim(), password.value);

    // 나이 정보가 없으면 설정으로, 있으면 홈으로
    if (!authStore.currentUser.age) {
      router.push({ name: 'Setup' });
    } else {
      router.push({ name: 'Home' });
    }
  } catch (e) {
    errorMsg.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-header">
        <div class="pig-icon"><PixelIcon icon="pig" size="3.6rem" /></div>
        <h1 class="app-title">돈독</h1>
        <p class="app-subtitle">내 소비의 주치의</p>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label>아이디</label>
          <input
            v-model="userId"
            type="text"
            class="form-input"
            placeholder="아이디를 입력하세요"
            autocomplete="username"
          />
        </div>

        <div class="form-group">
          <label>비밀번호</label>
          <input
            v-model="password"
            type="password"
            class="form-input"
            placeholder="비밀번호를 입력하세요"
            autocomplete="current-password"
          />
        </div>

        <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

        <button type="submit" class="btn-login" :disabled="loading">
          <span v-if="loading">로그인 중...</span>
          <span v-else>로그인</span>
        </button>

        <div class="signup-link">
          <span>계정이 없으신가요?</span>
          <router-link to="/signup">회원가입</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-main);
  padding: 1.5rem;
}

.login-card {
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.login-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.pig-icon {
  font-size: 4rem;
  line-height: 1;
  animation: pigFloat 3s ease-in-out infinite;
}

@keyframes pigFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.app-title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--primary);
  margin: 0;
}

.app-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
}

.form-input {
  border: 1.5px solid var(--border);
  border-radius: 12px;
  padding: 0.7rem 0.9rem;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: var(--primary);
}

.error-msg {
  font-size: 0.82rem;
  color: #e53935;
  margin: 0;
}

.btn-login {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
  width: 100%;
  margin-top: 0.5rem;
}

.btn-login:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.signup-link {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.signup-link a {
  color: var(--primary);
  font-weight: 700;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
