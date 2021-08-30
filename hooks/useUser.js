import { useStoreState, useStoreActions } from 'easy-peasy';

export default function useUser() {
  const user = useStoreState((state) => state.user.data);
  const login = useStoreActions((action) => action.user.login);
  const logout = useStoreActions((action) => action.user.logout);

  return { user, login, logout };
}
