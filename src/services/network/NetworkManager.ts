import { checkStatus, parseJSON } from "./api.utils";

const networkManager = {
  async makeGetRequest(url: string, abortControllerSignal: AbortSignal) {
    return fetch(url, {
      method: 'GET',
      signal: abortControllerSignal,
      credentials: 'omit',
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        // Log error to reporting service
        console.error(error)
      })
  },
};

export default networkManager;
