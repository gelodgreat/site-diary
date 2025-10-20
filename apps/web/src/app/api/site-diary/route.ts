import data from '@/app/data/site-diary.json';
import { SiteDiary } from '@/app/data/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const siteDiaries = data.map((entry) => {
    return {
      id: entry.id,
      date: entry.date,
      title: entry.title,
      createdBy: entry.createdBy,
    };
  });

  return NextResponse.json(siteDiaries, {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// POST handler: Create a new site diary
export async function POST(request: NextRequest) {
  try {
    const siteDiary = (await request.json()) as SiteDiary;

    // Check that id, date, createdBy and title are present, informing the user of the missing fields
    if (
      !siteDiary.id ||
      !siteDiary.date ||
      !siteDiary.createdBy ||
      !siteDiary.title
    ) {
      throw new Error('id, date, createdBy and title are required');
    }

    return NextResponse.json(
      { message: 'Site diary created successfully', siteDiary },
      { status: 201 },
    );
  } catch (e: unknown) {
    let errorMessage = 'Unknown error';

    if (e instanceof Error) {
      errorMessage = e.message;
    }

    return NextResponse.json(
      { error: 'Invalid request format', errorMessage },
      { status: 400 },
    );
  }
}
