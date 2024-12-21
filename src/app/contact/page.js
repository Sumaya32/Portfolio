"use client";
import { useState } from "react";
import { Form } from "../components/form";
import { Button } from "../components/buttton";
import styles from "./contact.module.css";

export default function Contact() {
   const [letterIsOut, setLetterIsOut ]= useState(false);
   const [isclosed, setIsClosed ]= useState(true);
   const [isHalfOpen, setIsHalfOpen ]= useState(true);
   const [ openEnvelop,  setOpenEnvelop]= useState(false);

   const handleClick = ()=>{
    setIsHalfOpen(!isHalfOpen)
    setOpenEnvelop(!openEnvelop)
    setIsClosed(!isclosed)
    if(letterIsOut === false){setTimeout(function() {setLetterIsOut(true)}, 2000);}
    else{setTimeout(function() {setLetterIsOut(false)}, 2); }
   };
  
    return (
    <div className={styles.container}>
        <div className={styles.smallContainer}>
            <h2>Keep in touch</h2>
            <div className={styles.test}>
          <div className={`${styles.wrapper }`}>

<div className={` ${styles.lid} ${isclosed && !letterIsOut ? styles.closed : styles.opened } `}></div>        
                <div className={styles.envelope}></div>
                <div className={`${ styles.letter} ${letterIsOut ? styles.out : ""}`}>
                    <Form letterIsOut={letterIsOut}/>
                </div> 
</div>
         <Button isclosed={isclosed} openEnvelop={openEnvelop} buttonTitleOne={"Open the envelope"} buttonTitleTwo={"Close the envelope"} buttonTitleThree={"Send"} handleClick={handleClick}/>
         </div>
    </div>
  </div>
    );
  }
  