<script setup>
import GameCard from './GameCard.vue'
import SharedSearch from '../Shared/SharedSearch.vue'
import { ref } from 'vue'

const searchInput = ref('')

const { games } = defineProps({
  games: Array,
})

const gamesShown = ref(games)

const searchGames = () => {
  if (searchInput.value.trim() === '') {
    gamesShown.value = games
    return
  }

  gamesShown.value = games.filter((game) =>
    game.title.toLowerCase().includes(searchInput.value.toLowerCase()),
  )
}
</script>

<template>
  <section>
    <h2>Recent games</h2>
    <SharedSearch v-model="searchInput" @search="searchGames" />
    <div class="game-layout">
      <GameCard v-for="game in gamesShown" :key="game.title" :game="game" />
    </div>
  </section>
</template>

<style scoped>
.game-layout {
  display: grid;
  gap: 2rem;
  margin: 1rem auto;
}
</style>
