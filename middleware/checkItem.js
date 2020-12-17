export default function ({store, redirect, params}) {
  if (params.id) {
    return
  }

  const firstId = (store.getters.getFirstItem).id
  redirect(`/item/${firstId}`)
}
