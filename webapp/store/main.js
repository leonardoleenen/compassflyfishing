export const state = () => ({
  destinations: [],
  programs: [],
  user: {}
})

export const mutations = {
  loadDestinations(state, destinations) {
    state.destinations = Object.assign([], destinations)
  },
  loadUserData(state, user) {
    state.user = Object.assign({}, user)
  }
}
