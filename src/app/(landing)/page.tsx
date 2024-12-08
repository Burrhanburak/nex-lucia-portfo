import Link from "next/link";
import { type Metadata } from "next";
import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "./_components/copy-to-clipboard";
import {
  Drizzle,
  LuciaAuth,
  NextjsLight,
  NextjsDark,
  ReactJs,
  ShadcnUi,
  TRPC,
  TailwindCss,
  StripeLogo,
  ReactEmail,
} from "./_components/feature-icons";
import CardSpotlight from "./_components/hover-card";
import Image from "next/image";

import { FaqPage } from "./_components/faq";
import { Focus } from "lucide-react";
import Shape from "./_components/shape";
import Cardone from "./_components/cardone";
import TextReveal from "@/components/magicui/text-reveal";
import { SkıllPage } from "./_components/skıll";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import FeatureWall from "./_components/slide-card";

export const metadata: Metadata = {
  title: "Next.js Lucia Auth Starter Template",
  description:
    "A Next.js starter template with nextjs and Lucia auth. Includes drizzle, trpc, react-email, tailwindcss and shadcn-ui",
};

const githubUrl = "https://github.com/iamtouha/next-lucia-auth";

const features = [
  {
    name: "Next.js",
    description: "The React Framework for Production",
    logo: NextjsIcon,
  },
  {
    name: "React.js",
    description: "Server and client components.",
    logo: ReactJs,
  },
  {
    name: "Authentication",
    description: "Credential authentication with password reset and email validation",
    logo: LuciaAuth,
  },
  {
    name: "Database",
    description: "Drizzle with postgres database",
    logo: Drizzle,
  },
  {
    name: "TypeSafe Backend",
    description: "Preserve type safety from backend to frontend with tRPC",
    logo: TRPC,
  },
  {
    name: "Subscription",
    description: "Subscription with stripe",
    logo: StripeLogo,
  },
  {
    name: "Tailwindcss",
    description: "Simple and elegant UI components built with Tailwind CSS",
    logo: TailwindCss,
  },
  {
    name: "Shadcn UI",
    description: "A set of beautifully designed UI components for React",
    logo: ShadcnUi,
  },
  {
    name: "React Email",
    description: "Write emails in React with ease.",
    logo: ReactEmail,
  },
];

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="Hero_hero__HEhPP">
          <Image
            alt=""
            width={1917}
            height={817}
            decoding="async"
            data-nimg={1}
            className="Hero_heroBg__MXY8i"
            // src="/99.png"
            src="/98.png"
            //  src="/fr.png"
            style={{ color: "transparent" }}
          />

          <section className="mx-auto grid max-w-5xl flex-col items-center justify-center gap-4 py-10 text-center md:pb-[5rem] md:pt-[20rem]">
            <div className="p-4">
              <div className="w-full"></div>
              <div className="mb-10 flex items-center justify-center gap-3"></div>
              <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent text-white dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20  sm:text-5xl md:text-6xl lg:text-7xl">
                Dev FullStack
              </h1>
              <p className="mb-10 mt-4 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
                starter (password reset, email validation and oAuth). Includes Lucia, Drizzle, tRPC,
                Stripe, tailwindcss, shadcn-ui and react-email.
              </p>

              {/* <div className="flex justify-center gap-4">
                <Button size="lg" variant="outline" asChild>
                  <a href={githubUrl}>
                    <GitHubLogoIcon className="mr-1 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/login">Get Started</Link>
                </Button>
              </div> */}
            </div>
          </section>
          <div className="ComparePlans_comparePlans__bQFOY">
            <a
              className="Button_button__JJiqJ Button_light__KdYEB"
              aria-disabled="false"
              href="#pricing"
            >
              Compare Plans
            </a>
            <span>Starting at $8/month</span>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-2xl pt-20">
        <SkıllPage />
      </section>
      {/* 1 cards */}
      <Cardone />
      {/* card  */}

      {/* card 2d */}
      <div className="page_sectionContainer__78UYS">
        <div className="Automation_lostInTranslation__ym8Hd">
          <div className="Automation_illustration__pN1SX">
            <img
              alt=""
              loading="lazy"
              width={1856}
              height={810}
              decoding="async"
              data-nimg={1}
              src="/dash.png"
              style={{
                color: "transparent",
                maskImage: "linear-gradient(175deg, #d9d9d9 60%, hsl(7deg 0% 0% / 0%) 90%)",
              }}
            />
          </div>
          <div className="Automation_text__uMRmK">
            <div className="TitleSubtitle_titleContainer__kowRX TitleSubtitle_sm__vb492">
              <h2>Don’t get lost in translation.</h2>
              <h5>
                Quickly translate text on the fly, check pronunciation or dictate your own words.
              </h5>
            </div>
            <div className="Tag_tag__1AOB8">
              <span className="Tag_icon__InJ43">
                <img
                  alt=""
                  loading="lazy"
                  width={16}
                  height={17}
                  decoding="async"
                  data-nimg={1}
                  src="/pro.png"
                  style={{ color: "transparent" }}
                />
              </span>
              Translator
            </div>
          </div>
        </div>
        <div className="Automation_cards__agq8Q">
          <div className="Automation_card__u7eVB">
            <div className="Automation_graphic__4fTlm Automation_cloudSyncGraphic__xWaM9">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 419 221">
                <path stroke="#A485FF" d="M97.063 104H1v116h163V104h-14.012" />
                <path
                  fill="#A485FF"
                  d="M14 198h24v9H14zM14 185h24v9H14zM14 172h24v9H14zM42 198h24v9H42zM42 185h24v9H42z"
                />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M98.5 198.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M126 198h24v9h-24zM70 198h24v9H70z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M98.5 185.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M126 185h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M70.5 185.5h23v8h-23zM98.5 172.5h23v8h-23zM70.5 172.5h23v8h-23zM70.5 159.5h23v8h-23zM70.5 146.5h23v8h-23zM42.5 159.5h23v8h-23zM14.5 159.5h23v8h-23zM42.5 172.5h23v8h-23zM42.5 146.5h23v8h-23zM14.5 146.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M126 172h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M98.5 159.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M126 159h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M98.5 146.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M126 146h24v9h-24z" />
                <path stroke="#A485FF" d="M317.984 104H418v116H255V104h9.888" />
                <path
                  fill="#A485FF"
                  d="M268 198h24v9h-24zM268 185h24v9h-24zM268 172h24v9h-24zM296 198h24v9h-24zM296 185h24v9h-24z"
                />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M352.5 198.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M380 198h24v9h-24zM324 198h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M352.5 185.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M380 185h24v9h-24zM324 185h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M352.5 172.5h23v8h-23zM324.5 172.5h23v8h-23zM324.5 159.5h23v8h-23zM324.5 146.5h23v8h-23zM296.5 172.5h23v8h-23zM296.5 159.5h23v8h-23zM268.5 159.5h23v8h-23zM296.5 146.5h23v8h-23zM268.5 146.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M380 172h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M352.5 159.5h23v8h-23z"
                />
                <path fill="#A485FF" d="M380 159h24v9h-24z" />
                <path
                  fill="#6A3DEC"
                  fillOpacity="0.15"
                  stroke="#A485FF"
                  d="M352.5 146.5h23v8h-23zM380.5 146.5h23v8h-23z"
                />
                <path stroke="#A485FF" d="M73.16.5h276.679v29H73.16z" />
                <path
                  fill="#A485FF"
                  d="M169.468 21.08V10.76h3.624v1.056h-2.52v8.208h2.52v1.056zm12.16-3.828q-.252 1.38-1.056 2.16t-2.004.78q-1.044 0-1.8-.54t-1.152-1.536q-.384-.996-.384-2.364 0-1.38.384-2.376.396-1.008 1.152-1.548t1.8-.54q1.128 0 1.908.732.792.732 1.092 2.028l-1.248.084q-.228-.84-.684-1.272a1.47 1.47 0 0 0-1.08-.444q-.672 0-1.14.384t-.72 1.14q-.24.744-.24 1.812t.24 1.812q.252.732.72 1.116t1.14.384q.708 0 1.176-.48.468-.492.66-1.404zm1.539-5.772h1.176v8.028l-.684-.636h5.076V20h-5.568zm9.832 8.712q-.996 0-1.704-.54t-1.092-1.536q-.372-1.008-.372-2.364t.372-2.364q.384-1.02 1.092-1.56t1.704-.54 1.704.54 1.08 1.56q.384 1.008.384 2.364t-.384 2.364q-.372.996-1.08 1.536t-1.704.54m0-1.128a1.5 1.5 0 0 0 1.044-.396q.444-.396.66-1.14.228-.756.228-1.776 0-1.032-.228-1.788-.216-.756-.66-1.152a1.5 1.5 0 0 0-1.044-.396q-.612 0-1.056.396-.432.396-.66 1.152-.216.756-.216 1.788 0 1.02.216 1.776.228.744.66 1.14.444.396 1.056.396m10.179-2.052q0 1.476-.756 2.328t-2.124.852-2.124-.852-.756-2.328v-5.544h1.176v5.58q0 .972.432 1.5.432.516 1.272.516t1.272-.516q.432-.528.432-1.5v-5.58h1.176zm3.832-5.532q1.188 0 2.052.504.876.492 1.344 1.452t.468 2.316q0 1.344-.456 2.304a3.3 3.3 0 0 1-1.32 1.452q-.852.492-2.016.492h-2.232v-8.52zm0 7.392q1.272 0 1.944-.78.684-.792.684-2.34 0-1.56-.672-2.352t-1.956-.792h-.984v6.264zm13.339-1.692q.108.552.384.972.288.42.732.648.444.216 1.02.216.468 0 .828-.132.36-.144.552-.408a1.1 1.1 0 0 0 .204-.672q0-.6-.528-.996t-1.656-.708q-1.152-.3-1.86-.876-.708-.588-.708-1.548 0-.72.348-1.26t.96-.828a3.2 3.2 0 0 1 1.404-.3q.84 0 1.512.348t1.08.972q.42.624.504 1.416l-1.212.072a2.06 2.06 0 0 0-.336-.888 1.76 1.76 0 0 0-.672-.588 2 2 0 0 0-.9-.204q-.624 0-1.056.348t-.42.924q.012.432.276.72.264.276.648.432.384.144 1.044.324a.4.4 0 0 1 .108.024q1.2.336 1.932.972.744.624.744 1.548 0 .768-.408 1.32a2.5 2.5 0 0 1-1.056.84q-.648.276-1.404.276-.888 0-1.608-.36a3 3 0 0 1-1.164-1.008 3.2 3.2 0 0 1-.504-1.524zm7.395-5.7 1.764 3.708 1.752-3.708h1.32l-2.484 5.052V20h-1.176v-3.468l-2.496-5.052zm7.9 0 2.688 6.852V11.48h1.176V20h-1.668l-2.58-6.588V20h-1.176v-8.52zm11.679 5.772q-.252 1.38-1.056 2.16t-2.004.78q-1.044 0-1.8-.54t-1.152-1.536q-.384-.996-.384-2.364 0-1.38.384-2.376.396-1.008 1.152-1.548t1.8-.54q1.128 0 1.908.732.792.732 1.092 2.028l-1.248.084q-.228-.84-.684-1.272a1.47 1.47 0 0 0-1.08-.444q-.672 0-1.14.384t-.72 1.14q-.24.744-.24 1.812t.24 1.812q.252.732.72 1.116t1.14.384q.708 0 1.176-.48.468-.492.66-1.404zm5.704 3.828h-3.624v-1.056h2.52v-8.208h-2.52V10.76h3.624z"
                />
                <path
                  stroke="#261D49"
                  d="M124.5 120H108m16.5 0h14m-14 0V87.03m0-52.53v35.268M50.5 120H21v19.5M50.5 120h28.75m-28.75 0h88m-88 0v19.5M108 120H79.25m28.75 0v19.5m30.5-19.5H79.25m59.25 0v19.5M79.25 120v19.5M290.5 120H307m-16.5 0h-14m14 0v-10.784m0-74.716v57.377m74 28.123H394v19.5M364.5 120h-28.75m28.75 0h-88m88 0v19.5M307 120h28.75M307 120v19.5M276.5 120h59.25m-59.25 0v19.5m59.25-19.5v19.5"
                />
                <path fill="#A485FF" d="m124 74 4.33 9h-8.66zM291 105l-4.33-9h8.66z" />
              </svg>
            </div>
            <div className="Automation_text__uMRmK">
              <div className="TitleSubtitle_titleContainer__kowRX TitleSubtitle_sm__vb492 TitleSubtitle_sm-left__CokNV TitleSubtitle_wrap__bHRFs">
                <h2>Stay in sync.</h2>
                <h5>Cloud Sync ensures your workflow is the same across multiple Macs.</h5>
              </div>
              <div className="Tag_tag__1AOB8">
                <span className="Tag_icon__InJ43">
                  <img
                    alt=""
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-cloud-sync-16.9f8dc93f.png&w=16&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-cloud-sync-16.9f8dc93f.png&w=32&q=75 2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-cloud-sync-16.9f8dc93f.png&w=32&q=75"
                    style={{ color: "transparent" }}
                  />
                </span>
                Cloud Sync
              </div>
            </div>
          </div>
          <div className="Automation_card__u7eVB">
            <div className="Automation_graphic__4fTlm Automation_windowManagementGraphic__d_LvG">
              <div className="DotsGraphic_gridContainer__mWW_k">
                <div className="DotsGraphic_dot__mupxr 0" />
                <div className="DotsGraphic_dot__mupxr 1" />
                <div className="DotsGraphic_dot__mupxr 2" />
                <div className="DotsGraphic_dot__mupxr 3" />
                <div className="DotsGraphic_dot__mupxr 4" />
                <div className="DotsGraphic_dot__mupxr 5" />
                <div className="DotsGraphic_dot__mupxr 6" />
                <div className="DotsGraphic_dot__mupxr 7" />
                <div className="DotsGraphic_dot__mupxr 8" />
                <div className="DotsGraphic_dot__mupxr 9" />
                <div className="DotsGraphic_dot__mupxr 10" />
                <div className="DotsGraphic_dot__mupxr 11" />
                <div className="DotsGraphic_dot__mupxr 12" />
                <div className="DotsGraphic_dot__mupxr 13" />
                <div className="DotsGraphic_dot__mupxr 14" />
                <div className="DotsGraphic_dot__mupxr 15" />
                <div className="DotsGraphic_dot__mupxr 16" />
                <div className="DotsGraphic_dot__mupxr 17" />
                <div className="DotsGraphic_dot__mupxr 18" />
                <div className="DotsGraphic_dot__mupxr 19" />
                <div className="DotsGraphic_dot__mupxr 20" />
                <div className="DotsGraphic_dot__mupxr 21" />
                <div className="DotsGraphic_dot__mupxr 22" />
                <div className="DotsGraphic_dot__mupxr 23" />
                <div className="DotsGraphic_dot__mupxr 24" />
                <div className="DotsGraphic_dot__mupxr 25" />
                <div className="DotsGraphic_dot__mupxr 26" />
                <div className="DotsGraphic_dot__mupxr 27" />
                <div className="DotsGraphic_dot__mupxr 28" />
                <div className="DotsGraphic_dot__mupxr 29" />
                <div className="DotsGraphic_dot__mupxr 30" />
                <div className="DotsGraphic_dot__mupxr 31" />
                <div className="DotsGraphic_dot__mupxr 32" />
                <div className="DotsGraphic_dot__mupxr 33" />
                <div className="DotsGraphic_dot__mupxr 34" />
                <div className="DotsGraphic_dot__mupxr 35" />
                <div className="DotsGraphic_dot__mupxr 36" />
                <div className="DotsGraphic_dot__mupxr 37" />
                <div className="DotsGraphic_dot__mupxr 38" />
                <div className="DotsGraphic_dot__mupxr 39" />
              </div>
            </div>
            <div className="Automation_text__uMRmK">
              <div className="TitleSubtitle_titleContainer__kowRX TitleSubtitle_sm__vb492 TitleSubtitle_sm-left__CokNV TitleSubtitle_wrap__bHRFs">
                <h2>Keep organized.</h2>
                <h5>Position and resize your windows with custom commands.</h5>
              </div>
              <div className="Tag_tag__1AOB8">
                <span className="Tag_icon__InJ43">
                  <img
                    alt
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-window-management-16.19cfb07d.png&w=32&q=75"
                    style={{ color: "transparent" }}
                  />
                </span>
                Custom Window Management
              </div>
            </div>
          </div>
          <div className="Automation_card__u7eVB">
            <div className="Automation_graphic__4fTlm Automation_clipboardHistoryGraphic__wJ2IJ">
              <svg xmlns="http://www.w3.org/2000/svg" width={1246} height={230} fill="none">
                <path fill="#FF6363" d="M71.041 51.432h16.228V67.66H71.041z" opacity="0.3" />
                <path
                  fill="#FF6363"
                  d="M798.053 51.432h16.228V67.66h-16.228zM434.547 51.432h16.228V67.66h-16.228z"
                  opacity="0.34"
                />
                <path fill="#FF6363" d="M1161.56 51.432h16.228V67.66h-16.228z" opacity="0.21" />
                <path fill="#FF6363" d="M252.795 51.432h16.228V67.66h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M979.805 51.432h16.228V67.66h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M616.299 51.432h16.228V67.66h-16.228z" opacity="0.99" />
                <path fill="#FF6363" d="M161.918 51.432h16.228V67.66h-16.228z" />
                <path fill="#FF6363" d="M888.928 51.432h16.228V67.66h-16.228z" opacity="0.94" />
                <path fill="#FF6363" d="M525.424 51.432h16.228V67.66h-16.228z" opacity="0.91" />
                <path fill="#FF6363" d="M343.672 51.432H359.9V67.66h-16.228z" />
                <path fill="#FF6363" d="M1070.68 51.432h16.228V67.66h-16.228z" opacity="0.4" />
                <path fill="#FF6363" d="M707.176 51.432h16.228V67.66h-16.228z" opacity="0.28" />
                <path fill="#FF6363" d="M116.48 51.432h16.228V67.66H116.48z" opacity="0.7" />
                <path fill="#FF6363" d="M843.49 51.432h16.228V67.66H843.49z" opacity="0.27" />
                <path fill="#FF6363" d="M479.984 51.432h16.228V67.66h-16.228z" opacity="0.16" />
                <path fill="#FF6363" d="M1207 51.432h16.228V67.66H1207z" opacity="0.66" />
                <path fill="#FF6363" d="M298.232 51.432h16.228V67.66h-16.228z" opacity="0.64" />
                <path fill="#FF6363" d="M1025.24 51.432h16.228V67.66h-16.228z" opacity="0.55" />
                <path fill="#FF6363" d="M661.738 51.432h16.228V67.66h-16.228z" opacity="0.4" />
                <path
                  fill="#FF6363"
                  d="M207.355 51.432h16.228V67.66h-16.228zM934.367 51.432h16.228V67.66h-16.228z"
                  opacity="0.61"
                />
                <path fill="#FF6363" d="M570.861 51.432h16.228V67.66h-16.228z" opacity="0.9" />
                <path fill="#FF6363" d="M389.109 51.432h16.228V67.66h-16.228z" opacity="0.42" />
                <path fill="#FF6363" d="M1116.12 51.432h16.228V67.66h-16.228z" opacity="0.34" />
                <path fill="#FF6363" d="M752.613 51.432h16.228V67.66h-16.228z" opacity="0.46" />
                <path fill="#FF6363" d="M71.041 96.871h16.228v16.228H71.041z" opacity="0.21" />
                <path fill="#FF6363" d="M798.053 96.871h16.228v16.228h-16.228z" opacity="0.6" />
                <path fill="#FF6363" d="M434.547 96.871h16.228v16.228h-16.228z" opacity="0.58" />
                <path fill="#FF6363" d="M1161.56 96.871h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M252.795 96.871h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M979.805 96.871h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M616.299 96.871h16.228v16.228h-16.228z" opacity="0.52" />
                <path fill="#FF6363" d="M161.918 96.871h16.228v16.228h-16.228z" opacity="0.47" />
                <path fill="#FF6363" d="M888.928 96.871h16.228v16.228h-16.228z" opacity="0.43" />
                <path fill="#FF6363" d="M525.424 96.871h16.228v16.228h-16.228z" opacity="0.78" />
                <path fill="#FF6363" d="M343.672 96.871H359.9v16.228h-16.228z" opacity="0.37" />
                <path fill="#FF6363" d="M1070.68 96.871h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M707.176 96.871h16.228v16.228h-16.228z" opacity="0.67" />
                <path fill="#FF6363" d="M116.48 96.871h16.228v16.228H116.48z" />
                <path fill="#FF6363" d="M843.49 96.871h16.228v16.228H843.49z" opacity="0.67" />
                <path fill="#FF6363" d="M479.984 96.871h16.228v16.228h-16.228z" opacity="0.58" />
                <path fill="#FF6363" d="M1207 96.871h16.228v16.228H1207z" opacity="0.49" />
                <path fill="#FF6363" d="M298.232 96.871h16.228v16.228h-16.228z" opacity="0.67" />
                <path fill="#FF6363" d="M1025.24 96.871h16.228v16.228h-16.228z" opacity="0.94" />
                <path fill="#FF6363" d="M661.738 96.871h16.228v16.228h-16.228z" opacity="0.45" />
                <path fill="#FF6363" d="M207.355 96.871h16.228v16.228h-16.228z" opacity="0.68" />
                <path fill="#FF6363" d="M934.367 96.871h16.228v16.228h-16.228z" opacity="0.15" />
                <path fill="#FF6363" d="M570.861 96.871h16.228v16.228h-16.228z" opacity="0.52" />
                <path fill="#FF6363" d="M389.109 96.871h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1116.12 96.871h16.228v16.228h-16.228z" opacity="0.63" />
                <path fill="#FF6363" d="M752.613 96.871h16.228v16.228h-16.228z" opacity="0.16" />
                <path fill="#FF6363" d="M71.041 165.027h16.228v16.228H71.041z" opacity="0.15" />
                <path fill="#FF6363" d="M798.053 165.027h16.228v16.228h-16.228z" opacity="0.47" />
                <path fill="#FF6363" d="M434.547 165.027h16.228v16.228h-16.228z" opacity="0.27" />
                <path fill="#FF6363" d="M1161.56 165.027h16.228v16.228h-16.228z" opacity="0.62" />
                <path fill="#FF6363" d="M252.795 165.027h16.228v16.228h-16.228z" opacity="0.34" />
                <path fill="#FF6363" d="M979.805 165.027h16.228v16.228h-16.228z" opacity="0.71" />
                <path fill="#FF6363" d="M616.299 165.027h16.228v16.228h-16.228z" opacity="0.57" />
                <path fill="#FF6363" d="M161.918 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M888.928 165.027h16.228v16.228h-16.228z" opacity="0.74" />
                <path fill="#FF6363" d="M525.424 165.027h16.228v16.228h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M341.861 165.027h16.228v16.228h-16.228z" opacity="0.75" />
                <path fill="#FF6363" d="M1070.68 165.027h16.228v16.228h-16.228z" opacity="0.86" />
                <path fill="#FF6363" d="M707.176 165.027h16.228v16.228h-16.228z" opacity="0.27" />
                <path fill="#FF6363" d="M116.48 165.027h16.228v16.228H116.48z" />
                <path fill="#FF6363" d="M843.49 165.027h16.228v16.228H843.49z" opacity="0.76" />
                <path fill="#FF6363" d="M479.984 165.027h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M1207 165.027h16.228v16.228H1207z" opacity="0.97" />
                <path fill="#FF6363" d="M298.232 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1025.24 165.027h16.228v16.228h-16.228z" opacity="0.53" />
                <path fill="#FF6363" d="M661.738 165.027h16.228v16.228h-16.228z" opacity="0.99" />
                <path fill="#FF6363" d="M207.355 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M934.367 165.027h16.228v16.228h-16.228z" opacity="0.19" />
                <path fill="#FF6363" d="M570.861 165.027h16.228v16.228h-16.228z" opacity="0.16" />
                <path fill="#FF6363" d="M389.109 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1116.12 165.027h16.228v16.228h-16.228z" opacity="0.9" />
                <path fill="#FF6363" d="M752.613 165.027h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M71.041 74.151h16.228v16.228H71.041z" opacity="0.27" />
                <path fill="#FF6363" d="M798.053 74.151h16.228v16.228h-16.228z" opacity="0.73" />
                <path fill="#FF6363" d="M434.547 74.151h16.228v16.228h-16.228z" opacity="0.59" />
                <path fill="#FF6363" d="M1161.56 74.151h16.228v16.228h-16.228z" opacity="0.36" />
                <path fill="#FF6363" d="M252.795 74.151h16.228v16.228h-16.228z" opacity="0.15" />
                <path fill="#FF6363" d="M979.805 74.151h16.228v16.228h-16.228z" opacity="0.28" />
                <path fill="#FF6363" d="M616.299 74.151h16.228v16.228h-16.228z" opacity="0.23" />
                <path fill="#FF6363" d="M161.918 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M888.928 74.151h16.228v16.228h-16.228z" opacity="0.76" />
                <path fill="#FF6363" d="M525.424 74.151h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M343.672 74.151H359.9v16.228h-16.228z" />
                <path fill="#FF6363" d="M1070.68 74.151h16.228v16.228h-16.228z" opacity="0.24" />
                <path fill="#FF6363" d="M707.176 74.151h16.228v16.228h-16.228z" opacity="0.63" />
                <path fill="#FF6363" d="M116.48 74.151h16.228v16.228H116.48z" />
                <path fill="#FF6363" d="M843.49 74.151h16.228v16.228H843.49z" opacity="0.27" />
                <path fill="#FF6363" d="M479.984 74.151h16.228v16.228h-16.228z" opacity="0.46" />
                <path fill="#FF6363" d="M1207 74.151h16.228v16.228H1207z" opacity="0.53" />
                <path fill="#FF6363" d="M298.232 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1025.24 74.151h16.228v16.228h-16.228z" opacity="0.67" />
                <path fill="#FF6363" d="M661.738 74.151h16.228v16.228h-16.228z" opacity="0.73" />
                <path fill="#FF6363" d="M207.355 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M934.367 74.151h16.228v16.228h-16.228z" opacity="0.24" />
                <path fill="#FF6363" d="M570.861 74.151h16.228v16.228h-16.228z" opacity="0.17" />
                <path fill="#FF6363" d="M389.109 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1116.12 74.151h16.228v16.228h-16.228z" opacity="0.76" />
                <path fill="#FF6363" d="M752.613 74.151h16.228v16.228h-16.228z" opacity="0.85" />
                <path fill="#FF6363" d="M71.041 142.309h16.228v16.228H71.041z" opacity="0.38" />
                <path fill="#FF6363" d="M798.053 142.309h16.228v16.228h-16.228z" opacity="0.74" />
                <path fill="#FF6363" d="M434.547 142.309h16.228v16.228h-16.228z" opacity="0.25" />
                <path fill="#FF6363" d="M1161.56 142.309h16.228v16.228h-16.228z" opacity="0.99" />
                <path fill="#FF6363" d="M252.795 142.309h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M979.805 142.309h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M616.299 142.309h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M161.918 142.309h16.228v16.228h-16.228z" opacity="0.4" />
                <path fill="#FF6363" d="M888.928 142.309h16.228v16.228h-16.228z" opacity="0.98" />
                <path fill="#FF6363" d="M525.424 142.309h16.228v16.228h-16.228z" opacity="0.52" />
                <path fill="#FF6363" d="M343.672 142.309H359.9v16.228h-16.228z" opacity="0.42" />
                <path fill="#FF6363" d="M1070.68 142.309h16.228v16.228h-16.228z" opacity="0.9" />
                <path fill="#FF6363" d="M707.176 142.309h16.228v16.228h-16.228z" opacity="0.73" />
                <path fill="#FF6363" d="M116.48 142.309h16.228v16.228H116.48z" />
                <path fill="#FF6363" d="M843.49 142.309h16.228v16.228H843.49z" opacity="0.2" />
                <path fill="#FF6363" d="M479.984 142.309h16.228v16.228h-16.228z" opacity="0.21" />
                <path fill="#FF6363" d="M1207 142.309h16.228v16.228H1207z" opacity="0.64" />
                <path fill="#FF6363" d="M298.232 142.309h16.228v16.228h-16.228z" opacity="0.56" />
                <path fill="#FF6363" d="M1025.24 142.309h16.228v16.228h-16.228z" opacity="0.55" />
                <path fill="#FF6363" d="M661.738 142.309h16.228v16.228h-16.228z" opacity="0.29" />
                <path fill="#FF6363" d="M207.355 142.309h16.228v16.228h-16.228z" opacity="0.81" />
                <path fill="#FF6363" d="M934.367 142.309h16.228v16.228h-16.228z" opacity="0.45" />
                <path fill="#FF6363" d="M570.861 142.309h16.228v16.228h-16.228z" opacity="0.41" />
                <path fill="#FF6363" d="M389.109 142.309h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1116.12 142.309h16.228v16.228h-16.228z" opacity="0.98" />
                <path fill="#FF6363" d="M752.613 142.309h16.228v16.228h-16.228z" opacity="0.65" />
                <path fill="#FF6363" d="M71.041 119.589h16.228v16.228H71.041z" opacity="0.28" />
                <path fill="#FF6363" d="M798.053 119.589h16.228v16.228h-16.228z" opacity="0.58" />
                <path fill="#FF6363" d="M434.547 119.589h16.228v16.228h-16.228z" opacity="0.32" />
                <path fill="#FF6363" d="M1161.56 119.589h16.228v16.228h-16.228z" opacity="0.26" />
                <path fill="#FF6363" d="M252.795 119.589h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M979.805 119.589h16.228v16.228h-16.228z" opacity="0.15" />
                <path fill="#FF6363" d="M616.299 119.589h16.228v16.228h-16.228z" opacity="0.84" />
                <path fill="#FF6363" d="M161.918 119.589h16.228v16.228h-16.228z" opacity="0.44" />
                <path fill="#FF6363" d="M888.928 119.589h16.228v16.228h-16.228z" opacity="0.71" />
                <path fill="#FF6363" d="M525.424 119.589h16.228v16.228h-16.228z" opacity="0.28" />
                <path fill="#FF6363" d="M343.672 119.589H359.9v16.228h-16.228z" opacity="0.32" />
                <path fill="#FF6363" d="M1070.68 119.589h16.228v16.228h-16.228z" opacity="0.23" />
                <path fill="#FF6363" d="M707.176 119.589h16.228v16.228h-16.228z" opacity="0.97" />
                <path fill="#FF6363" d="M116.48 119.589h16.228v16.228H116.48z" opacity="0.86" />
                <path fill="#FF6363" d="M843.49 119.589h16.228v16.228H843.49z" opacity="0.9" />
                <path fill="#FF6363" d="M479.984 119.589h16.228v16.228h-16.228z" opacity="0.51" />
                <path fill="#FF6363" d="M1207 119.589h16.228v16.228H1207z" opacity="0.57" />
                <path fill="#FF6363" d="M298.232 119.589h16.228v16.228h-16.228z" opacity="0.27" />
                <path fill="#FF6363" d="M1025.24 119.589h16.228v16.228h-16.228z" opacity="0.41" />
                <path fill="#FF6363" d="M661.738 119.589h16.228v16.228h-16.228z" opacity="0.18" />
                <path fill="#FF6363" d="M207.355 119.589h16.228v16.228h-16.228z" opacity="0.42" />
                <path fill="#FF6363" d="M934.367 119.589h16.228v16.228h-16.228z" opacity="0.95" />
                <path fill="#FF6363" d="M570.861 119.589h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M389.109 119.589h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1116.12 119.589h16.228v16.228h-16.228z" opacity="0.55" />
                <path fill="#FF6363" d="M752.613 119.589h16.228v16.228h-16.228z" opacity="0.41" />
                <path fill="#FF6363" d="M71.041 187.747h16.228v16.228H71.041z" opacity="0.5" />
                <path fill="#FF6363" d="M798.053 187.747h16.228v16.228h-16.228z" opacity="0.33" />
                <path fill="#FF6363" d="M434.547 187.747h16.228v16.228h-16.228z" opacity="0.57" />
                <path fill="#FF6363" d="M1161.56 187.747h16.228v16.228h-16.228z" opacity="0.36" />
                <path fill="#FF6363" d="M252.795 187.747h16.228v16.228h-16.228z" opacity="0.5" />
                <path fill="#FF6363" d="M979.805 187.747h16.228v16.228h-16.228z" opacity="0.56" />
                <path fill="#FF6363" d="M616.299 187.747h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M161.918 187.747h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M888.928 187.747h16.228v16.228h-16.228z" opacity="0.39" />
                <path fill="#FF6363" d="M525.424 187.747h16.228v16.228h-16.228z" opacity="0.85" />
                <path fill="#FF6363" d="M343.672 187.747H359.9v16.228h-16.228z" />
                <path fill="#FF6363" d="M1070.68 187.747h16.228v16.228h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M707.176 187.747h16.228v16.228h-16.228z" opacity="0.17" />
                <path fill="#FF6363" d="M116.48 187.747h16.228v16.228H116.48z" opacity="0.74" />
                <path fill="#FF6363" d="M843.49 187.747h16.228v16.228H843.49z" opacity="0.69" />
                <path fill="#FF6363" d="M479.984 187.747h16.228v16.228h-16.228z" opacity="0.54" />
                <path fill="#FF6363" d="M1207 187.747h16.228v16.228H1207z" opacity="0.32" />
                <path fill="#FF6363" d="M298.232 187.747h16.228v16.228h-16.228z" opacity="0.77" />
                <path fill="#FF6363" d="M1025.24 187.747h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M661.738 187.747h16.228v16.228h-16.228z" opacity="0.15" />
                <path fill="#FF6363" d="M207.355 187.747h16.228v16.228h-16.228z" opacity="0.58" />
                <path fill="#FF6363" d="M934.367 187.747h16.228v16.228h-16.228z" opacity="0.25" />
                <path fill="#FF6363" d="M570.861 187.747h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M389.109 187.747h16.228v16.228h-16.228z" opacity="0.62" />
                <path fill="#FF6363" d="M1116.12 187.747h16.228v16.228h-16.228z" opacity="0.64" />
                <path fill="#FF6363" d="M752.613 187.747h16.228v16.228h-16.228z" opacity="0.78" />
                <path fill="#FF6363" d="M93.762 51.432h16.228V67.66H93.762z" opacity="0.33" />
                <path fill="#FF6363" d="M820.771 51.432h16.228V67.66h-16.228z" opacity="0.36" />
                <path fill="#FF6363" d="M457.266 51.432h16.228V67.66h-16.228z" opacity="0.28" />
                <path fill="#FF6363" d="M1184.28 51.432h16.228V67.66h-16.228z" opacity="0.78" />
                <path fill="#FF6363" d="M275.514 51.432h16.228V67.66h-16.228z" opacity="0.15" />
                <path fill="#FF6363" d="M1002.52 51.432h16.228V67.66h-16.228z" opacity="0.83" />
                <path fill="#FF6363" d="M639.02 51.432h16.228V67.66H639.02z" opacity="0.63" />
                <path fill="#FF6363" d="M184.639 51.432h16.228V67.66h-16.228z" />
                <path fill="#FF6363" d="M911.646 51.432h16.228V67.66h-16.228z" opacity="0.58" />
                <path fill="#FF6363" d="M548.143 51.432h16.228V67.66h-16.228z" opacity="0.88" />
                <path fill="#FF6363" d="M366.391 51.432h16.228V67.66h-16.228z" opacity="0.83" />
                <path fill="#FF6363" d="M1093.4 51.432h16.228V67.66H1093.4z" opacity="0.85" />
                <path fill="#FF6363" d="M729.895 51.432h16.228V67.66h-16.228z" opacity="0.7" />
                <path fill="#FF6363" d="M139.199 51.432h16.228V67.66h-16.228z" />
                <path fill="#FF6363" d="M866.209 51.432h16.228V67.66h-16.228z" opacity="0.63" />
                <path fill="#FF6363" d="M502.705 51.432h16.228V67.66h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M1229.71 51.432h16.228V67.66h-16.228z" opacity="0.34" />
                <path fill="#FF6363" d="M320.951 51.432h16.228V67.66h-16.228z" />
                <path fill="#FF6363" d="M1047.96 51.432h16.228V67.66h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M684.457 51.432h16.228V67.66h-16.228z" opacity="0.73" />
                <path fill="#FF6363" d="M230.074 51.432h16.228V67.66h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M957.086 51.432h16.228V67.66h-16.228z" opacity="0.9" />
                <path fill="#FF6363" d="M593.58 51.432h16.228V67.66H593.58z" opacity="0.58" />
                <path fill="#FF6363" d="M411.828 51.432h16.228V67.66h-16.228z" opacity="0.25" />
                <path fill="#FF6363" d="M1138.84 51.432h16.228V67.66h-16.228z" opacity="0.6" />
                <path fill="#FF6363" d="M775.334 51.432h16.228V67.66h-16.228z" opacity="0.83" />
                <path fill="#FF6363" d="M93.762 96.871h16.228v16.228H93.762z" />
                <path fill="#FF6363" d="M820.771 96.871h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M457.266 96.871h16.228v16.228h-16.228z" opacity="0.35" />
                <path fill="#FF6363" d="M1184.28 96.871h16.228v16.228h-16.228z" opacity="0.96" />
                <path fill="#FF6363" d="M275.514 96.871h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1002.52 96.871h16.228v16.228h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M639.02 96.871h16.228v16.228H639.02z" opacity="0.95" />
                <path fill="#FF6363" d="M184.639 96.871h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M911.646 96.871h16.228v16.228h-16.228z" opacity="0.88" />
                <path fill="#FF6363" d="M548.143 96.871h16.228v16.228h-16.228z" opacity="0.42" />
                <path fill="#FF6363" d="M366.391 96.871h16.228v16.228h-16.228z" opacity="0.83" />
                <path fill="#FF6363" d="M1093.4 96.871h16.228v16.228H1093.4z" opacity="0.15" />
                <path fill="#FF6363" d="M729.895 96.871h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M139.199 96.871h16.228v16.228h-16.228z" opacity="0.38" />
                <path fill="#FF6363" d="M866.209 96.871h16.228v16.228h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M502.705 96.871h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M1229.71 96.871h16.228v16.228h-16.228z" opacity="0.94" />
                <path fill="#FF6363" d="M320.951 96.871h16.228v16.228h-16.228z" opacity="0.19" />
                <path fill="#FF6363" d="M1047.96 96.871h16.228v16.228h-16.228z" opacity="0.4" />
                <path fill="#FF6363" d="M684.457 96.871h16.228v16.228h-16.228z" opacity="0.52" />
                <path fill="#FF6363" d="M230.074 96.871h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M957.086 96.871h16.228v16.228h-16.228z" opacity="0.48" />
                <path fill="#FF6363" d="M593.58 96.871h16.228v16.228H593.58z" opacity="0.47" />
                <path fill="#FF6363" d="M411.828 96.871h16.228v16.228h-16.228z" opacity="0.89" />
                <path fill="#FF6363" d="M1138.84 96.871h16.228v16.228h-16.228z" opacity="0.43" />
                <path fill="#FF6363" d="M775.334 96.871h16.228v16.228h-16.228z" opacity="0.88" />
                <path fill="#FF6363" d="M93.762 165.027h16.228v16.228H93.762z" opacity="0.47" />
                <path fill="#FF6363" d="M820.771 165.027h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M457.266 165.027h16.228v16.228h-16.228z" opacity="0.68" />
                <path fill="#FF6363" d="M1184.28 165.027h16.228v16.228h-16.228z" opacity="0.64" />
                <path fill="#FF6363" d="M275.514 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1002.52 165.027h16.228v16.228h-16.228z" opacity="0.54" />
                <path fill="#FF6363" d="M639.02 165.027h16.228v16.228H639.02z" opacity="0.88" />
                <path fill="#FF6363" d="M184.639 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M911.646 165.027h16.228v16.228h-16.228z" opacity="0.87" />
                <path fill="#FF6363" d="M548.143 165.027h16.228v16.228h-16.228z" opacity="0.78" />
                <path fill="#FF6363" d="M366.391 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1093.4 165.027h16.228v16.228H1093.4z" opacity="0.98" />
                <path fill="#FF6363" d="M729.895 165.027h16.228v16.228h-16.228z" opacity="0.16" />
                <path fill="#FF6363" d="M139.199 165.027h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M866.209 165.027h16.228v16.228h-16.228z" opacity="0.25" />
                <path fill="#FF6363" d="M502.705 165.027h16.228v16.228h-16.228z" opacity="0.77" />
                <path fill="#FF6363" d="M1229.71 165.027h16.228v16.228h-16.228z" opacity="0.45" />
                <path fill="#FF6363" d="M319.141 165.027h16.228v16.228h-16.228z" opacity="0.85" />
                <path fill="#FF6363" d="M1047.96 165.027h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M684.457 165.027h16.228v16.228h-16.228z" opacity="0.55" />
                <path fill="#FF6363" d="M230.074 165.027h16.228v16.228h-16.228z" opacity="0.48" />
                <path fill="#FF6363" d="M957.086 165.027h16.228v16.228h-16.228z" opacity="0.88" />
                <path fill="#FF6363" d="M593.58 165.027h16.228v16.228H593.58z" opacity="0.72" />
                <path fill="#FF6363" d="M411.828 165.027h16.228v16.228h-16.228z" opacity="0.41" />
                <path
                  fill="#FF6363"
                  d="M1138.84 165.027h16.228v16.228h-16.228zM775.334 165.027h16.228v16.228h-16.228z"
                  opacity="0.46"
                />
                <path fill="#FF6363" d="M93.762 74.151h16.228v16.228H93.762z" opacity="0.73" />
                <path fill="#FF6363" d="M820.771 74.151h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M457.266 74.151h16.228v16.228h-16.228z" opacity="0.24" />
                <path fill="#FF6363" d="M1184.28 74.151h16.228v16.228h-16.228z" opacity="0.92" />
                <path fill="#FF6363" d="M275.514 74.151h16.228v16.228h-16.228z" opacity="0.76" />
                <path fill="#FF6363" d="M1002.52 74.151h16.228v16.228h-16.228z" opacity="0.94" />
                <path fill="#FF6363" d="M639.02 74.151h16.228v16.228H639.02z" opacity="0.48" />
                <path fill="#FF6363" d="M184.639 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M911.646 74.151h16.228v16.228h-16.228z" opacity="0.29" />
                <path fill="#FF6363" d="M548.143 74.151h16.228v16.228h-16.228z" opacity="0.3" />
                <path fill="#FF6363" d="M366.391 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1093.4 74.151h16.228v16.228H1093.4z" opacity="0.93" />
                <path fill="#FF6363" d="M729.895 74.151h16.228v16.228h-16.228z" opacity="0.48" />
                <path fill="#FF6363" d="M139.199 74.151h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M866.209 74.151h16.228v16.228h-16.228z" opacity="0.73" />
                <path fill="#FF6363" d="M502.705 74.151h16.228v16.228h-16.228z" opacity="0.43" />
                <path fill="#FF6363" d="M1229.71 74.151h16.228v16.228h-16.228z" opacity="0.76" />
                <path fill="#FF6363" d="M320.951 74.151h16.228v16.228h-16.228z" opacity="0.77" />
                <path fill="#FF6363" d="M1047.96 74.151h16.228v16.228h-16.228z" opacity="0.83" />
                <path fill="#FF6363" d="M684.457 74.151h16.228v16.228h-16.228z" opacity="0.71" />
                <path
                  fill="#FF6363"
                  d="M230.074 74.151h16.228v16.228h-16.228zM957.086 74.151h16.228v16.228h-16.228z"
                  opacity="0.38"
                />
                <path fill="#FF6363" d="M593.58 74.151h16.228v16.228H593.58z" opacity="0.74" />
                <path fill="#FF6363" d="M411.828 74.151h16.228v16.228h-16.228z" opacity="0.43" />
                <path fill="#FF6363" d="M1138.84 74.151h16.228v16.228h-16.228z" opacity="0.48" />
                <path fill="#FF6363" d="M775.334 74.151h16.228v16.228h-16.228z" opacity="0.91" />
                <path fill="#FF6363" d="M93.762 142.309h16.228v16.228H93.762z" />
                <path fill="#FF6363" d="M820.771 142.309h16.228v16.228h-16.228z" opacity="0.43" />
                <path fill="#FF6363" d="M457.266 142.309h16.228v16.228h-16.228z" opacity="0.22" />
                <path fill="#FF6363" d="M1184.28 142.309h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M275.514 142.309h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1002.52 142.309h16.228v16.228h-16.228z" opacity="0.25" />
                <path fill="#FF6363" d="M639.02 142.309h16.228v16.228H639.02z" opacity="0.49" />
                <path fill="#FF6363" d="M184.639 142.309h16.228v16.228h-16.228z" opacity="0.56" />
                <path fill="#FF6363" d="M911.646 142.309h16.228v16.228h-16.228z" opacity="0.43" />
                <path fill="#FF6363" d="M548.143 142.309h16.228v16.228h-16.228z" opacity="0.52" />
                <path fill="#FF6363" d="M366.391 142.309h16.228v16.228h-16.228z" opacity="0.55" />
                <path fill="#FF6363" d="M1093.4 142.309h16.228v16.228H1093.4z" opacity="0.48" />
                <path fill="#FF6363" d="M729.895 142.309h16.228v16.228h-16.228z" opacity="0.94" />
                <path fill="#FF6363" d="M139.199 142.309h16.228v16.228h-16.228z" opacity="0.38" />
                <path fill="#FF6363" d="M866.209 142.309h16.228v16.228h-16.228z" opacity="0.31" />
                <path fill="#FF6363" d="M502.705 142.309h16.228v16.228h-16.228z" opacity="0.34" />
                <path fill="#FF6363" d="M1229.71 142.309h16.228v16.228h-16.228z" opacity="0.64" />
                <path fill="#FF6363" d="M320.951 142.309h16.228v16.228h-16.228z" opacity="0.27" />
                <path fill="#FF6363" d="M1047.96 142.309h16.228v16.228h-16.228z" opacity="0.93" />
                <path fill="#FF6363" d="M684.457 142.309h16.228v16.228h-16.228z" opacity="0.46" />
                <path fill="#FF6363" d="M230.074 142.309h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M957.086 142.309h16.228v16.228h-16.228z" opacity="0.27" />
                <path fill="#FF6363" d="M593.58 142.309h16.228v16.228H593.58z" opacity="0.38" />
                <path fill="#FF6363" d="M411.828 142.309h16.228v16.228h-16.228z" opacity="0.76" />
                <path fill="#FF6363" d="M1138.84 142.309h16.228v16.228h-16.228z" opacity="0.82" />
                <path fill="#FF6363" d="M775.334 142.309h16.228v16.228h-16.228z" opacity="0.22" />
                <path fill="#FF6363" d="M93.762 119.589h16.228v16.228H93.762z" />
                <path fill="#FF6363" d="M820.771 119.589h16.228v16.228h-16.228z" opacity="0.54" />
                <path fill="#FF6363" d="M457.266 119.589h16.228v16.228h-16.228z" opacity="0.26" />
                <path fill="#FF6363" d="M1184.28 119.589h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M275.514 119.589h16.228v16.228h-16.228z" opacity="0.93" />
                <path fill="#FF6363" d="M1002.52 119.589h16.228v16.228h-16.228z" opacity="0.49" />
                <path fill="#FF6363" d="M639.02 119.589h16.228v16.228H639.02z" opacity="0.39" />
                <path fill="#FF6363" d="M184.639 119.589h16.228v16.228h-16.228z" opacity="0.19" />
                <path fill="#FF6363" d="M911.646 119.589h16.228v16.228h-16.228z" opacity="0.91" />
                <path fill="#FF6363" d="M548.143 119.589h16.228v16.228h-16.228z" opacity="0.97" />
                <path fill="#FF6363" d="M366.391 119.589h16.228v16.228h-16.228z" opacity="0.34" />
                <path fill="#FF6363" d="M1093.4 119.589h16.228v16.228H1093.4z" opacity="0.64" />
                <path fill="#FF6363" d="M729.895 119.589h16.228v16.228h-16.228z" opacity="0.15" />
                <path fill="#FF6363" d="M139.199 119.589h16.228v16.228h-16.228z" opacity="0.2" />
                <path fill="#FF6363" d="M866.209 119.589h16.228v16.228h-16.228z" opacity="0.79" />
                <path fill="#FF6363" d="M502.705 119.589h16.228v16.228h-16.228z" opacity="0.36" />
                <path fill="#FF6363" d="M1229.71 119.589h16.228v16.228h-16.228z" opacity="0.76" />
                <path fill="#FF6363" d="M320.951 119.589h16.228v16.228h-16.228z" opacity="0.22" />
                <path fill="#FF6363" d="M1047.96 119.589h16.228v16.228h-16.228z" opacity="0.67" />
                <path fill="#FF6363" d="M684.457 119.589h16.228v16.228h-16.228z" opacity="0.74" />
                <path fill="#FF6363" d="M230.074 119.589h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M957.086 119.589h16.228v16.228h-16.228z" opacity="0.28" />
                <path fill="#FF6363" d="M593.58 119.589h16.228v16.228H593.58z" opacity="0.83" />
                <path fill="#FF6363" d="M411.828 119.589h16.228v16.228h-16.228z" opacity="0.9" />
                <path fill="#FF6363" d="M1138.84 119.589h16.228v16.228h-16.228z" opacity="0.33" />
                <path fill="#FF6363" d="M775.334 119.589h16.228v16.228h-16.228z" opacity="0.54" />
                <path fill="#FF6363" d="M93.762 187.747h16.228v16.228H93.762z" opacity="0.3" />
                <path fill="#FF6363" d="M820.771 187.747h16.228v16.228h-16.228z" opacity="0.85" />
                <path fill="#FF6363" d="M457.266 187.747h16.228v16.228h-16.228z" opacity="0.3" />
                <path fill="#FF6363" d="M1184.28 187.747h16.228v16.228h-16.228z" opacity="0.55" />
                <path fill="#FF6363" d="M275.514 187.747h16.228v16.228h-16.228z" opacity="0.37" />
                <path fill="#FF6363" d="M1002.52 187.747h16.228v16.228h-16.228z" opacity="0.61" />
                <path fill="#FF6363" d="M639.02 187.747h16.228v16.228H639.02z" opacity="0.17" />
                <path fill="#FF6363" d="M184.639 187.747h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M911.646 187.747h16.228v16.228h-16.228z" opacity="0.24" />
                <path fill="#FF6363" d="M548.143 187.747h16.228v16.228h-16.228z" opacity="0.82" />
                <path fill="#FF6363" d="M366.391 187.747h16.228v16.228h-16.228z" opacity="0.95" />
                <path fill="#FF6363" d="M1093.4 187.747h16.228v16.228H1093.4z" opacity="0.29" />
                <path fill="#FF6363" d="M729.895 187.747h16.228v16.228h-16.228z" opacity="0.6" />
                <path fill="#FF6363" d="M139.199 187.747h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M866.209 187.747h16.228v16.228h-16.228z" opacity="0.98" />
                <path fill="#FF6363" d="M502.705 187.747h16.228v16.228h-16.228z" opacity="0.71" />
                <path fill="#FF6363" d="M1229.71 187.747h16.228v16.228h-16.228z" opacity="0.29" />
                <path fill="#FF6363" d="M320.951 187.747h16.228v16.228h-16.228z" />
                <path fill="#FF6363" d="M1047.96 187.747h16.228v16.228h-16.228z" opacity="0.46" />
                <path fill="#FF6363" d="M684.457 187.747h16.228v16.228h-16.228z" opacity="0.52" />
                <path fill="#FF6363" d="M230.074 187.747h16.228v16.228h-16.228z" opacity="0.81" />
                <path fill="#FF6363" d="M957.086 187.747h16.228v16.228h-16.228z" opacity="0.22" />
                <path fill="#FF6363" d="M593.58 187.747h16.228v16.228H593.58z" opacity="0.32" />
                <path fill="#FF6363" d="M411.828 187.747h16.228v16.228h-16.228z" opacity="0.39" />
                <path fill="#FF6363" d="M1138.84 187.747h16.228v16.228h-16.228z" opacity="0.98" />
                <path fill="#FF6363" d="M775.334 187.747h16.228v16.228h-16.228z" opacity="0.34" />
                <path
                  fill="#FF6363"
                  d="m2.388 81.312 1.44 7.38h-.456l1.44-7.38h1.62v8.52H5.424v-7.728h.06L4.032 89.23h-.864l-1.452-7.127h.06v7.728H.768v-8.52zm8.576 8.712q-.984 0-1.692-.54-.696-.54-1.068-1.536-.372-1.008-.372-2.364 0-1.37.372-2.377t1.068-1.547q.708-.54 1.692-.54t1.68.54q.708.54 1.08 1.547.372 1.008.372 2.377 0 1.355-.372 2.364-.372.996-1.08 1.536-.696.54-1.68.54m0-.984q.648 0 1.116-.42.48-.42.72-1.2.252-.78.252-1.837 0-1.068-.252-1.847-.24-.793-.72-1.213a1.61 1.61 0 0 0-1.116-.42q-.648 0-1.128.42-.468.42-.72 1.213-.24.78-.24 1.847 0 1.056.24 1.837.252.78.72 1.2.48.42 1.128.42m6.14-7.729 2.869 7.248v-7.248h1.008v8.52h-1.548l-2.748-7.008v7.009h-1.008v-8.52zM106.741 12.216q.108.576.408 1.02t.768.684q.48.24 1.092.24.504 0 .888-.144.396-.156.612-.444.228-.3.228-.72 0-.636-.564-1.056-.564-.432-1.776-.78-1.116-.312-1.824-.888t-.708-1.512q0-.696.348-1.224t.948-.816a3.2 3.2 0 0 1 1.368-.288q.828 0 1.5.348.684.348 1.092.972.408.612.492 1.38l-1.056.072a2.1 2.1 0 0 0-.36-.936 1.8 1.8 0 0 0-.72-.624 2.1 2.1 0 0 0-.972-.228q-.672 0-1.128.372a1.2 1.2 0 0 0-.456.972q0 .468.276.768.288.3.696.468t1.116.372q.036 0 .108.036 1.212.36 1.944.984.732.612.732 1.512 0 .744-.408 1.296-.408.54-1.068.816t-1.392.276q-.864 0-1.584-.36a3.05 3.05 0 0 1-1.152-1.008 2.95 2.95 0 0 1-.504-1.488zm12.177-5.736v.984h-4.332v2.784h4.188v.96h-4.188v2.808h4.428V15h-5.436V6.48zm4.592 0q.936 0 1.608.312.684.3 1.044.888.36.576.36 1.368 0 .828-.36 1.416a2.3 2.3 0 0 1-1.044.9q-.672.312-1.608.312h-1.56V15h-1.008V6.48zm0 4.212q.972 0 1.464-.408.492-.42.492-1.236 0-.792-.492-1.188t-1.464-.396h-1.56v3.228zM207.711 15.192q-.984 0-1.692-.54-.696-.54-1.068-1.536-.372-1.008-.372-2.364 0-1.368.372-2.376t1.068-1.548q.708-.54 1.692-.54t1.68.54q.708.54 1.08 1.548t.372 2.376q0 1.356-.372 2.364-.372.996-1.08 1.536-.696.54-1.68.54m0-.984q.648 0 1.116-.42.48-.42.72-1.2.252-.78.252-1.836 0-1.068-.252-1.848-.24-.792-.72-1.212a1.61 1.61 0 0 0-1.116-.42q-.648 0-1.128.42-.468.42-.72 1.212-.24.78-.24 1.848 0 1.056.24 1.836.252.78.72 1.2.48.42 1.128.42m10.557-1.884q-.252 1.344-1.044 2.112-.792.756-1.98.756-1.032 0-1.788-.54-.744-.54-1.128-1.536t-.384-2.364q0-1.38.384-2.376.384-1.008 1.128-1.548.756-.54 1.788-.54 1.116 0 1.884.708t1.068 1.968l-1.08.072q-.228-.84-.708-1.296a1.6 1.6 0 0 0-1.164-.468q-.72 0-1.224.408-.492.408-.756 1.188T213 10.752t.264 1.884q.264.768.756 1.176.504.396 1.224.396.744 0 1.248-.504.516-.516.708-1.452zm7.28-4.86h-2.604V15h-1.008V7.464h-2.604V6.48h6.216zM305.478 6.48l2.868 7.248V6.48h1.008V15h-1.548l-2.748-7.008V15h-1.008V6.48zm8.588 8.712q-.984 0-1.692-.54-.696-.54-1.068-1.536-.372-1.008-.372-2.364 0-1.368.372-2.376t1.068-1.548q.708-.54 1.692-.54t1.68.54q.708.54 1.08 1.548t.372 2.376q0 1.356-.372 2.364-.372.996-1.08 1.536-.696.54-1.68.54m0-.984q.648 0 1.116-.42.48-.42.72-1.2.252-.78.252-1.836 0-1.068-.252-1.848-.24-.792-.72-1.212a1.61 1.61 0 0 0-1.116-.42q-.648 0-1.128.42-.468.42-.72 1.212-.24.78-.24 1.848 0 1.056.24 1.836.252.78.72 1.2.48.42 1.128.42m5.144-7.728 2.364 7.908h-.288l2.364-7.908h1.08L322.09 15h-1.32l-2.64-8.52zM405.068 6.48q1.188 0 2.052.504.876.492 1.344 1.452t.468 2.316q0 1.344-.456 2.304a3.3 3.3 0 0 1-1.308 1.452q-.852.492-2.028.492h-2.136V6.48zm0 7.536q1.356 0 2.076-.816.732-.828.732-2.448 0-1.632-.72-2.46t-2.088-.828h-1.056v6.552zm10.82-7.536v.984h-4.332v2.784h4.188v.96h-4.188v2.808h4.428V15h-5.436V6.48zm7.725 5.844q-.252 1.344-1.044 2.112-.792.756-1.98.756-1.032 0-1.788-.54-.744-.54-1.128-1.536t-.384-2.364q0-1.38.384-2.376.384-1.008 1.128-1.548.756-.54 1.788-.54 1.116 0 1.884.708t1.068 1.968l-1.08.072q-.228-.84-.708-1.296a1.6 1.6 0 0 0-1.164-.468q-.72 0-1.224.408-.492.408-.756 1.188t-.264 1.884.264 1.884q.264.768.756 1.176.504.396 1.224.396.744 0 1.248-.504.516-.516.708-1.452zM502.546 12.144q.012 1.008.468 1.536t1.32.528q.9 0 1.368-.564t.468-1.62V6.48h1.008v5.544q0 1.464-.756 2.316-.744.852-2.088.852-.84 0-1.476-.372a2.7 2.7 0 0 1-.996-1.044q-.348-.672-.348-1.536zm8.828-5.664h1.344l2.604 8.52h-1.032l-2.244-7.632L509.802 15h-1.032zm-1.296 6.084.348-.924h3.24l.348.924zm8.109-6.084 2.868 7.248V6.48h1.008V15h-1.548l-2.748-7.008V15h-1.008V6.48zM606.418 6.48v.984h-4.716l.504-.504v3.912l-.504-.528h4.5v.972h-4.5l.504-.516V15h-1.008V6.48zm7.449 0v.984h-4.332v2.784h4.188v.96h-4.188v2.808h4.428V15h-5.436V6.48zm1.88 0h2.34q1.452 0 2.232.612.792.612.792 1.752 0 .516-.264.924a1.8 1.8 0 0 1-.708.648 2.2 2.2 0 0 1-1.008.228l-.012-.072q1.08 0 1.716.552.636.54.636 1.476 0 1.104-.78 1.752t-2.124.648h-2.82zm2.82 7.536q.852 0 1.344-.372.504-.384.504-1.044 0-.684-.48-1.056t-1.368-.372h-1.812v2.844zm-.48-3.84q.948 0 1.452-.336.516-.348.516-.996 0-.66-.516-1.02-.504-.36-1.452-.36h-1.332v2.712zM701.451 6.48l1.44 7.38h-.456l1.44-7.38h1.62V15h-1.008V7.272h.06l-1.452 7.128h-.865l-1.451-7.128h.06V15h-1.008V6.48zm7.904 0h1.344l2.604 8.52h-1.032l-2.244-7.632L707.783 15h-1.032zm-1.296 6.084.348-.924h3.24l.348.924zm9.296-6.084q1.356 0 2.124.696.78.684.78 1.872 0 .564-.264 1.032-.252.468-.672.744a1.66 1.66 0 0 1-.852.3l-.372-.144q1.02 0 1.464.348.456.336.54 1.164l.24 2.508h-1.02l-.216-2.412q-.048-.564-.48-.792-.42-.24-1.368-.24h-1.572V15h-1.008V6.48zm0 4.092q.888 0 1.368-.396t.48-1.152q0-.744-.48-1.152t-1.368-.408h-1.668v3.108zM800.981 6.48h1.344l2.604 8.52h-1.032l-2.244-7.632L799.409 15h-1.032zm-1.296 6.084.348-.924h3.24l.348.924zm9.392-6.084q.936 0 1.608.312.684.3 1.044.888.36.576.36 1.368 0 .828-.36 1.416a2.3 2.3 0 0 1-1.044.9q-.672.312-1.608.312h-1.56V15h-1.008V6.48zm0 4.212q.972 0 1.464-.408.492-.42.492-1.236 0-.792-.492-1.188t-1.464-.396h-1.56v3.228zm7.269-4.212q1.356 0 2.124.696.78.684.78 1.872 0 .564-.264 1.032-.252.468-.672.744a1.66 1.66 0 0 1-.852.3l-.372-.144q1.02 0 1.464.348.456.336.54 1.164l.24 2.508h-1.02l-.216-2.412q-.048-.564-.48-.792-.42-.24-1.368-.24h-1.572V15h-1.008V6.48zm0 4.092q.888 0 1.368-.396t.48-1.152q0-.744-.48-1.152t-1.368-.408h-1.668v3.108zM899.431 6.48l1.44 7.38h-.456l1.44-7.38h1.62V15h-1.008V7.272h.06l-1.452 7.128h-.864l-1.452-7.128h.06V15h-1.008V6.48zm7.904 0h1.344l2.604 8.52h-1.032l-2.244-7.632L905.763 15h-1.032zm-1.296 6.084.348-.924h3.24l.348.924zm7.437-6.084 1.908 3.876 1.896-3.876h1.14l-2.532 5.04V15h-1.008v-3.48l-2.544-5.04zM997.497 12.144q.012 1.008.468 1.536t1.32.528q.9 0 1.365-.564c.32-.376.47-.916.47-1.62V6.48h1.01v5.544c0 .976-.25 1.748-.76 2.316-.49.568-1.19.852-2.085.852q-.84 0-1.476-.372a2.7 2.7 0 0 1-.996-1.044q-.348-.672-.348-1.536zm12.343-.12q0 1.464-.75 2.316c-.5.568-1.2.852-2.09.852q-1.35 0-2.1-.852t-.75-2.316V6.468h1.01v5.556c0 .704.16 1.244.47 1.62s.77.564 1.37.564 1.05-.188 1.37-.564c.31-.376.46-.916.46-1.62V6.468h1.01zm3.3-5.544 2.87 7.248V6.48h1V15h-1.54l-2.75-7.008V15h-1.01V6.48zM1096.49 12.144c.01.672.16 1.184.47 1.536q.45.528 1.32.528c.6 0 1.05-.188 1.36-.564.32-.376.47-.916.47-1.62V6.48h1.01v5.544c0 .976-.25 1.748-.76 2.316-.49.568-1.19.852-2.08.852-.56 0-1.06-.124-1.48-.372a2.76 2.76 0 0 1-1-1.044c-.23-.448-.34-.96-.34-1.536zm12.34-.12q0 1.464-.75 2.316c-.5.568-1.2.852-2.09.852q-1.35 0-2.1-.852t-.75-2.316V6.468h1.01v5.556c0 .704.16 1.244.47 1.62s.77.564 1.37.564 1.05-.188 1.37-.564c.31-.376.46-.916.46-1.62V6.468h1.01zm2.01-5.544h1.01v8.04l-.51-.504h5.02V15h-5.52zM1196.94 6.48h1.35l2.6 8.52h-1.03l-2.25-7.632-2.24 7.632h-1.03zm-1.29 6.084.34-.924h3.24l.35.924zm12.17-.54q0 1.464-.75 2.316c-.5.568-1.2.852-2.09.852q-1.35 0-2.1-.852t-.75-2.316V6.468h1.01v5.556c0 .704.16 1.244.47 1.62s.77.564 1.37.564 1.05-.188 1.37-.564c.31-.376.46-.916.46-1.62V6.468h1.01zm6.9 2.976-.24-1.944.24.216q-.195.912-.78 1.416c-.39.336-.9.504-1.51.504-.66 0-1.24-.18-1.73-.54s-.87-.872-1.13-1.536c-.26-.672-.38-1.46-.38-2.364s.12-1.692.38-2.364c.26-.68.64-1.2 1.13-1.56s1.07-.54 1.73-.54c.46 0 .9.116 1.3.348.42.224.77.54 1.06.948.3.4.5.864.62 1.392l-1.05.072c-.14-.536-.38-.964-.73-1.284q-.525-.492-1.2-.492c-.47 0-.86.136-1.19.408q-.495.408-.75 1.188c-.16.52-.25 1.148-.25 1.884s.09 1.364.25 1.884q.255.768.75 1.176c.33.264.72.396 1.19.396.37 0 .71-.108 1-.324q.45-.336.72-.912c.2-.384.3-.812.33-1.284h-2.05v-.984h3.03V15zM.408 126.749H1.44l.792 7.944h-.096l.96-7.224h1.008l.96 7.224h-.096l.792-7.944h1.032l-.864 8.52H4.332l-.9-7.356h.336l-.9 7.356H1.272zm13.388 0v.984H9.464v2.784h4.188v.96H9.464v2.808h4.428v.984H8.456v-8.52zm3.909 0q1.188 0 2.052.504.876.492 1.344 1.452t.468 2.316q0 1.344-.456 2.304a3.3 3.3 0 0 1-1.308 1.452q-.852.492-2.028.492H15.64v-8.52zm0 7.536q1.356 0 2.076-.816.732-.828.732-2.448 0-1.632-.72-2.46t-2.088-.828h-1.056v6.552zM6.348 172.187v.984H1.632l.504-.504v3.912l-.504-.528h4.5v.972h-4.5l.504-.516v4.2H1.128v-8.52zm4.58 0q1.356 0 2.124.696.78.684.78 1.872 0 .564-.264 1.032-.252.468-.672.744a1.66 1.66 0 0 1-.852.3l-.372-.144q1.02 0 1.464.348.456.336.54 1.164l.24 2.508h-1.02l-.216-2.412q-.048-.564-.48-.792-.42-.24-1.368-.24H9.26v3.444H8.252v-8.52zm0 4.092q.888 0 1.368-.396t.48-1.152q0-.744-.48-1.152t-1.368-.408H9.26v3.108zm9.849-3.108h-1.944v6.552h2.016v.984h-5.04v-.984h2.016v-6.552H15.88v-.984h4.896z"
                />
                <path
                  stroke="#642B2C"
                  strokeWidth="1.207"
                  d="M43.814 30.777h988.492v197.94H43.814z"
                />
              </svg>
            </div>
            <div className="Automation_text__uMRmK">
              <div className="TitleSubtitle_titleContainer__kowRX TitleSubtitle_sm__vb492 TitleSubtitle_sm-left__CokNV TitleSubtitle_wrap__bHRFs">
                <h2>Never forget.</h2>
                <h5>
                  With unlimited Clipboard History you can find that image you copied last year.
                </h5>
              </div>
              <div className="Tag_tag__1AOB8">
                <span className="Tag_icon__InJ43">
                  <img
                    alt
                    loading="lazy"
                    width={16}
                    height={17}
                    decoding="async"
                    data-nimg={1}
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-clipboard-history-16.41c42c43.png&w=16&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-clipboard-history-16.41c42c43.png&w=32&q=75 2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommand-clipboard-history-16.41c42c43.png&w=32&q=75"
                    style={{ color: "transparent" }}
                  />
                </span>
                Clipboard History
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card 2d */}

      {/* aı */}

      <div className="page_sectionContainer__86OJv">
        <div className="AIShowCase_title__JqKIV">
          <div className="AIShowCase_highlight__pQG8W">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={272}
              height={2}
              viewBox="0 0 272 2"
              fill="white"
            >
              <path d="M272 1L0.5 0.999976" stroke="url(#paint0_linear_955_23505)" />
              <defs>
                <linearGradient
                  id="paint0_linear_955_23505"
                  x1="272.5"
                  y1="1.49831"
                  x2="0.500004"
                  y2="0.998287"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="0.165137" stopColor="#282828" />
                  <stop offset={1} stopColor="#190E14" />
                </linearGradient>
              </defs>
            </svg>
            <span>AI</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={272}
              height={2}
              viewBox="0 0 272 2"
              fill="none"
            >
              <path d="M0 1L271.5 1" stroke="url(#paint0_linear_1193_9154)" />
              <defs>
                <linearGradient
                  id="paint0_linear_1193_9154"
                  x1="-0.500003"
                  y1="0.501689"
                  x2="271.5"
                  y2="1.00169"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="0.165137" stopColor="#282828" />
                  <stop offset={1} stopColor="#190E14" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="SectionTitle_container__qvIRZ AIShowCase_sectionTitle__Hk3KB SectionTitle_center__tGgzU">
            {/* <h3>Your Mac just got smarter.</h3> */}
            {/* <p>AI where it’s most useful - on your OS.</p> */}
            <div className="z-10 flex items-center justify-center rounded-l ">
              <TextReveal text="Magic UI will change the way you design." />
            </div>
          </div>
        </div>
      </div>

      <FeatureWall />

      {/* aı */}
      <div className="page_sectionContainer__78UYS">
        <Shape />
      </div>
      {/* <MiniNav /> */}
      {/* <Minislider /> */}
    </>
  );
};

export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
