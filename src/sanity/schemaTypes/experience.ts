import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'org',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Work', value: 'work' },
          { title: 'Internship', value: 'internship' },
          { title: 'Organization', value: 'organization' },
          { title: 'Project Based', value: 'project-based' },
        ],
      },
    }),
    defineField({
      name: 'workType',
      title: 'Work Type',
      type: 'string',
      options: {
        list: [
          { title: 'Remote', value: 'remote' },
          { title: 'Onsite', value: 'onsite' },
          { title: 'Hybrid', value: 'hybrid' },
        ],
      },
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Freelance', value: 'freelance' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
          { title: 'Volunteer', value: 'volunteer' },
        ],
      },
    }),
    defineField({
      name: 'points',
      title: 'Points / Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
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
      by: [{ field: 'order', direction: 'desc' }],
    },
  ],
})
