import React from "react";

const About = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Building the future of business ownership.
          </h2>
          <div className="my-8 xl:mb-16 xl:mt-12">
            <img
              className="w-full dark:hidden"
              src="https://images.pexels.com/photos/7213210/pexels-photo-7213210.jpeg"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              We are building a global platform for entrepreneurship, where
              anyone with a skill can create a successful business in minutes.
              If we succeed in our mission, the barriers to entry for
              entrepreneurship will disappear, and self-employment will become
              the default option.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
