export const state = () => ({
  results: [],
  programs: [],
  destinations: []
})

export const mutations = {
  setResult(state, result) {
    state.results = result
  },
  setPrograms(state, programs) {
    const aux = []
    Object.keys(programs).forEach((key) => {
      aux.push(programs[key])
    })
    state.programs = aux
  },
  setDestinations(state, destinations) {
    state.destinations = destinations
  }
}
