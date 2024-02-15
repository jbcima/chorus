import * as React from "react"
import "../styles/style.css"

const Navigation = props => {
    const path = props.path
    console.log('props listofFolders3')
    console.log(props.navigation)
    console.log('props listofFolders3')
    const listofFolders = props.navigation.edges
    const links = listofFolders.map((node) => node.node.base);
  return (
    <div>
      <p><span><span> </span>_______ _______ _______ _______ _______ _______<span> </span></span></p>
      <p><span>|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|\ <span>    </span>/|</span></p>
      <p><span>| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |</span></p>
      <p><span>| | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| | | <span>  </span>| |</span></p>
      <p><span>| |{path != 'c/' && links.includes("c") ? ( <a href="/c/">C</a> ) : "C" }<span>  </span>| | |{path != 'h/' && links.includes("h") ? ( <a href="/h/">H</a> ) : "H" }<span>  </span>| | |{path != 'o/' && links.includes("o") ? ( <a href="/o/">H</a> ) : "O" }<span>  </span>| | |{path != 'r/' && links.includes("r") ? ( <a href="/r/">R</a> ) : "R" }<span>  </span>| | |{path != 'u/' && links.includes("u") ? ( <a href="/u/">U</a> ) : "U" }<span>  </span>| | |{path != 's/' && links.includes("s") ? ( <a href="/s/">S</a> ) : "S" }<span>  </span>| |</span></p>
      <p><span>| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |</span></p>
      <p><span>|/_____\|/_____\|/_____\|/_____\|/_____\|/_____\|</span></p>
      <p><span></span><br /></p>
    </div>
  )
}

export default Navigation