import * as contentfulManagement from 'contentful-management';
import { ContentfulResponse } from '../types';
import { Collection, Entry, EntryProps, KeyValueMap } from 'contentful-management';

export default async function loadData(): Promise<string> {
  const client = contentfulManagement.createClient({
    accessToken: process.env.PERSONAL_ACCESS_TOKEN as string,
  });

  let returnArray: any[];

  try {
    const space = await client.getSpace(
      process.env.CONTENTFUL_SPACE_ID as string
    );
    const environment = await space.getEnvironment('master');
    const response: Collection<Entry, EntryProps<KeyValueMap>> =
      await environment.getPublishedEntries();
    returnArray = response.items;
  } catch (error) {
    console.error(error);
    returnArray = [];
  }

  return JSON.stringify(returnArray);
}
