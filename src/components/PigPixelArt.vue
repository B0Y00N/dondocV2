<script setup>
import { computed } from 'vue';

const props = defineProps({
  /** 1~10 단계 */
  level: { type: Number, required: true },
});

/**
 * level 기준으로 5가지 체형 결정
 * fat(9-10) / chubby(6-8) / normal(4-5) / thin(2-3) / grill(1)
 */
const state = computed(() => {
  if (props.level >= 9) return 'fat';
  if (props.level >= 6) return 'chubby';
  if (props.level >= 4) return 'normal';
  if (props.level >= 2) return 'thin';
  return 'grill';
});
</script>

<!--
  픽셀 아트 돼지 SVG — 마인크래프트 스타일
  viewBox: 200 × 270
  각 rect는 픽셀 아트 격자에 맞춰 배치됨 (shape-rendering: crispEdges)

  체형 비교:
    fat    → 황금 뚱뚱 돼지 (lv 9-10) — 황금색, 왕관, 반짝이
    chubby → 통통 분홍 돼지 (lv 6-8)  — 밝은 핑크, 마인크래프트 스타일
    normal → 보통 분홍 돼지 (lv 4-5)  — 기본 핑크
    thin   → 홀쭉 창백 돼지 (lv 2-3)  — 갈비뼈 4개
    grill  → 삼겹살 구이   (lv 1)     — 불판 위 삼겹살
