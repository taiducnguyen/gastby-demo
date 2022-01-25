import React from "react"
import testing from "../../static/testing.jpg"

export default function Home() {
  return (
    <main>
      <h1 className="title">Gatsby - Measure page quality</h1>

      <p className="description">
        Test your pages in a lab environment powered by PageSpeed Insights. Then
        get tips and recommendations to improve your user experience. For field
        performance, see the
        <a
          target="_blank"
          rel="noreferrer"
          href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect"
        >
          PageSpeed Insights
        </a>{" "}
        tool.
      </p>

      <img src={testing} alt="Elextrolux Logo" width="400" height="400" />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  )
}
