import { reactive } from 'vue'

export const modal = reactive({
  state: {
    show: false,
    game: {},
  },
  openModal(data = {}) {
    this.state.show = true
    if (Object.keys(data).length) {
      this.state.game = data
    }
  },
  closeModal() {
    this.state.show = false
    this.state.game = {}
  },
})
