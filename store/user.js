import { action, thunk } from 'easy-peasy';

const userModel = {
  data: null,
  setUserData: action((state, payload) => {
    state.data = payload;
    console.log({ payload });
  }),
  login: thunk(async (actions, payload) => {
    try {
      const user = await Promise.resolve(payload); // api call?
      actions.setUserData(user);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }),
  logout: action((state, payload) => {
    state.data = null;
  }),
};

export default userModel;
