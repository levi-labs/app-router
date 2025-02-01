import { NextRequest, NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    name: 'Ahmad sanusi',
    salary: 20000,
  },
  {
    id: 2,
    name: 'Budi alonso',
    salary: 45000,
  },
];
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.get('id');
  if (params) {
    const result = data.find((item) => item.id === Number(params));
    if (!result) {
      return NextResponse.json({ status: 404, message: 'data not found' });
    }
    return NextResponse.json({ status: 200, message: 'success', data: result });
  }
  return NextResponse.json({ status: 200, message: 'success', data: data });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({ status: 200, message: 'success', data: body });
}

export async function DELETE(request: NextRequest) {
  const params = request.nextUrl.searchParams.get('id');
  if (!params) {
    return NextResponse.json({ status: 400, message: 'id is required' });
  }
  const result = data.find((item) => item.id !== Number(params));
  if (!result) {
    return NextResponse.json({ status: 404, message: 'data not found' });
  }
  return NextResponse.json({ status: 200, message: 'success', data: result });
}
