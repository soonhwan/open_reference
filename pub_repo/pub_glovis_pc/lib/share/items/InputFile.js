import { useState, useCallback } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const InputFile = ({uploadList, buttonW=160, height=48, marginLeft=10, resVertical=false}) => {
  const [filePath, setFilePath] = useState(resVertical === false ? null : []);

  let input_style = { width: `calc(100% - ${buttonW+10}px)`, height: `${height}px` };

  const inputFileUpload = useCallback((e) => {
    const files = e.target.files;
    const _files = Object.values(files);
    let filesPath = '';
    const filesArray = [];
    _files.map((v, i) => {
      if (resVertical === false) {
        filesPath += i < _files.length-1 ? `${v.name}, ` : `${v.name}`;
      } else {
        filesArray.push(v);
      }
    });
    setFilePath(resVertical === false ? filesPath : filesArray);
    uploadList(files);    
  }, []);

  const handleClickDelete = useCallback((num) => () => {
    const filesArray = [...filePath];
    filesArray.splice(num, 1);
    setFilePath(filesArray);
  }, [filePath]);

  return (
    <div className={resVertical ? "input-file-wrap res-vertical" : "input-file-wrap"}>
      {
        resVertical === false
        ? (
          <span className="input-base">
            <input type="text" defaultValue={filePath} style={input_style} disabled />
          </span>
        ) : (
          <ul className="file-list-multi">
            {filePath.map((v, i) => <li key={i}><span className="btn-delete" onClick={handleClickDelete(i)}>X</span>{v.name}</li>)}
          </ul>
        )
      }
      <span className="file-btn-wrap">
        <Button size="big" background="gray" title="찾아보기" width={buttonW} height={height} marginLeft={marginLeft} />
        <input type="file" multiple onChange={inputFileUpload} />
      </span>
    </div>
  )
}

InputFile.propTypes = {
  uploadList: PropTypes.func,
  buttonW: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number
}

export default InputFile;