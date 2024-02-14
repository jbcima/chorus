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
    </main>
  )
}

// export const pageQuery = graphql`
// query pageQuery {
//   allMarkdownRemark {
//     edges {
//       node {
//       id
//       html
//       frontmatter {
//         title
//         description
//         audio
//       }
//       fileAbsolutePath
//       }
//     }
//   }
// }
// `;


export const Head = () => <title>Home Page</title>

export default IndexPage