<template>
  <div class="container">
    <div class="card text-center fade-in">
      <h1>🏭 Industrial Engineering Tools</h1>
      <p class="author">by Rong ZHOU</p>
      <p class="description">A comprehensive tool for industrial engineering calculations</p>

      <div class="datetime">
        <p>{{ currentDate }}</p>
        <p class="clock">{{ currentTime }}</p>
      </div>

      <nav class="nav-buttons">
        <NuxtLink to="/reliability-calculator" class="btn">
          🔧 Reliability Calculator
        </NuxtLink>
        <NuxtLink to="/consignment" class="btn">
          📋 Procédure de Consignation
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentDate = ref('')
const currentTime = ref('')
let timeInterval = null

const updateDateTime = () => {
  const now = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  currentDate.value = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
  currentTime.value = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

onMounted(() => {
  updateDateTime()
  timeInterval = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  max-width: 600px;
  width: 100%;
}

.author {
  color: #666;
  font-size: 1.2em;
  margin-bottom: 30px;
  font-style: italic;
}

.description {
  color: #666;
  margin: 20px 0;
  line-height: 1.6;
}

.datetime {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 0;
}

.datetime p {
  color: #666;
  font-size: 1.1em;
  margin: 5px 0;
}

.clock {
  font-size: 2em !important;
  font-weight: bold;
  color: #667eea !important;
  margin: 10px 0;
}

.nav-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.nav-buttons .btn {
  display: block;
  text-align: center;
  text-decoration: none;
}
</style>
