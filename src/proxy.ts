import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const blockedParams = ['p', 'page_id', 'attachment_id','g']

  for (const param of blockedParams) {
    if (request.nextUrl.searchParams.has(param)) {
      return new NextResponse('Not Found', { status: 404 })
    }
  }

  return NextResponse.next()
}