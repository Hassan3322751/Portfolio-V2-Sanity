import {defineField, defineType} from 'sanity'

export const aboutMe = defineType({
  name: "aboutme",
  title: "About Me",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "profileImg",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
      options: {
        accept: "application/pdf",
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
  ],
}
)
