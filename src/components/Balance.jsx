import React from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";

function Balance() {
  const [ac, SetAccountNo] = useState("");
  const [pin, SetPin] = useState("");
  const [msg, setMsg] = useState("");
  async function BalanceCheck() {
    var rs = await axios.get("http://localhost:3000/Account");
    var d = rs.data.filter((item) => item.acno == ac && item.pin == pin);
    if (d.length > 0) {
      setMsg(`Your Account Balance is ${d[0].Amount}`);
    } else {
      setMsg("Invalid Account Or Pin");
    }
  }

  return (
    <div className="digital">
      <div class="container-fluid main ">
        <div class="row justify-content-center align-items-center mt-4 ">
          <h1 class="text-center mt-2">Balance Checking</h1>
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
                  required
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
                  required
                />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col text-center">
              <button
                class="btn btn-dark text-white mt-3"
                type="submit"
                onClick={() => BalanceCheck()}
              >
                Check Balance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Balance;
