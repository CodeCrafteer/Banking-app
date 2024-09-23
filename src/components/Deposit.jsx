import React from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";
function Deposit() {
  const [ac, SetAccountNo] = useState("");
  const [pin, SetPin] = useState("");
  const [amount, SetAmount] = useState("");
  const [msg, setMsg] = useState();

  async function DepositAmount() {
    var rs = await axios.get("http://localhost:3000/Account");
    var d = rs.data.filter((item) => item.acno == ac && item.pin == pin);
    if (d.length > 0) {
      var camt = parseInt(d[0].Amount);
      var id = d[0].id;
      var dep = d[0];
      camt = camt + parseInt(amount);
      dep.Amount = camt;
      await axios.put(`http://localhost:3000/Account/${id}`, dep);
      setMsg("After deposit " + amount + " Your Current balance is = " + camt);

      let today = new Date().toLocaleDateString();
      var dt = { acno: ac, amount: amount, date: today, ds: "Deposit" };
      await axios.post(`http://localhost:3000/mytrans/`, dt);
    } else {
      setMsg("Invalid Account Or Pin");
    }
  }
  return (
    <div className="digital">
      <div class="container-fluid main ">
        <div class="row justify-content-center align-items-center mt-4 ">
          <h1 class="text-center mt-2">Deposit Ammount</h1>
          <hr style={{ width: "50%" }} />
          <center>
            <h3 className="text-success">{msg}</h3>
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
                Amount to Deposit
                <input
                  type="text"
                  class="form-control mt-2"
                  onInput={(e) => SetAmount(e.target.value)}
                />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col text-center">
                <button
                  class="btn btn-dark text-white mt-3"
                  type="submit"
                  onClick={() => DepositAmount()}
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deposit;
