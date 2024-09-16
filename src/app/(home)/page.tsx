import { BasePageTemplate } from '@/templates/BasePageTemplate';
import { Header } from '@/components/Header/Header';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Folder } from 'lucide-react';
import { getStrapiURL } from '@/lib/utils';
import { getAuthToken } from '@/services/get-token';
import qs from 'qs';

const query = qs.stringify({
  // populate: { meanings: { fields: ['text'] }, user: { fields: ['id'] } },
  populate: '*',
  // pagination: { page: 1 },
});

const fetchData = async () => {
  try {
    const baseUrl = getStrapiURL();
    const authToken = await getAuthToken();

    const url = new URL('/api/demos', baseUrl);
    url.search = query;
    console.log({ url });
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      cache: 'no-cache',
    });

    const data = await response.json();
    console.log('res', JSON.stringify(data.data, null, 2));
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};

export default async function Home() {
  await fetchData();

  return (
    <BasePageTemplate header={<Header />}>
      <div className="container mx-auto flex flex-1 justify-center p-6">
        <div className="layout-content-container flex flex-1 flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Folders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {folders.map((f, i) => (
                  <Link key={i} href={`#`} className="flex justify-start gap-3 rounded-xl bg-secondary p-6 pl-4 pr-4">
                    <Folder />
                    <p className="text-lg font-medium leading-normal text-white">{f.name}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Lexemes by letter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-5">
                {alphabet.map((l) => (
                  <Link
                    key={l}
                    href={`/lexemes/${l}`}
                    className="flex shrink-0 items-center justify-center rounded-xl bg-secondary p-6 pl-4 pr-4"
                  >
                    <p className="text-lg font-medium leading-normal text-white">{l}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BasePageTemplate>
  );
}

type Folder = {
  name: string;
};

const folders: Folder[] = [
  { name: 'Documents' },
  { name: 'Photos' },
  { name: 'Music' },
  { name: 'Videos' },
  { name: 'Projects' },
];

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
