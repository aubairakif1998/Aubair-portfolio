import "@/style/projets.css";
import Image1 from "@/assets/PRO.png";
// import Image2 from "@/assets/Mask group (1).png";
// import Projects1Line from "@/assets/projects-1-line.svg";
// import Projects2Line from "@/assets/projects-2-line.svg";
// import Projects3Line from "@/assets/prjects-3-line.svg";
// import Video1 from "@/assets/video.mp4";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="projects-main">
      <div className="projects-inner">
        <h1>Projects</h1>
        <div className="projects-all">
          {/* Project 1 */}
          <div className="project-image-section-main space-y-10">
            <div className="image-text-inner flex flex-col-reverse md:flex-row items-center gap-10">
              {/* Project Details */}
              <div className="projects-text bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  My Store Sphere
                </h2>

                <p className="text-gray-600 leading-relaxed text-center">
                  I developed a full-stack eCommerce web application to provide
                  a seamless shopping experience for customers and efficient
                  inventory management for store owners.
                </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <strong>User Authentication</strong> – Secure login with
                    Google and email-based authentication.
                  </li>
                  <li className="flex items-start gap-2">
                    <strong>Product Listings</strong> – Dynamic catalog with
                    categories, filters, and search.
                  </li>
                  <li className="flex items-start gap-2">
                    <strong>Cart & Checkout</strong> – Smooth cart experience
                    with Stripe-powered payments.
                  </li>
                  <li className="flex items-start gap-2">
                    <strong>Admin Dashboard</strong> – Manage orders, products,
                    and users efficiently.
                  </li>
                  <li className="flex items-start gap-2">
                    <strong>Order Tracking</strong> – Customers can track orders
                    in real-time.
                  </li>
                  <li className="flex items-start gap-2">
                    <strong>Responsive UI</strong> – Optimized for mobile,
                    tablet, and desktop views.
                  </li>
                </ul>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://mystoresphere-client-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    🔗 MyStoreSphere Customer
                  </a>
                  <br />
                  <a
                    href="https://mystoresphere-store-app.vercel.app/670bdacdbce0484afe5a194b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    🔗 MyStoreSphere Admin
                  </a>
                </div>
              </div>

              <div className="image-div max-w-md lg:max-w-xl">
                <Image
                  src={Image1}
                  alt="Project 1 Image"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
