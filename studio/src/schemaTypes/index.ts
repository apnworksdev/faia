import blockContent from './objects/blockContent'
import link from './objects/link'
import landing from './singletons/landing'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [blockContent, link, landing]
