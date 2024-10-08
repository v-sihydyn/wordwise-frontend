import { getStrapiURL } from '@/lib/utils';
import { fetchData } from '@/lib/fetchData';
import { components } from '@/types/generated/schema';

export const fetchOneFolderTag = (id: number) => `folder-details-${id}`;
export const fetchOneFolder = async (id: number) => {
  try {
    const baseUrl = getStrapiURL();
    const url = new URL(`/api/directories/${id}`, baseUrl);

    return await fetchData<components['schemas']['DirectoryResponse']>(url.href, { tags: [fetchOneFolderTag(id)] });
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};
