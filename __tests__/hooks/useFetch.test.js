import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../src/hooks/useFetch';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('useFetch Hook', () => {
  it('should handle successful data fetching', async () => {
    const mockData = { data: 'Test data' };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result, waitForNextUpdate } = renderHook(() => useFetch({ url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8' }));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.hasError).toBe(false);
  });

  it('should handle fetch error', async () => {
    fetchMock.mockReject(new Error('Fetch error'));

    const { result, waitForNextUpdate } = renderHook(() => useFetch({ url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8' }));

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(true);
  });

  it('should handle network disconnection', async () => {
    const { result } = renderHook(() => useFetch({ url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8' }));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasInternetConnection).toBe(false);
  });
});
