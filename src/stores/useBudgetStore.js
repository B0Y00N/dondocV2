import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  getDetail,
  createRecord,
  updateRecord as apiUpdateRecord,
  deleteRecord as apiDeleteRecord,
  getSummary,
} from '../api/records.js';

export const useBudgetStore = defineStore('budget', () => {
  const records = ref([]);
  const summary = ref(null);
  const currentMonth = ref(new Date().toISOString().slice(0, 7));
  const loading = ref(false);
  const error = ref(null);

  const today = new Date().toISOString().slice(0, 10);

  const todayRecords = computed(() =>
    records.value.filter((r) => r.date === today),
  );

  const todayExpense = computed(() =>
    todayRecords.value
      .filter((r) => r.type === 'EXPENSE')
      .reduce((sum, r) => sum + r.amount, 0),
  );

  async function fetchRecords(yearMonth, type) {
    try {
      loading.value = true;
      const res = await getDetail(yearMonth ?? currentMonth.value, type);
      const payload = res.data.data;
      records.value = Array.isArray(payload?.records) ? payload.records : (payload ?? []);
    } catch (e) {
      error.value = '거래 내역 조회 실패';
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  async function fetchSummary(month) {
    try {
      const res = await getSummary(month ?? currentMonth.value);
      const raw = res.data.data;
      summary.value = Array.isArray(raw) ? (raw[0] ?? null) : raw;
    } catch (e) {
      console.error('요약 조회 실패', e);
    }
  }

  async function addRecord(payload) {
    try {
      loading.value = true;
      const res = await createRecord(payload);
      const record = res.data.data;
      records.value = [record, ...records.value];
      return record;
    } catch (e) {
      error.value = '거래 추가 실패';
      console.error(e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function updateRecord(id, payload) {
    try {
      loading.value = true;
      const res = await apiUpdateRecord(id, payload);
      const updated = res.data.data;
      records.value = records.value.map((r) => (r.id === id ? updated : r));
      return updated;
    } catch (e) {
      error.value = '거래 수정 실패';
      console.error(e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function deleteRecord(id) {
    try {
      loading.value = true;
      await apiDeleteRecord(id);
      records.value = records.value.filter((r) => r.id !== id);
    } catch (e) {
      error.value = '거래 삭제 실패';
      console.error(e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  function resetStore() {
    records.value = [];
    summary.value = null;
    error.value = null;
  }

  return {
    records,
    todayRecords,
    summary,
    currentMonth,
    loading,
    error,
    todayExpense,
    fetchRecords,
    fetchSummary,
    addRecord,
    updateRecord,
    deleteRecord,
    resetStore,
  };
});
