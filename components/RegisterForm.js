import { useRef } from "react"
import classes from "./RegisterForm.module.css";
import sendFormData from "./sendFormData";

export default function RegisterForm() {
    
    const contactNameInputRef = useRef('');
    const contactNumberInputRef = useRef('');
    const masjidInputRef = useRef('');
    const cityInputRef = useRef('');
    const addressInputRef = useRef('');
    const requirementsInputRef = useRef('');
    const extraDetailsInputRef = useRef('');


    function sendData() {
        event.stopPropagation;
        const data = {
            contactName : contactNameInputRef.current,
            contactMobileNumber : contactNumberInputRef.current,
            masjid : masjidInputRef.current,
            city : cityInputRef.current,
            address : addressInputRef.current,
            requirements : requirementsInputRef.current,
            extraDetails : extraDetailsInputRef.current
        }
        sendFormData(data)
    }

    return (
        <form  className={classes.form} onSubmit={(event) => event.preventDefault()} method="POST">
        <div class="mb-3">
          <label for="contactNameInput" class="form-label">Contact Name</label>
          <input ref={contactNameInputRef} type="text" class="form-control" id="contactNameInput" aria-describedby="contactNameHelp"></input>
          <div id="contactNameHelp" class="form-text">Enter your name here</div>
        </div>
        <div class="mb-3">
          <label for="contactNumberInput" class="form-label">Contact Number</label>
          <input ref={contactNumberInputRef} type="text" class="form-control" id="contactNumberInput" aria-describedby="contactNumberHelp"></input>
          <div id="contactNumberHelp" class="form-text">Enter your mobile phone number in full</div>
        </div>
        <div class="mb-3">
          <label for="masjidInput" class="form-label">Masjid</label>
          <input ref={masjidInputRef} type="text" class="form-control" id="masjidInput" aria-describedby="masjidInputHelp"></input>
          <div id="masjidInputHelp" class="form-text">Which masjid is this for?</div>
        </div>
        <div class="mb-3">
          <label for="cityInput" class="form-label">City</label>
          <input ref={cityInputRef} type="text" class="form-control" id="cityInput" aria-describedby="cityInputHelp"></input>
          <div id="cityInputHelp" class="form-text">Which City are you based in?</div>
        </div>
        <div class="mb-3">
          <label for="addressInput" class="form-label">Address</label>
          <input ref={addressInputRef} type="text" class="form-control" id="addressInput" aria-describedby="addressInputHelp"></input>
          <div id="addressInputHelp" class="form-text">Enter full address.</div>
        </div>
        <div class="mb-3">
          <label for="requirementsInput" class="form-label">Requirements</label>
          <input ref={requirementsInputRef} type="text" class="form-control" id="requirementsInput" aria-describedby="requirementsInputHelp"></input>
          <div id="requirementsInputHelp" class="form-text">Describe the nature of the vacancy. (e.g. Number of Huffaz, Payement etc...)</div>
        </div>
        <div class="mb-3">
          <label for="extraDetailsInput" class="form-label">Extra Details</label>
          <input ref={extraDetailsInputRef} type="text" class="form-control" id="extraDetailsInput" aria-describedby="extraDetailsInputHelp"></input>
          <div id="extraDetailsInputHelp" class="form-text">Include any extra information that you would like to add.</div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="confirmCheck"></input>
          <label class="form-check-label" for="confirmCheck">Confirm</label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={sendData}>Submit</button>
      </form>
    )
}