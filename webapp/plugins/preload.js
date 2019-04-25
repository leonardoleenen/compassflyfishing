const extend = (app, mixin) => {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push(mixin)
}

export default async function ({ store, app }) {
  await extend(app, {
    mounted() {
      fetch('/destinations.json').then(data => data.json()).then((res) => {
        store.commit('main/loadDestinations', res.destinations)
      })
    }
  })
}
