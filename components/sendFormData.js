export default function sendFormData(data) {
  const contentful = require("contentful-management");

  const client = contentful.createClient({
    accessToken: process.env.PERSONAL_ACCESS_TOKEN,
  });

  client
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment("master"))
    .then((environment) =>
      environment.createEntry("requestType", {
        fields: {
          masjid: {
            "en-US": data.masjid,
          },
          city: {
            "en-US": data.city,
          },
          address: {
            "en-US": data.address,
          },
          requirements: {
            "en-US": data.requirements,
          },
          contactName: {
            "en-US": data.contactName,
          },
          contactMobileNumber: {
            "en-US": data.contactMobileNumber,
          },
          extraDetails: {
            "en-US": data.extraDetails,
          },
        },
      })
    )
    .then((entry) => console.log(entry))
    .catch(console.error);
//   return (
//     <div>
//       <p></p>
//     </div>
//   );
}
