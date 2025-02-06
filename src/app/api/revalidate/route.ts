import {NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret');
   
    
    if (!tag) {
        return NextResponse.json({ status: 400, message: 'tag is required' });
    }
    if (secret !== process.env.REVALIDATE_SECRET) {
        console.log('ini',secret);

        return NextResponse.json({ status: 400, message: 'secret is invalid' });
    }
    revalidateTag(tag);
    return NextResponse.json({ revalidate:true, time: Date.now(), message: 'revalidated' });
}
