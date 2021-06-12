import { createApi, createModal, createContainer } from './PluginCore'

/**
 * @description Ensure that `_vfm` is used when function `installPlugin` is executed for the first time
 */
let _count = 0

const _key = '$modal'
const _name = 'VModal'
const _containerName = 'VDynamicModals'

/**
 * @description Support create multiple vfm instance
 */
export const createVfm = () => {
  let api = createApi()
  return {
    [_key]: api,
    [_name]: createModal(api),
    [_containerName]: createContainer(api)
  }
}

/**
 * @description Create a vfm instance by default for directly support `import { $modal, VModal, VDynamicModals } from 'vue-final-modal'`
 */
const _vfm = createVfm()
export const { $modal, VModal, VDynamicModals } = _vfm

/**
 * @description Register vfm instance globally
 */
export const installVfm = (Vue, options = {}) => {
  const { $modal, VModal, VDynamicModals } = _count === 0 ? _vfm : createVfm()
  _count += 1
  const key = options[_key] || _key
  const name = options[_name] || _name
  const containerName = options[_containerName] || _containerName
  Vue.prototype[key] = $modal
  Vue.component(name, VModal)
  Vue.component(containerName, VDynamicModals)
}

/**
 * @description Vue plugin for register vfm instance globally
 */
export const vfmPlugin = pluginOptions => ({
  install(Vue, options) {
    const _options = Object.assign({}, pluginOptions, options)
    installVfm(Vue, _options)
  }
})

vfmPlugin.install = installVfm
