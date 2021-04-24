import { GetStaticProps } from "next";
import MiniContentList from "../../components/content/MiniContentList";
import Content, { getContents } from "../../lib/content";

interface ContentsPageProps {
  contents: Content[];
}

function ContentsPage(props: { contentsMap: string }) {
  return (
    <main>
      <MiniContentList contentMap={JSON.parse(props.contentsMap)} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { contentsMap: string };
}> => {
  // sorting content in descending order
  let contentsMap = Content.createContentMap(
    Content.sortContentsWithLastModDate(getContents("contents"), false),
    "contents"
  );

  return {
    props: {
      // Cannot pass object directly, so stringifying it here and parsing it
      // at the destination
      contentsMap: JSON.stringify(contentsMap),
    },
  };
};

export default ContentsPage;
