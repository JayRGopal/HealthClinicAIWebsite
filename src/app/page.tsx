"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Landing from "./_components/home/Landing";
import Testimonials from "./_components/home/Testimonials";
import Image from "next/image";
import Orb from "@/app/_components/ui/orb";
import { InfiniteCarousel } from "./news/_components/InfiniteCarousel";
import { CarouselPlugin } from "@/app/_components/ui/carousel";
import Link from "next/link";
import TestDrive from "./_components/ui/drive-button";
import SectionTitle from "@/components/Common/SectionTitle";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Pipeline = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    window.location.href = `https://form.typeform.com/to/zstMkPH7?email=${email}`;
    toast.success("Email submitted successfully!");
    setEmail("");
    setSubmitted(true);
  };

  return (
    <section id="prototype" className="my-8 text-center" data-oid="xyjm6k8">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="q4msu8v"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="n.48l4a"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="oxw_o4h"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="b9:0ja-"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="lc-fan2"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="qmsxjpk"
          >
            Email
            <span className="text-sm text-red-700" data-oid="sgxgpxc">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="i9_px7q"
          />

          <div className="mt-8" data-oid="r.m--hx">
            <TestDrive handleSubmit={handleSubmit} data-oid="l6..mpm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="3slxy0l" />
      <Landing data-oid="3f.5-hd" />
      <section id="prototype" className="my-8 text-center" data-oid="7dbq_53">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="8p672uu"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="n4tpck6"
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid=":pricz."
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="hf0zrmz"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="7e8ixnp"
            >
              Our physician dashboard is designed to give you full control over
              your billing, scheduling, and patient records. You can easily
              automate every repetitive task you do not want to do.
            </p>
          </div>
          <Image
            src="/images/frontend-prototype.png"
            alt="Front-End Prototype"
            className="mx-auto w-full transform self-center rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
            width={500}
            height={400}
            data-oid=":w0gcyw"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid=":p8at38"
      >
        <div className="container" data-oid="c50bn.i">
          <h3 data-oid="3rzz9ze">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="h.lg2t1"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid=".frhx6x"
          >
            <Link href="/news" data-oid="y.fydln">
              <InfiniteCarousel data-oid="_xjbrlg">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="6630xnj"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="um2qwuw"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="9z1r:qz"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="6_0j_e1"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="3c:x7d6"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ddi2zkx"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ahrdv12"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="upv:yu:"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="y:c0r27"
      >
        <div className="container" data-oid="44l389r">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="s6di3fs"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="ku7:-0f"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="v4z-4mo"
            >
              <div className="mb-6" data-oid="aurfnt.">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="1h3.t:y"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="fni3drp"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="bl109hw"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="me_tcif"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="nsya4l1"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="9q8u9-0">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="-rd:mpb"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="j345yxy"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="h5icqdx"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid="jl:_z0p"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="jrscb4e"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="ura62i."
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="gbvtyei"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="4h0vd5b"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="inkrw6l"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="l3ade6z"
            >
              <div className="mb-6" data-oid="aa-s-ly">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="ixhms_i"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="aru6mkv"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="d66izyb"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="5eyvu2z"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="1fg4lig"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="84qd7bz"
            >
              <div className="mb-6" data-oid="mmt-iy5">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="o74vg.v"
                >
                  <div className="relative h-12 w-12" data-oid="8_slyem">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="ms4808j"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="p7ntw-f"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="vtxxfv7"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="a26mdft"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="zl03-en"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="3boz_.y"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="cy..zl0"
          >
            <div className="text-center text-white" data-oid="-ex_t2d">
              <h4 className="mb-2 text-4xl font-bold" data-oid="x2dtl18">
                98%
              </h4>
              <p className="text-blue-100" data-oid="gwz2po2">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="u9_c_so">
              <h4 className="mb-2 text-4xl font-bold" data-oid="-7d6.jv">
                3x
              </h4>
              <p className="text-blue-100" data-oid="zsjql0p">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="7x5707o">
              <h4 className="mb-2 text-4xl font-bold" data-oid="63h026p">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="yv_y98y">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="yhx4jyu"
      >
        <div className="container" data-oid="d6:w:sx">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="tv09xoc"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="4t4qe:."
            >
              <Orb color="pink" data-oid="o6hmo_b" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="fpjcugx">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="5vu7k30"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="x.mjukc">
                  <span className="text-left font-bold" data-oid="53w_dib">
                    Turn denials into approvals.
                  </span>{" "}
                  Proactively identify, analyze, and resolve claim denials with
                  intelligent automation, reducing revenue loss and
                  administrative burden.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="wtx6dsn"
            >
              <Orb color="green" data-oid="4s5zrls" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="g98heiu">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="y4b1kv1"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="4vm030o">
                  <span className="font-bold" data-oid="q_uppeg">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="tqe4t5b"
            >
              <Orb color="pearl" data-oid="dzp-ds2" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="u1mqror">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="8ec.llr"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="bd_ksgt">
                  <span className="font-bold" data-oid="v8v4t_p">
                    Instant approvals, fewer delays.
                  </span>{" "}
                  AI streamlines prior authorizations by automating
                  documentation, reducing provider workload, and expediting
                  patient care.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row "
              data-oid="3jtt4-3"
            >
              <Orb color="orange" data-oid="4h-dtx." />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="8p4bj.i">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="v37rr7k"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid="f984kl-">
                  <span className="font-bold" data-oid=".boalr7">
                    Verify in seconds, reduce rejections.
                  </span>{" "}
                  AI-driven eligibility checks instantly confirm patient
                  coverage, preventing claim denials and improving front-end
                  efficiency.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="sih6m0a"
            >
              <Orb color="gold" data-oid="cy.gagb" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="z2wg9gk">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="11s6az9"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="my_5x7p">
                  <span className="font-bold" data-oid="9g_kuq4">
                    Experience flawless financial reconciliation
                  </span>{" "}
                  Our system automates payment posting with unparalleled
                  accuracy. It seamlessly matches remittance data to patient
                  accounts, minimizes human error, and speeds up cash flow.
                </p>
              </div>
            </div>
            <div
              className=" flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="vv.jzlq"
            >
              <Orb color="copper" data-oid="lfrdikg" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="ezlvddp">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="xnmf:ui"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="wq0vvra">
                  <span className="font-bold" data-oid="vlgog4.">
                    Transform your medical records with precision.
                  </span>{" "}
                  Our AI-powered tool analyzes and refines coding notes,
                  ensuring consistency and compliance, reducing claim denials,
                  and letting healthcare professionals focus on patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pipeline data-oid="w_m8eb7" />
      {/* <Testimonials /> */}
    </>
  );
}
