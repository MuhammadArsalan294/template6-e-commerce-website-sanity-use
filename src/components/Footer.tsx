export default function Footer() {
    return (
      <footer className="bg-gray-50 py-10">
        {/* Container */}
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between gap-y-10">
            {/* Funira Section */}
            <div className="w-full sm:w-1/2 lg:w-1/5">
              <h2 className="font-bold text-xl text-black mb-4">Funira.</h2>
              <p className="text-gray-500 text-sm leading-6">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
  
            {/* Links Section */}
            <div className="w-full sm:w-1/2 lg:w-1/5">
              <h3 className="text-gray-500 font-medium text-sm mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-black text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/shop" className="text-black text-sm">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-black text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-black text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div className="w-full sm:w-1/2 lg:w-1/5">
              <h3 className="text-gray-500 font-medium text-sm mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-black text-sm">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black text-sm">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black text-sm">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div className="w-full sm:w-1/2 lg:w-1/5">
              <h3 className="text-gray-500 font-medium text-sm mb-4">
                Newsletter
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Enter your email address
              </p>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
  
            {/* Subscribe Section */}
            <div className="w-full sm:w-1/2 lg:w-1/5">
              <h3 className="font-medium text-black text-sm underline underline-offset-4 mb-4">
                SUBSCRIBE
              </h3>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="text-center text-gray-500 text-sm mt-10">
            <hr/>
            <br/>
            © 2023 Funira. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }