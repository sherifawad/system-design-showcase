import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const usePermissionSync = (permissionCheckFunc, initialDelay = 1000, maxDelay = 60000, staleTime = 5000) => {
    const [retryCount, setRetryCount] = useState(0);

    const queryResult = useQuery({
        queryKey: ['permissionStatus'],
        queryFn: permissionCheckFunc,
        staleTime,
        retry: false,
    });

    useEffect(() => {
        const exponentialBackoff = Math.min(initialDelay * 2 ** retryCount, maxDelay);

        const intervalId = setInterval(() => {
            if (queryResult.status !== 'success') {
                setRetryCount(prev => prev + 1);
                queryResult.refetch();
            } else {
                clearInterval(intervalId);
            }
        }, exponentialBackoff);

        return () => clearInterval(intervalId);
    }, [queryResult.status, retryCount, initialDelay, maxDelay, queryResult]);

    return queryResult;
};

export default usePermissionSync;