export default function uploadData(values) {
  const contentful = require("contentful-management");

  const accessToken = process.env.PERSONAL_ACCESS_TOKEN;

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const ENVIRONMENTID = "master"; // this can be in .env or here if you want to change on the fly

  const client = contentful.createClient({ accessToken });
  console.log("Theses are the values: ",values);

  client
    .getSpace(spaceId)
    .then((space) => space.getEnvironment(ENVIRONMENTID))
    .then((environment) =>
      environment.createEntry("requestType", {
        fields: {
          masjid: {
            "en-US": `${values.masjid}`,
          },
          city: {
            "en-US": `${values.city}`,
          },
          address: {
            "en-US": `${values.address}`,
          },
          requirements: {
            "en-US": `${values.requirements}`,
          },
          contactName: {
            "en-US": `${values.contactName}`,
          },
          contactMobileNumber: {
            "en-US": `${values.contactNumber}`,
          },
          extraDetails: {
            "en-US": `${values.extraDetails}`,
          },
        },
      })
    )
    .then((entry) => console.log(entry))
    .catch(console.error);
}
