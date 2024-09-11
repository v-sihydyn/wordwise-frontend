import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUserMeLoader } from '@/services/get-user-me-loader';

const PUBLIC_ROUTES = ['/signin', '/signup'];

export async function middleware(request: NextRequest) {
  const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  if (!user.ok) {
    if (!PUBLIC_ROUTES.includes(currentPath)) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  } else {
    if (PUBLIC_ROUTES.includes(currentPath)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/signin', '/signup'],
};
