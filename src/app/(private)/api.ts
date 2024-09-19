import { getStrapiURL } from '@/lib/utils';
import { fetchData } from '@/lib/fetchData';
import { components } from '@/types/generated/schema';
import qs from 'qs';

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

export const fetchTermsByFolder = async ({ folderId }: { folderId: number }) => {
  try {
    const query = qs.stringify({
      populate: ['meanings', 'examples'],
      filters: { directory: folderId },
    });
    const baseUrl = getStrapiURL();
    const url = new URL('/api/terms', baseUrl);
    url.search = query;

    return await fetchData<components['schemas']['TermListResponse']>(url.href);
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};
