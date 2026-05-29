<script setup>
import { computed } from 'vue';

import homeIcon from '../assets/nav/home-pixel.svg';
import bookIcon from '../assets/nav/book-pixel.svg';
import chartIcon from '../assets/nav/chart-pixel.svg';
import farmIcon from '../assets/nav/farm-pixel.svg';
import settingsIcon from '../assets/nav/settings-pixel.svg';

import pigIcon from '../assets/pixel-icons/pig.svg';
import calendarIcon from '../assets/pixel-icons/calendar.svg';
import clipboardIcon from '../assets/pixel-icons/clipboard.svg';
import trashIcon from '../assets/pixel-icons/trash.svg';
import moneyIcon from '../assets/pixel-icons/money.svg';
import expenseIcon from '../assets/pixel-icons/expense.svg';
import profileIcon from '../assets/pixel-icons/profile.svg';
import foodIcon from '../assets/pixel-icons/food.svg';
import busIcon from '../assets/pixel-icons/bus.svg';
import shoppingIcon from '../assets/pixel-icons/shopping.svg';
import movieIcon from '../assets/pixel-icons/movie.svg';
import hospitalIcon from '../assets/pixel-icons/hospital.svg';
import educationIcon from '../assets/pixel-icons/education.svg';
import houseIcon from '../assets/pixel-icons/house.svg';
import incomeSalaryIcon from '../assets/pixel-icons/income-salary.svg';
import incomeSideIcon from '../assets/pixel-icons/income-side.svg';
import incomeInvestIcon from '../assets/pixel-icons/income-invest.svg';
import incomeAllowanceIcon from '../assets/pixel-icons/income-allowance.svg';
import incomeEtcIcon from '../assets/pixel-icons/income-etc.svg';
import houseRockIcon from '../assets/pixel-icons/house-rock.svg';
import houseHutIcon from '../assets/pixel-icons/house-hut.svg';
import houseHomeIcon from '../assets/pixel-icons/house-home.svg';
import houseVillaIcon from '../assets/pixel-icons/house-villa.svg';
import houseCastleIcon from '../assets/pixel-icons/house-castle.svg';
import faceGoodIcon from '../assets/pixel-icons/face-good.svg';
import faceWarnIcon from '../assets/pixel-icons/face-warn.svg';
import faceBadIcon from '../assets/pixel-icons/face-bad.svg';
import skullIcon from '../assets/pixel-icons/skull.svg';
import alertIcon from '../assets/pixel-icons/alert.svg';
import checkIcon from '../assets/pixel-icons/check.svg';
import arrowUpIcon from '../assets/pixel-icons/arrow-up.svg';
import arrowDownIcon from '../assets/pixel-icons/arrow-down.svg';
import arrowRightIcon from '../assets/pixel-icons/arrow-right.svg';
import editIcon from '../assets/pixel-icons/edit.svg';

const props = defineProps({
  icon: {
    type: String,
    default: 'pig',
  },
  size: {
    type: [String, Number],
    default: '1.1rem',
  },
  alt: {
    type: String,
    default: '',
  },
});

const ICON_MAP = {
  nav_home: homeIcon,
  nav_account: bookIcon,
  nav_stats: chartIcon,
  nav_farm: farmIcon,
  nav_settings: settingsIcon,
  pig: pigIcon,
  calendar: calendarIcon,
  clipboard: clipboardIcon,
  trash: trashIcon,
  money: moneyIcon,
  expense: expenseIcon,
  profile: profileIcon,
  food: foodIcon,
  bus: busIcon,
  shopping: shoppingIcon,
  movie: movieIcon,
  hospital: hospitalIcon,
  education: educationIcon,
  house: houseIcon,
  income_salary: incomeSalaryIcon,
  income_side: incomeSideIcon,
  income_invest: incomeInvestIcon,
  income_allowance: incomeAllowanceIcon,
  income_etc: incomeEtcIcon,
  house_rock: houseRockIcon,
  house_hut: houseHutIcon,
  house_home: houseHomeIcon,
  house_villa: houseVillaIcon,
  house_castle: houseCastleIcon,
  face_good: faceGoodIcon,
  face_warn: faceWarnIcon,
  face_bad: faceBadIcon,
  skull: skullIcon,
  alert: alertIcon,
  check: checkIcon,
  arrow_up: arrowUpIcon,
  arrow_down: arrowDownIcon,
  arrow_right: arrowRightIcon,
  edit: editIcon,
};

const currentIcon = computed(() => ICON_MAP[props.icon] || pigIcon);

const iconSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size,
);
</script>

<template>
  <img
    class="pixel-icon"
    :src="currentIcon"
    :alt="alt || icon"
    :style="{ width: iconSize, height: iconSize }"
  />
</template>

<style scoped>
.pixel-icon {
  display: inline-block;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  vertical-align: middle;
  transform: scale(1.2);
  transform-origin: center center;
}
</style>
