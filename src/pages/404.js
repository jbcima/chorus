import * as React from "react"
import GIF from '../images/404.gif'

const NotFoundPage = () => {
  return (
    <main>
      <img src={GIF} />
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404.gif</title>
