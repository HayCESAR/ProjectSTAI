import { FileTr } from './FileTr';
  
export const FilesList = ({files})  => {

    return files?.map((file) =>
        (!file.hasOwnProperty("deleted")) &&
            <FileTr name={file.name} date={file.date} time={file.time} chave={file.key} />
    );
}