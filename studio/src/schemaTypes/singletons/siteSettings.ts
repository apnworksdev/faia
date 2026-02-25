import { defineField, defineType } from 'sanity'

/**
 * Site settings singleton. Single source for favicon and other global site config.
 */

export default defineType({
  name: 'siteSettings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Site favicon (shown in browser tab). Recommended: square image, at least 32×32px. SVG or PNG.',
      options: {
        hotspot: false,
      },
    }),
    // Reserved for future: site title override, meta description, etc.
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Settings',
    }),
  },
})
