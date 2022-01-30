import React, { useState, useEffect } from 'react';
import Editor from './Editor'


function EditorBox(props) {
  console.log(props);
  const [html, setHtml] = useState(props.htmlCode, '')
  const [css, setCss] = useState(props.cssCode, '')
  const [js, setJs] = useState(props.jsCode, '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    
    return () => clearTimeout(timeout)
  }, [html, css, js])

  if(props.expandDesignTitle===props.title){
    return (
      <div className='editorbox'  >
         <div className='title ' onClick={() => props.expandDesign(props.title,"open")}>
        <h3>{props.title}</h3>
        <img className='arrowicon' alt='down arrow' src='https://cdn-icons.flaticon.com/png/512/2985/premium/2985151.png?token=exp=1643512381~hmac=aef687e6365ca8edcd57728b8b758256'/>
      </div>
      <div className="pane top-pane">
        <Editor
          id = {props.id}
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          id = {props.id}
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          id = {props.id}
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      {/* <button onClick={() => props.handleEdit(props.id,props.title,html,css,js)}> Save</button> */}
      <div className="pane outputpane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      </div>
    )
  }
  else{
  return (
    <>
    <div className='editorbox' >
      <div className='title'  onClick={() => props.expandDesign(props.title,"close")}>
      <h3 >{props.title}</h3>
      <img className='arrowicon' alt="righticon" src='https://cdn-icons.flaticon.com/png/512/1549/premium/1549454.png?token=exp=1643512330~hmac=600ed795ef7beb122b8017b96bbb1588'/>
      </div>
     
    </div>
    </>
  )
  }
}

export default EditorBox;