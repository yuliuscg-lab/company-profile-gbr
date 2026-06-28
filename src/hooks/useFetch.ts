import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useFetch = <T,>(
    url: string,
    axiosConfig?: AxiosRequestConfig,
    axiosInstance: AxiosInstance = axios,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await axiosInstance.get<T>(url, axiosConfig);
            setData(res.data);
            if (onSuccess) onSuccess(res.data);
        } catch (err) {
            const formattedError = err instanceof Error ? err : new Error(String(err));
            setError(formattedError);
            if (onError) onError(formattedError);
        } finally {
            setIsLoading(false);
        }
    }, [url, axiosConfig, axiosInstance, onSuccess, onError]); // Dependency yang valid

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]); // Efek hanya berjalan jika URL berubah, bukan setiap render config

    return { data, isLoading, error, setError, refetch:fetchData };
};

export default useFetch;