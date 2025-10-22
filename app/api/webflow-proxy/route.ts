import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const collectionId = searchParams.get('collectionId');
    const apiToken = searchParams.get('apiToken');

    if (!collectionId || !apiToken) {
      return NextResponse.json(
        { error: 'Missing collectionId or apiToken' },
        { status: 400 }
      );
    }

    // Fetch from Webflow API server-side (no CORS issues)
    const response = await fetch(
      `https://api.webflow.com/v2/collections/${collectionId}/items/live`,
      {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Webflow API error: ${response.status} ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return data with CORS headers to allow cross-origin requests
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error proxying Webflow API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
