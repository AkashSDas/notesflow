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
    const coverImageUrl = splitFromColonAndGetValue(
      contentList[tagCounter + 2]
    );
    const coverGifUrl = splitFromColonAndGetValue(contentList[tagCounter + 3]);

    // +4 to skip two '---' and blank lines
    const postContent = contentList
      .splice(tagCounter + 3 + 4, contentList.length)
      .join("\n");

    console.log(
      lastmod,
      splitFromColonAndGetDateValue(contentList[tagCounter])
    );

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
    };
  };

  static sortContentsWithLastModDate = (
    contents: Content[],
    ascending = true
  ) => {
    if (ascending) contents.sort((a, b) => (a.lastmod < b.lastmod ? -1 : 1));
    else contents.sort((a, b) => (a.lastmod > b.lastmod ? -1 : 1));
  };
}

export default Content;
