import React, { useState } from "react";
import Link from "next/link";
import Layout from "../../components/plantillas/Layout";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";

export default function Premios() {
  const dispatch = useDispatch();
  const { blockchain, data } = useSelector((state) => state);
  console.log({ blockchain, data });

  const handleButtonGanador = async () => {
    const account = await blockchain.account;
    // console.log(blockchain.web3.utils)
    const generarWin = await blockchain.smartContract.methods
      .GenerarGanador()
      .send({ from: account });
    // const boletos_comprados = await blockchain.smartContract.methods.boletos_comprados().call()
    // console.log(boletos_comprados)
    await generarWin;
    dispatch(fetchData());
  };

  // const formatear =async () => {

  // }
  return (
    <Provider store={store}>
      <Layout
        title={"Boletos | Next.js"}
        description={"Al alcanse de un click"}
      >
        <h1>El poso acumulado es de: {data.bote} JBJ-TOKEN</h1>
        <hr />

        {blockchain.account === null ? (
          <h2>Debes conectar tu Wallet</h2>
        ) : (
          <>
            {blockchain.account ===
            "0x81423bbf2aa2a73b394a1e3a2fb889882ef6c2ab" ? (
              <>
                <h2>Solo el OWNER podrá ver el boton </h2>
                <button onClick={handleButtonGanador}>Generar ganador</button>
                <hr />
              </>
            ) : (
              <></>
            )}

            {data.ganador === null ? (
              <>
                <h2>Aun no se genera ganador</h2>
              </>
            ) : (
              <>
                <h2>En hora buena</h2>
                <h2>El ganador es {data.ganador}</h2>
                {/* <div>
                                <>
                                ¿Desea reiniciar el juego? 
                                </>
                            </div>
                            {   
                                formatear()
                            } */}
              </>
            )}

            <div></div>
          </>
        )}

        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </Provider>
  );
}
