"use client";
import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
   const [letterIsOut, setLetterIsOut ]= useState(false);
   const [openEnvelopOne, setOpenEnvelopOne ]= useState(true);
   const [ openEnvelopTwo,  setOpenEnvelopTwo ]= useState(false);
   const [ openEnvelop,  setOpenEnvelop]= useState(false);


   const handleClick = ()=>{
    setLetterIsOut(!letterIsOut)
    setOpenEnvelopOne(!openEnvelopOne)
    setOpenEnvelopTwo(!openEnvelopTwo)
    setOpenEnvelop(!openEnvelop)
   };
  
    return (
    <div className={styles.container}>
        <div className={styles.miniContainer}>
            <div className={`${ styles.wrapper}`}>
                <div className={` ${openEnvelopOne ? styles.lid : styles.openEnvelopOne} ${openEnvelopOne ? styles.one : styles.openEnvelopOne}`}></div>
                <div className={` ${openEnvelopTwo ? styles.lid : ""} ${openEnvelopTwo ? styles.two :  ""}`} ></div>
        
                <div className={styles.envelope}></div>
                <div className={`${ styles.letter} ${letterIsOut ? styles.out : ""}`}>
                <h3 className={'contactHeader'}>Keep in touch</h3>
                <form action="https://formsubmit.co/sumaya.ma@hotmail.com" method="POST" className={styles.form}>
                    <div  className={styles.inputContainer}>
                        <h5>Name: </h5>
                        <input type="text" name="name" required placeholder="name" className={`${'input'} ${'name'}`} />
                    </div>

                    <div className={styles.inputContainer}>
                        <h5>Email</h5>
                        <input type="email" name="email" required placeholder="example@hotmail.com" className={`${'input'} ${'email'}`} />
                    </div>

                    <div  className={styles.inputContainer}>
                        <h5>Message</h5>
                        <textarea name="message" placeholder="Write your message here!" className={`${'input'} ${'textarea'}`}  type="input"></textarea>
                    </div>

                    <input type="hidden" name="_next" value="https://sumaya.be/confirmation"></input>
                    <input type="hidden" name="_subject" value="New submission!"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
        </div>
       
      </div>
    </div>
    <button onClick={handleClick} className={styles.btn}>{!openEnvelop ? "Open the envelope" : "Close the envelope"} </button>
  </div>
    );
  }
  