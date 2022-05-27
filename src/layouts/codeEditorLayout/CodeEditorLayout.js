import { useContext } from 'react';
import CodeEditor from '../../components/codeEditor/CodeEditor';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import { csvFilesList } from '../../components/CsvFiles';
// context
import { SqlContext } from '../../context/SqlContext';
// icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
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
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <div className={styles.layoutWrapper}>
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
            customStyle={{ marginTop: '1rem' }}
            btnText={'Run Query'}
            onClick={handleClick}
            rightIcon={<ArrowForwardIosRoundedIcon />}
          />
        </div>
      </div>

    </div>
  )
}

export default CodeEditorLayout
