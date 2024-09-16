import { getStrapiURL } from '@/lib/utils';
import { getAuthToken } from '@/services/get-token';

export async function mutateData<T>(method: string, path: string, payload?: T) {
  const baseUrl = getStrapiURL();
  const authToken = await getAuthToken();

  if (!authToken) throw new Error('No auth token found');

  try {
    const url = new URL(path, baseUrl);
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
