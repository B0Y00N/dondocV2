<script setup>
import 'vue-datepicker-next/index.css';
import DatePicker from 'vue-datepicker-next';

import { ref } from 'vue';
import DailyLog from '../components/DailyLog.vue';
import CalendarLog from '../components/CalendarLog.vue';
import MonthlyLog from '../components/MonthlyLog.vue';
import Summary from '../components/Summary.vue';
import PixelIcon from '../components/PixelIcon.vue';

const selectedMonth = ref(new Date().toISOString().slice(0, 7));
const activeTab = ref('summary'); // 'summary' | 'daily' | 'calendar' | 'monthly'

const tabs = [
  { key: 'summary', label: '요약', icon: 'nav_stats' },
  { key: 'daily', label: '일별', icon: 'calendar' },
  { key: 'calendar', label: '달력', icon: 'calendar' },
  { key: 'monthly', label: '월간', icon: 'calendar' },
];

</script>

<template>
  <div class="statistics-page">
    <div class="page-top">
      <h1 class="page-title">
        <PixelIcon icon="nav_stats" size="1.3rem" />
        <span>통계</span>
      </h1>
      <date-picker
        v-model:value="selectedMonth"
        format="YYYY년 MM월"
        value-type="YYYY-MM"
        type="month"
        placeholder="월 선택하기"
        :popup-style="{ right: '0px !important', transform: 'none !important' }"
        :append-to-body="false"
        :clearable="false"
      ></date-picker>
    </div>

    <!-- 탭 네비게이션 -->
    <div class="tab-nav">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        <PixelIcon :icon="tab.icon" size="1.1rem" />
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- 탭 콘텐츠 -->
    <div class="tab-content">
      <Summary v-if="activeTab === 'summary'" :selectedMonth="selectedMonth" />
      <DailyLog
        v-else-if="activeTab === 'daily'"
        :selectedMonth="selectedMonth"
      />
      <CalendarLog
        v-else-if="activeTab === 'calendar'"
        :selectedMonth="selectedMonth"
        @update:selectedMonth="selectedMonth = $event"
      />
      <MonthlyLog
        v-else-if="activeTab === 'monthly'"
        :selectedMonth="selectedMonth"
      />
    </div>
  </div>
</template>

<style scoped>
.statistics-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.page-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.month-select {
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 0.4rem 0.7rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  background: var(--bg-main);
  cursor: pointer;
  outline: none;
  font-family: inherit;
}

/* Tab Nav */
.tab-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 14px;
  padding: 4px;
  gap: 4px;
}

.tab-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 0.3rem;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.2s;
}

.tab-btn span:first-child {
  font-size: 1.1rem;
}

.tab-btn.active {
  background: var(--primary-light);
  color: var(--primary);
}

.tab-content {
  padding-bottom: 0.5rem;
}

:deep(.mx-input) {
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  background: var(--bg-main);
  height: auto;
  box-shadow: none;
}
</style>
