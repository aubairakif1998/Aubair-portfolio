import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-4">
        Effective Date: [Insert Date]
      </p>

      <p>
        Welcome to my portfolio website (<strong>[your website URL]</strong>).
        By accessing or using this site, you agree to the following Terms of
        Service.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Use of Content</h2>
      <p>
        All content, including text, images, and code, is my intellectual
        property unless otherwise stated. You may not reproduce, distribute, or
        modify any content without my written permission.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Use this website for illegal purposes.</li>
        <li>Attempt to gain unauthorized access to the site or its data.</li>
        <li>
          Engage in any activity that may harm the functionality or security of
          this website.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. External Links</h2>
      <p>
        This site may contain links to third-party websites. I am not
        responsible for their content or privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-4">4. Disclaimer</h2>
      <p>
        This website is provided as is without warranties of any kind. I am not
        liable for any errors, omissions, or damages resulting from your use of
        this site.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Changes to These Terms</h2>
      <p>
        I may update these Terms of Service at any time. Continued use of the
        site after changes means you accept the updated terms.
      </p>

      <p>
        If you have any questions about these terms, please contact me at{" "}
        <strong>[your email]</strong>.
      </p>
    </div>
  );
};

export default TermsOfService;
