import { ScholarshipTable } from './ScholarshipTable';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import '../app/globals.css'; // Import DaisyUI styles

export default declareComponent(ScholarshipTable, {
  name: 'Scholarship Table',
  description: 'Filterable scholarship table with DaisyUI styling and Webflow Collections integration. Fetches data from Webflow Collections via Data API.',
  group: 'Content',
  props: {
    collectionId: props.Text({
      name: 'Collection ID',
      defaultValue: '',
    }),
    apiToken: props.Text({
      name: 'API Token',
      defaultValue: '',
    }),
    itemsPerPage: props.Text({
      name: 'Items Per Page',
      defaultValue: '10',
    }),
    proxyUrl: props.Text({
      name: 'Proxy URL (Optional)',
      defaultValue: '',
    }),
  },
});
