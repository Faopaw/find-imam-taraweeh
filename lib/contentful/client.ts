import { createClient, type ContentfulClientApi } from "contentful";

// Singleton pattern for Contentful client
let client: ContentfulClientApi | null = null;

export function getContentfulClient(): ContentfulClientApi {
  if (client) return client;
  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  });

  return client;
}

// Preview client for draft content
let previewClient: ContentfulClientApi | null = null;

export function getPreviewClient(): ContentfulClientApi {
  if (previewClient) return previewClient;

  previewClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
    host: "preview.contentful.com",
  });

  return previewClient;
}
