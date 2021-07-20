import React from 'react';
import { CustomButton} from './Button.style';

function Button({type,text,onClick }) {
      return <CustomButton type={type} onClick={onClick}>{text}</CustomButton>;
}

export default Button
