import React from "react";

const CoreValue: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2563EB] text-center md:text-4xl">
          Core Values
        </h2>
        <p className="mt-6 text-gray-600  text-lg md:text-xl text-start shadow-lg p-6 rounded-lg">
          NEW ECO is guided by our Core Values. These Core Values describe our
          company as we want it to be, and we want our decisions and actions to
          demonstrate these Values. We believe that putting our Values into
          practice creates long-term benefits for customers, employees,
          suppliers, and the communities we serve.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Respect */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">Respect</h3>
            <p className="mt-2 text-gray-600">
              We treat co-workers and customers with appreciation, kindness, and
              politeness. We respect the policies, the people we work with, the
              company, its assets, and ourselves.
            </p>
          </div>

          {/* Accountability */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Accountability
            </h3>
            <p className="mt-2 text-gray-600]">
              Taking responsibility to complete tasks, perform duties, and be
              present for shifts to fulfill and further the company &apos; s
              goals.
            </p>
          </div>

          {/* Team Work */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">Team Work</h3>
            <p className="mt-2 text-gray-600">
              Working cooperatively and efficiently to achieve the common goal
              of providing value to our customers and sustaining profitable
              growth.
            </p>
          </div>

          {/* Service Excellence */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Service Excellence
            </h3>
            <p className="mt-2 text-gray-600">
              Delivering what we promise and adding value beyond what is
              expected. Building customer loyalty, not just satisfaction.
            </p>
          </div>

          {/* Responsibility */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Responsibility
            </h3>
            <p className="mt-2 text-gray-600">
              Acting with integrity towards our staff, customers, the community,
              and the environment.
            </p>
          </div>

          {/* Caring */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">Caring</h3>
            <p className="mt-2 text-gray-600">
              A duty of care for our staff, customers, and the environment.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Excellence
            </h3>
            <p className="mt-2 text-gray-600">
              Striving to provide the best quality experience with regard to our
              cleaning and customer service.
            </p>
          </div>

          {/* Integrity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">Integrity</h3>
            <p className="mt-2 text-gray-600">
              Acting with honesty, openness, and doing what we say we will do.
            </p>
          </div>

          {/* Professionalism */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Professionalism
            </h3>
            <p className="mt-2 text-gray-600">
              Adhering to the company’s standards and expectations regarding
              appearance, attitude, behavior, and performance.
            </p>
          </div>

          {/* Reliability */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Reliability
            </h3>
            <p className="mt-2 text-gray-600">
              Being punctual and dependable, committed to the team, our
              customers, and the company.
            </p>
          </div>

          {/* Pursue Growth and Learning */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#2563EB]">
              Pursue Growth and Learning
            </h3>
            <p className="mt-2 text-gray-600">
              Committed to personal and professional improvement, which leads to
              greater opportunities in the company and healthier relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
