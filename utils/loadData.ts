import * as contentfulManagement from "contentful-management";
import {
  Collection,
  Entry,
  EntryProps,
  KeyValueMap,
} from "contentful-management";

export default async function loadData(): Promise<Entry[]> {
  const client = contentfulManagement.createClient({
    accessToken: process.env.PERSONAL_ACCESS_TOKEN as string,
  });

  let returnObject: Entry[];
  
  try {
    const space = await client.getSpace(
      process.env.CONTENTFUL_SPACE_ID as string
    );
    const environment = await space.getEnvironment("master");
    const response: Collection<
      Entry,
      EntryProps<KeyValueMap>
    > = await environment.getPublishedEntries();
    returnObject = response.items;

  } catch (error) {
    console.error(error);
    returnObject = [];
  }

  return returnObject;
}
