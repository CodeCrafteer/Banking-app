import React from "react";

function Contact() {
  return (
    <div class="container-fluid main contact ">
      <div class="row justify-content-center align-items-center mt-4 ">
        <h2 class="mt-2 text-center">Contact Us</h2>
        <div class="col-6  border  mt-2 box-2">
          <form>
            <div class="row g-2 mt-1">
              <div class="col">
                First Name
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                />
              </div>
              <div class="col">
                Last Name
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div class="row g-2  mt-1">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input type="text" class="form-control" id="inputAddress" />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Address 2
                </label>
                <input type="text" class="form-control" id="inputAddress2" />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  State
                </label>
                <input type="text" class="form-control" id="inputState" />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12 g-2  mt-2">
                <button type="submit" class="btn btn-success mb-2 ">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
