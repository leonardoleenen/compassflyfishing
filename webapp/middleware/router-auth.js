export default function ({ store, redirect, route }) {
  if (store.state.user != null && route.name === 'splash') {
    redirect('/backoffice')
  }

  if (store.state.user === null && isAdminRoute(route)) {
    redirect('/splash')
  }
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path === '/backoffice')) {
    return true
  }
}
