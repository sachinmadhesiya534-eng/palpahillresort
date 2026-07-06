// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Basic route target matching criteria
  if (path.startsWith('/admin') && path !== '/admin/login') {
    // Replace with your production cookie validation routines as necessary
    const hasSessionToken = request.cookies.get('__session'); 
    
    if (!hasSessionToken) {
      // return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};