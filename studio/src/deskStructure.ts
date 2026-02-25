import type {StructureBuilder} from 'sanity/structure'
import { CogIcon } from '@sanity/icons'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Landing')
        .child(S.document().schemaType('landing').documentId('landing')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'landing' && listItem.getId() !== 'siteSettings'
      ),
    ])
