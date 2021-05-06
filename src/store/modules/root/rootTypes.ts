import {
  moduleActionContext,
  rootActionContext,
  moduleGetterContext,
  rootGetterContext,
} from '/Store/index'

/*------------ STATE -------------*/

export type rootState = {}

export const state: rootState = {}

/*------------ GETTERS -------------*/

export type Getters = {}

/*------------ MUTATIONS -------------*/

export enum RootMutationTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_PROJECTS = 'SET_PROJECTS',
  SET_USER = 'SET_USER',
}

/* ----------- ACTIONS ---------------*/

export enum RootActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_USER = 'GET_USER',
  GET_PROJECT_LIST = 'GET_PROJECT_LIST',
}
