import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="row">
        <figure class="col" id="female-player-image">
          <img src="https://media.istockphoto.com/photos/star-winger-picture-id475397251?k=20&m=475397251&s=612x612&w=0&h=seUm_zSv6C7Pe-A0apFVl0W8S4nCPBV14NP4P8UiRYI=" />
        </figure>
        <div class="col">
          <section className="App-form">
            <h2> Welcome to Gbemi FC </h2>
            <h3> Sign-up Form </h3>
            <form>
              <div class="mb-3">
                <label class="form-label" for="inputFirstName">
                  First Name:
                </label>
                <input
                  type="First-Name"
                  class="form-control"
                  id="inputFirstName"
                  placeholder="Ahmed"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="inputLastName">
                  Last Name:
                </label>
                <input
                  type="Last-Name"
                  class="form-control"
                  id="inputLastName"
                  placeholder="Okoro"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="inputAge">
                  Age:
                </label>
                <input
                  type="age"
                  class="form-control"
                  id="inputAge"
                  placeholder="55"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="inputEmail">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="ahmedokoro@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="inputPassword">
                  Password:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="*********"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="inputConfirmPassword">
                  Confirm Password:
                </label>
                <input
                  type="Confirm-Password"
                  class="form-control"
                  id="inputConfirmPassword"
                  placeholder="************"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkRemember"
                  />
                  <label class="form-check-label" for="checkRemember">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </form>
          </section>
        </div>
        <figure class="col" id="male-player-image">
          <img src="https://media.gettyimages.com/photos/portrait-of-young-man-holding-football-picture-id954142710?s=612x612" />
        </figure>
      </div>
    </div>
  );
}

export default App;
