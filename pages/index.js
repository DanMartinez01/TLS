import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import SimpleSlider from "../components/SimpleSlider";

export default function Home() {
  return (
    <>
      <SeoHead title="Trans Lingual Solutions" />
      <Layout>
        <SimpleSlider />
        {/* <Hero /> */}
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
