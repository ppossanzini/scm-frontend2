
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export interface StoreState {
  dati: data.forecast[],
  _dati: Map<number, data.forecast>,
  statistiche: any
}

export interface StoreGetters {
  dataInterval: (min: number, max: number) => data.forecast[];
}

export const store = {
  state: {
    _dati: new Map(),
    dati: [],
    statistiche: {},
    filter: {
      minvalue: 0,
      maxvalue: 100
    }
  } as StoreState,
  mutations: {
    addForecast(state: StoreState, newForecasts: data.forecast[]) {
      for (const f of newForecasts) {
        const idx = state.dati.findIndex(i => i.id == f.id);
        if (idx >= 0) state.dati.splice(idx, 1, f);
        else
          state.dati.push(f);
      }

      // In alternativa al codice sopra. 
      for (const f of newForecasts) {
        Object.freeze(f);
        state._dati.set(f.id, f);
      }
      Vue.set(state.statistiche, "test", 4);
      (state.statistiche as any).test = 4

      state.dati.splice(0, state.dati.length, ...state._dati.values())
    }
  },
  actions: {
    addForecast(context: any, ...dati: data.forecast[]) {
      context.commit('addForecast', dati);
    }
  },
  getters: {
    dataInterval: (state: StoreState) => (min = 0, max = 100) =>
      state.dati.filter(i => i.temperature > min && i.temperature < max)
  },
  modules: {
  }
}


export default new Vuex.Store(store);
