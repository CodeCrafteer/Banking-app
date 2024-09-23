import React from "react";
import "../App.css";
import about from "./img/about-us.jpg";
import bank from "./img/bank2.jpg";
import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";
import user3 from "./img/user-3.jpg";
function About() {
  return (
    <>
      <section class="container mt-5">
        <div class="row ">
          <div class="col-md-6">
            <h2 className="our-bank">About Our Bank</h2>
            <p>
              Welcome to our bank, where we strive to provide exceptional
              financial services to our customers. With a rich history spanning
              several decades, we have established ourselves as a trusted
              institution in the banking sector.
            </p>
            <p>
              Our mission is to empower individuals, businesses, and communities
              by offering innovative banking solutions tailored to their needs.
              Whether you're looking for personal banking services, investment
              opportunities, or business financing, we're here to help you
              achieve your financial goals.
            </p>
          </div>
          <div class="col-md-6">
            <img src={about} alt="Bank Building" class="img-fluid about-img" />
          </div>
        </div>
      </section>

      <section class="container mt-5">
        <div class="row">
          <div class="col-md-6 order-md-2">
            <h2 className="our-team">Our Team</h2>
            <p>
              Behind our success is a dedicated team of professionals committed
              to delivering excellence in every aspect of our operations. From
              customer service representatives to financial advisors and
              executives, each member of our team plays a crucial role in
              serving our customers and upholding our valueles.
            </p>
            <p>
              We believe in fostering a culture of collaboration, integrity, and
              innovation. By investing in our employees and providing them with
              opportunities for growth and development, we ensure that they are
              equipped to meet the evolving needs of our customers.
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <img src={bank} alt="Team Members" class="img-fluid  about-img" />
          </div>
        </div>
      </section>
      <h1 class="text-center mt-5 team ">Meet Our Team</h1>
      <section className="container">
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="team-member text-center">
              <img
                src={user1}
                alt="Team Member 1"
                class="img-fluid rounded-circle mb-3"
              />
              <h4>John Doe</h4>
              <p class="text-muted">CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac purus vel libero mollis eleifend.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-member text-center">
              <img
                src={user2}
                alt="Team Member 2"
                class="img-fluid rounded-circle mb-3"
              />
              <h4>Jane Smith</h4>
              <p class="text-muted">Chief Financial Officer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac purus vel libero mollis eleifend.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-member text-center">
              <img
                src={user3}
                alt="Team Member 3"
                class="img-fluid rounded-circle mb-3"
              />
              <h4>David Johnson</h4>
              <p class="text-muted">Chief Technology Officer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac purus vel libero mollis eleifend.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <footer class="bg-dark text-light text-center py-4">
    <p>&copy; 2024 Bankist. All rights reserved.</p>
  </footer> */}
    </>
  );
}
export default About;
