import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function FundTransfer() {
  const [ac, setAccountNo] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [ta, setTransferAccount] = useState("");
  const [msg, setMsg] = useState("");

  async function transferAmount() {
    try {
      const rs = await axios.get("http://localhost:3000/Account");
      const wd = rs.data.filter((item) => item.acno === ac && item.pin === pin);

      if (wd.length > 0) {
        const camt = parseInt(wd[0].Amount);

        if (camt >= parseInt(amount)) {
          const dp = rs.data.filter((item) => item.acno === ta);

          if (dp.length > 0) {
            const newCamt = camt - parseInt(amount);
            const id = wd[0].id;
            const updatedSender = { ...wd[0], Amount: newCamt };
            await axios.put(
              `http://localhost:3000/Account/${id}`,
              updatedSender
            );

            const newTamt = parseInt(dp[0].Amount) + parseInt(amount);
            const id1 = dp[0].id;
            const updatedReceiver = { ...dp[0], Amount: newTamt };
            await axios.put(
              `http://localhost:3000/Account/${id1}`,
              updatedReceiver
            );

            let today = new Date().toLocaleDateString();
            const dt = {
              acno: ac,
              amount: amount,
              date: today,
              ds: "Transfer",
            };
            await axios.post(`http://localhost:3000/mytrans/`, dt);
            const dt1 = {
              acno: ta,
              amount: amount,
              date: today,
              ds: "Receive",
            };
            await axios.post(`http://localhost:3000/mytrans/`, dt1);

            setMsg(
              "After Transfer " +
                amount +
                " Your Current balance is = " +
                newCamt
            );
          } else {
            setMsg("Invalid Beneficiary Account");
          }
        } else {
          setMsg("Insufficient Balance");
        }
      } else {
        setMsg("Invalid Account or Pin");
      }
    } catch (error) {
      console.error("Error while transferring amount:", error);
    }
  }

  return (
    <div className="grow">
      <div className="container-fluid main">
        <div className="row justify-content-center align-items-center">
          <h1 className="text-center mt-2">Fund Transfer</h1>
          <hr style={{ width: '50%'}}/>
          <center>
            <h3 className="text-danger">{msg}</h3>
          </center>
          <div className="col-4 border box text- mt-4">
            <div className="row mt-2">
              <div className="col">
                Enter Account Number
                <input
                  type="text"
                  className="form-control mt-2"
                  onInput={(e) => setAccountNo(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                Enter Pin
                <input
                  type="text"
                  className="form-control mt-2"
                  onInput={(e) => setPin(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                Enter Amount to Transfer
                <input
                  type="text"
                  className="form-control mt-2"
                  onInput={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                Enter Account To Transfer
                <input
                  type="text"
                  className="form-control mt-2"
                  value={ta}
                  onInput={(e) => setTransferAccount(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col text-center">
                <button
                  className="btn btn-dark text-white mt-3"
                  type="submit"
                  onClick={() => transferAmount()}
                >
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundTransfer;
