function Vue (options) {
  this._init(options)
  this._initMethod()
}

Vue.prototype = {
  constructor: Vue,
  ...require('./instance/init'),
  // observer: { ...require('./observer/index') }
}

// module.exports = Vue
export default Vue