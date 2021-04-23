import { GetStaticProps } from "next";
import Content, { getContents } from "../lib/content";

export default function Home(props) {
  return (
    <main>
      <div></div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let contents = getContents("contents");
  // sorting content in descending order
  contents = Content.sortContentsWithLastModDate(
    getContents("contents"),
    false
  );

  console.log(Object.keys(Content.createContentMap(contents, "contents")));

  return {
    props: {},
  };
};
