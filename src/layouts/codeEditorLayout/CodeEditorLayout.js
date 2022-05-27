import { useContext } from 'react';
import CodeEditor from '../../components/codeEditor/CodeEditor';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import { csvFilesList } from '../../components/CsvFiles';
// context
import { SqlContext } from '../../context/SqlContext';
// styles
import styles from './codeEditorLayout.module.css';

const CodeEditorLayout = () => {

  const { setCommandValue, runSqlCommand, commandValue } = useContext(SqlContext);

  const handleClick = () => {

    // Get the table name in command
    const tableName = commandValue.split(' from ')[1].split(" ", 1).join()
    // fetch file as per table name
    const fileData = csvFilesList.find((item) => item.name === tableName)

    // Prepare command compatible for alasql to compile - replace table name with CSV(?)
    const alasqlCommand = commandValue.replace(`${tableName}`, 'CSV(?)');

    runSqlCommand(alasqlCommand, fileData.file)
  }

  return (
    <div className={styles.editorWrapper}>
      <CodeEditor
        fontSize={18}
        theme={'xcode'}
        mode={"mysql"}
        onChange={setCommandValue}
        value={commandValue}
      />
      <ButtonCustom
        secondary
        btnText={'Run Query'}
        customStyle={{ marginTop: '1rem' }}
        onClick={handleClick}
      />
    </div>
  )
}

export default CodeEditorLayout
