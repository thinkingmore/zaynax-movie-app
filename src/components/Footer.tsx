import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex-col py-20 items-center text-white">
        <div className="container mx-auto grid grid-cols-5 px-2">
            {/* Column 1 */}
            <div className="col-span-1">
                <div className="flex items-center">
                    <div className="relative">
                        <select
                            className="appearance-none bg-transparent border border-gray-300 text-dark py-2 pl-10 pr-4 leading-tight focus:outline-none"
                            id="language-select"
                        >
                            <option className="text-black" value="en">English</option>
                            <option className="text-black" value="es">Español</option>
                            <option className="text-black" value="fr">Français</option>
                            <option className="text-black" value="de">Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Column 2 */}
            <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">Navigation</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Help Centre</a></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">Legal</h2>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie References</a></li>
                    <li><a href="#">Corporate Information</a></li>
                </ul>
            </div>

            {/* Column 4 */}
            <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">Talk to us</h2>
                <ul>
                    <li><a href="#">support@eracom.com</a></li>
                    <li><a href="#">+66 23991145</a></li>
                </ul>
            </div>

            {/* Column 5 */}
            <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </div>
        <div className="container text-center mt-8">
            <p className="text-sm text-white">© 2022 Dramatic. All Rights Reserved. </p>
        </div>
    </footer>

  );
};

export default Footer;
