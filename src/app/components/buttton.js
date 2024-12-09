"use client";
import styles from "./button.module.css";

export const Button = ({handleClick, isclosed, openEnvelop, buttonTitleOne, buttonTitleTwo, buttonTitleThree})=>{
    return(
<div className={styles.btnContaner}>
{ !isclosed ? 
    <button onClick={handleClick} className={styles.btn}>{!openEnvelop ? buttonTitleOne : buttonTitleTwo} </button>
    : <>
    <button onClick={handleClick} className={styles.btn}>{!openEnvelop ? buttonTitleOne : buttonTitleTwo} </button>
    <button  className={styles.btn}>{buttonTitleThree}</button>
    </>
}
</div>
    )
}

