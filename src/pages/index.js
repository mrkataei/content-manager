import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import NewsLetter from "components/NewsLetter";

export default function Home() {
  return (
    <>
      <Layout>
        <ResourceHighlight />
        <NewsLetter />
      </Layout>

      <script async type="text/javascript" src="../js/bulma.js"></script>
    </>
  );
}
