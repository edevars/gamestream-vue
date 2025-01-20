<script setup>
import { reactive, onMounted } from 'vue'
import LayoutHero from './components/Layout/LayoutHero.vue'
import GameLayout from './components/Games/GameLayout.vue'
import SharedLoader from './components/Shared/SharedLoader.vue'
import GameModal from './components/Games/GameModal.vue'

const state = reactive({
  loading: true,
  error: false,
  gamesData: [],
})

const fetchGames = async () => {
  try {
    const response = await fetch('https://gamestreamapi.herokuapp.com/api/games')
    const data = await response.json()
    state.gamesData = data
  } catch (err) {
    state.error = true
    console.error(err)
  } finally {
    state.loading = false
  }
}

onMounted(async () => {
  await fetchGames()
})
</script>

<template>
  <LayoutHero />
  <main>
    <SharedLoader v-if="state.loading" />
    <GameLayout v-else-if="state.gamesData.length > 0" :games="state.gamesData" />
    <Teleport to="body">
      <GameModal />
    </Teleport>
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
