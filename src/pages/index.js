import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import NewsLetter from "components/NewsLetter";

import { resources } from "api/data";

export default function Home() {
  return (
    <>
      <Layout>
        <ResourceHighlight />
        <NewsLetter />
        {JSON.stringify(resources)}
      </Layout>

      <script async type="text/javascript" src="../js/bulma.js"></script>
    </>
  );
}
