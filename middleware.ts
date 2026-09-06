import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'maples_leaf_admin_session';
const SESSION_VALUE = 'demo-secure-session';
const AUTH_TOKEN = 'maple-admin';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (!pathname.startsWith('/admin/dashboard')) {
    return NextResponse.next();
  }

  const token = searchParams.get('auth');
  const cookie = request.cookies.get(SESSION_COOKIE)?.value;

  if (token === AUTH_TOKEN) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.searchParams.delete('auth');
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(SESSION_COOKIE, SESSION_VALUE, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      path: '/',
    });
    return response;
  }

  if (cookie === SESSION_VALUE) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/admin/login', request.url));
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
