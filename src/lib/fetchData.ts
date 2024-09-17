'use server';
import { getAuthToken } from '@/services/get-token';

export async function fetchData<T>(url: string, nextOptions?: NextFetchRequestConfig) {
  const authToken = await getAuthToken();

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (authToken) {
    (options.headers as Record<string, string>).Authorization = `Bearer ${authToken}`;
  }

  if (nextOptions) {
    options.next = nextOptions;
  }

  try {
    const response = await fetch(url, options);
    const data = (await response.json()) as T;

    return data;
  } catch (error) {
    console.error('Error fetching data:', JSON.stringify(error));
    throw error; // or return null;
  }
}
