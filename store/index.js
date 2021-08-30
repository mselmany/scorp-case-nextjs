import { createStore, persist } from 'easy-peasy';

import language from './language';
import user from './user';
import modal from './modal';

export default createStore({
  language: persist(language),
  user: persist(user),
  modal
});
