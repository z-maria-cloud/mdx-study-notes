import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Highlight from '@site/src/components/Highlight';
import MainPoints from '@site/src/components/MainPoints';
import ExternalResource from '@site/src/components/ExternalResource';
import ResourceGrid from '@site/src/components/ResourceGrid';
import AttributionImage from '@site/src/components/AttributionImage';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  MainPoints,
  ExternalResource,
  ResourceGrid,
  AttributionImage,
};
