import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uuid from "react-uuid";
import axios from "axios";
import { Input, Button, Label } from "reactstrap";
import "../styles/components/UserIDCardUploader.scss";

function UserBankCardUploader() {
  const [bankCardImage, setBankCardImage] = useState(null);
  const [bankCardName, setBankCardName] = useState(uuid());
  const [bankCardURL, setBankCardURL] = useState("");
  const [bankCardProgress, setBankCardProgress] = useState(0);
  const [bankCardError, setBankCardError] = useState("");

  const saveBankCardFile = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setBankCardURL(reader.result);
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
        setBankCardError("");
        setBankCardImage(file);
        setBankCardName(bankCardName + "-" + fileName);
      } else {
        setBankCardError(
          "فایل بارگذاری شده باید با فرمت png، jpeg و یا gif باشد."
        );
      }
    }
  };

  const uploadbankCardFile = () => {
    if (bankCardImage) {
      if (bankCardImage.size > 10000000) {
        setBankCardImage(null);
        setBankCardError("حجم تصویر انتخابی باید کمتر از یک مگ باشد");
      } else {
        let fd = new FormData();
        fd.append("fileName", bankCardName);
        fd.append("formFile", bankCardImage);
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
            setBankCardProgress(
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
            url: `https://coinbit-backend.com/api/Customer/customer_set_bankcardpic?cusid=${
              JSON.parse(localStorage.getItem("userData")).id
            }&bankcardpic=${bankCardName}`,
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userData")).accessToken
              }`,
            },
          }).catch(() => {
            setBankCardError("در ارسال عکس مشکلی پیش آمد");
          });
        });
      }
    } else {
      setBankCardError("لطفا عکس کارت بانکی خود بارگذاری نمائید.");
    }
  };

  const removeBankCard = (event) => {
    event.preventDefault();
    setBankCardImage(null);
    setBankCardURL("");
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
      <h3>بارگذاری تصویر کارت بانکی</h3>
      <Input
        type="file"
        onChange={saveBankCardFile}
        id="BankCardSelector"
      ></Input>
      {bankCardURL ? (
        <div className="existingIDCard">
          <FontAwesomeIcon
            icon={["fas", "window-close"]}
            onClick={removeBankCard}
          />
          <img src={bankCardURL} alt="تصویر کارت بانکی"></img>
          <Button onClick={uploadbankCardFile}>بارگذاری عکس کارت بانکی</Button>
        </div>
      ) : (
        <div>
          {/* <img
            src={require("../Images/id-card.jpg")}
            alt="تصویر کارت ملی"
            onClick={refImage}
          ></img> */}
          <Label htmlFor="BankCardSelector">کارت بانکی</Label>
          <Button onClick={uploadbankCardFile}>بارگذاری عکس کارت بانکی</Button>
        </div>
      )}
      {bankCardProgress > 0 && bankCardProgress < 100 && (
        <p style={{ textAlign: "center", fontSize: "22px", color: "green" }}>
          در حال بارگذاری: {bankCardProgress}%
        </p>
      )}
      {bankCardProgress === 100 && (
        <p style={{ textAlign: "center", fontSize: "22px", color: "green" }}>
          فایل با موفقیت بارگذاری شد
        </p>
      )}
      {bankCardError && (
        <p style={{ color: "red", textAlign: "center" }}>{bankCardError}</p>
      )}
    </div>
  );
}

export default UserBankCardUploader;
