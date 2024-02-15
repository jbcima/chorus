import * as React from "react"
import Nav from './navigation.js';
import "../styles/style.css"

const DirectoryPage = props => {
  const content = props.pageContext.content;
  let navigation = props.pageContext.navigation;
  navigation.path = props.pageContext.currentPath;
  return (
    <main>
      <Nav {...navigation} />
      {content.map((item, i) => 
        item.type === "track" ? (
          <>
            <p className="p1 container"><span className="p1 s1 label">{item.artist}</span><span className="text"><a href={"/file/" + item.file}>{item.title ? ( ' ' + item.title ) : null }</a></span></p><p><span></span><br /></p>
          </>
        ) : 
        <>
          <input id="_1" type="checkbox" /><label class="drop" for="_1"><p className="p1 container"><span className="p1 s1 label">{item.artist}</span><span className="text">{item.title ? ( ' ' + item.title ) : null }</span></p><p><span></span><br /></p></label>
          <div>
            {item.track.map((track, i) => 
            <>
                <p className="p1 container"><span className="p1 s1 label">{track.artist}</span><span className="text"><a href={"/file/" + track.file}>{track.title ? ( ' ' + track.title ) : null }</a></span></p><p><span></span><br /></p>
            </>
            )}
          </div>
        </>
      )}
    </main>
  )
}

export const Head = () => <title>Chorus</title>

export default DirectoryPage