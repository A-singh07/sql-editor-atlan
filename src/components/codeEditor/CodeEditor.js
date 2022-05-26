import React, { useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-xcode";
// Styles
import styles from './codeEditor.module.css'

const CodeEditor = () => {

  const [editorValue, setEditorValue] = useState("")

  // React.useEffect(() => {
  //   console.log('EDITOR VALUE', editorValue)
  // }, [editorValue])

  return (
    <div className={styles.editorWrapper}>
      <AceEditor
        // className={styles.editorMain}
        placeholder="Start Querying"
        mode="mysql"
        theme="xcode" // use "monokai" for dark mode
        name="sql-code-editor"
        onChange={setEditorValue}
        value={editorValue}
        highlightActiveLine={true}
        showGutter={true}
        fontSize={16}
        width={'100%'}
        height={'350px'}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2
        }}
      />
    </div>
  )
}

export default CodeEditor
