const ContractPage = () => {
  return (
    <div>
      <div className="bg-gray-100 p-8 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-gray-600 mt-2">
              Have questions, suggestions, or need assistance? Reach out to us!
              We re here to help and look forward to connecting with you. Simply
              fill out the form below or get in touch through our contact
              details. <br />
              Feel free to adjust it based on the specific purpose of your
              website or the tone you want to convey!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Got questions or need help? Contact us anytime. We re here for
                you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <p className="text-gray-600">Dhaka</p>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <p className="text-gray-600">+880-1234-567-7890</p>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <p className="text-gray-600">shahriar@gmail.com</p>
                </div>
              </div>

              <div className="mt-4 text-3xl">
                <p className="text-gray-600 mb-2">Follow Us:</p>
                <div className="flex space-x-4 mt-3">
                  <a href="#" className="text-orange-500 hover:text-gray-800">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="text-orange-500 hover:text-gray-800">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-orange-500 hover:text-gray-800">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" className="text-orange-500 hover:text-gray-800">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Send a Message
              </h2>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243645.11500247123!2d-74.007231!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzQ2LjAiTiA3NMKwMDAnMTIuNyJX!5e0!3m2!1sen!2sus!4v1602542512345!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPage;
