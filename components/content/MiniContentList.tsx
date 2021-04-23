import Content from "../../lib/content";
import ContentList from "./ContentList";

interface MiniContentListProps {
  contentMap: {
    // key here is heading for the content list
    [key: string]: Content[];
  };
}

function MiniContentList(props: MiniContentListProps) {
  return (
    <>
      {props.contentMap &&
        Object.keys(props.contentMap).map((heading: string, idx: number) => (
          <ContentList
            key={idx}
            heading={heading}
            contents={props.contentMap[heading]}
          />
        ))}
    </>
  );
}

export default MiniContentList;
