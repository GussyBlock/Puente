import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <ContactHead />
      <header className={classes.header}>
        <main className={classes.header__container}>
          <Link href="/">
            <a>
              <Image
                src="/img/loteriagussy.png"
                width={220}
                height={105}
                alt="renian-icon"
              />
            </a>
          </Link>

          <nav className={classes.header__links} >
            <div>            
              <Link href="/posts/Tokens"><a>Gestion de tokens</a></Link>
          
              <Link href="/posts/Boletos"><a>Gestion de boletos</a></Link>
          
              <Link href="/posts/Premios"><a>Premios de Lotería</a></Link>
            </div>
          </nav>
        </main>
      </header>
    </>
  );
};
