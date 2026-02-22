import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'Web URL (https://...) or mailto: (mailto:email@example.com)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'target',
      title: 'Target',
      type: 'string',
      options: {
        list: [
          {title: 'Same window', value: '_self'},
          {title: 'New tab', value: '_blank'},
        ],
        layout: 'radio',
      },
      initialValue: '_self',
    }),
  ],
})
