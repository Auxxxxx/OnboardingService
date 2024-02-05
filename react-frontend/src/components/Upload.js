import React, { useRef, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

//type image [in BD]
//id
//name
//url
//
//
//
//

const UploadFile = () => {
  const [fileList, setFileList] = useState([
    // {
    //   uid: '',
    //   name: '',
    //   status: '',
    //   url: '',
    // },
  ]);

  const[isHidden, setHidden] = useState(false);
  const[isSucess, setSuccess] = useState(0);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  function onClick() {
    let isError = false;
    fileList.forEach((item) => {
      ((isError) => {
        fetch("URL_TO_LOAD_PICTURE", {
          method: "POST",
          body: item.url,
        })
          .then((responce) => {
            if (!responce.ok) throw new Error("Error in sending data");
          })
          .then(() => {setSuccess(1)})
          .catch((err) => {
            console.log(err);
            isError = true;
            setSuccess(2);
          })
          .finally(() => {
            if (!isError) {
              console.log("I M HERE");
              setFileList([]);
            }
          });
      })(isError);
    });
  }

  return (<>
    <ImgCrop rotationSlider>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
    <button className="" onClick={onClick}>Send to server</button>
    {(isSucess === 1) && <p className="form-scsf">Succesful</p>}
    {(isSucess === 2) && <p className="form-bad">Unsuccesful, send data again</p>}
    </>
  );
};
export default UploadFile;