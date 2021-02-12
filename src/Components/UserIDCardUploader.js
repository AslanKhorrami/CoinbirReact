import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uuid from "react-uuid";
import axios from "axios";
import { Input, Button, Label } from "reactstrap";
import "../styles/components/UserIDCardUploader.scss";

function UserIDCardUploader() {
  const [IDcardImage, setIDCardImage] = useState(null);
  const [IDcardName, setIDCardName] = useState(uuid());
  const [IDcardURL, setIDCardURL] = useState("");
  const [IDcardProgress, setIDCardProgress] = useState(0);
  const [IDcardError, setIDCardError] = useState("");

  const saveFile = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setIDCardURL(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
    if (file) {
      const fileType = file["type"];
      const validImageType = [
        "image/gif",
        "image/jpg",
        "image/jpeg",
        "image/png",
      ];

      if (validImageType.includes(fileType)) {
        setIDCardError("");
        setIDCardImage(file);
        setIDCardName(IDcardName + "-" + fileName);
      } else {
        setIDCardError(
          "فایل بارگذاری شده باید با فرمت png، jpeg و یا gif باشد."
        );
      }
    }
  };

  const uploadFile = () => {
    if (IDcardImage) {
      if (IDcardImage.size > 10000000) {
        setIDCardImage(null);
        setIDCardError("حجم تصویر انتخابی باید کمتر از یک مگ باشد");
      } else {
        let fd = new FormData();
        fd.append("fileName", IDcardName);
        fd.append("formFile", IDcardImage);
        axios({
          method: "post",
          url: "https://coinbit-backend.com/api/File/upload",
          data: fd,
          onUploadProgress: (ProgressEvent) => {
            //   console.log(
            //     "میزان آپلود شده: " +
            //       Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            //       "%"
            //   );
            setIDCardProgress(
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
            );
          },
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userData")).accessToken
            }`,
          },
        }).then(() => {
          console.log("succeed");
          axios({
            method: "post",
            url: `https://coinbit-backend.com/api/Customer/customer_set_idcardpic?cusid=${
              JSON.parse(localStorage.getItem("userData")).id
            }&idcardpicname=${IDcardName}`,
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).accessToken
              }`,
            },
          }).catch(() => {
            setIDCardError("در ارسال عکس مشکلی پیش آمد");
          });
        });
      }
    } else {
      setIDCardError("لطفا عکس کارت ملی خود بارگذاری نمائید.");
    }
  };

  const removeIDCard = (event) => {
    event.preventDefault();
    setIDCardImage(null);
    setIDCardURL("");
  };

  // const inputField = useRef();

  // function buildFileSelector() {
  //   const fileSelector = document.createElement("input");
  //   fileSelector.setAttribute("type", "file");
  //   fileSelector.setAttribute("multiple", "multiple");
  //   return fileSelector;
  // }

  // const fileSelector = buildFileSelector();

  // const refImage = (event) => {};

  return (
    <div>
      <h3>بارگذاری تصویر کارت ملی</h3>
      <Input type="file" onChange={saveFile} id="IDCardSelector"></Input>
      {IDcardURL ? (
        <div className="existingIDCard">
          <FontAwesomeIcon
            icon={["fas", "window-close"]}
            onClick={removeIDCard}
          />
          <img
            src={IDcardURL}
            alt="تصویر کارت ملی"
            htmlFor="IDCardSelector"
          ></img>
          <Button onClick={uploadFile}>بارگذاری عکس کارت ملی</Button>
        </div>
      ) : (
        <div>
          {/* <img
            src={require("../Images/id-card.jpg")}
            alt="تصویر کارت ملی"
            onClick={refImage}
          ></img> */}
          <Label htmlFor="IDCardSelector">کارت ملی</Label>
          <Button onClick={uploadFile}>بارگذاری عکس کارت ملی</Button>
        </div>
      )}
      {IDcardProgress > 0 && IDcardProgress < 100 && (
        <p style={{ textAlign: "center", fontSize: "22px", color: "green" }}>
          در حال بارگذاری: {IDcardProgress}%
        </p>
      )}
      {IDcardProgress === 100 && (
        <p style={{ textAlign: "center", fontSize: "22px", color: "green" }}>
          فایل با موفقیت بارگذاری شد
        </p>
      )}
      {IDcardError && (
        <p style={{ color: "red", textAlign: "center" }}>{IDcardError}</p>
      )}
    </div>
  );
}

export default UserIDCardUploader;
