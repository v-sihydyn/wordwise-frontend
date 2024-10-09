'use server';
import { z } from 'zod';
import { termFormSchema } from '@/schema/termFormSchema';
import { mutateData } from '@/lib/mutateData';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { TermPayload } from '@/types/Term';
import { fetchTermsByFolderTag } from '@/api/termApi';

export async function createTermAction(unsafeData: z.infer<typeof termFormSchema>, folderId: number) {
  const { success, data } = termFormSchema.safeParse(unsafeData);

  if (!success) {
    return { error: true };
  }

  try {
    const { folderId: directoryId, ...payload } = data;

    await mutateData<TermPayload>('POST', '/api/terms', {
      data: {
        ...payload,
        directory: directoryId,
      },
    });
    revalidateTag(fetchTermsByFolderTag(folderId));
  } catch (error) {
    console.error(error);
    console.error('raw error in action: ', JSON.stringify(error));
    return { error: true };
  }

  redirect(`/folders/${folderId}`);
}

export async function editTermAction(id: number, unsafeData: z.infer<typeof termFormSchema>, folderId: number) {
  const { success, data } = termFormSchema.safeParse(unsafeData);

  if (!success) {
    return { error: true };
  }

  try {
    const { folderId: directoryId, ...payload } = data;

    await mutateData<TermPayload>('PUT', `/api/terms/${id}`, {
      data: {
        ...payload,
        directory: directoryId,
      },
    });
    revalidateTag(fetchTermsByFolderTag(folderId));
  } catch (error) {
    console.error(error);
    console.error('raw error in action: ', JSON.stringify(error));
    return { error: true };
  }

  redirect(`/folders/${folderId}`);
}

export async function deleteTermAction(id: number, folderId: number) {
  try {
    await mutateData('DELETE', `/api/terms/${id}`);
    revalidateTag(fetchTermsByFolderTag(folderId));
  } catch (error) {
    console.error(error);
    return { error: true };
  }
}
