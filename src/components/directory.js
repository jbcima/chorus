import * as React from "react"
import Nav from './navigation.js';
import Track from './track.js';
import "../styles/style.css"

const DirectoryPage = props => {
  const content = props.pageContext.content;
  let navigation = props.pageContext.navigation;
  return (
    <main>
      <Nav navigation={navigation} />
      {content && content.map((item, i) => 
        item.type === "track" ? (
          <>
            <Track {...item} />
          </>
        ) : 
        <>
          <input id="_1" type="checkbox" /><label className="drop" for="_1"><p className="p1 container"><span className="p1 s1 label">{item.artist}</span><span className="text">{item.title ? ( ' ' + item.title ) : null }</span></p><p><span></span><br /></p></label>
          <div>
            {item.track.map((track, i) => 
            <>
              <Track {...track} />
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