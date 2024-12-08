import Particles from "@/components/magicui/particles";
import React from "react";
import { MarqueeDemo } from "../_components/reviews";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-center pt-16">
        <div className="mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
          <div className="relative flex w-full items-center justify-center">
            <div className="pointer-events-none relative h-[450px] w-full">
              <div className="transform-preserve-3d transform-rotate flex h-full w-full items-center justify-center transition-transform duration-300 ease-out">
                {/* <div
                  className="absolute h-full w-full"
                  style={{
                    backgroundSize: "40px 40px",
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgb(103, 103, 103) 1px, transparent 0px)",
                    backgroundPosition: "center center",
                    transform: "translateZ(-500px)",
                  }}
                /> */}
                <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
                  {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                    Dot Pattern
                  </p> */}
                  <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                  />
                </div>
                <div className="filter-grayscale group relative overflow-hidden">
                  <Particles
                    className="absolute inset-0"
                    quantity={100}
                    ease={80}
                    refresh
                    size={0.4}
                  />
                  <img
                    alt="Resend"
                    width={270}
                    height={270}
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto"
                    src="/Frame 4.png"
                    style={{ color: "transparent" }}
                  />
                  <div className="z-1 transform-light pointer-events-none absolute inset-0 rounded-full opacity-100 transition-transform duration-300 ease-out group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="relative mt-8 text-center text-4xl leading-tight tracking-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
            Building the modern <br />
            email sending platform
          </h1>
          <p className="relative mt-4 text-center text-base font-normal sm:text-lg md:text-xl">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              The web has come a long way in the last ten years, but why is email stuck in the past?
              <br />
              It doesn't have to be that way. We want to change that. We want to reimagine email.
            </span>
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-16 md:max-w-7xl">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative mb-40 mt-16 pt-32 md:pb-24">
            <div
              aria-hidden="true"
              className="center pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
            <div
              aria-hidden="true"
              className="center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] max-w-full -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
              // style={{
              //   background:
              //     "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
              // }}
            />
            <h2 className="font-book font-styling font-display text-slate-12 mx-auto text-center text-[2.25rem] leading-[130%] tracking-tight">
              <span
                data-br=":R369j6:"
                data-brr={1}
                style={
                  {
                    display: "inline-block",
                    "vertical-align": "top",
                    "-webkit-text-decoration": "inherit",
                    "text-decoration": "inherit",
                    "-webkit-text-wrap": "balance",
                    "text-wrap": "balance",
                  } as React.CSSProperties
                }
              >
                Our story
              </span>
            </h2>
            <p className="sans text-slate-11 mx-auto mt-12 max-w-[480px] text-base font-normal tracking-wide md:text-[1.125rem] md:leading-[1.5]">
              Resend started with an{/* */}{" "}
              <strong className="text-slate-12 font-normal">open source</strong> {/* */}project in
              2022. We were{/* */} <strong className="text-slate-12 font-normal">frustrated</strong>{" "}
              by how difficult it was to build{/* */}{" "}
              <strong className="text-slate-12 font-normal">modern</strong> email templates that
              {/* */} <strong className="text-slate-12 font-normal">worked well</strong> {/* */}
              across all email clients.
              <br />
              <br />
              As we started to dig deeper,{/* */}{" "}
              <strong className="text-slate-12 font-normal">it became clear</strong> {/* */}that
              this was just the tip of the iceberg. We realized that sending emails that{/* */}{" "}
              <strong className="text-slate-12 font-normal">reach the inbox</strong> {/* */}(not the
              spam folder) was the biggest pain point, so we started to{/* */}{" "}
              <strong className="text-slate-12 font-normal">explore something new</strong>.<br />
              <br />
              In 2023, we launched an entire email sending platform and joined{/* */}{" "}
              <strong className="text-slate-12 font-normal">Y Combinator's</strong> {/* */}winter
              batch. We're creating something special here, and we're excited to build it with you.
            </p>
          </div>
          <div className="mb-40 md:mt-24">
            <h2 className="font-book font-styling font-display text-slate-12 relative z-20 text-center text-[2.25rem] leading-[130%] tracking-tight">
              The team behind it
            </h2>
            <p className="sans text-slate-11 mb-12 text-center text-base font-normal tracking-wide md:text-[1.125rem] md:leading-[1.5]">
              A fully remote team on a mission to build
              <br />
              the best communication platform for developers.
            </p>
            <img
              alt="A picture of the Resend founding team, 3 people smiling in a coworking space "
              loading="lazy"
              width={800}
              height={800}
              decoding="async"
              data-nimg={1}
              className="mx-auto -mt-5 mb-8 -rotate-1 rounded-lg"
              style={{ color: "transparent" }}
              src="/team.png"
            />
            <p className="sans text-slate-11 mt-4 text-center text-sm font-normal leading-[1.6]">
              <a
                className="text-slate-11 hover:text-slate-12 flex items-center justify-center gap-1 text-xs transition duration-200 ease-in-out"
                target="_blank"
                href="https://twitter.com/zenorocha/status/1648686304635265025"
              >
                <svg
                  className="hidden md:block"
                  fill="none"
                  height={16}
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.89444C21.2645 6.21524 20.4744 6.43199 19.6438 6.52997C20.4911 6.03056 21.1412 5.23811 21.4477 4.29479C20.655 4.75778 19.7768 5.09418 18.8422 5.27452C18.0935 4.49073 17.0277 4 15.8474 4C13.582 4 11.7446 5.80861 11.7446 8.04032C11.7446 8.35591 11.7816 8.66284 11.8503 8.95936C8.43883 8.79029 5.41672 7.18197 3.39258 4.7387C3.04025 5.33695 2.83766 6.03056 2.83766 6.76926C2.83766 8.17037 3.56258 9.40761 4.66273 10.1316C3.98978 10.1099 3.35735 9.92869 2.80419 9.6261V9.67812C2.80419 11.635 4.21792 13.2676 6.09583 13.6387C5.75055 13.7306 5.38853 13.7791 5.01506 13.7791C4.75081 13.7791 4.49273 13.7549 4.24258 13.708C4.76491 15.312 6.27993 16.4808 8.07593 16.512C6.67101 17.5958 4.90144 18.2417 2.97948 18.2417C2.64829 18.2417 2.3215 18.2226 2 18.1853C3.81626 19.3324 5.97252 20 8.28909 20C15.8378 20 19.9644 13.8459 19.9644 8.50851C19.9644 8.3351 19.96 8.15997 19.9521 7.98656C20.7536 7.41606 21.4495 6.70597 21.9982 5.89704L22 5.89444Z"
                    fill="currentColor"
                  />
                </svg>
                Founding team meeting for the first time in-person during a trip to Portugal
              </a>
            </p>
          </div>
          <div className="pt-1" id="what-we-believe">
            <div className="mb-20 mt-24">
              <h2 className="font-book font-styling font-display text-slate-12 mx-auto text-center text-[2.25rem] leading-[130%] tracking-tight">
                <span
                  data-br=":R1e9j6:"
                  data-brr={1}
                  style={
                    {
                      display: "inline-block",
                      "vertical-align": "top",
                      "-webkit-text-decoration": "inherit",
                      "text-decoration": "inherit",
                      "-webkit-text-wrap": "balance",
                      "text-wrap": "balance",
                    } as React.CSSProperties
                  }
                >
                  What we believe
                </span>
              </h2>
              <p className="sans text-slate-11 mb-12 text-center text-base font-normal tracking-wide md:text-[1.125rem] md:leading-[1.5]">
                Principles that dictate how we think, behave, and make decisions.
              </p>
              <div
                style={
                  {
                    "-webkit-transform": "translateY(2.21333px) translateZ(0px)",
                    "-ms-transform": "translateY(2.21333px) translateZ(0px)",
                    transform: "translateY(2.21333px) translateZ(0px)",
                  } as React.CSSProperties
                }
              >
                <div
                  className="relative mx-auto rounded-2xl"
                  style={
                    {
                      "max-width": "704px",
                      background:
                        "linear-gradient(rgb(9 9 11), rgb(9 9 11)) padding-box, linear-gradient(0, rgb(9 9 11) 25%, rgba(255, 255, 255, 0.15)) border-box border-box",
                      border: "2px solid transparent",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute left-1/2 top-0 z-0 h-[500px] w-[90%] -translate-x-1/2"
                    // style={{
                    //   background:
                    //     "radial-gradient(67.62% 100.00% at 50.00% -0.00%, rgba(16, 122, 219, 0.08) 0%, rgba(16, 170, 219, 0.00) 72.72%, rgba(16, 36, 219, 0.00) 100%), #000",
                    // }}
                  />
                  <div className="z-1 relative flex items-center justify-between border-b border-white border-opacity-5 p-4">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        fill="none"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          height={13}
                          rx="1.5"
                          stroke="white"
                          strokeOpacity="0.4"
                          width={15}
                          x="4.5"
                          y="5.5"
                        />
                        <rect fill="white" fillOpacity="0.4" height={1} width={14} x={5} y={9} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={8} y={3} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={15} y={3} />
                      </svg>
                      <div className="text-right text-xs font-normal leading-normal tracking-tight text-white text-opacity-50">
                        Dec 6th, 2022
                      </div>
                    </div>
                  </div>
                  <div className="z-1 relative flex-col p-5 md:p-14">
                    <div
                      className="-ml-3 mb-7 inline-flex items-center justify-start gap-2 rounded-full py-1 pl-2 pr-4"
                      style={{
                        background:
                          "linear-gradient(rgb(6, 6,6), rgb(6, 6, 6)) padding-box, linear-gradient(0, rgb(0, 0, 0) 40%, rgba(255, 255, 255, 0.2)) border-box border-box",
                        border: "1px solid transparent",
                      }}
                    >
                      <span
                        className="relative block h-7 w-7 flex-shrink-0 overflow-hidden rounded-full"
                        style={{
                          background:
                            "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(42deg, var(--background) 45%, var(--slate-a10)) border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <img
                          alt="Photo of Zeno Rocha"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          style={{ color: "transparent" }}
                          srcSet="/_next/image?url=%2Fstatic%2Favatars%2Fzeno-rocha.jpg&w=48&q=75 1x, /_next/image?url=%2Fstatic%2Favatars%2Fzeno-rocha.jpg&w=96&q=75 2x"
                          src="/_next/image?url=%2Fstatic%2Favatars%2Fzeno-rocha.jpg&w=96&q=75"
                        />
                      </span>
                      <p className="sans !font-display text-slate-12 text-sm font-normal leading-[1.6]">
                        Zeno Rocha
                      </p>
                      <p className="sans text-slate-11 text-sm font-normal leading-[1.6]">
                        &lt;{/* */}zeno@resend.com{/* */}&gt;
                      </p>
                    </div>
                    <h2 className="font-book font-styling font-display text-slate-12 mb-2 mt-1 text-[1.48rem] text-[2.25rem] leading-[130%] tracking-tight">
                      Do work that inspires others
                    </h2>
                    <div>
                      <p className="sans text-slate-11 !text-[1rem] text-sm font-normal leading-[1.6] leading-[1.8] opacity-75">
                        You can't inspire people by doing an “okay” job. To inspire, you need to do
                        {/* */}{" "}
                        <strong className="text-slate-12 font-normal">phenomenal work</strong>.
                        Quality is not a plus; it's a{/* */}{" "}
                        <strong className="text-slate-12 font-normal">must-have</strong>. We know
                        nothing will ever be perfect, but that doesn't stop us from pushing the
                        limits. We don't want to just meet the bar of our peers. We want to{/* */}{" "}
                        <strong className="text-slate-12 font-normal">raise the bar</strong>. The
                        sum of all the{/* */}{" "}
                        <strong className="text-slate-12 font-normal">small details</strong> is what
                        makes something special.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={
                  {
                    "-webkit-transform": "translateY(3.32px) translateZ(0px)",
                    "-ms-transform": "translateY(3.32px) translateZ(0px)",
                    transform: "translateY(3.32px) translateZ(0px)",
                  } as React.CSSProperties
                }
              >
                <div
                  className="relative mx-auto rounded-2xl md:rotate-2 lg:-translate-x-[20%] lg:-translate-y-[5%] lg:rotate-2"
                  style={
                    {
                      "max-width": "704px",
                      background:
                        "linear-gradient(rgb(9 9 11), rgb(9 9 11)) padding-box, linear-gradient(0, rgb(0, 0, 0) 25%, rgba(255, 255, 255, 0.15)) border-box border-box",
                      border: "2px solid transparent",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute left-1/2 top-0 z-0 h-[500px] w-[90%] -translate-x-1/2"
                    // style={{
                    //   background:
                    //     "radial-gradient(67.62% 100.00% at 50.00% -0.00%, rgba(150, 40, 150, 0.08) 0%, rgba(16, 170, 219, 0.00) 72.72%, rgba(16, 36, 219, 0.00) 100%), #000",
                    // }}
                  />
                  <div className="z-1 relative flex items-center justify-between border-b border-white border-opacity-5 p-4">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        fill="none"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          height={13}
                          rx="1.5"
                          stroke="white"
                          strokeOpacity="0.4"
                          width={15}
                          x="4.5"
                          y="5.5"
                        />
                        <rect fill="white" fillOpacity="0.4" height={1} width={14} x={5} y={9} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={8} y={3} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={15} y={3} />
                      </svg>
                      <div className="text-right text-xs font-normal leading-normal tracking-tight text-white text-opacity-50">
                        Jan 2nd, 2023
                      </div>
                    </div>
                  </div>
                  <div className="z-1 relative flex-col p-5 md:p-14">
                    <div
                      className="-ml-3 mb-7 inline-flex items-center justify-start gap-2 rounded-full py-1 pl-2 pr-4"
                      style={{
                        background:
                          "linear-gradient(rgb(9 9 11), rgb(9 9 11)) padding-box, linear-gradient(0, rgb(0, 0, 0) 25%, rgba(255, 255, 255, 0.15)) border-box border-box",
                        border: "1px solid transparent",
                      }}
                    >
                      <span
                        className="relative block h-7 w-7 flex-shrink-0 overflow-hidden rounded-full"
                        style={{
                          background:
                            "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(42deg, var(--background) 45%, var(--slate-a10)) border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <img
                          alt="Photo of Jonni Lundy"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          style={{ color: "transparent" }}
                          srcSet="/_next/image?url=%2Fstatic%2Favatars%2Fjonni-lundy.jpg&w=48&q=75 1x, /_next/image?url=%2Fstatic%2Favatars%2Fjonni-lundy.jpg&w=96&q=75 2x"
                          src="/_next/image?url=%2Fstatic%2Favatars%2Fjonni-lundy.jpg&w=96&q=75"
                        />
                      </span>
                      <p className="sans !font-display text-slate-12 text-sm font-normal leading-[1.6]">
                        Jonni Lundy
                      </p>
                      <p className="sans text-slate-11 text-sm font-normal leading-[1.6]">
                        &lt;{/* */}jonni@resend.com{/* */}&gt;
                      </p>
                    </div>
                    <h2 className="font-book font-styling font-display text-slate-12 mb-2 mt-1 text-[1.48rem] text-[2.25rem] leading-[130%] tracking-tight">
                      No ego
                    </h2>
                    <div>
                      <p className="sans text-slate-11 !text-[1rem] text-sm font-normal leading-[1.6] leading-[1.8] opacity-75">
                        Helping others is part of the job. It's okay to admit you don't know
                        something and{/* */}{" "}
                        <strong className="text-slate-12 font-normal">ask for help</strong> - it's a
                        sign of strength, not weakness. We work together as an async team and{/* */}{" "}
                        <strong className="text-slate-12 font-normal">
                          assume positive intent
                        </strong>
                        . We communicate in a kind, direct, and{/* */}{" "}
                        <strong className="text-slate-12 font-normal">transparent way</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={
                  {
                    "-webkit-transform": "translateY(0.553333px) translateZ(0px)",
                    "-ms-transform": "translateY(0.553333px) translateZ(0px)",
                    transform: "translateY(0.553333px) translateZ(0px)",
                  } as React.CSSProperties
                }
              >
                <div
                  className="relative mx-auto rounded-2xl md:-rotate-1 lg:-translate-y-[5%] lg:translate-x-[20%] lg:-rotate-2"
                  style={
                    {
                      "max-width": "704px",
                      background:
                        "linear-gradient(rgb(9 9 11), rgb(9 9 11)) padding-box, linear-gradient(0, rgb(9 9 11) 25%, rgba(255, 255, 255, 0.15)) border-box border-box",
                      border: "2px solid transparent",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute left-1/2 top-0 z-0 h-[500px] w-[90%] -translate-x-1/2"
                    // style={{
                    //   background:
                    //     "radial-gradient(67.62% 100.00% at 50.00% -0.00%, rgba(16, 199, 200, 0.08) 0%, rgba(16, 170, 219, 0.00) 72.72%, rgba(16, 36, 219, 0.00) 100%), #000",
                    // }}
                  />
                  <div className="z-1 relative flex items-center justify-between border-b border-white border-opacity-5 p-4">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        fill="none"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          height={13}
                          rx="1.5"
                          stroke="white"
                          strokeOpacity="0.4"
                          width={15}
                          x="4.5"
                          y="5.5"
                        />
                        <rect fill="white" fillOpacity="0.4" height={1} width={14} x={5} y={9} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={8} y={3} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={15} y={3} />
                      </svg>
                      <div className="text-right text-xs font-normal leading-normal tracking-tight text-white text-opacity-50">
                        Dec 6th, 2022
                      </div>
                    </div>
                  </div>
                  <div className="z-1 relative flex-col p-5 md:p-14">
                    <div
                      className="-ml-3 mb-7 inline-flex items-center justify-start gap-2 rounded-full py-1 pl-2 pr-4"
                      style={{
                        background:
                          "linear-gradient(rgb(6, 6,6), rgb(6, 6, 6)) padding-box, linear-gradient(0, rgb(0, 0, 0) 40%, rgba(255, 255, 255, 0.2)) border-box border-box",
                        border: "1px solid transparent",
                      }}
                    >
                      <span
                        className="relative block h-7 w-7 flex-shrink-0 overflow-hidden rounded-full"
                        style={{
                          background:
                            "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(42deg, var(--background) 45%, var(--slate-a10)) border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <img
                          alt="Photo of Bu Kinoshita"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          style={{ color: "transparent" }}
                          srcSet="/_next/image?url=%2Fstatic%2Favatars%2Fbu-kinoshita.jpg&w=48&q=75 1x, /_next/image?url=%2Fstatic%2Favatars%2Fbu-kinoshita.jpg&w=96&q=75 2x"
                          src="/_next/image?url=%2Fstatic%2Favatars%2Fbu-kinoshita.jpg&w=96&q=75"
                        />
                      </span>
                      <p className="sans !font-display text-slate-12 text-sm font-normal leading-[1.6]">
                        Bu Kinoshita
                      </p>
                      <p className="sans text-slate-11 text-sm font-normal leading-[1.6]">
                        &lt;{/* */}bu@resend.com{/* */}&gt;
                      </p>
                    </div>
                    <h2 className="font-book font-styling font-display text-slate-12 mb-2 mt-1 text-[1.48rem] text-[2.25rem] leading-[130%] tracking-tight">
                      Keep shipping
                    </h2>
                    <div>
                      <p className="sans text-slate-11 !text-[1rem] text-sm font-normal leading-[1.6] leading-[1.8] opacity-75">
                        Speed is key. We prioritize ruthlessly, have a strong{/* */}{" "}
                        <strong className="text-slate-12 font-normal">sense of urgency</strong>, and
                        {/* */}{" "}
                        <strong className="text-slate-12 font-normal">make decisions fast</strong>.
                        We constantly review the scope of a project and work toward a v0, not a v1.
                        We{/* */} <strong className="text-slate-12 font-normal">ship early</strong>,
                        and we <strong className="text-slate-12 font-normal">ship often</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={
                  {
                    "-webkit-transform": "translateY(0.553333px) translateZ(0px)",
                    "-ms-transform": "translateY(0.553333px) translateZ(0px)",
                    transform: "translateY(0.553333px) translateZ(0px)",
                  } as React.CSSProperties
                }
              >
                <div
                  className="relative mx-auto rounded-2xl"
                  style={
                    {
                      "max-width": "704px",
                      background:
                        "linear-gradient(rgb(9 9 11), rgb(9 9 11)) padding-box, linear-gradient(0, rgb(9 9 11) 25%, rgba(255, 255, 255, 0.15)) border-box border-box",
                      border: "2px solid transparent",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute left-1/2 top-0 z-0 h-[500px] w-[90%] -translate-x-1/2"
                    // style={{
                    //   background:
                    //     "radial-gradient(67.62% 100.00% at 50.00% -0.00%, rgba(255, 255, 255, 0.05) 0%, rgba(16, 170, 219, 0.00) 72.72%, rgba(16, 36, 219, 0.00) 100%), #000",
                    // }}
                  />
                  <div className="z-1 relative flex items-center justify-between border-b border-white border-opacity-5 p-4">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white border-opacity-30" />
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        fill="none"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          height={13}
                          rx="1.5"
                          stroke="white"
                          strokeOpacity="0.4"
                          width={15}
                          x="4.5"
                          y="5.5"
                        />
                        <rect fill="white" fillOpacity="0.4" height={1} width={14} x={5} y={9} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={7} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={10} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={13} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={12} />
                        <rect fill="white" fillOpacity="0.4" height={1} width={1} x={16} y={15} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={8} y={3} />
                        <rect fill="white" fillOpacity="0.4" height={2} width={1} x={15} y={3} />
                      </svg>
                      <div className="text-right text-xs font-normal leading-normal tracking-tight text-white text-opacity-50">
                        May 15th, 2023
                      </div>
                    </div>
                  </div>
                  <div className="z-1 relative flex-col p-5 md:p-14">
                    <div
                      className="-ml-3 mb-7 inline-flex items-center justify-start gap-2 rounded-full py-1 pl-2 pr-4"
                      style={{
                        background:
                          "linear-gradient(rgb(6, 6,6), rgb(6, 6, 6)) padding-box, linear-gradient(0, rgb(0, 0, 0) 40%, rgba(255, 255, 255, 0.2)) border-box border-box",
                        border: "1px solid transparent",
                      }}
                    >
                      <span
                        className="relative block h-7 w-7 flex-shrink-0 overflow-hidden rounded-full"
                        style={{
                          background:
                            "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(42deg, var(--background) 45%, var(--slate-a10)) border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <img
                          alt="Photo of Zeh Fernandes"
                          loading="lazy"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          style={{ color: "transparent" }}
                          srcSet="/_next/image?url=%2Fstatic%2Favatars%2Fzeh-fernandes.jpg&w=48&q=75 1x, /_next/image?url=%2Fstatic%2Favatars%2Fzeh-fernandes.jpg&w=96&q=75 2x"
                          src="/_next/image?url=%2Fstatic%2Favatars%2Fzeh-fernandes.jpg&w=96&q=75"
                        />
                      </span>
                      <p className="sans !font-display text-slate-12 text-sm font-normal leading-[1.6]">
                        Zeh Fernandes
                      </p>
                      <p className="sans text-slate-11 text-sm font-normal leading-[1.6]">
                        &lt;{/* */}zeh@resend.com{/* */}&gt;
                      </p>
                    </div>
                    <h2 className="font-book font-styling font-display text-slate-12 mb-2 mt-1 text-[1.48rem] text-[2.25rem] leading-[130%] tracking-tight">
                      Default to action
                    </h2>
                    <div>
                      <p className="sans text-slate-11 !text-[1rem] text-sm font-normal leading-[1.6] leading-[1.8] opacity-75">
                        Regardless of what you do, we are all makers, and{/* */}{" "}
                        <strong className="text-slate-12 font-normal">makers don't wait</strong>.
                        When we see a problem, we don't expect someone to fix it or tell us what to
                        do. Instead,{/* */}{" "}
                        <strong className="text-slate-12 font-normal">we take initiative</strong>,
                        find creative ways around it, and send a pull request to solve it. Remember
                        -{/* */}{" "}
                        <strong className="text-slate-12 font-normal">
                          no problem is too small
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MarqueeDemo />

          <section className="relative mx-auto rounded-3xl px-6 py-12 pt-24 text-center sm:py-24">
            <h2 className="font-book font-styling font-display text-slate-12 relative z-20 mb-4 text-[2.25rem] leading-[130%] tracking-tight">
              We're hiring
            </h2>
            <p className="sans text-slate-11 mx-auto mb-6 max-w-[760px] text-base font-normal md:text-[1.125rem] md:leading-[1.5]">
              We're creating something special here, and we're looking <br />
              for people who care deeply about quality to build it with us.
            </p>
            <a
              className="inline-flex h-10 select-none items-center justify-center gap-0 rounded-full border bg-white pl-4 pr-2 text-sm font-semibold text-black transition duration-200 ease-in-out hover:bg-white/90 focus-visible:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-white"
              href="/careers#open-positions"
            >
              See open positions
              <span className="text-[#70757E]">
                <svg
                  fill="none"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </a>
          </section>
          <div className="my-24">
            <h2 className="font-book font-styling font-display text-slate-12 relative z-20 mb-4 text-[2.25rem] leading-[130%] tracking-tight">
              From our blog
            </h2>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
              <li className="">
                <a href="/blog/resend-raises-3m-seed-round">
                  <div className="space-y-2">
                    <img
                      alt="Resend raises $3M"
                      loading="lazy"
                      width={395}
                      height={208}
                      decoding="async"
                      data-nimg={1}
                      className="border-slate-6 col-span-2 w-full rounded border object-cover lg:rounded-md"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2Fstatic%2Fposts%2Fresend-raises-3m.jpg&w=640&q=75 1x, /_next/image?url=%2Fstatic%2Fposts%2Fresend-raises-3m.jpg&w=828&q=75 2x"
                      src="/_next/image?url=%2Fstatic%2Fposts%2Fresend-raises-3m.jpg&w=828&q=75"
                    />
                    <div className="col-span-2">
                      <h2 className="font-book font-styling font-display text-slate-12 mt-4 line-clamp-5 text-balance text-[28px] text-xl leading-[130%] leading-tight">
                        Resend raises $3M
                      </h2>
                      <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                        <div className="flex gap-1">
                          <p className="text-slate-11 text-sm font-normal">
                            <time dateTime="2023-07-18">Jul 18, 2023</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/blog/y-combinator">
                  <div className="space-y-2">
                    <img
                      alt="Resend + Y Combinator"
                      loading="lazy"
                      width={395}
                      height={208}
                      decoding="async"
                      data-nimg={1}
                      className="border-slate-6 col-span-2 w-full rounded border object-cover lg:rounded-md"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2Fstatic%2Fposts%2Fy-combinator.jpg&w=640&q=75 1x, /_next/image?url=%2Fstatic%2Fposts%2Fy-combinator.jpg&w=828&q=75 2x"
                      src="/_next/image?url=%2Fstatic%2Fposts%2Fy-combinator.jpg&w=828&q=75"
                    />
                    <div className="col-span-2">
                      <h2 className="font-book font-styling font-display text-slate-12 mt-4 line-clamp-5 text-balance text-[28px] text-xl leading-[130%] leading-tight">
                        Resend + Y Combinator
                      </h2>
                      <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                        <div className="flex gap-1">
                          <p className="text-slate-11 text-sm font-normal">
                            <time dateTime="2023-02-01">Feb 1, 2023</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className>
                <a href="/blog/introducing-resend">
                  <div className="space-y-2">
                    <img
                      alt="Introducing Resend"
                      loading="lazy"
                      width={395}
                      height={208}
                      decoding="async"
                      data-nimg={1}
                      className="border-slate-6 col-span-2 w-full rounded border object-cover lg:rounded-md"
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=%2Fstatic%2Fposts%2Fintroducing-resend.jpg&w=640&q=75 1x, /_next/image?url=%2Fstatic%2Fposts%2Fintroducing-resend.jpg&w=828&q=75 2x"
                      src="/_next/image?url=%2Fstatic%2Fposts%2Fintroducing-resend.jpg&w=828&q=75"
                    />
                    <div className="col-span-2">
                      <h2 className="font-book font-styling font-display text-slate-12 mt-4 line-clamp-5 text-balance text-[28px] text-xl leading-[130%] leading-tight">
                        Introducing Resend
                      </h2>
                      <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                        <div className="flex gap-1">
                          <p className="text-slate-11 text-sm font-normal">
                            <time dateTime="2023-01-04">Jan 4, 2023</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
