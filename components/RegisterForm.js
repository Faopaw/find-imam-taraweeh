import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./RegisterForm.module.css";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import uploadData from "./uploadData";

export default function RegisterForm() {
  const redStyle = {
    color: "red",
  };
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactNumber: "",
      masjid: "",
      city: "",
      address: "",
      requirements: "",
      extraDetails: "",
      terms: "",
    },

    validationSchema: Yup.object({
      contactName: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Field cannot be empty"),
      contactNumber: Yup.string()
        .max(20, "Phone number must be 20 characters or less.")
        .required("Field cannot be empty"),
      masjid: Yup.string()
        .max(20, "String must be 20 characters or less.")
        .required("Field cannot be empty"),
      city: Yup.string()
        .max(20, "String must be 20 characters or less.")
        .required("Field cannot be empty"),
      address: Yup.string()
        .max(40, "Address must be 40 characters or less.")
        .required("Field cannot be empty"),
      requirements: Yup.string()
        .max(40, "String must be 40 characters or less.")
        .required("Field cannot be empty"),
      extraDetails: Yup.string()
        .max(120, "String must be 120 characters or less.")
        .required("Field cannot be empty"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
      // send the data to conentful, if successful go to success page and if not show error message
      uploadData(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  const buttonStyle = {
    background: "#9CECFB" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(-45deg, #0052D4, #65C7F7, #9CECFB)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(-45deg, #0052D4, #65C7F7, #9CECFB)" /*  W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    border: "none",
    alignSelf: "center",
    width: "100%",
    padding: "0.5rem",
  };

  const textalign = {
    // align button to center
    textAlign: "center",
  };

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Head>
          <title>Find Imam App - Register Vacancy</title>
          <meta
            name="description"
            content="Find an Imam to lead taraweeh salah"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className="group1">
            <div class="mb-3">
              <label
                htmlFor="contactName"
                className={`form-label ${
                  formik.touched.contactName && formik.errors.contactName
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.contactName && formik.errors.contactName
                  ? formik.errors.contactName
                  : "Contact Name"}
              </label>
              <input
                type="text"
                class="form-control"
                name="contactName"
                placeholder="Enter your name here"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
            </div>
            <div class="mb-3">
              <label
                htmlFor="contactNumber"
                className={`form-label ${
                  formik.touched.contactNumber && formik.errors.contactNumber
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.contactNumber && formik.errors.contactNumber
                  ? formik.errors.contactNumber
                  : "Contact Number"}
              </label>
              <input
                type="text"
                class="form-control"
                name="contactNumber"
                aria-describedby="contactNumberHelp"
                onChange={formik.handleChange}
                value={formik.values.contactNumber}
                onBlur={formik.handleBlur}
              ></input>
              <div id="contactNumberHelp" class="form-text">
                Enter your mobile phone number in full
              </div>
            </div>
          </div>
          <div className="group2">
            <div class="mb-3">
              <label
                htmlFor="masjid"
                className={`form-label ${
                  formik.touched.masjid && formik.errors.masjid
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.masjid && formik.errors.masjid
                  ? formik.errors.masjid
                  : "Masjid"}
              </label>
              <input
                type="text"
                class="form-control"
                name="masjid"
                aria-describedby="masjidInputHelp"
                onChange={formik.handleChange}
                value={formik.values.masjid}
                onBlur={formik.handleBlur}
              ></input>
              <div id="masjidInputHelp" class="form-text">
                Which masjid is this for?
              </div>
            </div>
            <div class="mb-3">
              <label
                htmlFor="city"
                className={`form-label ${
                  formik.touched.city && formik.errors.city
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : "City"}
              </label>
              <input
                type="text"
                class="form-control"
                name="city"
                aria-describedby="cityInputHelp"
                onChange={formik.handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
              ></input>
              <div id="cityInputHelp" class="form-text">
                Which City are you based in?
              </div>
            </div>
            <div class="mb-3">
              <label
                htmlFor="address"
                className={`form-label ${
                  formik.touched.address && formik.errors.address
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : "Address"}
              </label>
              <input
                type="text"
                class="form-control"
                name="address"
                aria-describedby="addressInputHelp"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
              ></input>
              <div id="addressInputHelp" class="form-text">
                Enter full address.
              </div>
            </div>
          </div>
          <div className="group3">
            <div class="mb-3">
              <label
                htmlFor="requirements"
                className={`form-label ${
                  formik.touched.requirements && formik.errors.requirements
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.requirements && formik.errors.requirements
                  ? formik.errors.requirements
                  : "Requirements"}
              </label>
              <input
                type="text"
                class="form-control"
                name="requirements"
                aria-describedby="requirementsInputHelp"
                onChange={formik.handleChange}
                value={formik.values.requirements}
                onBlur={formik.handleBlur}
              ></input>
              <div id="requirementsInputHelp" class="form-text">
                Describe the nature of the vacancy. (e.g. Number of Huffaz,
                Payement etc...)
              </div>
            </div>
            <div class="mb-3">
              <label
                htmlFor="extraDetails"
                className={`form-label ${
                  formik.touched.extraDetails && formik.errors.extraDetails
                    ? classes.redtext
                    : ""
                }`}
              >
                {formik.touched.extraDetails && formik.errors.extraDetails
                  ? formik.errors.extraDetails
                  : "Extra Details"}
              </label>
              <input
                type="text"
                class="form-control"
                name="extraDetails"
                aria-describedby="extraDetailsInputHelp"
                value={formik.values.extraDetails}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <div id="extraDetailsInputHelp" class="form-text">
                Include any extra information that you would like to add.
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                name="terms"
                value="checked"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              <label htmlFor="confirmCheck" className="form-check-label">
                I agree to the Terms and Service that my data will be ......
              </label>
            </div>
            <button type="submit" class="btn btn-primary" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </m.div>
    </>
  );
}
