// @components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <p>Made by <a href="https://gen1x.is-a.dev/">Gen1x</a> with <span style={{color: '#fea0ff'}}>love ❤</span></p>
      <style jsx>{`
        .footer {
          background-color: #121212;
          color: #ffffff;
          text-align: center;
          width: 100%;
        }
      `}</style>
    </footer>
  )
}