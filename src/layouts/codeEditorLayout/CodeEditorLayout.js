import React from 'react';
import CodeEditor from '../../components/codeEditor/CodeEditor';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
// styles
import styles from './codeEditorLayout.module.css'

const CodeEditorLayout = () => {
  return (
    <>
      <div className={styles.editorWrapper}>
        <CodeEditor
          fontSize={18}
          theme={'xcode'}
          mode={"mysql"}
        />
        <ButtonCustom
          secondary
          btnText={'Run Query'}
          customStyle={{ marginTop: '1rem' }}
        />
      </div>
    </>
  )
}

export default CodeEditorLayout
