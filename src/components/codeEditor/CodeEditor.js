import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
// Styles
import styles from './codeEditor.module.css'
// Context

const CodeEditor = ({ fontSize, theme, mode, onChange, value }) => {

  // const [editorValue, setEditorValue] = useState("");

  return (
    <AceEditor
      placeholder="Start Querying..."
      mode={mode}
      theme={theme} // use "monokai" for dark mode
      name="code-editor"
      onChange={onChange}
      value={value}
      highlightActiveLine={true}
      showGutter={true}
      fontSize={fontSize}
      width={'100%'}
      height={'250px'}
      className={styles.editorMain}
      enableLiveAutocompletion={true}
      enableBasicAutocompletion={true}
      enableSnippets={true}
      showLineNumbers={true}
    />
  )
}

export default CodeEditor
