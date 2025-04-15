import React from "react";
import { assets } from "../Assets/assets";

function Contact() {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center py-16">
        <img
          className="w-full max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500">
          <p>
            We are here to assist you with any inquiries or concerns you may
            have. Please feel free to reach out to us using the contact
            information below.
          </p>
          <p>
            If you have any questions, feedback, or need assistance, please
            don't hesitate to contact us. We value your input and are here to
            help!
          </p>
        </div>
      </div>
      <div>
       <h3 className="text-xl font-medium">Our office</h3> 
       <p>New town sector-3 ,kolkata ,700113</p>
       <br />
        <h3>Contact Number : 0987654321 </h3>
        <h3>Email : drprescripto12@gmail.com</h3>
        <br />
        <p>For any inquiries or assistance, please feel free to reach out to us.</p>
      </div>
    </div>
  );
}

export default Contact;
