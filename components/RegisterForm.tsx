"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./RegisterForm.module.css";
import { useRouter } from "next/navigation";
import uploadData from "../utils/uploadData";
import { RegisterFormValues } from "../types";

export default function RegisterForm() {
  const router = useRouter();

  const formik = useFormik<RegisterFormValues>({
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
      router.push("/success");
    },
  });

  const buttonStyle: React.CSSProperties = {
    background: "linear-gradient(-45deg, #0052D4, #65C7F7, #9CECFB)",
    border: "none",
    alignSelf: "center",
    width: "100%",
    padding: "0.5rem",
  };

  return (
    <>
      <div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className="group1">
            <div className="mb-3">
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
                className="form-control"
                name="contactName"
                placeholder="Enter your name here"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mb-3">
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
                className="form-control"
                name="contactNumber"
                aria-describedby="contactNumberHelp"
                onChange={formik.handleChange}
                value={formik.values.contactNumber}
                onBlur={formik.handleBlur}
              />
              <div id="contactNumberHelp" className="form-text">
                Enter your mobile phone number in full
              </div>
            </div>
          </div>
          <div className="group2">
            <div className="mb-3">
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
                className="form-control"
                name="masjid"
                aria-describedby="masjidInputHelp"
                onChange={formik.handleChange}
                value={formik.values.masjid}
                onBlur={formik.handleBlur}
              />
              <div id="masjidInputHelp" className="form-text">
                Which masjid is this for?
              </div>
            </div>
            <div className="mb-3">
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
                className="form-control"
                name="city"
                aria-describedby="cityInputHelp"
                onChange={formik.handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
              />
              <div id="cityInputHelp" className="form-text">
                Which City are you based in?
              </div>
            </div>
            <div className="mb-3">
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
                className="form-control"
                name="address"
                aria-describedby="addressInputHelp"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
              />
              <div id="addressInputHelp" className="form-text">
                Enter full address.
              </div>
            </div>
          </div>
          <div className="group3">
            <div className="mb-3">
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
                className="form-control"
                name="requirements"
                aria-describedby="requirementsInputHelp"
                onChange={formik.handleChange}
                value={formik.values.requirements}
                onBlur={formik.handleBlur}
              />
              <div id="requirementsInputHelp" className="form-text">
                Describe the nature of the vacancy. (e.g. Number of Huffaz,
                Payement etc...)
              </div>
            </div>
            <div className="mb-3">
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
                className="form-control"
                name="extraDetails"
                aria-describedby="extraDetailsInputHelp"
                value={formik.values.extraDetails}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div id="extraDetailsInputHelp" className="form-text">
                Include any extra information that you would like to add.
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="terms"
                value="checked"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="confirmCheck" className="form-check-label">
                I agree to the Terms and Service that my data will be ......
              </label>
            </div>
            <button type="submit" className="btn btn-primary" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}