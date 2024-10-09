'use server';

import { z } from 'zod';
import { folderFormSchema } from '@/schema/folderFormSchema';
import { revalidateTag } from 'next/cache';
import { mutateData } from '@/lib/mutateData';
import { fetchFoldersTag } from '@/api/folderApi';

export async function createFolderAction(
  unsafeData: z.infer<typeof folderFormSchema>
): Promise<{ error: boolean | unknown } | void> {
  const { success, data } = folderFormSchema.safeParse(unsafeData);

  if (!success) {
    return { error: true };
  }

  try {
    await mutateData('POST', '/api/directories', { data });
    revalidateTag(fetchFoldersTag);
  } catch (error) {
    console.error(error);
    return { error: true };
  }
}

export async function editFolderAction(
  id: number,
  unsafeData: z.infer<typeof folderFormSchema>
): Promise<{ error: boolean | unknown } | void> {
  const { success, data } = folderFormSchema.safeParse(unsafeData);

  if (!success) {
    return { error: true };
  }

  try {
    await mutateData('PUT', `/api/directories/${id}`, { data });
    revalidateTag(fetchFoldersTag);
  } catch (error) {
    console.error(error);
    return { error: true };
  }
}

export async function deleteFolderAction(id: number) {
  try {
    await mutateData('DELETE', `/api/directories/${id}`);
    revalidateTag(fetchFoldersTag);
  } catch (error) {
    console.error(error);
    return { error: true };
  }
}
