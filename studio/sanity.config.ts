import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './src/schemaTypes'
import {deskStructure} from './src/deskStructure'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'faia',
  title: 'Faiā',
  projectId,
  dataset,
  plugins: [
    structureTool({structure: deskStructure}),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'el', title: 'Greek'},
      ],
      schemaTypes: ['landing'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
