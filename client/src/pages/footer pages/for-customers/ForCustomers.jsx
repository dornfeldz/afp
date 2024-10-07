import React from "react";

function ForCustomers() {
  return (
    <div className="w-[80%] max-w-5xl mx-auto mt-16 px-4 mb-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Welcome to Tasty<span className="text-[#e67e22]">Go</span> for
          Customers
        </h1>
        <p className="mt-6 text-lg text-[#888]">
          Discover everything you need to know about ordering food, promotions,
          and customer support.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1: Ordering Food */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            How to Order Your Favorite Food
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Ordering food with TastyGo is simple! Just follow these steps:
            <ol className="mt-4 list-decimal list-inside">
              <li>Open the TastyGo app or website.</li>
              <li>Browse through your favorite restaurants or cuisines.</li>
              <li>Select the dishes you want and add them to your cart.</li>
              <li>Proceed to checkout and enter your delivery details.</li>
              <li>Choose your payment method and place your order!</li>
            </ol>
            Enjoy delicious food delivered right to your door!
          </p>
        </div>

        {/* Section 2: Current Promotions */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Exciting Promotions Just for You
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Don't miss out on our current promotions:
            <ul className="mt-4 list-disc list-inside">
              <li>20% off your first order using the code TASTY20!</li>
              <li>Free delivery on orders over $30 during weekends.</li>
              <li>
                Refer a friend and get $5 off your next order when they place
                theirs!
              </li>
            </ul>
            Check the app regularly for more exciting deals!
          </p>
        </div>

        {/* Section 3: Customer Support */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            We're Here to Help!
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            If you have any questions or concerns, our customer support team is
            ready to assist you. You can reach us through:
            <ul className="mt-4 list-disc list-inside">
              <li>Email: support@tastygo.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Live Chat: Available in the app from 9 AM to 9 PM</li>
            </ul>
            Your satisfaction is our priority!
          </p>
        </div>

        {/* Section 4: Feedback */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            We Value Your Feedback
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            At TastyGo, we constantly strive to improve our service. Your
            feedback helps us do just that! Please take a moment to share your
            thoughts about your experience with us. You can fill out our
            feedback form directly in the app or reach out to our support team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForCustomers;
