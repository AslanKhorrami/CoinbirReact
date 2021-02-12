import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uuid from "react-uuid";
import axios from "axios";
import { Input, Button, Label } from "reactstrap";
import "../styles/components/UserIDCardUploader.scss";

function UserSelfiUploader() {
  const [selfiImage, setSelfiImage] = useState(null);
  const [selfiName, setSelfiName] = useState(uuid());
  const [selfiURL, setSelfiURL] = useState("");
  const [selfiProgress, setSelfiProgress] = useState(0);
  const [selfiError, setSelfiError] = useState("");

  const saveSelfiFile = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setSelfiURL(reader.result);
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
        setSelfiError("");
        setSelfiImage(file);
        setSelfiName(selfiName + "-" + fileName);
      } else {
        setSelfiError(
          "فایل بارگذاری شده باید با فرمت png، jpeg و یا gif باشد."
        );
      }
    }
  };

  const uploadSelfiFile = () => {
    if (selfiImage) {
      if (selfiImage.size > 10000000) {
        setSelfiImage(null);
        setSelfiError("حجم تصویر انتخابی باید کمتر از یک مگ باشد");
      } else {
        let fd = new FormData();
        fd.append("fileName", selfiName);
        fd.append("formFile", selfiImage);
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
            setSelfiProgress(
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
            url: `https://coinbit-backend.com/api/Customer/customer_set_selfiepic?cusid=${
              JSON.parse(localStorage.getItem("userData")).id
            }&selfiepic=${selfiName}`,
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).accessToken
              }`,
            },
          }).catch(() => {
            setSelfiError("در ارسال عکس مشکلی پیش آمد");
          });
        });
      }
    } else {
      setSelfiError("لطفا عکس سلفی خود بارگذاری نمائید.");
    }
  };

  const removeSelfi = (event) => {
    event.preventDefault();
    setSelfiImage(null);
    setSelfiURL("");
  };

  return (
    <div>
      <h3>بارگذاری تصویر سلفی</h3>
      <Input type="file" onChange={saveSelfiFile} id="SelfiSelector"></Input>
      {selfiURL ? (
        <div className="existingIDCard">
          <FontAwesomeIcon
            icon={["fas", "window-close"]}
            onClick={removeSelfi}
          />
          <img src={selfiURL} alt="تصویر سلفی"></img>
          <Button onClick={uploadSelfiFile}>بارگذاری عکس سلفی</Button>
        </div>
      ) : (
        <div>
          <Label htmlFor="SelfiSelector">سلفی</Label>
          <Button onClick={uploadSelfiFile}>بارگذاری عکس سلفی</Button>
        </div>
      )}
      {selfiProgress > 0 && selfiProgress < 100 && (
        <p style={{ textAlign: "center", fontSize: "22px", color: "green" }}>
          در حال بارگذاری: {selfiProgress}%
        </p>
      )}
      {selfiProgress === 100 && (
        <p style={{ textAlign: "center", fontSize: "22px", color: "green" }}>
          فایل با موفقیت بارگذاری شد
        </p>
      )}
      {selfiError && (
        <p style={{ color: "red", textAlign: "center" }}>{selfiError}</p>
      )}
    </div>
  );
}

export default UserSelfiUploader;
