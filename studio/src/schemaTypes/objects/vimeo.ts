import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vimeo',
  title: 'Vimeo Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Vimeo URL',
      type: 'url',
      description: 'Paste a Vimeo video URL (e.g. https://vimeo.com/1191494676)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Video title',
      type: 'string',
      description: 'Used for accessibility in the video player',
    }),
  ],
  preview: {
    select: {title: 'title', url: 'url'},
    prepare({title, url}) {
      return {
        title: title || 'Vimeo video',
        subtitle: url,
      }
    },
  },
})
