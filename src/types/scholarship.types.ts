export interface ScholarshipData {
  id: number;
  value: string;          // e.g., "$5,000"
  title: string;          // e.g., "Merit Scholarship"
  donor: string;          // e.g., "Smith Foundation"
  available: number;      // e.g., 5
  fieldOfStudy: string;   // e.g., "Engineering"
  school: string;         // One of 3 schools
  category: string;       // One of 4 categories
}

export type SchoolType = "Jefferson High School" | "Lincoln Academy" | "Washington Prep";
export type CategoryType = "Academics" | "Arts" | "Science" | "Financial Needs";
