<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/useAuthStore.js'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  age: null,
  monthlyIncome: null,
  targetExpenseRatio: 60,
});

const errorMsg = ref('');
const loading = ref(false);

async function handleSetup() {
  errorMsg.value = '';

  if (form.age > 130 || form.age < 0) {
    errorMsg.value = '올바른 나이를 입력해주세요';
    return;
  }

  if (form.monthlyIncome < 0 || form.monthlyIncome > 1000000000) {
    errorMsg.value = '올바른 월 수입을 입력해주세요';
    return;
  }

  if (form.age === null || form.monthlyIncome === null) {
    errorMsg.value = '나이와 월 수입을 입력해주세요';
    return;
  }

  try {
    loading.value = true;
    await authStore.updateProfile({
      age: Number(form.age),
      monthlyIncome: Number(form.monthlyIncome),
      targetExpenseRatio: Number(form.targetExpenseRatio)
    })
    alert('설정이 완료되었습니다!')
    // 설정 완료 후 가이드 페이지로 이동
    router.push({ name: 'Guide', query: { source: 'login' } });
  } catch (e) {
    errorMsg.value = '설정 저장 중 오류가 발생했습니다';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="setup-page">
    <div class="setup-card">
      <div class="setup-header">
        <h1 class="page-title">
          반가워요, {{ authStore.currentUser?.name }}님!
        </h1>
        <p class="page-subtitle">정확한 진단을 위해 기초 정보를 알려주세요</p>
      </div>

      <form class="setup-form" @submit.prevent="handleSetup">
        <div class="form-group">
          <label>나이</label>
          <input
            v-model="form.age"
            type="number"
            class="form-input"
            placeholder="25"
            min="0"
            max="130"
            required
          />
        </div>

        <div class="form-group">
          <label>월 평균 수입 (원)</label>
          <input
            v-model="form.monthlyIncome"
            type="number"
            class="form-input"
            placeholder="3000000"
            required
          />
        </div>

        <div class="form-group">
          <label>목표 지출 비율 (%)</label>
          <div class="range-container">
            <input
              v-model="form.targetExpenseRatio"
              type="range"
              min="10"
              max="90"
              step="5"
              class="form-range"
            />
            <span class="range-value">{{ form.targetExpenseRatio }}%</span>
          </div>
          <p class="help-text">수입의 몇 %를 지출 목표로 잡을까요?</p>
        </div>

        <p v-if="errorMsg" class="error-msg">⚠️ {{ errorMsg }}</p>

        <button type="submit" class="btn-setup" :disabled="loading">
          <span v-if="loading">저장 중...</span>
          <span v-else>시작하기</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.setup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-main);
  padding: 1.5rem;
}

.setup-card {
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.setup-header {
  text-align: center;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  margin: 0;
}

.page-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0.5rem 0 0;
}

.setup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

.range-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.form-range {
  flex: 1;
  accent-color: var(--primary);
}

.range-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
  min-width: 3.5rem;
}

.help-text {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
}

.error-msg {
  font-size: 0.82rem;
  color: #e53935;
  margin: 0;
  text-align: center;
}

.btn-setup {
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

.btn-setup:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
