import { useStoreState } from 'easy-peasy';

export default function useTranslation() {
  const translations = useStoreState((state) => state.language.translations);
  return translations
}
