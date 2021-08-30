import { useStoreActions, useStoreState } from 'easy-peasy';

export default function useModal() {
  const current = useStoreState((state) => state.modal.current);
  const close = useStoreActions((state) => state.modal.close);
  const open = useStoreActions((state) => state.modal.open);
  return { current, open, close };
}
