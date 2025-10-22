import { ScholarshipTableClient } from './ScholarshipTableClient';
import { ScholarshipData } from '@/src/types/scholarship.types';

// Server Component - fetches data server-side
async function getScholarships(): Promise<ScholarshipData[]> {
  try {
    const collectionId = process.env.WEBFLOW_COLLECTION_ID || '68f8f908f708b8dc82ee4d54';
    const apiToken = process.env.WEBFLOW_API_TOKEN || 'ab1c2e479b24b23ee90a935fc2db701d87a90c10a8403be600c0000b3ffa91ed';

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
    const scholarships: ScholarshipData[] = data.items.map((item: any) => ({
      name: item.fieldData.name || '',
      school: item.fieldData.school || '',
      category: item.fieldData.category || '',
      amount: item.fieldData.amount || '',
      deadline: item.fieldData.deadline || '',
      link: item.fieldData.link || '',
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
