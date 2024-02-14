import * as React from "react"
import "../styles/style.css"

const Navigation = props => {
    const { data } = props
    const path = props.path
    const listofFolders = data.allDirectory.edges
    const links = listofFolders.map((node) => node.node.base);
  return (
    <div>
      {/* {listofFolders.map(({ node }) =>
        node.relativeDirectory === "" ? (
          <div>
            <p>{node.relativePath}</p> <p>is a root folder</p>
          </div>
        ) : (
          <div>Folder: {node.base } is a child of {node.relativeDirectory}</div>
        )
      )} */}
      <p><span><span> </span>_______ _______ _______ _______ _______ _______<span> </span></span></p>
      <p><span>|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|</span></p>
      <p><span>| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |</span></p>
      <p><span>| | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| |</span></p>
      <p><span>| |{path != 'c/' && links.includes("c") ? ( <a href="/c/">C</a> ) : "C" }<span>  </span>| | |<a>{path != 'h/' && links.includes("h") ? ( <a href="/h/">H</a> ) : "H" }</a><span>  </span>| | |<a>{path != 'o/' && links.includes("o") ? ( <a href="/o/">H</a> ) : "O" }</a><span>  </span>| | |<a>{path != 'r/' && links.includes("r") ? ( <a href="/r/">R</a> ) : "R" }</a><span>  </span>| | |<a>{path != 'u/' && links.includes("u") ? ( <a href="/u/">U</a> ) : "U" }</a><span>  </span>| | |<a>{path != 's/' && links.includes("s") ? ( <a href="/s/">S</a> ) : "S" }</a><span>  </span>| |</span></p>
      <p><span>| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |</span></p>
      <p><span>|/_____\|/_____\|/_____\|/_____\|/_____\|/_____\|</span></p>
      <p><span></span><br /></p>
    </div>
  )
}

export default Navigation