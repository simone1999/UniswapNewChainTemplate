import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch } from '../state';
import { updateUserDarkMode } from '../state/user/actions';

export default function DarkModeQueryParamReader(): null {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    const theme = router.query.theme;

    if (typeof theme !== 'string') return;

    if (theme.toLowerCase() === 'light') {
      dispatch(updateUserDarkMode({ userDarkMode: false }));
    } else if (theme.toLowerCase() === 'dark') {
      dispatch(updateUserDarkMode({ userDarkMode: true }));
    }
  }, [dispatch, router.query.theme]); // Depend on router.query.theme to re-run when it changes

  return null;
}
