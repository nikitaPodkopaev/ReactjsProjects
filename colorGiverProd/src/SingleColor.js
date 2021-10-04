import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {
 const {color, index} = props;
 const colorValue = rgbToHex(color.rgb[0],color.rgb[1], color.rgb[2]);
 const [alert, setAlert] = useState(false);
 const hadnleClick = () => {
   setAlert(true);
   navigator.clipboard.writeText(colorValue);
 }
 useEffect(() => {
   const timeOut = setTimeout(() => {
     setAlert(false);
   }, 1000);
   return () => {
     clearTimeout(timeOut);
   }
 }, [alert])
 return < article style={{backgroundColor:colorValue}} className={index > 10 ? "color color-light":"color false"} onClick = {hadnleClick}>
<p className="percent-value">{color.weight}%</p>
<p className="color-value">{colorValue}</p>
{alert && <p>Copied</p>}
 </article>
}

export default SingleColor
