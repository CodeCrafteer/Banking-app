import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Withdraw() {
  const [ac, setAccountNo] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  async function WithdrawAmount() {
    try {
      const rs = await axios.get("http://localhost:3000/Account");
      const d = rs.data.filter((item) => item.acno === ac && item.pin === pin);
      if (d.length > 0) {
        let camt = parseInt(d[0].Amount);
        if (camt >= parseInt(amount)) {
          camt -= parseInt(amount);
          const id = d[0].id;
          const d1 = { ...d[0], Amount: camt };
          await axios.put(`http://localhost:3000/Account/${id}`, d1);
          setMsg(`After withdraw ${amount}, your current balance is = ${camt}`);
          const today = new Date().toLocaleDateString();
          const dt = { acno: ac, amount: amount, date: today, ds: "withdraw" };
          await axios.post(`http://localhost:3000/mytrans/`, dt);
          setAccountNo("");
          setPin("");
          setAmount("");
        } else {
          setMsg("Insufficient balance");
        }
      } else {
        setMsg("Invalid Account or PIN");
      }
    } catch (error) {
      setMsg("Error processing request");
      console.error(error);
    }
  }

  return (
    <div className="grow">
      <div className="container-fluid main">
        <div className="row justify-content-center align-items-center">
          <h1 className="text-center mt-4">Withdraw Amount</h1>
          <hr style={{ width: "50%" }} />
          <center>
            <h3 className="text-danger">{msg}</h3>
          </center>

          <div className="col-md-4 border box mt-4">
            <div className="p-4">
              <div className="mb-3">
                <label className="form-label">Enter Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={ac}
                  onChange={(e) => setAccountNo(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter PIN</label>
                <input
                  type="password"
                  className="form-control"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Amount to Withdraw</label>
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="text-center">
                <button
                  className="btn btn-dark text-white mt-3"
                  onClick={WithdrawAmount}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
