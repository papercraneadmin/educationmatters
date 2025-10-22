# Scholarship Table DaisyUI Integration Design

**Date:** 2025-10-22
**Status:** Approved
**Type:** UI Refactor + Webflow Integration

## Overview

Refactor the ScholarshipTable component to use DaisyUI components and integrate with Webflow Collections via Data API. The component will fetch scholarship data dynamically and provide filtering/search capabilities in a compact, mobile-friendly interface.

## Requirements

### Functional Requirements
- Fetch scholarship data from Webflow Collections using JWT token
- Two separate dropdown filters (Schools | Categories)
- Search across title, donor, field of study, and value
- Pagination with configurable items per page
- Active filter indication (count badges + color changes)
- Mobile-responsive with collapsible filters

### Technical Constraints
- Must be a Webflow Code Component
- No complex prop types available (arrays/objects not supported)
- Must use DaisyUI for all UI components
- Don't modify fonts
- Client-side filtering (fetch all data once)
- Single monolithic component file

## Architecture

### Component Structure
```
src/
  ScholarshipTable.tsx          # Main React component
  ScholarshipTable.webflow.tsx  # Webflow declaration
  types/
    scholarship.types.ts        # TypeScript interfaces
  data/
    scholarshipData.ts          # Fallback mock data (for dev)
```

### Webflow Props
```typescript
{
  collectionId: props.Text({
    name: 'Collection ID',
    defaultValue: ''
  }),
  apiToken: props.Text({
    name: 'API Token',
    defaultValue: ''
  }),
  itemsPerPage: props.Text({
    name: 'Items Per Page',
    defaultValue: '10'
  })
}
```

### Data Flow

1. **Component Mount**
   - useEffect fetches from Webflow Data API
   - Endpoint: `GET https://api.webflow.com/v2/collections/${collectionId}/items/live`
   - Headers: `Authorization: Bearer ${apiToken}`

2. **Data Transformation**
   - Map API response `field_data` to ScholarshipData interface
   - Extract unique schools and categories for filter options
   - Store in React state

3. **Filtering Logic**
   - Client-side filtering after initial load
   - OR logic within filter groups
   - AND logic between groups (schools AND categories AND search)
   - Reset page to 1 when filters change

4. **State Management**
   ```typescript
   // Data
   scholarships: ScholarshipData[]
   loading: boolean
   error: string | null

   // Filters
   selectedSchools: string[]
   selectedCategories: string[]
   searchQuery: string
   currentPage: number

   // UI
   openDropdown: 'schools' | 'categories' | null
   showMobileFilters: boolean
   ```

## UI Design

### Desktop Layout (≥768px)
```
┌───────────────────────────────────────────────────────┐
│ [Search Input (flex-1)] [Schools ▼] [Categories ▼] [X Clear] │
└───────────────────────────────────────────────────────┘

Showing 1-10 of 45 scholarships

┌───────────────────────────────────────────────────────┐
│ Value | Title | Donor | # Available | Field of Study  │
├───────────────────────────────────────────────────────┤
│ $2000 | Award | John  | 5           | Engineering     │
│ ...                                                    │
└───────────────────────────────────────────────────────┘

[< Previous] [1] [2] [3] [Next >]
```

### Mobile Layout (<768px)
```
┌─────────────────────┐
│ [Search Input]      │
│ [Filters (2) ▼]     │
└─────────────────────┘
  ↓ (when clicked)
┌─────────────────────┐
│ [Schools ▼]         │
│ [Categories ▼]      │
│ [Clear Filters]     │
└─────────────────────┘

Table + Pagination (same)
```

### DaisyUI Components

**Search Bar:**
- `input input-bordered w-full` with search icon

**Filter Dropdowns:**
- Container: `dropdown dropdown-end`
- Button: `btn btn-ghost` (default) or `btn btn-primary` (active)
- Badge: `badge badge-sm` showing count
- Menu: `menu menu-sm dropdown-content bg-base-100 rounded-box shadow`
- Checkboxes: `checkbox checkbox-sm`

**Table:**
- `table table-zebra w-full`
- Hover effects on rows
- Highlighted search terms in cells

**Pagination:**
- `join` wrapper for button group
- `btn btn-sm join-item` for each button
- Active page: `btn-active`
- Disabled: `btn-disabled`

**Loading/Error:**
- `loading loading-spinner loading-lg` (centered)
- `alert alert-error` for error messages

## Dropdown Behavior

### Controlled Dropdowns
- State: `openDropdown: 'schools' | 'categories' | null`
- Click outside closes dropdown
- ESC key closes dropdown
- Only one dropdown open at a time

### Active State Indication
- Button color changes to `btn-primary` when filters selected
- Badge shows count: `Schools (2)`
- Badge hidden when count = 0

### Checkbox Interaction
- Clicking checkbox toggles selection
- Selection persists when dropdown closes
- Clear button resets all selections

## Mobile Responsiveness

**Breakpoint:** 768px

**Above 768px:**
- All elements in single row
- Dropdowns inline

**Below 768px:**
```typescript
// Search: full width
<input className="input input-bordered w-full mb-2" />

// Filters button
<button
  onClick={() => setShowMobileFilters(!showMobileFilters)}
  className="btn btn-ghost w-full"
>
  Filters ({activeFilterCount}) ▼
</button>

// Collapsible section
{showMobileFilters && (
  <div className="border rounded p-4 mb-4">
    {/* Schools dropdown - full width */}
    {/* Categories dropdown - full width */}
    {/* Clear button */}
  </div>
)}
```

## Error Handling

**No API Token:**
- Show warning message
- Fall back to mock data from scholarshipData.ts

**API Error:**
- Display error with `alert alert-error`
- Show retry button
- Log error to console

**Empty Results:**
- Show "No scholarships found" message
- Display clear filters button if filters active

## TypeScript Interfaces

```typescript
interface ScholarshipData {
  id: string;
  title: string;
  donor: string;
  value: string;
  available: number;
  fieldOfStudy: string;
  school: SchoolType;
  category: CategoryType;
}

type SchoolType = "Jefferson High School" | "Lincoln Academy" | "Washington Prep";
type CategoryType = "Academics" | "Arts" | "Science" | "Financial Needs";

interface ScholarshipTableProps {
  collectionId?: string;
  apiToken?: string;
  itemsPerPage?: string;
}
```

## Implementation Notes

1. **Single Component File:** All logic in ScholarshipTable.tsx (no sub-components)
2. **DaisyUI Only:** No custom CSS except for preserving existing fonts
3. **Client-Side Everything:** No server-side filtering or pagination
4. **Graceful Degradation:** Works with mock data if API unavailable
5. **Accessibility:** Proper ARIA labels on dropdowns and checkboxes

## Testing Checklist

- [ ] Fetch data from Webflow API successfully
- [ ] Display loading state during fetch
- [ ] Handle API errors gracefully
- [ ] Filter by schools (OR logic)
- [ ] Filter by categories (OR logic)
- [ ] Search across all text fields
- [ ] Combine filters with AND logic
- [ ] Pagination works correctly
- [ ] Active filter badges show correct count
- [ ] Dropdown closes on outside click
- [ ] Mobile view collapses filters
- [ ] Clear filters button resets everything
- [ ] Empty state shows proper message
- [ ] Responsive at all breakpoints
