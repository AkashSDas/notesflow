import fs from "fs";
import path from "path";

interface ContentInterface {
  title: string;
  description: string;
  tags: string[];
  lastmod: Date;
  publishdate: Date;
  content: string;
  coverImageUrl: string;
  coverGifUrl: string;
  filePath: string;
  fileName: string;
}

class Content {
  title: string;
  description: string;
  tags: string[];
  lastmod: Date;
  publishdate: Date;
  content: string;
  coverImageUrl: string;
  coverGifUrl: string;
  filePath: string;
  fileName: string;

  constructor(data: ContentInterface) {
    this.title = data.title;
    this.description = data.description;
    this.tags = data.tags;
    this.lastmod = data.lastmod;
    this.publishdate = data.publishdate;
    this.content = data.content;
    this.coverImageUrl = data.coverImageUrl;
    this.coverGifUrl = data.coverGifUrl;
    this.filePath = data.filePath;
    this.fileName = data.fileName;
  }

  static convertStringToDate = (dateStr: string): Date => {
    return new Date(Date.parse(dateStr));
  };

  static extractMetaDataFromContentStr = (
    content: string,
    filePath: string
  ): ContentInterface => {
    /**
     * contentList metadata shape
     *
     * '---',
     * 'title: Accural Accounting',
     * 'description: Understanding accural accounting, difference between expenses, revenues, net income and cash inflow, outflow, net cast flow',
     * 'tags:',
     * '  - accounting',
     * '  - accural-accounting',
     * '  - revenues',
     * '  - expenses',
     * 'lastmod: 2020-12-04T13:53:06',
     * 'publishdate: 2020-12-04T13:53:06',
     * 'coverImage: ""',
     * 'coverGif: ""',
     * '---',
     */

    let contentList = content.split("\n");

    const splitFromColonAndGetValue = (str: string) => str.split(":")[1].trim();
    const splitFromColonAndGetDateValue = (dateStr: string) => {
      // [ 'lastmod', ' 2020-12-04T13', '53', '06' ]
      const splittedStr = dateStr.split(":");
      return `${splittedStr[1].trim()}:${splittedStr[2]}:${splittedStr[3]}:${
        splittedStr[4]
      }`;
    };
    const splitFromColorForUrls = (url: string) => {
      // empty url
      if (url.split(":")[1].trim() === '""') return url.split(":")[1].trim();

      const httpsStr = url.split(":")[1].trim().split('"')[1];
      const remainingUrl = url.split(":")[2].split('"')[0];
      return [httpsStr, remainingUrl].join(":");
    };

    const title = splitFromColonAndGetValue(contentList[1]);
    const description = splitFromColonAndGetValue(contentList[2]);

    // tags idx is 3 and tags will start from 4
    let tags = [];
    let tagCounter = 4;
    for (tagCounter; tagCounter < contentList.length; tagCounter++) {
      // starting of a tag is '-'
      let tag = contentList[tagCounter].trim().split(" ");
      if (tag[0] === "-") {
        tags.push(tag[1]);
      } else {
        break;
      }
    }

    const lastmod = Content.convertStringToDate(
      splitFromColonAndGetDateValue(contentList[tagCounter])
    );
    const publishdate = Content.convertStringToDate(
      splitFromColonAndGetDateValue(contentList[tagCounter + 1])
    );

    const coverImageUrl = splitFromColorForUrls(contentList[tagCounter + 2]);
    const coverGifUrl = splitFromColorForUrls(contentList[tagCounter + 3]);

    // +4 to skip two '---' and blank lines
    const postContent = contentList
      .splice(tagCounter + 3 + 4, contentList.length)
      .join("\n");

    const fileName = filePath.split(path.sep)[
      filePath.split(path.sep).length - 1
    ];

    return {
      title,
      description,
      tags,
      lastmod,
      publishdate,
      coverImageUrl,
      coverGifUrl,
      content: postContent,
      filePath,
      fileName,
    };
  };

  static sortContentsWithLastModDate = (
    contents: Content[],
    ascending = true
  ) => {
    if (ascending)
      return contents.sort((a, b) => (a.lastmod < b.lastmod ? -1 : 1));
    else return contents.sort((a, b) => (a.lastmod > b.lastmod ? -1 : 1));
  };

  /**
   * This will create an object where key will be heading and
   *
   */
  static createContentMap = (contents: Content[], baseDir: string) => {
    let contentMap: { [key: string]: Content[] } = {};
    let baseDirInfo = baseDir.split(path.sep);

    contents.forEach((content: Content) => {
      const pathList = content.filePath.split(path.sep);

      // This path will be a dir whose first parent baseDir
      const parentDirUnderBaseDir = pathList[baseDirInfo.length];

      if (Object.keys(contentMap).includes(parentDirUnderBaseDir))
        if (fs.lstatSync(path.join(baseDir, parentDirUnderBaseDir)).isFile())
          contentMap["Other Posts"].push(content);
        else contentMap[parentDirUnderBaseDir].push(content);
      else {
        if (fs.lstatSync(path.join(baseDir, parentDirUnderBaseDir)).isFile())
          contentMap["Other Posts"] = [content];
        else contentMap[parentDirUnderBaseDir] = [content];
      }
    });

    return contentMap;
  };
}

// Get the ".md" file paths recursively
export const getAllFilePathsFromFolder = (basePath: string) => {
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
export const getContents = (basePath: string): Content[] => {
  let contents: Content[] = [];

  const filePaths = getAllFilePathsFromFolder(basePath);
  filePaths.forEach((filePath: string) => {
    const content = fs.readFileSync(filePath).toString();
    contents.push(
      new Content(Content.extractMetaDataFromContentStr(content, filePath))
    );
  });

  return contents;
};

export default Content;
