import React, { useRef } from "react";
import styles from "./contact-head.module.scss";
import useHover from "@react-hook/hover";
import { useDispatch } from "react-redux";
import { connect } from "../../../../../redux/blockchain/blockchainActions";

export const  ContactHead = () => {
    const dispatch = useDispatch();

  const targetDir = useRef(null);
  const targetHours = useRef(null);
  const targetNumb = useRef(null);

  const hoverDir = useHover(targetDir);
  const hoverHours = useHover(targetHours);
  const hoverNumb = useHover(targetNumb);
  return (
    <>
    <div className={styles.contact}>
      <main className={styles.contact__container}>
        <div className={styles.contact__info}>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/elzslyvl.json"
              trigger={hoverDir ? "loop" : "none"}
              colors="primary:#4d2c19,secondary:#848484"
              style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            <p ref={targetDir}>Lima Peru, SJL</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/sdhhsgeg.json"
              trigger={hoverHours ? "loop" : "none"}
              colors="primary:#4d2c19,secondary:#848484"
              style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            <p ref={targetHours}>gussyblockchain@gmail.com</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/iguuenru.json"
              trigger={hoverNumb ? "loop" : "none"}
              colors="primary:#4d2c19,secondary:#848484"
              style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            <p ref={targetNumb}>(+51) 996116836</p>
          </div>
        </div>
        <div className={styles.contact__login}>
          <button
            onClick={() => {
              dispatch(connect());
              // getData();
            }}
          >
            Conect Wallet
          </button>
        </div>
      </main>
    </div>
    </>
  );
};
