import { useCallback, useSyncExternalStore } from 'react';

const useMediaQuery = (query) => {
    const subscribe = useCallback(
        (callback) => {
            const mql = window.matchMedia(query);
            mql.addEventListener('change', callback);
            return () => mql.removeEventListener('change', callback);
        },
        [query]
    );

    return useSyncExternalStore(
        subscribe,
        () => window.matchMedia(query).matches,
        () => false
    );
};

export { useMediaQuery };
