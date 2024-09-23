import React from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";

function PinChange() {
  const [ac, SetAccountNo] = useState("");
  const [pin, SetPin] = useState("");
  const [newPin, SetNewPin] = useState("");
  const [msg, setMsg] = useState("");

  async function ChangePin() {
    var rs = await axios.get("http://localhost:3000/Account");
    var d = rs.data.filter((item) => item.acno == ac && item.pin == pin);
    if (d.length > 0) {
      var id = d[0].id;
      var dt = d[0];
      if (pin !== newPin) {
        dt.pin = newPin;
        await axios.put(`http://localhost:3000/Account/${id}`, dt);
        setMsg("Don't Forget your New Password  is " + newPin);
      } else {
        setMsg("Your password  should be different than the old one.");
      }
    } else {
      setMsg("Invalid Account Or Pin");
    }
  }

  return (
    <div className="digital">
      <div class="container-fluid main ">
        <div class="row justify-content-center align-items-center mt-4 ">
          <h1 class="text-center mt-2">Pin Change</h1>
          <hr style={{ width: "50%" }} />
          <center>
            <h3 className="text-danger">{msg}</h3>
          </center>
          <div class="col-4 border box mt-4">
            <div class="row mt-2">
              <div class="col">
                Enter Account Number
                <input
                  type="text"
                  class="form-control mt-2"
                  onInput={(e) => SetAccountNo(e.target.value)}
                />
              </div>
            </div>

            <div class="row mt-2">
              <div class="col">
                Enter Pin
                <input
                  type="text"
                  class="form-control mt-2"
                  onInput={(e) => SetPin(e.target.value)}
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                Enter New Pin
                <input
                  type="text"
                  class="form-control mt-2"
                  onInput={(e) => SetNewPin(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col text-center">
              <button
                class="btn btn-dark text-white mt-3"
                type="submit"
                onClick={() => ChangePin()}
              >
                Modify PIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PinChange;
