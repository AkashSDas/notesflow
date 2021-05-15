import Link from "next/link";
import Content from "../../lib/content";

interface ContentListProps {
  heading: string;
  contents: Content[];
}

function ContentList(props: ContentListProps) {
  const formatHeadingText = (text: string) => {
    let words = text.split("-");
    for (let i = 0; i < words.length; i++) {
      words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1)}`;
    }
    text = words.join(" ");
    return text;
  };

  const tagBtn = (tag: string, key: number) => (
    <span key={key} className={`tag tag-sm tag-contrast tag-${tag}`}>
      #{tag}
    </span>
  );

  return (
    <section className="content-section">
      <h2>{formatHeadingText(props.heading)}</h2>

      <div className="hr"></div>

      <ul className="content-list">
        {props.contents &&
          props.contents.map((content: Content, idx: number) => {
            return (
              <Link
                href={{
                  pathname: `/content/${content.fileName}`,
                  // query: {
                  //   filePath: content.filePath,
                  // },
                }}
              >
                {/* Wrapping the <li> with <a> so that I can open the post in a new tab
                    which is not possible with just <Link> 
                    For more info follow this GitHub discussion => https://github.com/vercel/next.js/discussions/15486
                */}
                <a rel="noreferrer">
                  <li key={idx} className="list-item">
                    <div className="vertical-line"></div>

                    {/* <div className="cover-img">
                  <img
                    src={`${content.coverGifUrl}`}
                    alt={`${content.title}`}
                  />
                </div> */}

                    <div className="content-info">
                      <h3>{content.title}</h3>
                      <p>{content.description}</p>

                      <div className="tags-group">
                        {content.tags.map((tag: string, idx: number) =>
                          tagBtn(tag, idx)
                        )}
                      </div>
                    </div>
                  </li>
                </a>
              </Link>
            );
          })}
      </ul>
    </section>
  );
}

export default ContentList;
