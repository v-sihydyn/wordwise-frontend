import { getStrapiURL } from '@/lib/utils';
import { getAuthToken } from '@/services/get-token';
import { isDebug } from '@/config/isDebug';
import { wait } from '@/utils/wait';

export async function mutateData<T>(method: string, path: string, payload?: T) {
  const baseUrl = getStrapiURL();
  const authToken = await getAuthToken();

  if (!authToken) throw new Error('No auth token found');

  const url = new URL(path, baseUrl);
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  };

  if (isDebug()) {
    console.group(`${options.method} ${path}`);
    console.log(JSON.stringify(payload, null, 2));
  }

  // @TODO: remove delay
  await wait(300);

  const response = await fetch(url, options);

  if (!response.ok) {
    const d = await response.json();

    let errorMessage = 'Unexpected error';

    if (d.error) {
      errorMessage = `${d.error.name}: ${d.error.message}`;
    }

    if (isDebug()) {
      console.log(errorMessage);
      console.log('raw error: ', JSON.stringify(d.error));
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
