import { ScholarshipTableClient } from './ScholarshipTableClient';
import { ScholarshipData } from '@/src/types/scholarship.types';

// Server Component - fetches data server-side
async function getScholarships(): Promise<ScholarshipData[]> {
  try {
    // MUST set these in environment variables - DO NOT hardcode!
    const collectionId = process.env.WEBFLOW_COLLECTION_ID;
    const apiToken = process.env.WEBFLOW_API_TOKEN;

    if (!collectionId || !apiToken) {
      console.error('Missing WEBFLOW_COLLECTION_ID or WEBFLOW_API_TOKEN environment variables');
      return [];
    }

    const response = await fetch(
      `https://api.webflow.com/v2/collections/${collectionId}/items/live`,
      {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'accept': 'application/json',
          'accept-version': '1.0.0',
        },
        // Revalidate every hour
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error('Webflow API error:', response.status, response.statusText);
      throw new Error(`Failed to fetch scholarships: ${response.status}`);
    }

    const data = await response.json();

    // Transform Webflow data to ScholarshipData format
    const scholarships: ScholarshipData[] = data.items.map((item: any, index: number) => ({
      id: index + 1,
      title: item.fieldData.name || item.fieldData.title || '',
      donor: item.fieldData.donor || '',
      value: item.fieldData.amount || item.fieldData.value || '',
      available: item.fieldData.available || 0,
      fieldOfStudy: item.fieldData.fieldOfStudy || '',
      school: item.fieldData.school || '',
      category: item.fieldData.category || '',
    }));

    return scholarships;
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    // Return empty array on error - client will show message
    return [];
  }
}

export default async function ScholarshipsPage() {
  const scholarships = await getScholarships();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Education Matters Scholarships</h1>
      <ScholarshipTableClient initialData={scholarships} />
    </div>
  );
}
