<script setup>
import { computed } from 'vue';

import pig_background_1 from '../assets/pig_background_1.png';
import pig_background_2 from '../assets/pig_background_2.png';
import pig_background_3 from '../assets/pig_background_3.png';
import pig_background_4 from '../assets/pig_background_4.png';
import pig_background_5 from '../assets/pig_background_5.png';

const props = defineProps({
  houseLevel: {
    type: Number,
    default: 3,
  },
  scale: {
    type: Number,
    default: 1,
  },
});

const backgroundMap = {
  1: pig_background_1,
  2: pig_background_2,
  3: pig_background_3,
  4: pig_background_4,
  5: pig_background_5,
};

const currentBackground = computed(() => {
  return backgroundMap[props.houseLevel] || pig_background_3;
});

const bgStyle = computed(() => {
  return {
    backgroundImage: `url(${currentBackground.value})`,
    '--bg-scale': props.scale,
  };
});
</script>

<template>
  <div class="bg" :style="bgStyle"></div>
</template>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  pointer-events: none;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
