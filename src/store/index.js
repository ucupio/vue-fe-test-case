import { createStore } from "vuex";

export default createStore({
  state: {
    loans: [],
    loan: {},
  },
  getters: {},
  mutations: {
    findLoanById(state, id) {
      const loanById = state.loans.find((loan) => loan.id === id);
      console.log(loanById);
      state.loan = loanById;
    },
  },
  actions: {
    async getLoans({ state }) {
      const response = await fetch(
        "https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json"
      );
      if (response.ok) {
        state.loans = await response.json();
      }
    },
  },
  modules: {},
});
