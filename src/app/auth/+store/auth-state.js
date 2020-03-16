const initialState = {
  isAuth: localStorage.getItem('authtoken') !== null,
  authtoken: localStorage.getItem('authtoken'),
  userInfo: null
};

export const actionTypes = {
  loginSuccess: '[AUTH] LOGIN SUCCESS',
  loginFailed: '[AUTH] LOGIN FAILED',
  registerSuccess: '[AUTH] LOGIN SUCCESS',
  registerFailed: '[AUTH] LOGIN FAILED',
  logoutSuccess: '[AUTH] LOGOUT SUCCESS'
};

const getters = {
  authtoken: state => state.authtoken,
  isAuth: state => state.isAuth
};

const mutations = {
  [actionTypes.loginSuccess](state, payload) {
    Object.assign(state, { ...payload });
  },
  [actionTypes.registerSuccess](state, payload) {
    Object.assign(state, { ...payload });
  },
  [actionTypes.logoutSuccess](state) {
    Object.assign(state, { isAuth: false, authtoken: null, userInfo: null });
  }
};
const actions = {
  [actionTypes.loginSuccess]({ commit }, payload) {
    commit(actionTypes.loginSuccess, payload);
  },
  [actionTypes.registerSuccess]({ commit }, payload) {
    commit(actionTypes.registerSuccess, payload);
  },
  [actionTypes.logoutSuccess]({ commit }) {
    commit(actionTypes.logoutSuccess);
  }
};

export default {
  state: initialState,
  getters,
  actions,
  mutations
};
