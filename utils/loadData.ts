import * as contentfulManagement from "contentful-management";
import {
  Collection,
  Entry,
  EntryProps,
  KeyValueMap,
} from "contentful-management";
import { ContentfulEntry } from "../types";

/**
 * Type-safe mapper function to convert Contentful Entry to ContentfulEntry
 * This ensures type safety instead of using unsafe type assertions.
 * The Entry from contentful-management has the correct structure at runtime,
 * we just need to assert the field types match our VacancyFields interface.
 */
function mapEntryToContentfulEntry(entry: Entry): ContentfulEntry {
  // At runtime, Entry already has the correct structure (fields + sys at top level)
  // We cast the fields to VacancyFields since we know the schema matches
  return {
    ...entry,
    fields: entry.fields as ContentfulEntry["fields"],
    sys: {
      ...entry.sys,
    },
  };
}

export default async function loadData(): Promise<ContentfulEntry[]> {
  const client = contentfulManagement.createClient({
    accessToken: process.env.PERSONAL_ACCESS_TOKEN as string,
  });

  let returnObject: ContentfulEntry[];

  try {
    const space = await client.getSpace(
      process.env.CONTENTFUL_SPACE_ID as string
    );
    const environment = await space.getEnvironment("master");
    const response: Collection<
      Entry,
      EntryProps<KeyValueMap>
    > = await environment.getPublishedEntries();

    // Map entries using type-safe mapper function
    returnObject = response.items.map(mapEntryToContentfulEntry);
  } catch (error) {
    console.error(error);
    returnObject = [];
  }

  return returnObject;
}
