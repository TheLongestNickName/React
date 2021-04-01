import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Preloader/preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

let ProfileInfo = ({profile,status,updateStatus,...props}) => {
  if (!profile) {
    return <Preloader />;
  }
  
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
