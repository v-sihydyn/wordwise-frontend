import { getStrapiURL } from '@/lib/utils';
import { fetchData } from '@/lib/fetchData';
import { components } from '@/types/generated/schema';

export const fetchFoldersTag = 'folders-list';
export const fetchFolders = async () => {
  try {
    const baseUrl = getStrapiURL();
    const url = new URL('/api/directories', baseUrl);

    return await fetchData<components['schemas']['DirectoryListResponse']>(url.href, { tags: [fetchFoldersTag] });
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};
