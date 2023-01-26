import createStore from "apex-reactive-store-v2";

const store = createStore({
    name: 'todo',
    initial: {
        data: (() => {
            try {
                return JSON.parse(localStorage.getItem('todo')) || []
            } catch (error) {
                localStorage.clear();
                return [];
            }
        })(),
    },
    reducers: {
        create(state, payload) {
            state.data.push(payload)
        },

        remove(state, payload) {
            const index = state.data.findIndex(todo => todo.id === payload.id);
            if (~index) state.data.splice(index, 1)
        },

        update(state, payload) {
            const index = state.data.find(todo => todo.id === payload.id);
            if (~index) state.data[index] = { ...state.data[index], ...payload.data };
        },

        checked(state, payload) {
            const index = state.data.findIndex(todo => todo.id === payload.id);
            if (~index) state.data[index]['completed'] = payload.completed;
        },

        clearCompleted(state) {
            state.data = state.data.filter(todo => !todo.completed)
        },

        checkedAll(state) {
            state.data = state.data.map((todo) => {
                todo.completed = true;
                return todo;
            })
        },

        unCheckedAll(state) {
            state.data = state.data.map((todo) => {
                todo.completed = false;
                return todo;
            })
        }
    }

});

const useApexStore = store.defineApexStore;

export const { create, remove, update, checked, clearCompleted, checkedAll, unCheckedAll } = store.actions;

export default useApexStore;
