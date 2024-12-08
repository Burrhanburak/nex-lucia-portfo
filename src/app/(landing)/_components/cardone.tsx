import React from "react";
import { cn } from "@/lib/utils";

import DotPattern from "@/components/magicui/dot-pattern";
import TypingAnimation from "@/components/magicui/typing-animation";
const Cardone = () => {
  return (
    <>
      <div className="page_sectionContainer__86OJv">
        <div className="Automation_container__39AlV">
          <div className="SectionTitle_container__qvIRZ Automation_sectionTitle__n4J1x SectionTitle_center__tGgzU">
            <h3>Don't repeat yourself.</h3>
            <p>Automate the things you do all the time.</p>
          </div>
          <div className="Automation_grid__BVWWz">
            <div className="Automation_topWrapper__RXG71">
              <div className="Automation_backdrop__limde" />
              <div className="Automation_card__7Lygc">
                <div className="Automation_top__n4uSt">
                  <img
                    alt="Blue glass-effect visual backdrop"
                    loading="lazy"
                    width={800}
                    height={643}
                    decoding="async"
                    data-nimg={1}
                    className="Automation_snippetsBackdrop__cbpZV"
                    style={{ color: "transparent" }}
                    src="/dene.png"
                  />
                  <div className="Automation_description__gITAR">
                    <h5>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M11.75 2.75h1.5m-10.5 0h5.5m.5 10.5h4.5m-10.5 0h2.5m-2.5-3.5h4.5m3.5 0h2.5m-10.5-3.5h1.5m3.5 0h5.5"
                        />
                      </svg>
                      Snippets
                    </h5>
                    <p>
                      Tired of typing the same thing? Create a snippet and insert it by simply
                      typing its keyword.
                    </p>
                  </div>
                  <div className="SnippetsShowcase_snippetsShowcase__fglRC">
                    <div className="SnippetsShowcase_addressSnippet__76DsF">
                      {/* <TypingAnimation
                        className=" text-sm font-bold text-black dark:text-white"
                        text="3rd Floor 1 Ashley Road, WA14 2DT Altrincham, Cheshire"
                      /> */}
                      <p>Sure, here you go:</p>
                      <div style={{ position: "relative" }}>
                        <span className="SnippetsShowcase_completion__mpg86 SnippetsShowcase_completionVisible__lXU4o">
                          <TypingAnimation
                            className="SnippetsShowcase_completionText__iRrey text-sm font-bold text-black dark:text-white"
                            text="3rd Floor 1 Ashley Road, WA14 2DT Altrincham, Cheshire"
                          />

                          {/* <span className="SnippetsShowcase_cursor__3Cyq9"> </span> */}
                        </span>
                      </div>
                      <div className="SnippetsShowcase_controls__fR6_T">
                        <button
                          className="SnippetsShowcase_emojiPicker__94s1h"
                          data-state="restart"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                            data-restart="true"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M8.25 1.75 5.75 4m0 0 2.5 2.25M5.75 4H8c2.9 0 5.25 2.1 5.25 5a5.25 5.25 0 1 1-10.5 0"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                            data-emoji="true"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M5.75 9.5s.656 1.25 2.25 1.25c1.594 0 2.25-1.25 2.25-1.25m4-1.5a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                            />
                          </svg>
                        </button>
                        <button
                          className="Button_button__JJiqJ Button_light__KdYEB SnippetsShowcase_sendButton__QXTUE"
                          aria-disabled="false"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Automation_left__huWQf Automation_card__7Lygc">
              <img
                alt="Screenshot of Raycast showcasing the Figma Scratchad Quick Link"
                loading="lazy"
                width={582}
                height={208}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src={"/Card.png"}
              />
              <div className="Automation_description__gITAR">
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.25 7.75 2.539 9.654a2.692 2.692 0 1 0 3.807 3.807L8.25 11.75m3.5-3.5 1.711-1.904A2.692 2.692 0 1 0 9.654 2.54L7.75 4.25m-1 5 2.5-2.5"
                    />
                  </svg>
                  Quicklinks
                </h5>
                <p>Say goodbye to open tabs. Create quicklinks to launch anything from anywhere.</p>
              </div>
            </div>
            <div className="Automation_right__VtadU Automation_card__7Lygc">
              <img
                alt="Screenshot of Raycast showcasing the Figma Scratchad Quick Link"
                loading="lazy"
                width={582}
                height={208}
                decoding="async"
                data-nimg={1}
                src={"/4bs.png"}
                style={{ color: "transparent" }}
              />
              <div className="Automation_description__gITAR">
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 4.75v-3m0 3H3.75a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2H8Zm-2.25 6.5h4.5m-5.5-3h.5m2.5 0h.5m2.5 0h.5"
                    />
                  </svg>
                  Hotkeys and Aliases
                </h5>
                <p>
                  Speed up your workflow by assigning hotkeys or aliases to common commands or apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardone;
