import React, { useState } from "react";
import Link from "next/link";
import Layout from "../../components/plantillas/Layout";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";

export default function Tokens() {
  const dispatch = useDispatch();
  const { blockchain, data } = useSelector((state) => state);
  console.log({ blockchain, data });

  const [cantidad, setCantidad] = useState("");
  const [cantidad2, setCantidad2] = useState("");

  const handleButtonBuy = async () => {
    const account = await blockchain.account;
    // console.log(blockchain.web3.utils)
    const ethers = blockchain.web3.utils.toWei(cantidad.toString());
    const comprarTokens = await blockchain.smartContract.methods
      .CompraTokens(account, cantidad)
      .send({ from: account, value: ethers });
    await comprarTokens;
    dispatch(fetchData());
    setCantidad("");
  };
  const handleButtonSell = async () => {
    const account = await blockchain.account;
    // console.log(blockchain.web3.utils)
    const venderTokens = await blockchain.smartContract.methods
      .DevolverTokens(cantidad2)
      .send({ from: account });
    await venderTokens;
    dispatch(fetchData());
    setCantidad2("");
  };

  return (
    <Provider store={store}>
      <Layout
        title={"Tokens | Next.js"}
        description={
          "Obten todo los tokens que quieras a un bajo precio, y suerte"
        }
      >
        {blockchain.account === null ? (
          <h2>Debes conectar tu Wallet</h2>
        ) : (
          <>
            <h1>Compra tokens ERC-20</h1>

            <h3>Tokens del contrato:{data.tokensContract}</h3>

            <h3>Hola Address: {blockchain.account}</h3>

            <h3>Mis Tokensr:{data.misTokens} JBJ-TOKEN</h3>

            <div>
              <input
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              {/* <input type="submit" onClick={handleButton}> Comprar Tokens </input> */}
              <button onClick={handleButtonBuy}>Comprar Tokens</button>
            </div>

            <h1>Vende tokens ERC-20</h1>

            <div>
              <input
                type="number"
                value={cantidad2}
                onChange={(e) => setCantidad2(e.target.value)}
              />
              {/* <input type="submit" onClick={handleButton}> Comprar Tokens </input> */}
              <button onClick={handleButtonSell}>Vender Tokens</button>
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
