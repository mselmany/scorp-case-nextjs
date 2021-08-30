import { action, thunk } from 'easy-peasy';

const modalModel = {
  current: null,
  open: action((state, component) => {
    state.current = component;
  }),
  close: action((state, payload) => {
    state.current = null;
  }),
};

export default modalModel;
