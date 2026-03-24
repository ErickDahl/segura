import { useState } from 'react'
import reactLogo from './assets/icons/react.svg'
import viteLogo from './assets/icons/vite.svg'
import heroImg from './assets/images/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section
        id="center"
        className="flex flex-col gap-6.25 place-content-center place-items-center grow max-lg:px-5 max-lg:pt-8 max-lg:pb-6 max-lg:gap-4.5"
      >
        <div className="relative">
          <img
            src={heroImg}
            className="relative z-0 mx-auto w-42.5"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 mx-auto z-10 top-8.5 h-7 hero-framework"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 mx-auto z-0 top-26.75 h-6.5 w-auto hero-vite"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="inline-flex font-mono text-base px-2.5 py-1.25 rounded-[5px] text-accent bg-accent-bg border-2 border-transparent transition-colors duration-300 mb-6 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks relative w-full"></div>

      <section
        id="next-steps"
        className="flex border-t border-border text-left max-lg:flex-col max-lg:text-center"
      >
        <div
          id="docs"
          className="flex-1 p-8 border-r border-border max-lg:p-5 max-lg:border-r-0 max-lg:border-b max-lg:border-border"
        >
          <svg className="mb-4 w-5.5 h-5.5" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-text-h text-base rounded-md bg-social-bg flex px-[12px] py-[6px] items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-card max-lg:w-full max-lg:justify-center max-lg:box-border"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                <span>Explore Vite</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-text-h text-base rounded-[6px] bg-social-bg flex px-[12px] py-[6px] items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-card max-lg:w-full max-lg:justify-center max-lg:box-border"
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                <span>Learn more</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex-1 p-8 max-lg:p-5">
          <svg className="mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-text-h text-base rounded-[6px] bg-social-bg flex px-[12px] py-[6px] items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-card max-lg:w-full max-lg:justify-center max-lg:box-border"
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="text-text-h text-base rounded-[6px] bg-social-bg flex px-[12px] py-[6px] items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-card max-lg:w-full max-lg:justify-center max-lg:box-border"
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                <span>Discord</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="text-text-h text-base rounded-[6px] bg-social-bg flex px-[12px] py-[6px] items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-card max-lg:w-full max-lg:justify-center max-lg:box-border"
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                <span>X.com</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="text-text-h text-base rounded-[6px] bg-social-bg flex px-[12px] py-[6px] items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-card max-lg:w-full max-lg:justify-center max-lg:box-border"
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                <span>Bluesky</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks relative w-full"></div>
      <section id="spacer" className="h-[88px] border-t border-border max-lg:h-12"></section>
    </>
  )
}

export default App
