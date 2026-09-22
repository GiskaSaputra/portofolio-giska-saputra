import { defineField, defineType } from 'sanity'

export const aiToolType = defineType({
  name: 'aiTool',
  title: 'AI Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'ket',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'Image / Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Manual Order',
      name: 'manualOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
