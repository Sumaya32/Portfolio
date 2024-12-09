"use client";
import styles from "./form.module.css";

export const Form = ({letterIsOut})=>{
return(
<form action="https://formsubmit.co/sumaya.ma@hotmail.com" method="POST" className={`${styles.form} ${letterIsOut ? styles.out : ""}`}>
    <div  className={styles.inputContainer}>
        <h5>Name</h5>
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
)
}




