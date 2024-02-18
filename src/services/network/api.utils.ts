import { networkManager, ERROR, RESPONSE_CODE } from "src/services"

const DEFAULT_API_TIME_OUT = 15000

export const makeGetRequest = async (
  apiUrl: string,
  timeout: number = DEFAULT_API_TIME_OUT,
  abortControllerSignal: AbortSignal,
) => {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ERROR.ABORT_ERROR)
    }, timeout)
  })
  const apiPromise = new Promise((resolve) => {
    networkManager
      .makeGetRequest(apiUrl, abortControllerSignal)
      .then((data: any) => {
        resolve(data)
      })
      .catch((error: Error) => {
        // Log non fatal error
      })
  })
  const response = await Promise.race([apiPromise, timeoutPromise])
  return response
}

export const checkStatus = (response: any) => {
  if (response.status === RESPONSE_CODE.SUCCESS || response.status === RESPONSE_CODE.NO_CONTENT) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const parseJSON = async (response: any) => {
  try {
    if (response.status === RESPONSE_CODE.SUCCESS) return await response.json()
    else return {}
  } catch (error) {
    return response.status
  }
}
