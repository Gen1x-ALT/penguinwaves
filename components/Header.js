// @components/Header.js
export default function Header({ title }) {
  return (
    <header>
      <h1 className="header-title">{title}</h1>
      <style jsx>{`
        .header-title {
          color: #ebba34;
          font-size: 3rem;
          margin-bottom: 0;
          font-family: "Tiny5", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
    </header>
  )
}