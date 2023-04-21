import React, { useState } from "react";
import style from "../../styles/ToggleSwitch.module.css";

function ToggleSwitch(prop) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
   handleSubmit(isToggled);
  };
  const handleSubmit=(e)=>{
    prop.onSubmit(e);
  }
  return (
    <div>
         <label className={style.toggle_switch} >
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={style.switch} />
      </label>
    </div>
  );
}
export default ToggleSwitch;
