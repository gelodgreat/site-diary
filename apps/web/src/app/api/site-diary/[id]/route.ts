import data from '@/app/data/site-diary.json';
import { SiteDiary } from '@/app/data/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const entry = data.find((entry) => entry.id === id) as SiteDiary;

  if (!entry) {
    return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
  }

  // Respond with the JSON data
  return NextResponse.json(entry, {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
