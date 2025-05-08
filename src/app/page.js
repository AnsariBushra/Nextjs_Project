"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import Image from "next/image";

const image = [
  {
    img: "https://cdn.pixabay.com/photo/2021/03/09/10/05/laptop-6081424_1280.png",
    alt: "Trust",
    text: "Trusted by thousands of users worldwide.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/04/25/12/06/man-1351761_1280.png",
    alt: "Support",
    text: "24/7 support to help you every step of the way.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/09/24/16/52/password-7476798_1280.png",
    alt: "Secure",
    text: "Secure transactions backed by encryption.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/02/10/19/39/work-7006007_1280.png",
    alt: "Easy Process",
    text: "Quick and easy process from start to finish.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <>
      <Head>
        <title>SoftSell - Resell Your Software Licenses</title>
        <meta
          name="description"
          content="Easily sell unused software licenses for cash. Fast, secure, and hassle-free."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center">
          <div className="fade-in max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Resell Your Unused Software Licenses
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Turn your idle licenses into instant payouts—fast, simple, secure.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition hover:cursor-pointer">
              Sell My Licenses
            </button>
          </div>
        </section>

        {/*------- SECTION - How it works --------*/}
        <section className="fade-in flex items-center justify-center md:px-10 md:py-12">
          <div className="text-white text-center backdrop-brightness-75 w-full rounded-lg py-16">
            <h2 className="text-4xl font-bold mb-10 ">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2022/03/05/14/39/software-7049425_1280.png"
                  width={300}
                  height={300}
                  alt="Upload"
                  className="mx-auto mb-4 rounded-3xl transition delay-150 duration-300 ease-in-out hover:scale-110"
                />
                <h3 className="text-xl font-semibold">Upload License</h3>
                <p>Submit your unused license in just a few clicks.</p>
              </div>
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2021/10/10/18/59/online-6698352_1280.png"
                  width={300}
                  height={300}
                  alt="Valuation"
                  className="mx-auto mb-4 rounded-3xl transition delay-150 duration-300 ease-in-out hover:scale-110"
                />
                <h3 className="text-xl font-semibold">Get Valuation</h3>
                <p>We evaluate your license and offer a fair price.</p>
              </div>
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2023/12/07/11/45/money-8435393_1280.png"
                  width={300}
                  height={300}
                  alt="Get Paid"
                  className="mx-auto mb-4 rounded-3xl transition delay-150 duration-300 ease-in-out hover:scale-110"
                />
                <h3 className="text-xl font-semibold">Get Paid</h3>
                <p>Receive instant payment upon approval.</p>
              </div>
            </div>
          </div>
        </section>

        {/*------- SECTION - Why Choose US --------*/}
        <section className="fade-in py-16 md:mb-20 px-4 bg-white text-center dark:bg-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Choose Us
          </h2>

          <div className="max-w-xl mx-auto">
            <div className="transition-all duration-500">
              <Image
                src={image[currentIndex].img}
                width={300}
                height={300}
                alt={image[currentIndex].alt}
                className="mx-auto md:w-full md:h-80 mb-6 rounded-xl"
              />
              <p className="text-lg shadow-2xl">{image[currentIndex].text}</p>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {image.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 hover:cursor-pointer rounded-full transition-colors duration-300 ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/*------- SECTION - Customer Testimonials --------*/}
        <section
          className="fade-in py-16 px-4 text-center bg-scroll bg-contain bg-no-repeat bg-center relative"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2020/12/16/15/19/mobile-phone-5836879_1280.png')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10">Customer Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded shadow-xl">
                <p className="italic">
                  “SoftSell made it incredibly easy to turn my old licenses into
                  cash. Highly recommended!”
                </p>
                <p className="mt-4 font-semibold">
                  — Alex Smith, IT Manager, TechBridge
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-xl">
                <p className="italic">
                  “I was skeptical at first, but the process was smooth and
                  fast. Got paid in a day!”
                </p>
                <p className="mt-4 font-semibold">— Priya Mehta, Freelancer</p>
              </div>
            </div>
          </div>
        </section>

        {/*------- SECTION - Contact --------*/}
        <section className="fade-in py-16 px-4 bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-3xl mx-auto grid gap-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
            />
            <select
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
            >
              <option value="">Select License Type</option>
              <option value="os">Operating System</option>
              <option value="software">Software Suite</option>
              <option value="security">Security Software</option>
            </select>
            <textarea
              placeholder="Your message"
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
