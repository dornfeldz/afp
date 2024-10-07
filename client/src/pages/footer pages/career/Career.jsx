import React from "react";

function Career() {
  return (
    <div className="w-[80%] mx-auto mt-8">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Join the Tasty<span className="text-[#e67e22]">Go</span> Team
        </h1>
        <p className="mt-6 text-lg text-[#888]">
          We are always on the lookout for talented individuals who are
          passionate about food and technology. Explore our career opportunities
          and be part of something tasty.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {/* Job 1 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Frontend Developer
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            We are seeking a skilled Frontend Developer to join our dynamic
            team. You will work on building and improving our web and mobile
            applications using React and Tailwind CSS.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong>Location:</strong> San Francisco, CA (Hybrid)
            <br />
            <strong>Type:</strong> Full-time
            <br />
            <strong>Salary:</strong> $80,000 - $100,000/year
          </p>
          <button className="mt-6 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200">
            Apply Now
          </button>
        </div>

        {/* Job 2 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Delivery Driver
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Join our fleet of delivery drivers and help us bring delicious food
            to customers’ doorsteps. Flexibility, competitive pay, and the
            chance to explore the city!
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong>Location:</strong> San Francisco, CA
            <br />
            <strong>Type:</strong> Part-time
            <br />
            <strong>Pay:</strong> $18 - $25/hour
          </p>
          <button className="mt-6 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200">
            Apply Now
          </button>
        </div>

        {/* Job 3 */}
        <div className="p-6 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Marketing Specialist
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            We are looking for a creative Marketing Specialist to develop and
            execute marketing campaigns that engage our users and increase brand
            awareness.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong>Location:</strong> Remote
            <br />
            <strong>Type:</strong> Contract
            <br />
            <strong>Salary:</strong> $60,000 - $75,000/year
          </p>
          <button className="mt-6 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Career;
