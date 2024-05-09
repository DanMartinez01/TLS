import Feature from "../components/Feature";
import Pricing from "../components/Pricing/Pricing";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import SimpleSlider from "../components/SimpleSlider";

export default function Home() {
  return (
    <>
      <SeoHead title="Trans Lingual Solutions" />
      <Layout>
        <SimpleSlider />
        <Pricing />
        <Services />
        <Feature />
      </Layout>
    </>
  );
}
