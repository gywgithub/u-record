// router/modules/index.js
const files = require.context('.', false, /\.js$/)
const modules = []

files.keys().forEach(key => {
  if (key === './index.js') return
  const item = files(key).default
  modules.push(...item)
})
console.dir(modules);
export default modules
