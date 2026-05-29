<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  tail: { type: String, default: 'left' },
  speed: { type: Number, default: 45 },
})

const emit = defineEmits(['close'])

const displayed = ref('')
const scrollEl = ref(null)
let timer = null

function startTyping() {
  displayed.value = ''
  let i = 0
  clearInterval(timer)
  timer = setInterval(() => {
    if (i < props.text.length) {
      displayed.value += props.text[i]
      i++
      scrollToBottom()
    } else {
      clearInterval(timer)
    }
  }, props.speed)
}

function scrollToBottom() {
  if (scrollEl.value) scrollEl.value.scrollTop = scrollEl.value.scrollHeight
}

function scrollUp() {
  if (scrollEl.value) scrollEl.value.scrollBy({ top: -40, behavior: 'smooth' })
}

function scrollDown() {
  if (scrollEl.value) scrollEl.value.scrollBy({ top: 40, behavior: 'smooth' })
}

watch(() => props.text, startTyping, { immediate: true })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="bubble-wrap" :class="'tail-' + tail">
    <div class="bubble">
      <button class="close-btn" type="button" @click="emit('close')">✕</button>
      <p ref="scrollEl" class="bubble-text">{{ displayed }}<span class="cursor">█</span></p>
      <div class="scroll-btns">
        <button type="button" @click="scrollUp">▲</button>
        <button type="button" @click="scrollDown">▼</button>
      </div>
    </div>
    <div class="tail-pixel" />
  </div>
</template>

<style scoped>
.bubble-wrap {
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  pointer-events: auto;
}

.bubble {
  position: relative;
  background: rgba(26, 26, 46, 0.82);
  color: #e8f4e8;
  font-family: 'DungGeunMo', 'Galmuri11', 'Courier New', monospace;
  font-size: 0.65rem;
  line-height: 1.5;
  padding: 8px 10px 24px;
  min-width: 110px;
  max-width: 155px;

  box-shadow:
    4px 0px 0 0 #e8f4e8,
    -4px 0px 0 0 #e8f4e8,
    0px -4px 0 0 #e8f4e8,
    0px 4px 0 0 #e8f4e8,
    4px -4px 0 0 #e8f4e8,
    -4px -4px 0 0 #e8f4e8,
    4px 4px 0 0 #e8f4e8,
    -4px 4px 0 0 #e8f4e8,
    8px 0px 0 0 #000,
    -8px 0px 0 0 #000,
    0px -8px 0 0 #000,
    0px 8px 0 0 #000,
    8px -8px 0 0 #000,
    -8px -8px 0 0 #000,
    8px 8px 0 0 #000,
    -8px 8px 0 0 #000;
}

.close-btn {
  position: absolute;
  top: 4px;
  right: 6px;
  background: none;
  border: none;
  color: #90caf9;
  font-size: 0.65rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.bubble-text {
  margin: 0;
  padding-right: 12px;
  white-space: pre-wrap;
  word-break: keep-all;
  max-height: 90px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #90caf9 transparent;
}

.bubble-text::-webkit-scrollbar {
  width: 4px;
}

.bubble-text::-webkit-scrollbar-track {
  background: transparent;
}

.bubble-text::-webkit-scrollbar-thumb {
  background: #90caf9;
  border-radius: 2px;
}

.scroll-btns {
  position: absolute;
  bottom: 4px;
  right: 6px;
  display: flex;
  gap: 2px;
}

.scroll-btns button {
  background: none;
  border: none;
  color: #90caf9;
  font-size: 0.5rem;
  cursor: pointer;
  padding: 1px 3px;
  line-height: 1;
}

.scroll-btns button:hover {
  color: #e8f4e8;
}

.cursor {
  display: inline-block;
  color: #90caf9;
  animation: blink 0.8s step-end infinite;
  font-size: 0.6rem;
  vertical-align: middle;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.tail-pixel {
  width: 8px;
  height: 16px;
  background: #e8f4e8;
  margin-left: 20px;
  box-shadow: 0 2px 0 0 #000, 0 -2px 0 0 #000, -2px 0 0 0 #000;
  position: relative;
}

.tail-pixel::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 2px;
  width: 4px;
  height: 8px;
  background: #1a1a2e;
}

.tail-right .tail-pixel {
  margin-left: auto;
  margin-right: 20px;
}
</style>
