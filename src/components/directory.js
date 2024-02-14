import * as React from "react"
import Nav from './navigation.js';
import "../styles/style.css"

const DirectoryPage = props => {
  const audio = props.pageContext.audio;
  let navigation = props.pageContext.navigation;
  navigation.path = props.pageContext.currentPath;
  return (
    <main>
      <Nav {...navigation} />
      {audio.map((file, i) => <div><p className="p1 container"><span className="p1 s1 label">{file.artist}</span><span className="text"> <a href={file.file}>{file.track}</a></span></p><p><span></span><br /></p></div>)}
    </main>
  )
}

export default DirectoryPage