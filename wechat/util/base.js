const isObject = obj => {
  return typeof obj === 'object';
}

const mixin = (origin = {}, target = {}) => {
  Object.keys(target).forEach(key => {
    origin[key] = target[key];
  })
}

module.exports = {
  isObject,
  mixin
}