import qs from 'qs';
import { getStrapiURL } from '@/lib/utils';
import { fetchData } from '@/lib/fetchData';
import { components } from '@/types/generated/schema';

export const fetchTermsByFolderTag = (folderId: number | string) => `terms-by-folder-${folderId}`;
export const fetchTermsByFolder = async ({ folderId, page }: { folderId: number; page: number }) => {
  try {
    const query = qs.stringify({
      populate: ['meanings'],
      filters: {
        directory: {
          $eq: folderId,
        },
      },
      pagination: {
        page,
        pageSize: 10,
      },
    });
    const baseUrl = getStrapiURL();
    const url = new URL('/api/terms', baseUrl);
    url.search = query;

    return await fetchData<components['schemas']['TermListResponse']>(url.href, {
      tags: [fetchTermsByFolderTag(folderId)],
    });
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};

export const fetchOneTermTag = (id: number) => `term-details-${id}`;
export const fetchOneTerm = async (id: number) => {
  try {
    const query = qs.stringify({
      populate: ['meanings', 'examples'],
    });
    const baseUrl = getStrapiURL();
    const url = new URL(`/api/terms/${id}`, baseUrl);
    url.search = query;

    return await fetchData<components['schemas']['TermResponse']>(url.href, { tags: [fetchOneTermTag(id)] });
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};
