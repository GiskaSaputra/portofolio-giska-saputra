import { defineField, defineType } from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'penerbit',
      title: 'Issuer',
      type: 'string',
    }),
    defineField({
      name: 'desk',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'gambar',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File (Opsional)',
      type: 'file',
      description: 'Upload file PDF sertifikat jika ada.',
      options: { accept: '.pdf' },
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
