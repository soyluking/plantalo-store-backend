import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select, integer } from '@keystone-next/fields';

export const Product = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    price: integer(),
    // TODO: Add photo
    status: select({
      options: [
        {
          label: 'Draft',
          value: 'DRAFT',
        },
        {
          label: 'Available',
          value: 'AVAILABLE',
        },
        {
          label: 'Unavailable',
          value: 'UNAVAILABLE',
        },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
  },
});
