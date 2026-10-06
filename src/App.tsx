import { useState } from 'react'
import ANTHONY from './assets/ANTHONY.jpg'
import tuff from './assets/tuff.jpeg'
import BACKROOMS from './assets/backrooms-captain-clark.gif'
import EXTREME_DEMON from './assets/extreme demon.jpg'
import linkedinLogo from './assets/linkedin.svg'
import './App.css'
{/*
  import Header from './components/Header/Header'
  */}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*
      <Header />
        */}
      <section id="image-container">
        <div className="flex gap-4 justify-center items-center">
          <img src={ANTHONY} className="base" width="170" height="179" alt="" />
          <img src={tuff} className="base" width="170" height="179" alt="" />
          <img src={BACKROOMS} className="base" width="170" height="179" alt="" />
          <img src={EXTREME_DEMON} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Welcome to anthwny.com brother</h1>
          <p>
            I love geometry dash
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>My LinkedIn</h2>
          <p>Connect with me please</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/huang-anthony/" target="_blank">
                <img className="logo" src={linkedinLogo} alt="" />
                LinkedIn brother
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Join the Anthony community</p>
          <ul>
            <li>
              <a href="http://github.com/anthwny" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/demonlist" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/pitbull" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/sanders.senate.gov" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
