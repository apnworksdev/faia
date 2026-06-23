import blockContent from './objects/blockContent'
import link from './objects/link'
import vimeo from './objects/vimeo'
import landing from './singletons/landing'
import siteSettings from './singletons/siteSettings'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [blockContent, link, vimeo, landing, siteSettings]
