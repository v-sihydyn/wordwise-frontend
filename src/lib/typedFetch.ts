import createClient, { Middleware } from 'openapi-fetch';
import { paths } from '@/types/generated/schema';
import { getStrapiURL } from '@/lib/utils';
import { getAuthToken } from '@/services/get-token';

const UNPROTECTED_ROUTES = ['/api/auth/local/register', '/api/auth/local'];

export const typedFetch = createClient<paths>({ baseUrl: getStrapiURL() });

const authMiddleware: Middleware = {
  async onRequest({ request, schemaPath }) {
    if (UNPROTECTED_ROUTES.some((pathname) => schemaPath.startsWith(pathname))) {
      return undefined; // don’t modify request for certain paths
    }

    const authToken = getAuthToken();

    if (authToken) {
      request.headers.set('Authorization', `Bearer: ${authToken}`);
    }
  },
};

typedFetch.use(authMiddleware);
