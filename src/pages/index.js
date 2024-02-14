import * as React from "react"
import { graphql } from 'gatsby'
import "../styles/style.css"

const IndexPage = ({data}) => {
  return (
    <main>
      <p><span><span> </span>_______ _______ _______ _______ _______ _______<span> </span></span></p>
      <p><span>|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|</span></p>
      <p><span>| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |</span></p>
      <p><span>| | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| |</span></p>
      <p><span>| |<a>C</a><span>  </span>| | |<a>H</a><span>  </span>| | |<a>O</a><span>  </span>| | |<a>R</a><span>  </span>| | |<a>U</a><span>  </span>| | |<a>S</a><span>  </span>| |</span></p>
      <p><span>| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |</span></p>
      <p><span>|/_____\|/_____\|/_____\|/_____\|/_____\|/_____\|</span></p>
      <p><span></span><br /></p>
      <p className="p1 container"><span className="p1 s1 label">S.Maria</span><span className="text"> Nov 18 2023</span></p>
      <p><span></span><br /></p>
      <p className="p1 container"><span className="p1 s1 label">S.Maria</span><span className="text"> Nov 18 2023</span></p>
      <p>{data}</p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>