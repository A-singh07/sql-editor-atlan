import { useContext, lazy, Suspense } from 'react';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';
import { csvFilesList } from '../../components/CsvFiles';
// context
import { SqlContext } from '../../context/SqlContext';
// icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// styles
import styles from './codeEditorLayout.module.css';
// Lazy loaded Component
const CodeEditor = lazy(() => import('../../components/codeEditor/CodeEditor'))

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
        <Suspense fallback={<LoadingComponent />}>
          <CodeEditor
            fontSize={18}
            theme={'xcode'}
            mode={"mysql"}
            onChange={setCommandValue}
            value={commandValue}
          />
        </Suspense>
        <ButtonCustom
          secondary
          customStyle={{ marginTop: '1rem' }}
          btnText={'Run Query'}
          onClick={handleClick}
          rightIcon={<ArrowForwardIosRoundedIcon />}
        />
      </div>
    </div>
  )
}

export default CodeEditorLayout
