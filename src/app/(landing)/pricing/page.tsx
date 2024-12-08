import Image from "next/image";
import React from "react";
import { FaqPage } from "../_components/faq";

const PricingPage = () => {
  return (
    <>
      <div className="page_backgroundContainer__kjrFM">
        <Image
          alt=""
          width={2000}
          height={108}
          quality={100}
          className="page_backgroundImg__VyYYX"
          style={{ color: "transparent" }}
          src="/e.png"
        />
      </div>
      <div className="page_hero__eNwjd">
        <h1>Level up with Raycast Pro.</h1>
        <h2>Use the core product for free, forever.</h2>
      </div>
      <div className="page_pricingContainer__HJlY_">
        <div>
          <div id="pricing" className="Pricing_pricingPlaceholder__ZuRIi" />
          <div className="Pricing_selectorContainer__iiXNa">
            <div className="Pricing_selector__Gl4OR">
              <div className="Pricing_selectorItem__SMxw7">
                <label>
                  <input type="radio" name="pricing" />
                  Monthly
                </label>
              </div>
              <div className="Pricing_selectorItem__SMxw7 Pricing_checked__ivAw4">
                <label>
                  <input type="radio" defaultChecked name="pricing" />
                  Yearly<div className="Pricing_discount___AXaN">-20%</div>
                </label>
              </div>
              <div className="Pricing_selectedBackdrop__XrvdF Pricing_year__TIyI4" />
            </div>
          </div>
          <div>
            <div className="Pricing_pricing__SqoBP">
              <div className="Pricing_freePlan__VoZIC Pricing_plan__e_iXj">
                <div className="Pricing_planHead__NqgJE">
                  <div className="Pricing_planTitle__N73eW">
                    <strong>Raycast</strong>
                    <span>Free, forever.</span>
                  </div>
                </div>
                <div className="Pricing_perMonth__gfEr4">
                  <span className="Pricing_price__D4WoW">$0</span>/ month
                </div>
                <div className="Pricing_annualPrice__cxibQ" />
                <div className="Pricing_benefits__JMaZ_">
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    <div>
                      Core features, including:
                      <span>
                        Clipboard History, Quicklinks, Calculator, Snippets, Emoji Picker, Window
                        Management + many more...
                      </span>
                    </div>
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Thousands of extensions
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Custom Extensions
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Developer Tooling
                  </div>
                </div>
                <div className="Pricing_planFooter__fhXjE">
                  <a className="Button_button__JJiqJ Button_light__KdYEB" aria-disabled="false">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
              <div className="Pricing_proPlan__SNtDv Pricing_plan__e_iXj">
                <div className="Pricing_planHead__NqgJE">
                  <div className="Pricing_planTitle__N73eW">
                    <strong>Raycast Pro</strong>
                    <span>AI at your fingertips</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 54 54"
                    width={58}
                    style={{ margin: "-9px" }}
                  >
                    <g filter="url(#check-rossette_svg__a)">
                      <path
                        fill="#A2DFFD"
                        fillRule="evenodd"
                        d="m33.121 12.082-1.648-1.764a6.125 6.125 0 0 0-8.95 0l-1.648 1.764a.13.13 0 0 1-.095.04l-2.413-.082a6.125 6.125 0 0 0-6.328 6.328l.082 2.412a.13.13 0 0 1-.04.096l-1.763 1.648a6.125 6.125 0 0 0 0 8.95l1.763 1.648c.026.025.04.06.04.095l-.082 2.413a6.125 6.125 0 0 0 6.328 6.328l2.413-.081a.13.13 0 0 1 .095.04l1.648 1.762a6.125 6.125 0 0 0 8.95 0l1.648-1.763a.13.13 0 0 1 .096-.04l2.412.082a6.125 6.125 0 0 0 6.328-6.328l-.081-2.413a.13.13 0 0 1 .04-.095l1.763-1.648a6.125 6.125 0 0 0 0-8.95l-1.764-1.648a.13.13 0 0 1-.04-.096l.082-2.412a6.125 6.125 0 0 0-6.328-6.328l-2.412.081a.13.13 0 0 1-.096-.04m-8.406.285a3.125 3.125 0 0 1 4.566 0l1.648 1.763a3.13 3.13 0 0 0 2.389.99l2.412-.082a3.125 3.125 0 0 1 3.23 3.229l-.083 2.412c-.03.902.33 1.773.99 2.389l1.763 1.648a3.125 3.125 0 0 1 0 4.566l-1.763 1.648a3.13 3.13 0 0 0-.99 2.389l.082 2.412a3.125 3.125 0 0 1-3.229 3.229l-2.412-.082a3.13 3.13 0 0 0-2.389.99l-1.648 1.763a3.125 3.125 0 0 1-4.566 0l-1.648-1.763a3.13 3.13 0 0 0-2.389-.99l-2.412.082a3.125 3.125 0 0 1-3.229-3.229l.082-2.412a3.13 3.13 0 0 0-.99-2.389l-1.763-1.648a3.125 3.125 0 0 1 0-4.566l1.763-1.648a3.13 3.13 0 0 0 .99-2.389l-.082-2.412a3.125 3.125 0 0 1 3.229-3.229l2.412.082c.902.03 1.773-.33 2.389-.99zm5.558 9.24a1.5 1.5 0 0 1 2.204 2.036h-.002l-.007.01-.035.037-.14.158c-.124.14-.306.348-.53.615a40 40 0 0 0-1.723 2.205c-1.339 1.845-2.788 4.188-3.484 6.406a1.5 1.5 0 0 1-2.492.611l-3.75-3.75a1.5 1.5 0 1 1 2.121-2.12l2.135 2.134c.88-1.884 2.033-3.652 3.043-5.043a43 43 0 0 1 2.433-3.046l.163-.183.045-.05.013-.014z"
                        clipRule="evenodd"
                        style={
                          {
                            fill: "color(display-p3 0.6363 0.874 0.9917)",
                            "fill-opacity": "1",
                          } as React.CSSProperties
                        }
                      />
                    </g>
                    <defs>
                      <filter
                        id="check-rossette_svg__a"
                        width="52.672"
                        height="52.672"
                        x="0.662"
                        y="0.663"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.856" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.388235 0 0 0 0 0.8 0 0 0 0 1 0 0 0 0.71 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2739_27959" />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2739_27959"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="shape"
                          mode="overlay"
                          result="effect2_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect2_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect3_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="effect3_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect4_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect4_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect5_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect5_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect6_innerShadow_2739_27959"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="Pricing_perMonth__gfEr4">
                  <span className="Pricing_price__D4WoW">$8</span>/ month
                </div>
                <div className="Pricing_annualPrice__cxibQ">
                  <span>$96 billed annually</span>
                </div>
                <div className="Pricing_benefits__JMaZ_">
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Raycast AI
                    <a className="Pricing_aiModelInfo__ffM__" data-state="closed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        width={16}
                      >
                        <circle
                          cx={8}
                          cy={8}
                          r="6.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 8v3"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Cloud Sync
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Custom Themes
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Unlimited Clipboard History
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Translator
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Custom Window Management Commands
                  </div>
                  <div className="Pricing_more__VeJel">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <circle cx={8} cy={8} r="1.5" fill="currentColor" />
                      <circle cx="12.5" cy={8} r="1.5" fill="currentColor" />
                      <circle cx="3.5" cy={8} r="1.5" fill="currentColor" />
                    </svg>
                    More coming soon
                  </div>
                </div>
                <div className="Pricing_planFooter__fhXjE">
                  <label className="IncludeBetterAI_container__cH8TK">
                    <input className="Checkbox_input__VCftU" type="checkbox" />
                    <div className="Checkbox_checkbox__b4eA_">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.94446 5.76604L4.8928 8.04165L8.3889 3.95831"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="IncludeBetterAI_main__VMO2I">
                      Advanced AI
                      <a className="IncludeBetterAI_aiModelInfo__vaA_4" data-state="closed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          width={16}
                        >
                          <circle
                            cx={8}
                            cy={8}
                            r="6.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 8v3"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                          />
                        </svg>
                      </a>
                    </span>
                    <span className="IncludeBetterAI_sub__RU6bN">+$8/month</span>
                  </label>
                  <a
                    className="Button_button__JJiqJ Button_light__KdYEB"
                    aria-disabled="false"
                    href="/upgrade/trial?subscriptionInterval=year"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7.086 2.146a1.25 1.25 0 0 1 1.827 0l.659.706c.246.264.595.408.955.396l.965-.033a1.25 1.25 0 0 1 1.292 1.292l-.033.964c-.012.361.132.71.396.956l.705.66a1.25 1.25 0 0 1 0 1.826l-.705.659a1.25 1.25 0 0 0-.396.955l.033.965a1.25 1.25 0 0 1-1.292 1.292l-.965-.033a1.25 1.25 0 0 0-.955.396l-.66.705a1.25 1.25 0 0 1-1.826 0l-.66-.705a1.25 1.25 0 0 0-.955-.396l-.965.033a1.25 1.25 0 0 1-1.291-1.292l.033-.965a1.25 1.25 0 0 0-.396-.955l-.706-.66a1.25 1.25 0 0 1 0-1.826l.706-.66a1.25 1.25 0 0 0 .396-.955l-.033-.965a1.25 1.25 0 0 1 1.292-1.291l.964.033c.361.012.71-.133.956-.396l.66-.706Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.75 6.25s-1.885 2.04-2.5 4l-1.5-1.5"
                      />
                    </svg>
                    Start Free Trial
                  </a>
                </div>
              </div>
              <div className="Pricing_teamPlan__zXWgU Pricing_plan__e_iXj">
                <div className="Pricing_planHead__NqgJE">
                  <div className="Pricing_planTitle__N73eW">
                    <strong>Team Pro</strong>
                    <span>AI for your whole team</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 54 54"
                    width={58}
                    style={{ margin: "-9px" }}
                  >
                    <g filter="url(#check-rosette-team_svg__a)">
                      <path
                        fill="#96B3FF"
                        fillRule="evenodd"
                        d="m33.121 12.082-1.648-1.764a6.125 6.125 0 0 0-8.95 0l-1.648 1.764a.13.13 0 0 1-.095.04l-2.413-.082a6.125 6.125 0 0 0-6.328 6.328l.082 2.412a.13.13 0 0 1-.04.096l-1.763 1.648a6.125 6.125 0 0 0 0 8.95l1.763 1.648c.026.025.04.06.04.095l-.082 2.413a6.125 6.125 0 0 0 6.328 6.328l2.413-.081a.13.13 0 0 1 .095.04l1.648 1.762a6.125 6.125 0 0 0 8.95 0l1.648-1.763a.13.13 0 0 1 .096-.04l2.412.082a6.125 6.125 0 0 0 6.328-6.328l-.081-2.413a.13.13 0 0 1 .04-.095l1.763-1.648a6.125 6.125 0 0 0 0-8.95l-1.764-1.648a.13.13 0 0 1-.04-.096l.082-2.412a6.125 6.125 0 0 0-6.328-6.328l-2.412.081a.13.13 0 0 1-.096-.04m-8.406.285a3.125 3.125 0 0 1 4.566 0l1.648 1.763a3.13 3.13 0 0 0 2.389.99l2.412-.082a3.125 3.125 0 0 1 3.23 3.229l-.083 2.412c-.03.902.33 1.773.99 2.389l1.763 1.648a3.125 3.125 0 0 1 0 4.566l-1.763 1.648a3.13 3.13 0 0 0-.99 2.389l.082 2.412a3.125 3.125 0 0 1-3.229 3.229l-2.412-.082a3.13 3.13 0 0 0-2.389.99l-1.648 1.763a3.125 3.125 0 0 1-4.566 0l-1.648-1.763a3.13 3.13 0 0 0-2.389-.99l-2.412.082a3.125 3.125 0 0 1-3.229-3.229l.082-2.412a3.13 3.13 0 0 0-.99-2.389l-1.763-1.648a3.125 3.125 0 0 1 0-4.566l1.763-1.648a3.13 3.13 0 0 0 .99-2.389l-.082-2.412a3.125 3.125 0 0 1 3.229-3.229l2.412.082c.902.03 1.773-.33 2.389-.99zm5.558 9.24a1.5 1.5 0 0 1 2.204 2.036h-.002l-.007.01-.035.037-.14.158c-.124.14-.306.348-.53.615a40 40 0 0 0-1.723 2.205c-1.339 1.845-2.788 4.188-3.484 6.406a1.5 1.5 0 0 1-2.492.611l-3.75-3.75a1.5 1.5 0 1 1 2.121-2.12l2.135 2.134c.88-1.884 2.033-3.652 3.043-5.043a43 43 0 0 1 2.433-3.046l.163-.183.045-.05.013-.014z"
                        clipRule="evenodd"
                        style={
                          {
                            fill: "color(display-p3 0.5882 0.702 1)",
                            "fill-opacity": "1",
                          } as React.CSSProperties
                        }
                      />
                    </g>
                    <defs>
                      <filter
                        id="check-rosette-team_svg__a"
                        width="52.672"
                        height="52.672"
                        x="0.662"
                        y="0.663"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.856" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.588235 0 0 0 0 0.701961 0 0 0 0 1 0 0 0 0.71 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2739_27975" />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2739_27975"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="shape"
                          mode="overlay"
                          result="effect2_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect2_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect3_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="effect3_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect4_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect4_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect5_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect5_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect6_innerShadow_2739_27975"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="Pricing_perMonth__gfEr4">
                  <span className="Pricing_price__D4WoW">$12</span>
                  <div>
                    <span>/ month</span>
                    <span>/ user</span>
                  </div>
                </div>
                <div className="Pricing_annualPrice__cxibQ">
                  <span>$144 billed annually</span>
                </div>
                <div className="Pricing_benefits__JMaZ_">
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Everything in Pro
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Unlimited Shared Commands
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Unlimited Shared Snippets
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Unlimited Shared Quicklinks
                  </div>
                  <div className="Pricing_benefit__SZFdq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                      />
                    </svg>
                    Unlimited Team Members
                  </div>
                  <div className="Pricing_more__VeJel">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <circle cx={8} cy={8} r="1.5" fill="currentColor" />
                      <circle cx="12.5" cy={8} r="1.5" fill="currentColor" />
                      <circle cx="3.5" cy={8} r="1.5" fill="currentColor" />
                    </svg>
                    More coming soon
                  </div>
                </div>
                <div className="Pricing_planFooter__fhXjE">
                  <label className="IncludeBetterAI_container__cH8TK">
                    <input className="Checkbox_input__VCftU" type="checkbox" />
                    <div className="Checkbox_checkbox__b4eA_">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.94446 5.76604L4.8928 8.04165L8.3889 3.95831"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="IncludeBetterAI_main__VMO2I">
                      Advanced AI
                      <a className="IncludeBetterAI_aiModelInfo__vaA_4" data-state="closed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          width={16}
                        >
                          <circle
                            cx={8}
                            cy={8}
                            r="6.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 8v3"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                          />
                        </svg>
                      </a>
                    </span>
                    <span className="IncludeBetterAI_sub__RU6bN">+$8/month</span>
                  </label>
                  <a
                    className="Button_button__JJiqJ Button_light__KdYEB"
                    aria-disabled="false"
                    href="/settings/organizations/new?open=true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7.086 2.146a1.25 1.25 0 0 1 1.827 0l.659.706c.246.264.595.408.955.396l.965-.033a1.25 1.25 0 0 1 1.292 1.292l-.033.964c-.012.361.132.71.396.956l.705.66a1.25 1.25 0 0 1 0 1.826l-.705.659a1.25 1.25 0 0 0-.396.955l.033.965a1.25 1.25 0 0 1-1.292 1.292l-.965-.033a1.25 1.25 0 0 0-.955.396l-.66.705a1.25 1.25 0 0 1-1.826 0l-.66-.705a1.25 1.25 0 0 0-.955-.396l-.965.033a1.25 1.25 0 0 1-1.291-1.292l.033-.965a1.25 1.25 0 0 0-.396-.955l-.706-.66a1.25 1.25 0 0 1 0-1.826l.706-.66a1.25 1.25 0 0 0 .396-.955l-.033-.965a1.25 1.25 0 0 1 1.292-1.291l.964.033c.361.012.71-.133.956-.396l.66-.706Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.75 6.25s-1.885 2.04-2.5 4l-1.5-1.5"
                      />
                    </svg>
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page_moreAboutPro__VMh9f">
          <div className="page_imgContainer__gL1wD">
            <img
              alt="Rosette icon with checkmark"
              loading="lazy"
              width={102}
              height={103}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/pro.png"
            />
          </div>
          <a className="ArrowLink_link__WKebC ArrowLink_right__JqBQt" href="/pro">
            More about Pro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="ArrowLink_svg__F9BZP"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="">
        <div className="PricingTable_container__Xj16T">
          <div className="PricingTable_table__zE6rd">
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableHead__YLgS1" />
              <div className="PricingTable_tableHead__YLgS1">
                <div className="PricingTable_headWrapper__XSFgG">Free</div>
              </div>
              <div className="PricingTable_tableHead__YLgS1">
                <div className="PricingTable_headWrapper__XSFgG">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 54">
                    <g filter="url(#check-rossette_svg__a)">
                      <path
                        fill="#A2DFFD"
                        fillRule="evenodd"
                        d="m33.121 12.082-1.648-1.764a6.125 6.125 0 0 0-8.95 0l-1.648 1.764a.13.13 0 0 1-.095.04l-2.413-.082a6.125 6.125 0 0 0-6.328 6.328l.082 2.412a.13.13 0 0 1-.04.096l-1.763 1.648a6.125 6.125 0 0 0 0 8.95l1.763 1.648c.026.025.04.06.04.095l-.082 2.413a6.125 6.125 0 0 0 6.328 6.328l2.413-.081a.13.13 0 0 1 .095.04l1.648 1.762a6.125 6.125 0 0 0 8.95 0l1.648-1.763a.13.13 0 0 1 .096-.04l2.412.082a6.125 6.125 0 0 0 6.328-6.328l-.081-2.413a.13.13 0 0 1 .04-.095l1.763-1.648a6.125 6.125 0 0 0 0-8.95l-1.764-1.648a.13.13 0 0 1-.04-.096l.082-2.412a6.125 6.125 0 0 0-6.328-6.328l-2.412.081a.13.13 0 0 1-.096-.04m-8.406.285a3.125 3.125 0 0 1 4.566 0l1.648 1.763a3.13 3.13 0 0 0 2.389.99l2.412-.082a3.125 3.125 0 0 1 3.23 3.229l-.083 2.412c-.03.902.33 1.773.99 2.389l1.763 1.648a3.125 3.125 0 0 1 0 4.566l-1.763 1.648a3.13 3.13 0 0 0-.99 2.389l.082 2.412a3.125 3.125 0 0 1-3.229 3.229l-2.412-.082a3.13 3.13 0 0 0-2.389.99l-1.648 1.763a3.125 3.125 0 0 1-4.566 0l-1.648-1.763a3.13 3.13 0 0 0-2.389-.99l-2.412.082a3.125 3.125 0 0 1-3.229-3.229l.082-2.412a3.13 3.13 0 0 0-.99-2.389l-1.763-1.648a3.125 3.125 0 0 1 0-4.566l1.763-1.648a3.13 3.13 0 0 0 .99-2.389l-.082-2.412a3.125 3.125 0 0 1 3.229-3.229l2.412.082c.902.03 1.773-.33 2.389-.99zm5.558 9.24a1.5 1.5 0 0 1 2.204 2.036h-.002l-.007.01-.035.037-.14.158c-.124.14-.306.348-.53.615a40 40 0 0 0-1.723 2.205c-1.339 1.845-2.788 4.188-3.484 6.406a1.5 1.5 0 0 1-2.492.611l-3.75-3.75a1.5 1.5 0 1 1 2.121-2.12l2.135 2.134c.88-1.884 2.033-3.652 3.043-5.043a43 43 0 0 1 2.433-3.046l.163-.183.045-.05.013-.014z"
                        clipRule="evenodd"
                        style={
                          {
                            fill: "color(display-p3 0.6363 0.874 0.9917)",
                            "fill-opacity": "1",
                          } as React.CSSProperties
                        }
                      />
                    </g>
                    <defs>
                      <filter
                        id="check-rossette_svg__a"
                        width="52.672"
                        height="52.672"
                        x="0.662"
                        y="0.663"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.856" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.388235 0 0 0 0 0.8 0 0 0 0 1 0 0 0 0.71 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2739_27959" />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2739_27959"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="shape"
                          mode="overlay"
                          result="effect2_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect2_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect3_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="effect3_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect4_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect4_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect5_innerShadow_2739_27959"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect5_innerShadow_2739_27959"
                          mode="overlay"
                          result="effect6_innerShadow_2739_27959"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Pro
                </div>
              </div>
              <div className="PricingTable_tableHead__YLgS1">
                <div className="PricingTable_headWrapper__XSFgG">Team</div>
              </div>
              <div className="PricingTable_tableHead__YLgS1">
                <div className="PricingTable_headWrapper__XSFgG">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 54">
                    <g filter="url(#check-rosette-team_svg__a)">
                      <path
                        fill="#96B3FF"
                        fillRule="evenodd"
                        d="m33.121 12.082-1.648-1.764a6.125 6.125 0 0 0-8.95 0l-1.648 1.764a.13.13 0 0 1-.095.04l-2.413-.082a6.125 6.125 0 0 0-6.328 6.328l.082 2.412a.13.13 0 0 1-.04.096l-1.763 1.648a6.125 6.125 0 0 0 0 8.95l1.763 1.648c.026.025.04.06.04.095l-.082 2.413a6.125 6.125 0 0 0 6.328 6.328l2.413-.081a.13.13 0 0 1 .095.04l1.648 1.762a6.125 6.125 0 0 0 8.95 0l1.648-1.763a.13.13 0 0 1 .096-.04l2.412.082a6.125 6.125 0 0 0 6.328-6.328l-.081-2.413a.13.13 0 0 1 .04-.095l1.763-1.648a6.125 6.125 0 0 0 0-8.95l-1.764-1.648a.13.13 0 0 1-.04-.096l.082-2.412a6.125 6.125 0 0 0-6.328-6.328l-2.412.081a.13.13 0 0 1-.096-.04m-8.406.285a3.125 3.125 0 0 1 4.566 0l1.648 1.763a3.13 3.13 0 0 0 2.389.99l2.412-.082a3.125 3.125 0 0 1 3.23 3.229l-.083 2.412c-.03.902.33 1.773.99 2.389l1.763 1.648a3.125 3.125 0 0 1 0 4.566l-1.763 1.648a3.13 3.13 0 0 0-.99 2.389l.082 2.412a3.125 3.125 0 0 1-3.229 3.229l-2.412-.082a3.13 3.13 0 0 0-2.389.99l-1.648 1.763a3.125 3.125 0 0 1-4.566 0l-1.648-1.763a3.13 3.13 0 0 0-2.389-.99l-2.412.082a3.125 3.125 0 0 1-3.229-3.229l.082-2.412a3.13 3.13 0 0 0-.99-2.389l-1.763-1.648a3.125 3.125 0 0 1 0-4.566l1.763-1.648a3.13 3.13 0 0 0 .99-2.389l-.082-2.412a3.125 3.125 0 0 1 3.229-3.229l2.412.082c.902.03 1.773-.33 2.389-.99zm5.558 9.24a1.5 1.5 0 0 1 2.204 2.036h-.002l-.007.01-.035.037-.14.158c-.124.14-.306.348-.53.615a40 40 0 0 0-1.723 2.205c-1.339 1.845-2.788 4.188-3.484 6.406a1.5 1.5 0 0 1-2.492.611l-3.75-3.75a1.5 1.5 0 1 1 2.121-2.12l2.135 2.134c.88-1.884 2.033-3.652 3.043-5.043a43 43 0 0 1 2.433-3.046l.163-.183.045-.05.013-.014z"
                        clipRule="evenodd"
                        style={
                          {
                            fill: "color(display-p3 0.5882 0.702 1)",
                            "fill-opacity": "1",
                          } as React.CSSProperties
                        }
                      />
                    </g>
                    <defs>
                      <filter
                        id="check-rosette-team_svg__a"
                        width="52.672"
                        height="52.672"
                        x="0.662"
                        y="0.663"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.856" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.588235 0 0 0 0 0.701961 0 0 0 0 1 0 0 0 0.71 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2739_27975" />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2739_27975"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="shape"
                          mode="overlay"
                          result="effect2_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect2_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect3_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.964" />
                        <feGaussianBlur stdDeviation="1.928" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                        <feBlend
                          in2="effect3_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect4_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect4_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect5_innerShadow_2739_27975"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="0.89" />
                        <feGaussianBlur stdDeviation="0.482" />
                        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend
                          in2="effect5_innerShadow_2739_27975"
                          mode="overlay"
                          result="effect6_innerShadow_2739_27975"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Team Pro
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  Core features<span className="PricingTable_noMobile__iyVlW">, including: </span>
                  <span className="PricingTable_faded__mJkYu PricingTable_noMobile__iyVlW">
                    Clipboard History, Quicklinks, Calculator, Snippets, Window Management + more
                  </span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Thousands of extensions</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Custom Extensions</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Developer Tooling</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Clipboard History Size</div>
                <span
                  className="PricingTable_tooltipAnchor__7aDUk"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r1:"
                  data-state="closed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.5 6.25v0c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75v.125c0 1.036-.84 1.875-1.875 1.875H8V9"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 11.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    />
                    <circle
                      cx={8}
                      cy={8}
                      r="6.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">3 months</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">3 months</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Raycast AI</div>
                <span
                  className="PricingTable_tooltipAnchor__7aDUk"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r2:"
                  data-state="closed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.5 6.25v0c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75v.125c0 1.036-.84 1.875-1.875 1.875H8V9"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 11.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    />
                    <circle
                      cx={8}
                      cy={8}
                      r="6.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Advanced AI Add-on</div>
                <span
                  className="PricingTable_tooltipAnchor__7aDUk"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r3:"
                  data-state="closed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.5 6.25v0c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75v.125c0 1.036-.84 1.875-1.875 1.875H8V9"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 11.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    />
                    <circle
                      cx={8}
                      cy={8}
                      r="6.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  + $8 <span className="PricingTable_faded__mJkYu">/ month</span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  + $8 <span className="PricingTable_faded__mJkYu">/ user / month</span>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Cloud Sync</div>
                <span
                  className="PricingTable_tooltipAnchor__7aDUk"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r4:"
                  data-state="closed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.5 6.25v0c0-.966.784-1.75 1.75-1.75v0c.966 0 1.75.784 1.75 1.75v.125c0 1.036-.84 1.875-1.875 1.875H8V9"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 11.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    />
                    <circle
                      cx={8}
                      cy={8}
                      r="6.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Custom Themes</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Translator</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  Custom Window Management Commands
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m4 8 2.5 4c1-3.5 3-5.5 5.5-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Team Members</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Shared Commands</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Up to 5</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Shared Quicklinks</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Up to 30</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Shared Snippets</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="PricingTable_faded__mJkYu"
                  >
                    <path fill="currentColor" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Up to 30</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Unlimited</div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Monthly Subscription</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Free, Forever.</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  $10 <span className="PricingTable_faded__mJkYu">/ month</span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  $0 <span className="PricingTable_faded__mJkYu">/ user / month</span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  $15 <span className="PricingTable_faded__mJkYu">/ user / month</span>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <span
                    style={{
                      display: "flex",
                      gap: "var(--spacing-1)",
                      "-webkit-align-items": "center",
                      "-webkit-box-align": "center",
                      "-ms-flex-align": "center",
                      "align-items": "center",
                    }}
                  >
                    Annual Subscription <span className="PricingTable_badge___FXOl">-20%</span>
                  </span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">Free, Forever.</div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  $8 <span className="PricingTable_faded__mJkYu">/ month</span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  $0 <span className="PricingTable_faded__mJkYu">/ user / month</span>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  $12 <span className="PricingTable_faded__mJkYu">/ user / month</span>
                </div>
              </div>
            </div>
            <div className="PricingTable_row__NSHkZ">
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi" />
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <a
                    className="Button_button__JJiqJ Button_light__KdYEB PricingTable_cta__Xn9Me"
                    aria-disabled="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <button
                    className="Button_button__JJiqJ Button_light__KdYEB PricingTable_cta__Xn9Me"
                    aria-disabled="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7.086 2.146a1.25 1.25 0 0 1 1.827 0l.659.706c.246.264.595.408.955.396l.965-.033a1.25 1.25 0 0 1 1.292 1.292l-.033.964c-.012.361.132.71.396.956l.705.66a1.25 1.25 0 0 1 0 1.826l-.705.659a1.25 1.25 0 0 0-.396.955l.033.965a1.25 1.25 0 0 1-1.292 1.292l-.965-.033a1.25 1.25 0 0 0-.955.396l-.66.705a1.25 1.25 0 0 1-1.826 0l-.66-.705a1.25 1.25 0 0 0-.955-.396l-.965.033a1.25 1.25 0 0 1-1.291-1.292l.033-.965a1.25 1.25 0 0 0-.396-.955l-.706-.66a1.25 1.25 0 0 1 0-1.826l.706-.66a1.25 1.25 0 0 0 .396-.955l-.033-.965a1.25 1.25 0 0 1 1.292-1.291l.964.033c.361.012.71-.133.956-.396l.66-.706Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.75 6.25s-1.885 2.04-2.5 4l-1.5-1.5"
                      />
                    </svg>{" "}
                    Select Plan
                  </button>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <a
                    className="Button_button__JJiqJ Button_light__KdYEB PricingTable_cta__Xn9Me"
                    aria-disabled="false"
                    href="raycast://organization/create"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 6.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7.5 3.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM10.25 10.75c-1.716 0-3.127.356-3.75 1.75-.447 1 .231 1.75 1.075 1.75h5.35c.844 0 1.522-.75 1.075-1.75-.623-1.394-2.034-1.75-3.75-1.75ZM6 7.755a5.931 5.931 0 0 0-.25-.005c-1.715 0-3.127.356-3.75 1.75-.337.753 0 1.75 1.075 1.75H4.25"
                      />
                    </svg>{" "}
                    Create Organization
                  </a>
                </div>
              </div>
              <div className="PricingTable_tableCell__yP2h4">
                <div className="PricingTable_cellContent__nOSJi">
                  <button
                    className="Button_button__JJiqJ Button_light__KdYEB PricingTable_cta__Xn9Me"
                    aria-disabled="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 6.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7.5 3.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM10.25 10.75c-1.716 0-3.127.356-3.75 1.75-.447 1 .231 1.75 1.075 1.75h5.35c.844 0 1.522-.75 1.075-1.75-.623-1.394-2.034-1.75-3.75-1.75ZM6 7.755a5.931 5.931 0 0 0-.25-.005c-1.715 0-3.127.356-3.75 1.75-.337.753 0 1.75 1.075 1.75H4.25"
                      />
                    </svg>{" "}
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FaqPage />
    </>
  );
};

export default PricingPage;
