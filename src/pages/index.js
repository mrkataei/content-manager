import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import NewsLetter from "components/NewsLetter";

// import { resources } from "api/data";

export default function Home({ resources }) {
  return (
    <>
      <Layout>
        <ResourceHighlight />
        <NewsLetter resources={resources.slice(0, 2)} />
        {/* {JSON.stringify(resources)} */}
      </Layout>

      <script async type="text/javascript" src="../js/bulma.js"></script>
    </>
  );
}

// export function getStaticProps(){
//   return{
//     props:{
//       myData1: [1,2,3],
//       myData2: ["a", "b", "c"]
//     }
//   }
// }

export async function getStaticProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();
  return {
    props: {
      resources: data,
    },
  };
}
