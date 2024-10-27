import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}

export async function POST(request: Request) {
    return NextResponse.redirect(new URL('/new', request.url));
}
 
export async function PUT(request: Request) {
    return NextResponse.redirect(new URL('/new', request.url));
}
 
export async function DELETE(request: Request) {
    return NextResponse.redirect(new URL('/new', request.url));
}