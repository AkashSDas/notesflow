import fs from "fs";
import { GetStaticProps } from "next";
import path from "path";
import Content from "../lib/content";

export default function Home(props) {
  return (
    <main>
      <div>{JSON.stringify(props.filePaths)}</div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Get the ".md" file paths recursively
  const getAllFilePathsFromFolder = (basePath: string) => {
    let paths = [];

    if (fs.lstatSync(basePath).isDirectory()) {
      const folders = fs.readdirSync(basePath);
      folders.forEach((folder: string) => {
        let fileExtension = folder.split(".")[folder.split(".").length - 1];
        if (fileExtension === "md") paths.push(path.join(basePath, folder));
        else {
          if (fs.lstatSync(path.join(basePath, folder)).isDirectory()) {
            const innerFilePaths = getAllFilePathsFromFolder(
              path.join(basePath, folder)
            );
            paths = [...paths, ...innerFilePaths];
          }
        }
      });
    } else if (fs.lstatSync(basePath).isFile()) {
      let fileExtension = basePath.split(".")[basePath.split(".").length - 1];
      if (fileExtension === "md") paths.push(basePath);
    }

    return paths;
  };

  // Read markdown data
  const getContents = (): Content[] => {
    let contents: Content[] = [];

    const filePaths = getAllFilePathsFromFolder("contents");
    filePaths.forEach((filePath: string) => {
      const content = fs.readFileSync(filePath).toString();
      contents.push(
        new Content(Content.extractMetaDataFromContentStr(content))
      );
    });

    return contents;
  };

  return {
    props: { contents: getContents() },
  };
};
