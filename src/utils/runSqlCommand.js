import alasql from 'alasql';

export const sqlCommand = (command) => {

  alasql.promise(command)
    .then(res => console.log(res))
    .catch(err => console.log('Error in running the command!', err));
}