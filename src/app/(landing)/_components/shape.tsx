import Particles from "@/components/magicui/particles";
import React from "react";

const Shape = () => {
  return (
    <>
      <div
        className="relative mt-12 grid gap-8 lg:!mt-36 lg:mt-24 lg:grid-cols-2 lg:gap-16"
        data-v-4c68b176
      >
        <div
          className="relative rounded md:rounded-lg lg:order-last"
          style={{ "aspect-ratio": "16 / 10" } as React.CSSProperties}
          data-v-4c68b176
        >
          <div
            className="absolute inset-0 z-[-1] opacity-10 blur will-change-[filter]"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, #fff, #18181b)" }}
            data-v-4c68b176
          />
          {/*[*/}
          <Particles className="absolute inset-0" quantity={100} ease={80} refresh />
          <img src="/sh.svg" alt="Always in sync" className="w-full" loading="lazy" />
          {/*]*/}
        </div>

        <div
          className="relative flex flex-shrink-0 flex-col justify-center border p-9 text-center lg:order-first  lg:text-left"
          data-v-4c68b176
          style={{
            background:
              "radial-gradient(49.41% 64.58% at 49.4% 0, hsla(0, 0%, 100%, 0.03) 0, hsla(0, 0%, 100%, 0) 100%)",
            borderTop: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, transparent 0, hsla(0, 0%, 100%, 0.19) 30%, hsla(0, 0%, 100%, 0.19) 70%, transparent)",
            borderImageSlice: 1,
          }}
        >
          <div
            className="u-border-gray-300 icon relative mx-auto mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border lg:mx-0"
            data-v-4c68b176
            data-v-dafa1e53
          >
            <span
              className="i-octicon-sync-24 u-text-gray-900 h-5 w-5 flex-shrink-0"
              data-v-dafa1e53
            />
          </div>
          <h3
            className="u-text-gray-900 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl"
            data-v-4c68b176
          >
            Always in sync
          </h3>
          <div
            className="u-text-gray-500 prose-primary prose mx-auto mt-2 dark:prose-invert lg:mt-4 lg:text-lg"
            data-v-4c68b176
          >
            <p>
              Import your GitHub repositories, Volta keeps them up-to-date. Everything you do is
              synced between Volta and GitHub in real-time.
            </p>
          </div>
          <div className="mt-3 lg:mt-4" data-v-4c68b176>
            <a
              href="/docs/get-started/install-with-github"
              className="u-text-gray-900 border-b border-transparent font-medium transition-colors hover:border-white"
              data-v-4c68b176
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shape;
