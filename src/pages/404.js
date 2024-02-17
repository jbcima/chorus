import * as React from "react"
import GIF from '../images/404.gif'
import "../styles/style.css"

const NotFoundPage = () => {
  return (
    <main className="container">
      <img src={GIF} />
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404.gif</title>
