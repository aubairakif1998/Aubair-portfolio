import React from "react";

const PrivacyPolicyAndTerms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">Effective Date: [Insert Date]</p>
      <p className="mb-4">
        Thank you for visiting my portfolio website ([your website URL]). Your
        privacy is important to me. This Privacy Policy outlines how I collect,
        use, and protect any personal information you provide while using this
        site.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information I Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Personal Information:</strong> If you contact me via forms or
          email, I may collect your name, email address, and any other details
          you provide.
        </li>
        <li>
          <strong>Usage Data:</strong> I may collect information about how you
          interact with my website, such as your IP address, browser type, and
          pages visited, using cookies or analytics tools.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        2. How I Use Your Information
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To respond to inquiries or messages you send.</li>
        <li>To improve my website and user experience.</li>
        <li>
          To analyze website traffic and engagement using analytics tools.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Data Protection</h2>
      <p className="mb-4">
        I take reasonable security measures to protect your data from
        unauthorized access, alteration, or disclosure. However, no method of
        online transmission is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Third-Party Services</h2>
      <p className="mb-4">
        I may use third-party tools like Google Analytics to track website
        usage. These services have their own privacy policies, which you should
        review separately.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          You can request access to any personal data I may have about you.
        </li>
        <li>
          You may request deletion of your personal data unless retention is
          required by law.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Updates to This Policy</h2>
      <p className="mb-4">
        I may update this Privacy Policy occasionally. Any changes will be
        posted on this page with the updated effective date.
      </p>

      <h1 className="text-3xl font-bold mt-10 mb-4">Terms of Service</h1>
      <p className="mb-2">Effective Date: [Insert Date]</p>
      <p className="mb-4">
        Welcome to my portfolio website ([your website URL]). By accessing or
        using this site, you agree to the following Terms of Service.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Use of Content</h2>
      <p className="mb-4">
        All content, including text, images, and code, is my intellectual
        property unless otherwise stated. You may not reproduce, distribute, or
        modify any content without my written permission.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Acceptable Use</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Do not use this website for illegal purposes.</li>
        <li>
          Do not attempt to gain unauthorized access to the site or its data.
        </li>
        <li>
          Do not engage in any activity that may harm the functionality or
          security of this website.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. External Links</h2>
      <p className="mb-4">
        This site may contain links to third-party websites. I am not
        responsible for their content or privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Disclaimer</h2>
      <p className="mb-4">
        This website is provided as is without warranties of any kind. I am not
        liable for any errors, omissions, or damages resulting from your use of
        this site.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Changes to These Terms</h2>
      <p className="mb-4">
        I may update these Terms of Service at any time. Continued use of the
        site after changes means you accept the updated terms.
      </p>

      <p className="mt-6">
        If you have any questions, feel free to contact me at{" "}
        <a href="mailto:[your email]" className="text-blue-500">
          [your email]
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicyAndTerms;
