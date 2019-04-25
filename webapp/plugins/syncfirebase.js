// This plugin allow sync with firebase db and reverse
import { db } from './firebase'

const extend = (app, mixin) => {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push(mixin)
}

export default async function ({ store, app }) {
  await extend(app, {
    mounted() {
      const users = db.collection('users') // Agregar el where en un futuro
      users.onSnapshot((querySnapshot) => {
        const _user = {}
        querySnapshot.docs.map((doc) => {
          const _key = doc.id
          const _value = doc.data()
          _user[_key] = _value
        })
        store.commit('main/loadUserData', _user)
      })
    }
  })
}
