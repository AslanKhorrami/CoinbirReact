import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import RegistrationPersonalInfoForm from "../Components/RegistrationPersonalInfoForm";
import RegistrationUploadImages from "../Components/RegistrationUploadImages";
import UserApproval from "../Components/UserApproval";
import axios from "axios";
import ActiveUserWithdraws from "../Components/ActiveUserWithdraws";

function UserWithdraws() {
  document.title = "برداشت های من";

  localStorage.removeItem("Mobile No.");

  let localData = localStorage.getItem("userData");

  const parsedLocalData = JSON.parse(localData);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://coinbit-backend.com/api/Customer/get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(localData).accessToken}`,
      },
    }).then((Response) => {
      // console.log(Response.data.data);
      if (Response.data.data.statusId !== JSON.parse(localData).statusId) {
        // JSON.parse(localData).statusId = Response.data.statusId;
        const x = JSON.parse(localData);
        x.statusId = Response.data.data.statusId;
        // localData = JSON.stringify(x);
        localStorage.setItem("userData", JSON.stringify(x));
        window.location.reload();
      }
      if (Response.data.data.fatherName !== JSON.parse(localData).fatherName) {
        // JSON.parse(localData).statusId = Response.data.statusId;
        const x = JSON.parse(localData);
        x.fatherName = Response.data.data.fatherName;
        // localData = JSON.stringify(x);
        localStorage.setItem("userData", JSON.stringify(x));
        window.location.reload();
      }
    });
    return () => {};
  }, [localData]);

  function loadedLocalData() {
    if (localData) {
      return true;
    }
  }

  const isLoaded = loadedLocalData();
  return (
    <div>
      {isLoaded ? (
        <div>
          {parsedLocalData.statusId === 1 &&
            parsedLocalData.fatherName === null && (
              <RegistrationPersonalInfoForm />
            )}
          {parsedLocalData.statusId === 1 &&
            parsedLocalData.fatherName !== null &&
            parsedLocalData.idcardpic === null && <RegistrationUploadImages />}
          {parsedLocalData.statusId === 1 &&
            parsedLocalData.fatherName !== null &&
            parsedLocalData.idcardpic !== null && <UserApproval />}
          {parsedLocalData.statusId === 2 && <ActiveUserWithdraws />}
        </div>
      ) : (
        <Redirect to={{ pathname: "log-in" }} />
      )}
    </div>
  );
}

export default UserWithdraws;
