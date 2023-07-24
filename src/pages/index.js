import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import NewsLetter from "components/NewsLetter";
import { useEffect } from "react";

// import { resources } from "api/data";

export default function Home({ resources }) {
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/resources");
  // }, []);
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

// build time
// we cant api call in client side from another domain cros problem
export async function getStaticProps() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  console.log("nool");
  return {
    props: {
      resources: data,
    },
  };
}

// when required called every time visit page
// export async function getServerSideProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();
//   console.log("hell")
//   return {
//     props: {
//       resources: data,
//     },
//   };
// }
