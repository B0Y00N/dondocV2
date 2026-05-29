<script setup>
import 'vue-datepicker-next/index.css';
import DatePicker from 'vue-datepicker-next';

import { computed, ref } from 'vue';
import { useBudgetStore } from '../stores/useBudgetStore.js';
import { usePigSystem } from '../composables/usePigSystem.js';

const store = useBudgetStore();
const { formatCurrency } = usePigSystem();

const props = defineProps({
  selectedMonth: { type: String, required: true },
  filterType: { type: String, default: 'all' },
});

const emit = defineEmits([
  'update:selectedMonth',
  'update:filterType',
  'addClick',
]);


const monthlyIncome = computed(() =>
  store.records
    .filter(
      (r) => r.date.startsWith(props.selectedMonth) && r.type === 'INCOME',
    )
    .reduce((s, r) => s + r.amount, 0),
);

const monthlyExpense = computed(() =>
  store.records
    .filter(
      (r) => r.date.startsWith(props.selectedMonth) && r.type === 'EXPENSE',
    )
    .reduce((s, r) => s + r.amount, 0),
);

const monthlyNet = computed(() => monthlyIncome.value - monthlyExpense.value);

const tooltip = ref(null);
const tooltipPos = ref({});

function showTooltip(event, label, value, colorClass) {
  const rect = event.currentTarget.getBoundingClientRect();
  tooltip.value = { label, value, colorClass };
  tooltipPos.value = {
    top: rect.top - 8 + window.scrollY + 'px',
    left: rect.left + rect.width / 2 + 'px',
  };
}

function hideTooltip() {
  tooltip.value = null;
}
</script>

<template>
  <div class="account-header">
    <!-- 월 선택 -->
    <date-picker
      :value="selectedMonth"
      @change="(val) => $emit('update:selectedMonth', val || '')"
      format="YYYY년 MM월"
      value-type="YYYY-MM"
      type="month"
      placeholder="월 선택하기"
      :popup-style="{ left: '0px !important', transform: 'none !important' }"
      :append-to-body="false"
    ></date-picker>

    <!-- 월간 요약 -->
    <div class="month-summary">
      <div
        class="summary-item income"
        @mouseenter="showTooltip($event, '수입', '+' + formatCurrency(monthlyIncome), 'income')"
        @mouseleave="hideTooltip"
      >
        <span class="s-label">수입</span>
        <span class="s-value truncate">+{{ formatCurrency(monthlyIncome) }}</span>
      </div>
      <div class="divider"></div>
      <div
        class="summary-item expense"
        @mouseenter="showTooltip($event, '지출', '-' + formatCurrency(monthlyExpense), 'expense')"
        @mouseleave="hideTooltip"
      >
        <span class="s-label">지출</span>
        <span class="s-value truncate">-{{ formatCurrency(monthlyExpense) }}</span>
      </div>
      <div class="divider"></div>
      <div
        class="summary-item net"
        @mouseenter="showTooltip($event, '합계', (monthlyNet >= 0 ? '+' : '') + formatCurrency(monthlyNet), monthlyNet >= 0 ? 'income' : 'expense')"
        @mouseleave="hideTooltip"
      >
        <span class="s-label">합계</span>
        <span class="s-value truncate" :class="monthlyNet >= 0 ? 'positive' : 'negative'">
          {{ monthlyNet >= 0 ? '+' : '' }}{{ formatCurrency(monthlyNet) }}
        </span>
      </div>
    </div>

    <!-- 툴팁 -->
    <Teleport to="body">
      <div
        v-if="tooltip"
        class="summary-tooltip"
        :style="{ top: tooltipPos.top, left: tooltipPos.left }"
      >
        <span class="tip-label">{{ tooltip.label }}</span>
        <span :class="'tip-' + tooltip.colorClass">{{ tooltip.value }}</span>
      </div>
    </Teleport>

    <!-- 필터 탭 + 추가 버튼 -->
    <div class="filter-row">
      <div class="filter-tabs">
        <button
          class="filter-tab"
          :class="{ active: filterType === 'all' }"
          @click="$emit('update:filterType', 'all')"
        >
          전체
        </button>
        <button
          class="filter-tab"
          :class="{ active: filterType === 'income' }"
          @click="$emit('update:filterType', 'income')"
        >
          수입
        </button>
        <button
          class="filter-tab"
          :class="{ active: filterType === 'expense' }"
          @click="$emit('update:filterType', 'expense')"
        >
          지출
        </button>
      </div>
      <button class="add-btn" @click="$emit('addClick')">+ 추가</button>
    </div>
  </div>
</template>

<style scoped>
.account-header {
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.month-select {
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  background: var(--bg-main);
  cursor: pointer;
  outline: none;
  font-family: inherit;
  width: 100%;
}

.month-summary {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
  cursor: default;
}

.truncate {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

/* 툴팁 */
.summary-tooltip {
  position: fixed;
  transform: translate(-50%, -100%);
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 6px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 9999;
}

.tip-label {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.tip-income {
  font-size: 0.88rem;
  font-weight: 700;
  color: #43a047;
}

.tip-expense {
  font-size: 0.88rem;
  font-weight: 700;
  color: #e53935;
}

.divider {
  width: 1px;
  height: 30px;
  background: var(--border);
}

.s-label {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.s-value {
  font-size: 0.88rem;
  font-weight: 700;
}

.summary-item.income .s-value {
  color: #43a047;
}
.summary-item.expense .s-value {
  color: #e53935;
}
.s-value.positive {
  color: #43a047;
}
.s-value.negative {
  color: #e53935;
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-tabs {
  display: flex;
  background: var(--bg-main);
  border-radius: 10px;
  padding: 3px;
  flex: 1;
}

.filter-tab {
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.2s;
}

.filter-tab.active {
  background: #fff;
  color: var(--primary);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.add-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
.month-selector {
  position: relative;
  width: 100%;
}

/* 기존 .month-select 스타일을 그대로 가져옴 */
.custom-select-box {
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  background: var(--bg-main);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 드롭다운 목록 상자 */
.custom-options {
  position: absolute;
  top: 110%; /* 살짝 띄움 */
  left: 0;
  width: 100%;
  background: var(--bg-main);
  border: 1.5px solid var(--border);
  border-radius: 10px;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 개별 옵션 디자인 (여기서 마음껏 수정 가능!) */
.custom-option {
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 600;
}

.custom-option:hover {
  background: var(--border); /* 마우스 올렸을 때 */
}

.custom-option.active {
  background: var(--border);
  color: var(--point-color, #3b82f6); /* 선택된 상태 강조 */
}

.arrow {
  font-size: 0.7rem;
  transition: transform 0.2s;
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

:deep(.mx-datepicker) {
  width: 100%; /* 너비가 안 먹을 때 필수 */
}
</style>
