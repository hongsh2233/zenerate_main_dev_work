import { defineModule } from 'direct-vuex'
import { moduleActionContext, moduleGetterContext } from '/Store/index'
import { RootMutationTypes, RootActionTypes } from './rootTypes'
import type { rootState, Getters } from './rootTypes'
import ApiService from '/Services/api'

const rootStore = defineModule({
  namespaced: true,
  state: (): rootState => {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
})

export default rootStore
const userGetterContext = (args: [any, any, any, any]) =>
  moduleGetterContext(args, rootStore)
const userActionContext = (context: any) =>
  moduleActionContext(context, rootStore)
