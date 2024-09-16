'use server';

import { z } from 'zod';
import { folderFormSchema } from '@/schema/folderFormSchema';
import { getAuthToken } from '@/services/get-token';
import { getStrapiURL } from '@/lib/utils';
import { revalidateTag } from 'next/cache';
import { fetchFoldersTag } from '@/app/(private)/api';

export async function createFolderAction(
  unsafeData: z.infer<typeof folderFormSchema>
): Promise<{ error: boolean | unknown }> {
  const authToken = await getAuthToken();
  const baseUrl = getStrapiURL();

  if (!authToken) throw new Error('No auth token found');

  const { success, data } = folderFormSchema.safeParse(unsafeData);

  if (!success) {
    return { error: true };
  }

  try {
    const url = new URL('/api/directories', baseUrl);
    const response = await fetch(url.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      const d = await response.json();

      let errorMessage = 'Unexpected error creating a folder';
      if (d.error) {
        errorMessage = `${d.error.name}: ${d.error.message}`;
      }
      throw new Error(errorMessage);
    }
    revalidateTag(fetchFoldersTag);
  } catch (error) {
    console.error(error, error);
    return { error: false };
  }
}
