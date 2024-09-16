import { getAuthToken } from '@/services/get-token';

export async function fetchData<T>(url: string) {
  const authToken = await getAuthToken();

  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = (await response.json()) as T;

    return data;
  } catch (error) {
    console.error('Error fetching data:', JSON.stringify(error));
    throw error; // or return null;
  }
}
