import { useCallback, useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function useLanguage(langs) {
  const locale = useStoreState((action) => action.language.locale);
  const changeLanguage = useStoreActions((action) => action.language.changeLanguage);

  const [languages, setLanguages] = useState(() => langs.map(l => ({ ...l, selected: l.code === locale })));

  const onLanguageChange = useCallback((option) => {
    changeLanguage(option.code);
    setLanguages(prev => prev.map(op => {
      op.selected = op.label === option.label;
      return op;
    }));
  }, [changeLanguage]);

  useEffect(() => {
    setLanguages(prev => prev.map(l => ({ ...l, selected: l.code === locale })))
  }, [locale]);

  return { languages, onLanguageChange }
}
