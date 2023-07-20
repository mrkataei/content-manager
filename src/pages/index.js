import Navbar from "components/Navbar";
import ResourceHighlight from "components/ResourceHighlight";
import NewsLetter from "components/NewsLetter";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <NewsLetter />

      <script async type="text/javascript" src="../js/bulma.js"></script>
    </>
  );
}
