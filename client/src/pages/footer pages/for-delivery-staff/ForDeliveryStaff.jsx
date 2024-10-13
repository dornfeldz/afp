import React from "react";

function ForDeliveryStaff() {
  return (
    <div className="w-[80%] max-w-5xl mx-auto mt-16 px-4 mb-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Important News for Tasty<span className="text-[#e67e22]">Go</span>{" "}
          Delivery Staff
        </h1>
        <p className="mt-6 text-lg text-[#888]">
          Stay updated with the latest information that affects your work and
          benefits. From safety updates to new payment methods, here's
          everything you need to know.
        </p>
      </div>

      <div className="space-y-12">
        {/* News Item 1 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            New Contactless Delivery Guidelines
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            In light of recent health guidelines, we have updated our
            contactless delivery protocols. Be sure to maintain a safe distance
            of at least 6 feet and follow the latest mask guidelines when
            dropping off orders. We encourage all drivers to use the new in-app
            feature to notify customers when their order has been left at the
            door.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong>Effective Date:</strong> October 10, 2024
          </p>
        </div>

        {/* News Item 2 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Increased Delivery Bonus in Busy Areas
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Starting this month, delivery drivers can earn extra bonuses during
            peak hours in high-demand areas. Make sure to check the app for
            updates on bonus zones, which will be marked in red. The more
            deliveries you complete in these zones, the higher your bonus will
            be!
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong>Bonus Hours:</strong> Weekdays 11 AM - 2 PM, 5 PM - 9 PM
            <br />
            <strong>Bonus Rate:</strong> Up to 25% extra per delivery
          </p>
        </div>

        {/* News Item 3 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Updated Payment Method – Now Supporting Digital Wallets
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            We’re excited to announce that TastyGo now supports digital wallet
            payments for delivery staff. This means you can receive your
            payments faster and more securely. Supported digital wallets include
            Apple Pay, Google Pay, and PayPal.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            To update your payment preferences, head over to the "Payment
            Settings" section in the TastyGo Driver app.
          </p>
        </div>

        {/* News Item 4 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Safety Tip of the Month: Nighttime Deliveries
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            As the days grow shorter, more of you will be out delivering after
            dark. For your safety, we recommend wearing reflective clothing,
            using well-lit routes, and always being aware of your surroundings.
            Stay safe, and thank you for continuing to deliver great service!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForDeliveryStaff;
