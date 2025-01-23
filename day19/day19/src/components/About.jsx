import React from "react";
import { Link } from "react-router-dom";
import AllAbout from "./../Pages/AllAbout";

const About = () => {
  return (
    <section className="our-team spacing bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 py-10">
        <div className="row row-middle pb-6 mb-6 border-b-4 border-blue-300">
          <div className="col w-full lg:w-1/2">
            <div className="highlight-title text-left mb-6">
              <h2 className="text-4xl font-bold text-blue-800">
                Meet Our Team
              </h2>
            </div>
          </div>
          <div className="col w-full lg:w-1/2">
            <p className="text-xl text-blue-700">
              Our team consists of passionate scientists and innovative business
              leaders dedicated to advancing health care and making a difference
              worldwide.
            </p>
          </div>
        </div>
        <div className="text-center mt-10 pb-6">
          <h3 className="font-serif text-3xl text-blue-800 font-semibold">
            Leadership Team
          </h3>
        </div>
        <div className="row row-middle pb-6 flex flex-wrap gap-8 justify-center">
          {[
            {
              name: "Pushpendra Soni",
              role: "Chief Executive Officer",
              location: "India",
            },
            {
              name: "Prrajal Dhar",
              role: "Managing Director",
              location: "India",
            },
            {
              name: "Mohit Soni",
              role: "Chief Scientific Advisor",
              location: "India",
            },
            {
              name: "Rahul Sharma",
              role: "Chief Scientific Officer",
              location: "India",
            },
            {
              name: "Dev Sahu",
              role: "Board of Director",
              location: "India",
            },
            {
              name: "Patrick Soni",
              role: "Managing Partner",
              location: "India",
            },
          ].map((teamMember, index) => (
            <div key={index} className="col w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="team-list bg-white rounded-xl shadow-md hover:shadow-2xl border border-blue-200 p-6 text-center transition-all duration-300 ease-in-out">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt={teamMember.name}
                  className="w-24 h-24 mb-4 rounded-full border-4 border-blue-100 hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold text-blue-800 hover:text-blue-900">
                  {teamMember.name}
                </h3>
                <div className="role uppercase text-blue-600 text-lg font-medium">
                  {teamMember.role}
                </div>
                <div className="location mt-4 flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10597/10597864.png"
                    alt={teamMember.location}
                    className="w-6 h-6 mr-2"
                  />
                  <span className="text-blue-700 font-medium hover:text-blue-800">
                    {teamMember.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 pb-10">
          <h3 className="text-3xl font-semibold text-blue-800">Our Vision</h3>
          <p className="text-xl text-blue-700 mt-4 px-4 sm:px-0">
            To transform the healthcare landscape by creating innovative
            solutions that empower individuals to lead healthier lives, while
            fostering a global network of research and innovation in medical
            sciences.
          </p>
        </div>

        {/* New Section: Our Mission */}
        <div className="bg-blue-50 py-10 mt-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-blue-800">
                Our Mission
              </h3>
              <p className="text-xl text-blue-700 mt-4 px-4 sm:px-0">
                To provide accessible, cutting-edge healthcare solutions and
                foster innovation through a dedicated team of experts who strive
                to push the boundaries of science and technology.
              </p>
            </div>
          </div>
        </div>

        {/* New Section: Testimonials */}
        <div className="text-center mt-16 pb-10">
          <h3 className="text-3xl font-semibold text-blue-800">
            What People Say
          </h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[
              {
                name: "Rahul Mhra",
                position: "CEO, HealthTech",
                testimonial:
                  "This team’s innovation in healthcare solutions is unparalleled. They truly make a difference in the lives of people worldwide.",
              },
              {
                name: "Sahil Raj",
                position: "Senior Researcher, BioMed Corp.",
                testimonial:
                  "The commitment to scientific excellence and global health impact is inspiring. A visionary team that leads with purpose.",
              },
              {
                name: "Mukesh Ambani",
                position: "Director, MedTech Solutions",
                testimonial:
                  "Their dedication to advancing healthcare technology is revolutionary. A pleasure to collaborate with such forward-thinking professionals.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 w-80"
              >
                <p className="text-lg text-blue-700 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="mt-4">
                  <h4 className="text-blue-800 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-100 py-10 mt-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-blue-800">
                Contact Us
              </h3>
              <p className="text-xl text-blue-700 mt-4">
                For inquiries, collaborations, or more information, reach out to
                us:
              </p>
              <div className="mt-6">
                <p className="text-blue-800 font-medium">
                  Email:{" "}
                  <span className="text-blue-600">
                    sonipushpendra256@gmail.com
                  </span>
                </p>
                <p className="text-blue-800 font-medium">
                  Phone: <span className="text-blue-600">+91 6350247952</span>
                </p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;