import React from 'react'
import ContactField from "../components/ContactField";
import { contactField } from "../data";
import NavbarPadding from '../components/NavbarPadding';
import { useAnimation, motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      {/* <NavbarPadding /> */}
      <motion.div 
        class="container mt-20 mb-20 px-6 mx-auto" id='contactus'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 class="text-3xl font-bold text-center pt-5 dark:text-gray-800">
          Contact <u class="text-[#2c5282] dark:text-[#2c5282]">Us</u>
        </h2>
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formsubmit.co/oliestasoftworks@gmail.com" method="POST">
              
              {contactField.map(contactField => (
                <ContactField key={ contactField.id } contactField={ contactField } />
              ))}

              <div class="mb-5">
                <label
                  id='text3'
                  for="message"
                  class="mb-3 block text-base font-bold text-[#2c5282]"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2c5282] focus:shadow-md"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  class="hover:shadow-form rounded-md bg-[#2c5282] py-3 px-8 text-base font-semibold text-white outline-none"
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ContactPage