import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'personal-portfolio',

  projectId: 'qq6p32u6',
  dataset: 'personal_portfolio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
