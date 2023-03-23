export default async function loadData() {
  const contentful = require("contentful-management");
  let returnArray;
  const client = contentful.createClient({
    accessToken: process.env.PERSONAL_ACCESS_TOKEN,
  });

  await client
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getPublishedEntries())
    .then((response) => {
      returnArray = response.items;
    })
    .catch(console.error)
    return  (JSON.stringify(returnArray))

}
