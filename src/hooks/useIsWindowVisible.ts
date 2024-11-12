import { useCallback, useEffect, useState } from 'react';

function isWindowVisible() {
  return !('visibilityState' in document) || document.visibilityState !== 'hidden';
}

/**
 * Returns whether the window is currently visible to the user.
 */
export default function useIsWindowVisible(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [focused, setFocused] = useState<boolean>(!isClient || isWindowVisible());
  const listener = useCallback(() => {
    setFocused(!isClient || isWindowVisible());
  }, [setFocused, isClient]);

  useEffect(() => {
    if (!isClient) return undefined;
    if (!('visibilityState' in document)) return undefined;

    document.addEventListener('visibilitychange', listener);
    return () => {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener, isClient]);

  return focused;
}
