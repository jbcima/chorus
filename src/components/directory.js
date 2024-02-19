import * as React from "react"
import Nav from './Navigation';
import Files from './Files';
import "../styles/style.css"

const DirectoryPage = props => {
  return (
    <main>
      <Nav navigation={props.pageContext.navigation} />
      <Files content={props.pageContext.content} />
    </main>
  )
}

export const Head = () => <title>Chorus</title>

export default DirectoryPage