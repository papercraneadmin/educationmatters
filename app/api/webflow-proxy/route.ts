import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const collectionId = searchParams.get('collectionId');
    const apiToken = searchParams.get('apiToken');

    console.log('Proxy request received:', { collectionId, hasToken: !!apiToken });

    if (!collectionId || !apiToken) {
      return NextResponse.json(
        { error: 'Missing collectionId or apiToken' },
        { status: 400 }
      );
    }

    const apiUrl = `https://api.webflow.com/v2/collections/${collectionId}/items/live`;
    console.log('Fetching from Webflow API:', apiUrl);

    // Fetch from Webflow API server-side (no CORS issues)
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'accept': 'application/json',
        'accept-version': '1.0.0',
      },
    });

    console.log('Webflow API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webflow API error:', { status: response.status, error: errorText });
      return NextResponse.json(
        { error: `Webflow API error: ${response.status} ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Successfully fetched data, item count:', data.items?.length || 0);

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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('Error details:', { message: errorMessage, stack: errorStack });

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
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
