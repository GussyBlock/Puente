import React from "react";
import { Copyright } from "./components/Copyright/Copyright";
import Image from "next/image";
import classes from "./footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__description}>
            <div className={classes.footer__descriptionImage}>
              <Image
                src="/img/bc.png"
                layout="responsive"
                width={360}
                height={240}
                alt="image"
              />
            </div>
            <p>
              La blockchain es el futuro
            </p>
          </div>

          <div className={classes.footer__contact}>
            <h3>Arquitectura :</h3>
            <ul>
              <li>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/dfxesbyu.json"
                    trigger="hover"
                    colors="primary:#5c0a33,secondary:#b4b4b4"
                  ></lord-icon>
                </div>
                <p>Next.js</p>
              </li>

              <li>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/ndfdylqe.json"
                    trigger="hover"
                    colors="primary:#5c0a33,secondary:#b4b4b4"
                  ></lord-icon>
                </div>
                <p>Sass</p>
              </li>

              <li>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/efdhjqgx.json"
                    trigger="hover"
                    colors="primary:#5c0a33,secondary:#b4b4b4"
                  ></lord-icon>
                </div>
                <p>Truffle / Ganache</p>
              </li>

              <li>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/ggqtvqxi.json"
                    trigger="hover"
                    colors="primary:#5c0a33,secondary:#b4b4b4"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
                <p>Solidity</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Copyright />
    </>
  );
};
