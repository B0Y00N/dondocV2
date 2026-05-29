<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { getDailySummary } from '../api/records.js'
import { usePigSystem } from '../composables/usePigSystem.js'
import PixelIcon from './PixelIcon.vue'

const props = defineProps({
  selectedMonth: { type: String, required: true },
})

const { getPigStateByLevel, formatCurrency, formatDate } = usePigSystem()

const rawDailyData = ref([])

async function loadDailySummary() {
  try {
    const res = await getDailySummary(props.selectedMonth)
    rawDailyData.value = Array.isArray(res.data?.data) ? res.data.data : (Array.isArray(res.data) ? res.data : [])
  } catch (e) {
    console.error('DailyLog 일별 통계 조회 실패', e)
    rawDailyData.value = []
  }
}

onMounted(loadDailySummary)
watch(() => props.selectedMonth, loadDailySummary)

const dailyData = computed(() =>
  [...rawDailyData.value]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((day) => ({ ...day, pigState: getPigStateByLevel(day.pigLevel) }))
)
</script>

<template>
  <div class="daily-log">
    <div v-if="dailyData.length === 0" class="empty">
      <p class="empty-title">
        <PixelIcon icon="clipboard" size="1rem" />
        <span>이달 데이터가 없어요</span>
      </p>
    </div>

    <div v-else class="daily-list">
      <div v-for="day in dailyData" :key="day.date" class="daily-item">
        <div class="daily-left">
          <PixelIcon class="pig-face-sm" :icon="day.pigState.face" size="1.4rem" />
          <div>
            <p class="daily-date">{{ formatDate(day.date) }}</p>
            <p class="daily-level" :style="{ color: day.pigState.color }">
              Lv.{{ day.pigState.level }} · {{ day.pigState.label }}
            </p>
          </div>
        </div>
        <div class="daily-right">
          <p v-if="day.income > 0" class="d-income">+{{ formatCurrency(day.income) }}</p>
          <p v-if="day.expense > 0" class="d-expense">-{{ formatCurrency(day.expense) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.daily-log { display: flex; flex-direction: column; gap: 0.5rem; }

.empty {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.empty-title {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.daily-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.daily-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 14px;
  padding: 0.8rem 1rem;
}

.daily-left { display: flex; align-items: center; gap: 0.8rem; }

.pig-face-sm { line-height: 1; }

.daily-date { font-size: 0.88rem; font-weight: 600; margin: 0; }
.daily-level { font-size: 0.75rem; margin: 0; font-weight: 600; }

.daily-right { text-align: right; }
.d-income { font-size: 0.82rem; font-weight: 600; color: #43A047; margin: 0; }
.d-expense { font-size: 0.9rem; font-weight: 700; color: #E53935; margin: 0; }
</style>
