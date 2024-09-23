import React from "react";
import { useState } from "react";
import axios from "axios";

function CreateAccount() {
  const [Pin, setPin] = useState("");
  const [Name, setName] = useState("");
  const [Fname, setFname] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [City, setCity] = useState("");
  const [Male, SetMale] = useState("");
  const [Female, SetFemale] = useState("");
  const [Other, SetOther] = useState("");
  const [Amount, SetAmount] = useState("");
  const [msg, setMsg] = useState();

  async function Record() {
    // Validate required fields
    if (
      !Pin ||
      !Name ||
      !Fname ||
      !Email ||
      !Password ||
      !Country ||
      !State ||
      !City ||
      !Amount ||
      (!Male && !Female && !Other)
    ) {
      setMsg("Please fill all fields before creating an account.");
      return; // Stop execution if validation fails
    }

    var ac = "SBI";
    var rs = await axios.get("http://localhost:3000/Account");
    var x = rs.data.length;
    if (x > 0) {
      x = x + 101;
      ac = ac + x;
    } else ac = "SBI101";

    var data = {
      acno: ac,
      pin: Pin,
      Name: Name,
      Fname: Fname,
      Email: Email,
      Password: Password,
      Country: Country,
      State: State,
      City: City,
      Male: Male,
      Female: Female,
      Other: Other,
      Amount: Amount,
    };

    rs = await axios.post("http://localhost:3000/Account", data);
    setMsg("Account opened successfully with Account Number: " + ac);
  }

  return (
    <div class="container-fluid main grow">
      <div class="row justify-content-center align-items-center ">
        <h1 class="text-center mt-1">Create Your Bank Account</h1>
        <hr style={{ width: "50%" }} />
        <center>
          {" "}
          <h3>{msg}</h3>
        </center>
        <div class="col-5 border ">
          <p className="mt-1">
            <b>
              <span style={{ fontSize: "1.5rem", color: "green" }}>Open</span>
            </b>{" "}
            Your Bank Accout in just 5{" "}
            <span className="highlight-create"> minutes</span>
          </p>

          <div class="row">
            <div class="col">
              Enter Pin
              <input
                type="text"
                name=""
                placeholder=""
                value={Pin}
                class="form-control mt-2"
                onInput={(e) => setPin(e.target.value)}
              />
            </div>
          </div>

          <div class="row mt-1">
            <div class="col">
              Enter Name
              <input
                type="text"
                class="form-control"
                value={Name}
                aria-label="First name"
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div class="col">
              Father Name
              <input
                type="text"
                class="form-control"
                value={Fname}
                aria-label="Last name"
                onInput={(e) => setFname(e.target.value)}
              />
            </div>
          </div>

          <div class="row mt-1">
            <div class="col">
              Enter Email
              <input
                type="email"
                class="form-control"
                value={Email}
                aria-label="Email"
                onInput={(e) => SetEmail(e.target.value)}
              />
            </div>
            <div class="col">
              Enter Password
              <input
                type="password"
                class="form-control"
                value={Password}
                aria-label="password"
                onInput={(e) => SetPassword(e.target.value)}
              />
            </div>
          </div>

          <div class="row mt-1">
            <div class="col">
              Country:
              <input
                type="text"
                class="form-control"
                value={Country}
                aria-label="Country"
                onInput={(e) => setCountry(e.target.value)}
              />
            </div>
            <div class="col">
              State:
              <input
                type="text"
                class="form-control"
                value={State}
                aria-label="State"
                onInput={(e) => setState(e.target.value)}
              />
            </div>
            <div class="col">
              City:
              <input
                type="text"
                class="form-control"
                value={City}
                aria-label="City"
                onInput={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div class="row  mt-1">
            <div class="col">
              <div class="form-check form-check-inline  mb-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value={Male}
                  onSelect={(e) => SetMale(e.target.value)}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value={Female}
                  onSelect={(e) => SetFemale(e.target.value)}
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value={Other}
                  onSelect={(e) => SetOther(e.target.value)}
                />
                <label class="form-check-label" for="inlineRadio3">
                  Others
                </label>
              </div>
              <div class="row">
                <div class="col">
                  Enter Amount
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    class="form-control mt-2"
                    value={Amount}
                    onInput={(e) => SetAmount(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col ">
                  <button
                    class="btn btn-success mt-3"
                    type="submit"
                    onClick={() => Record()}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
