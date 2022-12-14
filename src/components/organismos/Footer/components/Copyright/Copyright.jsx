import React from "react";
import classes from "./copyright.module.scss";

export const Copyright = () => {
  return (
    <div className={classes.copyright}>
      <div className={classes.copyright__container}>
        <p>Copyright &copy;2022 | Todos los derechos reservados</p>
        <p>Diseñado por Gussy</p>
      </div>
    </div>
  );
};
