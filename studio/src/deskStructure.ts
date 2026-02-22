import type {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing')
        .child(S.document().schemaType('landing').documentId('landing')),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== 'landing'),
    ])
