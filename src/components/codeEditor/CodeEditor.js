import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
// Styles
import styles from './codeEditor.module.css'
// Context

const CodeEditor = ({ onChange, value }) => {

  return (
    <AceEditor
      placeholder="Start Querying..."
      mode={"mysql"}
      theme={"xcode"}
      name="code-editor"
      onChange={onChange}
      value={value}
      highlightActiveLine={true}
      showGutter={true}
      fontSize={18}
      width={'100%'}
      height={'250px'}
      className={styles.editorMain}
      enableLiveAutocompletion={true}
      enableBasicAutocompletion={true}
      showLineNumbers={true}
    />
  )
}

export default CodeEditor
