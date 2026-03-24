import { useState } from 'react'
import reactLogo from './assets/icons/react.svg'
import viteLogo from './assets/icons/vite.svg'
import heroImg from './assets/images/hero.png'
import { Button } from './components/Button/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section
        id="center"
        className="flex grow flex-col place-content-center place-items-center gap-6.25 max-lg:gap-4.5 max-lg:px-5 max-lg:pt-8 max-lg:pb-6"
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
            className="hero-framework absolute inset-x-0 top-8.5 z-10 mx-auto h-7"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="hero-vite absolute inset-x-0 top-26.75 z-0 mx-auto h-6.5 w-auto"
            alt="Vite logo"
          />
        </div>

        <Button variant="secondary">teste</Button>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="text-accent bg-accent-bg hover:border-accent-border focus-visible:outline-accent mb-6 inline-flex rounded-[5px] border-2 border-transparent px-2.5 py-1.25 font-mono text-base transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks relative w-full"></div>

      <section
        id="next-steps"
        className="border-border flex border-t text-left max-lg:flex-col max-lg:text-center"
      >
        <div
          id="docs"
          className="border-border max-lg:border-border flex-1 border-r p-8 max-lg:border-r-0 max-lg:border-b max-lg:p-5"
        >
          <svg className="mb-4 h-5.5 w-5.5" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card flex items-center gap-2 rounded-md px-[12px] py-[6px] text-base no-underline transition-shadow duration-300 max-lg:box-border max-lg:w-full max-lg:justify-center"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                <span>Explore Vite</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card flex items-center gap-2 rounded-[6px] px-[12px] py-[6px] text-base no-underline transition-shadow duration-300 max-lg:box-border max-lg:w-full max-lg:justify-center"
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                <span>Learn more</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex-1 p-8 max-lg:p-5">
          <svg className="mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card flex items-center gap-2 rounded-[6px] px-[12px] py-[6px] text-base no-underline transition-shadow duration-300 max-lg:box-border max-lg:w-full max-lg:justify-center"
              >
                <svg className="h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card flex items-center gap-2 rounded-[6px] px-[12px] py-[6px] text-base no-underline transition-shadow duration-300 max-lg:box-border max-lg:w-full max-lg:justify-center"
              >
                <svg className="h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                <span>Discord</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card flex items-center gap-2 rounded-[6px] px-[12px] py-[6px] text-base no-underline transition-shadow duration-300 max-lg:box-border max-lg:w-full max-lg:justify-center"
              >
                <svg className="h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                <span>X.com</span>
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card flex items-center gap-2 rounded-[6px] px-[12px] py-[6px] text-base no-underline transition-shadow duration-300 max-lg:box-border max-lg:w-full max-lg:justify-center"
              >
                <svg className="h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                <span>Bluesky</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks relative w-full"></div>
      <section id="spacer" className="border-border h-[88px] border-t max-lg:h-12"></section>
    </>
  )
}

export default App
