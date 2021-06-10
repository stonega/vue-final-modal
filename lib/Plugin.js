import { createApi, createModal, createContainer } from './PluginCore'

/**
 * @description Ensure that `_vfm` is used when function `installPlugin` is executed for the first time
 */
let _count = 0

/**
 * @description Create a vfm instance by default for directly support `import { $modal, VModal, VDynamicModals } from 'vue-final-modal'`
 */
const _vfm = createVfm()
const { $modal, VModal, VDynamicModals } = _vfm
export { $modal, VModal, VDynamicModals }

/**
 * @description Support create multiple vfm instance
 */
export function createVfm() {
  let api = createApi()
  const vfm = {
    $modal: api,
    VModal: createModal(api),
    VDynamicModals: createContainer(api)
  }
  return vfm
}

/**
 * @description Vue plugin for register vfm instance globally
 */
export function vfmPlugin(pluginOptions) {
  return {
    install(Vue, options) {
      const _options = Object.assign({}, pluginOptions, options)
      installVfm(Vue, _options)
    }
  }
}

vfmPlugin.install = installVfm

/**
 * @description Register vfm instance globally
 */
export function installVfm(Vue, options = {}) {
  const { $modal, VModal, VDynamicModals } = _count === 0 ? _vfm : createVfm()
  _count += 1
  const key = options.key || '$modal'
  const name = options.name || 'VModal'
  const containerName = options.containerName || 'VDynamicModals'
  Vue.prototype[key] = $modal
  Vue.component(name, VModal)
  Vue.component(containerName, VDynamicModals)
}