-->
<template>
  <svg
    viewBox="0 0 200 270"
    class="pig-art"
    xmlns="http://www.w3.org/2000/svg"
    style="shape-rendering: crispEdges"
  >
    <!-- ==============================
         FAT PIG — 황금 뚱뚱 돼지 (lv 9-10)
         마인크래프트 스타일, 황금색, 왕관
         ============================== -->
    <g v-if="state === 'fat'">
      <!-- 황금 후광 -->
      <ellipse
        cx="100"
        cy="200"
        rx="92"
        ry="20"
        fill="#FFD700"
        opacity="0.25"
      />

      <!-- 왕관 -->
      <rect x="52" y="0" width="96" height="8" fill="#FFD700" />
      <rect x="52" y="8" width="8" height="16" fill="#FFD700" />
      <rect x="96" y="8" width="8" height="20" fill="#FFD700" />
      <rect x="140" y="8" width="8" height="16" fill="#FFD700" />
      <rect x="60" y="8" width="36" height="8" fill="#FFD700" />
      <rect x="104" y="8" width="36" height="8" fill="#FFD700" />
      <!-- 왕관 보석 -->
      <rect x="96" y="0" width="8" height="8" fill="#E53935" />
      <rect x="52" y="0" width="8" height="8" fill="#1E88E5" />
      <rect x="140" y="0" width="8" height="8" fill="#43A047" />

      <!-- 왼쪽 귀 -->
      <rect x="16" y="24" width="32" height="32" fill="#E8A000" />
      <rect x="20" y="28" width="24" height="24" fill="#FFD700" />
      <!-- 오른쪽 귀 -->
      <rect x="152" y="24" width="32" height="32" fill="#E8A000" />
      <rect x="156" y="28" width="24" height="24" fill="#FFD700" />

      <!-- 머리 -->
      <rect x="8" y="48" width="184" height="88" fill="#E8A000" />
      <rect x="12" y="52" width="176" height="80" fill="#FFD700" />
      <!-- 볼 홍조 -->
      <rect x="16" y="80" width="32" height="24" fill="#FFA000" opacity="0.5" />
      <rect
        x="152"
        y="80"
        width="32"
        height="24"
        fill="#FFA000"
        opacity="0.5"
      />

      <!-- 눈 — 마인크래프트 스타일 (검정 사각형) -->
      <rect x="44" y="64" width="24" height="24" fill="#1A1A1A" />
      <rect x="44" y="64" width="8" height="8" fill="#FFFFFF" />
      <rect x="132" y="64" width="24" height="24" fill="#1A1A1A" />
      <rect x="132" y="64" width="8" height="8" fill="#FFFFFF" />

      <!-- 코 -->
      <rect x="64" y="96" width="72" height="32" fill="#E8A000" />
      <rect x="68" y="100" width="64" height="24" fill="#FFA000" />
      <rect x="72" y="104" width="20" height="12" fill="#E65100" />
      <rect x="108" y="104" width="20" height="12" fill="#E65100" />

      <!-- 입 (U자 웃음) -->
      <rect x="72" y="128" width="8" height="8" fill="#E65100" />
      <rect x="80" y="132" width="40" height="8" fill="#E65100" />
      <rect x="120" y="128" width="8" height="8" fill="#E65100" />

      <!-- 몸통 -->
      <rect x="0" y="140" width="200" height="104" fill="#E8A000" />
      <rect x="4" y="144" width="192" height="96" fill="#FFD700" />
      <rect x="4" y="216" width="192" height="24" fill="#FFA000" />

      <!-- 배 무늬 (밝은 원) -->
      <rect
        x="64"
        y="160"
        width="72"
        height="56"
        fill="#FFE082"
        opacity="0.6"
      />

      <!-- 꼬리 (돌돌) -->
      <rect x="180" y="148" width="16" height="8" fill="#FFA000" />
      <rect x="188" y="140" width="8" height="8" fill="#FFA000" />
      <rect x="192" y="156" width="8" height="8" fill="#FFD700" />

      <!-- 다리 4개 -->
      <rect x="12" y="244" width="40" height="24" fill="#E8A000" />
      <rect x="16" y="248" width="32" height="16" fill="#FFD700" />
      <rect x="60" y="244" width="40" height="24" fill="#E8A000" />
      <rect x="64" y="248" width="32" height="16" fill="#FFD700" />
      <rect x="100" y="244" width="40" height="24" fill="#E8A000" />
      <rect x="104" y="248" width="32" height="16" fill="#FFD700" />
      <rect x="148" y="244" width="40" height="24" fill="#E8A000" />
      <rect x="152" y="248" width="32" height="16" fill="#FFD700" />

      <!-- 반짝 픽셀 -->
      <rect x="0" y="52" width="8" height="8" fill="#FFF59D" />
      <rect x="8" y="44" width="8" height="8" fill="#FFEE58" />
      <rect x="184" y="52" width="8" height="8" fill="#FFF59D" />
      <rect x="176" y="44" width="8" height="8" fill="#FFEE58" />
      <rect x="0" y="180" width="8" height="8" fill="#FFF59D" />
      <rect x="192" y="180" width="8" height="8" fill="#FFEE58" />
    </g>

    <!-- ==============================
         CHUBBY PIG — 통통 분홍 돼지 (lv 6-8)
         마인크래프트 스타일, 밝은 핑크, 행복한 표정
         ============================== -->
    <g v-else-if="state === 'chubby'">
      <!-- 왼쪽 귀 -->
      <rect x="28" y="8" width="32" height="36" fill="#C2185B" />
      <rect x="32" y="12" width="24" height="28" fill="#F48FB1" />
      <!-- 오른쪽 귀 -->
      <rect x="140" y="8" width="32" height="36" fill="#C2185B" />
      <rect x="144" y="12" width="24" height="28" fill="#F48FB1" />

      <!-- 머리 -->
      <rect x="16" y="40" width="168" height="88" fill="#C2185B" />
      <rect x="20" y="44" width="160" height="80" fill="#F8BBD0" />
      <!-- 볼 홍조 -->
      <rect x="24" y="76" width="28" height="20" fill="#F06292" opacity="0.5" />
      <rect
        x="148"
        y="76"
        width="28"
        height="20"
        fill="#F06292"
        opacity="0.5"
      />

      <!-- 눈 — 마인크래프트 스타일 -->
      <rect x="48" y="56" width="24" height="24" fill="#1A1A1A" />
      <rect x="48" y="56" width="8" height="8" fill="#FFFFFF" />
      <rect x="128" y="56" width="24" height="24" fill="#1A1A1A" />
      <rect x="128" y="56" width="8" height="8" fill="#FFFFFF" />

      <!-- 코 -->
      <rect x="64" y="92" width="72" height="32" fill="#C2185B" />
      <rect x="68" y="96" width="64" height="24" fill="#F48FB1" />
      <rect x="72" y="100" width="20" height="12" fill="#AD1457" />
      <rect x="108" y="100" width="20" height="12" fill="#AD1457" />

      <!-- 입 (U자 웃음) -->
      <rect x="72" y="124" width="8" height="8" fill="#AD1457" />
      <rect x="80" y="128" width="40" height="8" fill="#AD1457" />
      <rect x="120" y="124" width="8" height="8" fill="#AD1457" />

      <!-- 몸통 -->
      <rect x="8" y="132" width="184" height="108" fill="#C2185B" />
      <rect x="12" y="136" width="176" height="100" fill="#F8BBD0" />
      <rect x="12" y="212" width="176" height="24" fill="#F48FB1" />

      <!-- 배 무늬 -->
      <rect
        x="56"
        y="152"
        width="88"
        height="60"
        fill="#FCE4EC"
        opacity="0.7"
      />

      <!-- 꼬리 -->
      <rect x="176" y="148" width="16" height="8" fill="#F48FB1" />
      <rect x="184" y="140" width="8" height="8" fill="#F48FB1" />
      <rect x="188" y="156" width="8" height="8" fill="#F8BBD0" />

      <!-- 다리 4개 -->
      <rect x="20" y="244" width="36" height="24" fill="#C2185B" />
      <rect x="24" y="248" width="28" height="16" fill="#F8BBD0" />
      <rect x="64" y="244" width="36" height="24" fill="#C2185B" />
      <rect x="68" y="248" width="28" height="16" fill="#F8BBD0" />
      <rect x="100" y="244" width="36" height="24" fill="#C2185B" />
      <rect x="104" y="248" width="28" height="16" fill="#F8BBD0" />
      <rect x="144" y="244" width="36" height="24" fill="#C2185B" />
      <rect x="148" y="248" width="28" height="16" fill="#F8BBD0" />
    </g>

    <!-- ==============================
         NORMAL PIG — 홀쭉 분홍 돼지 (lv 4-5)
         좁은 몸통, 갈비뼈 4개, 슬픈 표정
         ============================== -->
    <g v-else-if="state === 'normal'" transform="translate(0, -12)">
      <!-- 희미한 실루엣 -->
      <rect
        x="24"
        y="40"
        width="152"
        height="196"
        fill="#FFCDD2"
        opacity="0.12"
      />

      <!-- 왼쪽 귀 (작아짐) -->
      <rect x="68" y="12" width="24" height="28" fill="#AD1457" />
      <rect x="72" y="16" width="16" height="20" fill="#FFCDD2" />
      <!-- 오른쪽 귀 -->
      <rect x="108" y="12" width="24" height="28" fill="#AD1457" />
      <rect x="112" y="16" width="16" height="20" fill="#FFCDD2" />

      <!-- 머리 (작아짐) -->
      <rect x="52" y="36" width="96" height="80" fill="#AD1457" />
      <rect x="56" y="40" width="88" height="72" fill="#FFCDD2" />

      <!-- 슬픈 눈썹 -->
      <rect x="64" y="48" width="8" height="4" fill="#1A1A1A" />
      <rect x="72" y="52" width="12" height="4" fill="#1A1A1A" />
      <rect x="116" y="48" width="8" height="4" fill="#1A1A1A" />
      <rect x="108" y="52" width="8" height="4" fill="#1A1A1A" />

      <!-- 눈 — 마인크래프트 스타일, 슬픔 -->
      <rect x="64" y="56" width="20" height="20" fill="#1A1A1A" />
      <rect x="64" y="56" width="6" height="6" fill="#FFFFFF" />
      <rect x="116" y="56" width="20" height="20" fill="#1A1A1A" />
      <rect x="116" y="56" width="6" height="6" fill="#FFFFFF" />

      <!-- 코 -->
      <rect x="72" y="84" width="56" height="28" fill="#AD1457" />
      <rect x="76" y="88" width="48" height="20" fill="#FFCDD2" />
      <rect x="80" y="92" width="14" height="10" fill="#880E4F" />
      <rect x="106" y="92" width="14" height="10" fill="#880E4F" />

      <!-- 입 (역U자 찡그림) -->
      <rect x="76" y="112" width="8" height="8" fill="#880E4F" />
      <rect x="84" y="108" width="32" height="8" fill="#880E4F" />
      <rect x="116" y="112" width="8" height="8" fill="#880E4F" />

      <!-- 몸통 (좁음) -->
      <rect x="68" y="120" width="64" height="128" fill="#AD1457" />
      <rect x="72" y="124" width="56" height="120" fill="#FFCDD2" />

      <!-- 갈비뼈 4개 -->
      <rect x="76" y="144" width="48" height="6" fill="#EF9A9A" opacity="0.8" />
      <rect x="76" y="164" width="48" height="6" fill="#EF9A9A" opacity="0.8" />
      <rect x="76" y="184" width="48" height="6" fill="#EF9A9A" opacity="0.8" />
      <rect x="76" y="204" width="48" height="6" fill="#EF9A9A" opacity="0.8" />

      <!-- 다리 2개 (가는 다리) -->
      <rect x="76" y="248" width="20" height="20" fill="#AD1457" />
      <rect x="80" y="252" width="12" height="12" fill="#FFCDD2" />
      <rect x="104" y="248" width="20" height="20" fill="#AD1457" />
      <rect x="108" y="252" width="12" height="12" fill="#FFCDD2" />

      <!-- 땀방울 픽셀 -->
      <rect x="24" y="64" width="8" height="8" fill="#90CAF9" />
      <rect x="28" y="72" width="8" height="8" fill="#64B5F6" />
      <rect x="156" y="88" width="8" height="8" fill="#90CAF9" />
      <rect x="160" y="96" width="8" height="8" fill="#64B5F6" />
    </g>

    <!-- ==============================
         THIN PIG — 위기 해골 돼지 (lv 2-3)
         몸통 40px (매우 좁음), X눈, 갈비뼈 10개
         ============================== -->
    <g v-else-if="state === 'thin'" transform="translate(0, -12)">
      <!-- 배경 실루엣 (흐릿하게 원래 크기 표시) -->
      <rect
        x="4"
        y="36"
        width="192"
        height="212"
        fill="#CFD8DC"
        opacity="0.1"
      />

      <!-- 귀 (아주 작음) -->
      <rect x="80" y="8" width="16" height="20" fill="#37474F" />
      <rect x="84" y="12" width="8" height="12" fill="#90A4AE" />
      <rect x="104" y="8" width="16" height="20" fill="#37474F" />
      <rect x="108" y="12" width="8" height="12" fill="#90A4AE" />

      <!-- 머리 (80px 너비) -->
      <rect x="60" y="24" width="80" height="76" fill="#37474F" />
      <rect x="64" y="28" width="72" height="68" fill="#CFD8DC" />

      <!-- X 눈 (픽셀 X 패턴, 각 픽셀=8px) -->
      <!-- 왼쪽 X눈 -->
      <rect x="70" y="48" width="8" height="8" fill="#37474F" />
      <rect x="86" y="48" width="8" height="8" fill="#37474F" />
      <rect x="78" y="56" width="8" height="8" fill="#37474F" />
      <rect x="70" y="64" width="8" height="8" fill="#37474F" />
      <rect x="86" y="64" width="8" height="8" fill="#37474F" />
      <!-- 오른쪽 X눈 -->
      <rect x="106" y="48" width="8" height="8" fill="#37474F" />
      <rect x="122" y="48" width="8" height="8" fill="#37474F" />
      <rect x="114" y="56" width="8" height="8" fill="#37474F" />
      <rect x="106" y="64" width="8" height="8" fill="#37474F" />
      <rect x="122" y="64" width="8" height="8" fill="#37474F" />

      <!-- 코 (아주 작음) -->
      <rect x="80" y="76" width="40" height="24" fill="#37474F" />
      <rect x="84" y="80" width="32" height="16" fill="#90A4AE" />
      <rect x="88" y="84" width="10" height="8" fill="#546E7A" />
      <rect x="102" y="84" width="10" height="8" fill="#546E7A" />

      <!-- 심한 찡그림 -->
      <rect x="84" y="100" width="8" height="8" fill="#37474F" />
      <rect x="92" y="104" width="16" height="8" fill="#37474F" />
      <rect x="108" y="100" width="8" height="8" fill="#37474F" />

      <!-- 몸통 (40px 너비 — 해골처럼 좁음) -->
      <rect x="80" y="108" width="40" height="148" fill="#37474F" />
      <rect x="84" y="112" width="32" height="140" fill="#CFD8DC" />

      <!-- 갈비뼈 10개 -->
      <rect x="86" y="120" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="132" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="144" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="156" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="168" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="180" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="192" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="204" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="216" width="28" height="5" fill="#90A4AE" />
      <rect x="86" y="228" width="28" height="5" fill="#90A4AE" />

      <!-- 막대 다리 -->
      <rect x="88" y="256" width="12" height="12" fill="#37474F" />
      <rect x="100" y="256" width="12" height="12" fill="#37474F" />

      <!-- 혼절/위기 픽셀 아이콘 -->
      <rect x="24" y="44" width="8" height="8" fill="#FFE082" />
      <rect x="32" y="52" width="8" height="8" fill="#FFD54F" />
      <rect x="148" y="44" width="12" height="12" fill="#B0BEC5" />
      <rect x="152" y="48" width="4" height="4" fill="#37474F" />
      <rect x="32" y="168" width="8" height="8" fill="#90CAF9" />
      <rect x="36" y="176" width="8" height="8" fill="#64B5F6" />
      <rect x="148" y="168" width="8" height="8" fill="#90CAF9" />
      <rect x="152" y="176" width="8" height="8" fill="#64B5F6" />
    </g>

    <!-- ==============================
         GRILL — 삼겹살 구이 (lv 1)
         마인크래프트 raw porkchop 스타일 2조각 + 숯불 그릴
         ============================== -->
    <g v-else transform="translate(0, -12)">
      <!-- 연기 픽셀 -->
      <rect x="44" y="14" width="8" height="8" fill="#B0BEC5" opacity="0.55" />
      <rect x="40" y="6" width="8" height="8" fill="#90A4AE" opacity="0.4" />
      <rect x="96" y="10" width="8" height="8" fill="#B0BEC5" opacity="0.6" />
      <rect x="100" y="2" width="8" height="8" fill="#90A4AE" opacity="0.4" />
      <rect x="152" y="14" width="8" height="8" fill="#B0BEC5" opacity="0.55" />
      <rect x="156" y="6" width="8" height="8" fill="#90A4AE" opacity="0.4" />

      <!-- =============================================
           고기 조각 1 — 마인크래프트 날삼겹살 스타일
           4px 픽셀 그리드, 계단형 모서리
           ============================================= -->
      <!-- 윤곽선 (계단 모서리) -->
      <rect x="16" y="52" width="64" height="4" fill="#7B1515" />
      <rect x="12" y="56" width="4" height="4" fill="#7B1515" />
      <rect x="80" y="56" width="4" height="4" fill="#7B1515" />
      <rect x="8" y="60" width="4" height="36" fill="#7B1515" />
      <rect x="84" y="60" width="4" height="36" fill="#7B1515" />
      <rect x="12" y="96" width="4" height="4" fill="#7B1515" />
      <rect x="80" y="96" width="4" height="4" fill="#7B1515" />
      <rect x="16" y="100" width="64" height="4" fill="#5A0D0D" />

      <!-- 본체 베이스 (살코기 중간톤) -->
      <rect x="12" y="56" width="68" height="44" fill="#D06878" />
      <!-- 상단 하이라이트 (살코기 밝은 부분) -->
      <rect x="12" y="56" width="68" height="16" fill="#EE9FAE" />
      <!-- 하단 그림자 -->
      <rect x="12" y="88" width="68" height="12" fill="#A84058" />

      <!-- 지방 영역 (왼쪽 상단 — 이미지의 크림/흰색 덩어리) -->
      <!-- 지방 1단계: 따뜻한 크림 -->
      <rect x="12" y="56" width="44" height="30" fill="#F5D4B8" />
      <!-- 지방 2단계: 밝은 크림 -->
      <rect x="12" y="56" width="32" height="22" fill="#FDEEDD" />
      <!-- 지방 3단계: 거의 흰색 (하이라이트 중심) -->
      <rect x="12" y="56" width="20" height="14" fill="#FFF8F0" />
      <!-- 지방 4단계: 순백 광택 -->
      <rect x="14" y="58" width="10" height="6" fill="#FFFFFF" opacity="0.6" />
      <!-- 지방 테두리 (오른쪽/아래 경계 — 어두운 핑크) -->
      <rect x="56" y="56" width="4" height="30" fill="#C8A090" opacity="0.5" />
      <rect x="12" y="86" width="44" height="4" fill="#C8A090" opacity="0.4" />
      <!-- 살코기에 섞인 작은 지방 반점 -->
      <rect x="64" y="64" width="10" height="8" fill="#FDEEDD" />
      <rect x="60" y="74" width="14" height="6" fill="#F5D4C0" />

      <!-- =============================================
           고기 조각 2 — 살짝 앞쪽/위쪽 (깊이감)
           ============================================= -->
      <!-- 윤곽선 -->
      <rect x="116" y="48" width="64" height="4" fill="#7B1515" />
      <rect x="112" y="52" width="4" height="4" fill="#7B1515" />
      <rect x="180" y="52" width="4" height="4" fill="#7B1515" />
      <rect x="108" y="56" width="4" height="36" fill="#7B1515" />
      <rect x="184" y="56" width="4" height="36" fill="#7B1515" />
      <rect x="112" y="92" width="4" height="4" fill="#7B1515" />
      <rect x="180" y="92" width="4" height="4" fill="#7B1515" />
      <rect x="116" y="96" width="64" height="4" fill="#5A0D0D" />

      <!-- 본체 베이스 -->
      <rect x="112" y="52" width="68" height="44" fill="#D06878" />
      <!-- 상단 하이라이트 -->
      <rect x="112" y="52" width="68" height="16" fill="#EE9FAE" />
      <!-- 하단 그림자 -->
      <rect x="112" y="84" width="68" height="12" fill="#A84058" />

      <!-- 지방 영역 (왼쪽 상단) -->
      <rect x="112" y="52" width="44" height="30" fill="#F5D4B8" />
      <rect x="112" y="52" width="32" height="22" fill="#FDEEDD" />
      <rect x="112" y="52" width="20" height="14" fill="#FFF8F0" />
      <rect x="114" y="54" width="10" height="6" fill="#FFFFFF" opacity="0.6" />
      <rect x="156" y="52" width="4" height="30" fill="#C8A090" opacity="0.5" />
      <rect x="112" y="82" width="44" height="4" fill="#C8A090" opacity="0.4" />
      <!-- 살코기 지방 반점 -->
      <rect x="164" y="60" width="10" height="8" fill="#FDEEDD" />
      <rect x="160" y="70" width="14" height="6" fill="#F5D4C0" />

      <!-- ===== 불판 그레이트 ===== -->
      <rect x="8" y="108" width="184" height="5" fill="#5D4037" />
      <rect x="8" y="118" width="184" height="5" fill="#6D4C41" />
      <rect x="20" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="44" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="68" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="92" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="116" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="140" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="164" y="104" width="4" height="24" fill="#4E342E" />
      <rect x="184" y="104" width="4" height="24" fill="#4E342E" />

      <!-- ===== 불판 몸체 ===== -->
      <rect x="8" y="128" width="184" height="44" fill="#5D4037" />
      <rect x="12" y="132" width="176" height="36" fill="#1A1A1A" />

      <!-- ===== 불꽃 ===== -->
      <rect x="44" y="152" width="112" height="12" fill="#B71C1C" />
      <rect x="36" y="144" width="12" height="12" fill="#D32F2F" />
      <rect x="76" y="140" width="12" height="16" fill="#D32F2F" />
      <rect x="116" y="140" width="12" height="16" fill="#D32F2F" />
      <rect x="152" y="144" width="12" height="12" fill="#D32F2F" />
      <rect x="52" y="136" width="12" height="16" fill="#E65100" />
      <rect x="88" y="132" width="12" height="12" fill="#E65100" />
      <rect x="108" y="132" width="12" height="12" fill="#E65100" />
      <rect x="140" y="136" width="12" height="16" fill="#E65100" />
      <rect x="60" y="132" width="8" height="8" fill="#FDD835" />
      <rect x="92" y="128" width="8" height="8" fill="#FDD835" />
      <rect x="112" y="128" width="8" height="8" fill="#FDD835" />
      <rect x="140" y="132" width="8" height="8" fill="#FDD835" />
      <rect x="96" y="124" width="8" height="8" fill="#FFEE58" />

      <!-- ===== 그릴 다리 ===== -->
      <rect x="36" y="172" width="16" height="72" fill="#4E342E" />
      <rect x="148" y="172" width="16" height="72" fill="#4E342E" />
      <rect x="36" y="232" width="128" height="8" fill="#3E2723" />
      <rect x="28" y="240" width="28" height="8" fill="#3E2723" />
      <rect x="144" y="240" width="28" height="8" fill="#3E2723" />
    </g>
  </svg>
</template>

<style scoped>
.pig-art {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
