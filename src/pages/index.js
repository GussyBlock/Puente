import Script from "next/script";
import { Background, HomeView } from "../components";
import Layout from "../components/plantillas/Layout";
// import store from "../redux/store";
// import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <div>
        <Script src="https://cdn.lordicon.com/xdjxvujz.js"></Script>
        <Background>
          {/* <Provider store={store}> */}
            <Layout>
              <HomeView />
            </Layout>
          {/* </Provider> */}
        </Background>
      </div>
    </>
  );
}
