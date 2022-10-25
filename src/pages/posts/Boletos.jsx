import React, { useState } from "react";
import Link from "next/link";
import Layout from "../../components/plantillas/Layout";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";

export default function Boletos() {
  const dispatch = useDispatch();
  const { blockchain, data } = useSelector((state) => state);
  console.log({ blockchain, data });

  const [numBoletos, setNumBoletos] = useState("");
  // const [precio, setPrecio] = useState('');

  const handleButtonBuyy = async () => {
    const account = await blockchain.account;
    // console.log(blockchain.web3.utils)
    const ComprarBoletos = await blockchain.smartContract.methods
      .CompraBoleto(numBoletos)
      .send({ from: account });
    await ComprarBoletos;
    dispatch(fetchData());
    setNumBoletos("");
  };

  return (
    <Provider store={store}>
      <Layout
        title={"Boletos | Next.js"}
        description={"Al alcanse de un click"}
      >
        {blockchain.account === null ? (
          <h2>Debes conectar tu Wallet</h2>
        ) : (
          <>
            <h1> Compra tus Boletos y buena suerte</h1>

            <h3>Num de boletos: {data.numDeBoletos}</h3>

            <div>
              <input
                type="number"
                value={numBoletos}
                onChange={(e) => setNumBoletos(e.target.value)}
              />
              {/* <input type="submit" onClick={handleButton}> Comprar Tokens </input> */}
              <button onClick={handleButtonBuyy}>Comprar Boletos</button>
              {numBoletos == 0 ? (
                <></>
              ) : (
                <>
                  {numBoletos == 1 ? (
                    <h4>
                      {numBoletos} Boleto te costará: {numBoletos * 2}{" "}
                    </h4>
                  ) : (
                    <>
                      <h4>
                        Los {numBoletos} Boletos te costarán: {numBoletos * 2}{" "}
                      </h4>
                    </>
                  )}
                </>
              )}
            </div>
          </>
        )}

        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </Provider>
  );
}
