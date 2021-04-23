import Content from "../../lib/content";

interface ContentListProps {
  heading: string;
  contents: Content[];
}

function ContentList(props: ContentListProps) {
  return (
    <section className="content-section">
      <h2>{props.heading}</h2>

      <div className="hr"></div>

      <ul className="content-list">
        {props.contents &&
          props.contents.map((content: Content, idx: number) => {
            return (
              <li key={idx} className="list-item">
                <div className="vertical-line"></div>

                <div className="cover-img">
                  <img
                    src={`${content.coverImageUrl}`}
                    alt={`${content.title}`}
                  />
                </div>

                <div className="content-info">
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default ContentList;
