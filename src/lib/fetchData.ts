'use server';
import { getAuthToken } from '@/services/get-token';
import { isDebug } from '@/config/isDebug';

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

  if (isDebug()) {
    console.group(`${options.method} ${url}`);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const d = await response.json();

    let errorMessage = 'Unexpected error creating a folder';

    if (d.error) {
      errorMessage = `${d.error.name}: ${d.error.message}`;
    }

    if (isDebug()) {
      console.log(errorMessage);
    }

    throw new Error(errorMessage);
  }

  const data = await response.json();

  if (isDebug()) {
    console.log(JSON.stringify(data, null, 2));
    console.groupEnd();
  }

  return data as T;
}
