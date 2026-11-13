import {defineField, defineType} from 'sanity'
  
  export const works = defineType({
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      }),
      defineField({
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      }),
      defineField({
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      }),
      defineField({
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'tags',
        title: 'Tags',
        type:'array',
        of: [
          {
            name:'tag',
            title:'Tag',
            type:'string'
          }
        ]
      }),
      defineField({
        name: 'summary',
        title: 'Summary',
        description: 'One or two sentences shown at the top of the project dialog.',
        type: 'text',
        rows: 3,
      }),
      defineField({
        name: 'challenge',
        title: 'The challenge',
        description: 'The hardest real problem in this project.',
        type: 'text',
        rows: 4,
      }),
      defineField({
        name: 'solution',
        title: 'How it was solved',
        type: 'text',
        rows: 4,
      }),
      defineField({
        name: 'highlights',
        title: 'What makes it work well',
        description: 'Short bullets about features that were complex or smooth.',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'stack',
        title: 'Tech stack',
        type: 'array',
        of: [{type: 'string'}],
        options: {layout: 'tags'},
      }),
      defineField({
        name: 'tab',
        title: 'Tab',
       type:'array',
       of: [
         {
           name:'tab',
           title:'Tab',
           type:'string'
         }
       ]
      }),
    ],
  })
  