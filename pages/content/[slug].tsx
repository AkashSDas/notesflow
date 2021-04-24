import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkslug from "remark-slug";
// import toc from "remark-toc";
import Content, {
  getAllFilePathsFromFolder,
  getContent,
} from "../../lib/content";

interface ContentPageProps {
  content: string;
}

function ContentPage(props: ContentPageProps) {
  // To retrive query passed in <Link> (next js)
  // const router = useRouter();
  // const {
  //   query: { filePath },
  // } = router;

  const content: Content = JSON.parse(props.content);

  const tagBtn = (tag: string, key: number) => (
    <span key={key} className={`tag tag-sm tag-contrast tag-${tag}`}>
      #{tag}
    </span>
  );

  return (
    <main id="content-section">
      <h1>{content.title}</h1>

      <div className="hr"></div>

      <div className="content-info">
        <div className="tags-group">
          {content.tags.map((tag: string, idx: number) => tagBtn(tag, idx))}
        </div>
      </div>

      {/* <img src={`${content.coverGifUrl}`} alt={`${content.title}`} /> */}

      <section className="react-markdown-content">
        <ReactMarkdown remarkPlugins={[remarkslug]}>
          {content.content}
        </ReactMarkdown>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug: fileName } = params;
  const filePaths = getAllFilePathsFromFolder("contents");

  // Retrive filepath for content in filename
  // !NOTE: This assumes that filenames should be unique in contents dir
  let contentFilePath = null;
  filePaths.forEach((filePath: string) => {
    const currentFilename = filePath.split(path.sep)[
      filePath.split(path.sep).length - 1
    ];

    if (currentFilename === fileName) contentFilePath = filePath;
  });

  const content = getContent(contentFilePath);

  return {
    props: { content: JSON.stringify(content) },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePaths = getAllFilePathsFromFolder("contents");
  let paths = [];
  for (const filePath in filePaths) {
    filePaths.push({ params: { filePath: filePath } });
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export default ContentPage;
