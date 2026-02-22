import {defineField, defineType} from 'sanity'

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'blockContent',
    }),
    defineField({
      name: 'methods',
      title: 'Methods',
      type: 'blockContent',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{type: 'link'}],
    }),
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Landing',
    }),
  },
})
