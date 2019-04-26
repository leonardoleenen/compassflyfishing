import { DB } from './fireinit'

export const fetchPrograms = (that) => {
  return DB.ref('/programs').once('value').then((snap) => {
    that.$store.commit('explore/setPrograms', snap.val())
  })
}

export const fetchDestinations = (that) => {
  return DB.ref('/destinations').once('value').then((snap) => {
    const aux = []
    Object.keys(snap.val()).forEach((key) => {
      aux.push(snap.val()[key])
    })
    that.$store.commit('explore/setDestinations', aux)
  })
}

export const fetchProgram = (programId) => {
  return DB.ref('/programs').once('value').then((snap) => {
    return snap.val()[programId]
  })
}
