export const state = () => ({
  results: []
})

export const mutations = {
  setResult(state, result) {
    state.results = result
  }
}
