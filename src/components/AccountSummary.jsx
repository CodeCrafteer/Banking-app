import React from "react";
import { useState } from "react";
import axios from "axios";

function AccountSummary() {
  const [ac, SetAccountNo] = useState("");
  const [pin, SetPin] = useState("");
  const [msg, setMsg] = useState();

  const [accountInfo, setAccountInfo] = useState([]);

  async function Summary() {
    var rs = await axios.get("http://localhost:3000/Account");

    var d = rs.data.filter((item) => item.acno == ac && item.pin == pin);
    if (d.length > 0) {
      var mytrans = await axios.get("http://localhost:3000/mytrans");
      var dt = mytrans.data.filter((item) => item.acno === ac);
      console.log(dt);
      setAccountInfo(dt);
    } else setMsg("Invalid Account or Pin");
  }

  return (
    <div className="grow">
      <div class="container-fluid main ">
        <div class="row  mx-2 justify-content-evenly">
          <h1 class="text-center mt-2">Account Summary</h1>
          <hr style={{ width: "50%" }} />
          <center>
            <h3 className="text-danger">{msg}</h3>
          </center>
          <div class="col-4 border box text- mt-4">
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

            <div class="row mb-2">
              <div class="col text-center">
                <button
                  class="btn btn-success text-white mt-3"
                  type="submit"
                  onClick={() => Summary()}
                >
                  Account Info
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-4">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>Acno</td>
                  <td>Amount</td>
                  <td>Date</td>
                  <td>Type</td>
                </tr>
                {accountInfo.map((row) => (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.acno}</td>
                    <td>{row.Amount}</td>
                    <td>{row.Date}</td>
                    <td>{row.Type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSummary;
