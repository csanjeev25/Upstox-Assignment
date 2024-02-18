import { useState, useEffect, useRef, useCallback } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { makeGetRequest } from '../services/network/api.utils';
import { ERROR, RESPONSE } from '../services/network/api.constants';

type Props = {
  url: string;
  connectivityToggle?: boolean;
  makeApiCallWithTimeout?: boolean;
};

const API_TIMEOUT_DURATION = 15000;

const useFetch = (props: Props) => {
  const {
    url,
    connectivityToggle = false,
  } = props;
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    data: null,
    hasError: false,
    shouldReload: true,
    isConnectionTimeout: false
  })
  const { isConnected, isInternetReachable, type } = useNetInfo();
  const previousUrl = useRef('');
  const previousShouldReload = useRef<boolean>(true);

  let controller: AbortController = useRef(new AbortController()).current;

  const internetReachablilityState =
    isInternetReachable !== null
      ? isInternetReachable || type === 'vpn'
      : isConnected;

  const hasInternetConnection = isConnected && internetReachablilityState;

  const shouldNotFetch = () =>
    fetchState.data &&
    previousUrl.current === url &&
    previousShouldReload.current === fetchState.shouldReload;

  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      if (!url) {
        setFetchState(prevState => ({ ...prevState, hasError: true }));
        return;
      }
      /**
       * For handling the case where internet is reconnected after disconnecting but url wasn't changed.
       */
      if (shouldNotFetch()) {
        return;
      }
      previousUrl.current = url;
      previousShouldReload.current = fetchState.shouldReload;

      setFetchState(prevState => ({ ...prevState, isLoading: true, isConnectionTimeout: false }));
      const response = await makeGetRequest(url, API_TIMEOUT_DURATION, controller.signal)

      /**
       * if component is not mounted then return else it'll cause memory leak.
       */
      if (!isComponentMounted) return;
      if (typeof response === 'string' && response === ERROR.ABORT_ERROR) {
        setFetchState(prevState => ({ ...prevState, isLoading: false, isConnectionTimeout: true }));
        controller.abort();
      } else if (response) {
        setFetchState(prevState => ({ ...prevState, isLoading: false, isConnectionTimeout: false, hasError: false, data: response }));
      } else if (response === RESPONSE.NULL) {
        setFetchState(prevState => ({ ...prevState, isLoading: false, hasError: true }));
      }
    };

    hasInternetConnection ? fetchData() : setFetchState(prevState => ({ ...prevState, isLoading: false}));
    return () => {
      isComponentMounted = false;
    };
  }, [url, hasInternetConnection, connectivityToggle, fetchState.shouldReload]);

  const reload = useCallback(() => {
    setFetchState(prevState => ({ ...prevState, shouldReload: !fetchState.shouldReload}));
  }, [setFetchState]);

  return {
    isLoading: fetchState.isLoading,
    data: fetchState.data,
    hasError: fetchState.hasError,
    hasInternetConnection,
    isConnectionTimeout: fetchState.isConnectionTimeout,
    reload,
  };
};

export default useFetch;
