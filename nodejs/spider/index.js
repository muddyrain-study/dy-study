const cheerio = require("cheerio");
const axios = require("axios").default;
const Book = require("../models/Book");

async function getBooksHTML() {
  const res = await axios.get("https://book.douban.com/latest");
  return res.data;
}

async function getBookLinks() {
  const html = await getBooksHTML();
  const $ = cheerio.load(html);
  const lis = $(".chart-dashed-list li a.fleft");
  const links = lis
    .map((i, element) => {
      const href = element.attribs["href"];
      return href;
    })
    .get();
  return links;
}
async function getBookDetail(detailUrl) {
  const resp = (await axios.get(detailUrl)).data;
  const $ = cheerio.load(resp);
  const name = $("h1").text().trim();
  const imgurl = $("#mainpic img").attr("src");
  const spans = $("#info span.pl");
  const authorSpan = spans.filter((i, ele) => {
    return $(ele).text().includes("作者");
  });
  const author = authorSpan.next("a").html();
  const publicSpan = spans.filter((i, ele) => {
    return $(ele).text().includes("出版年");
  });
  const publishDate = publicSpan[0].nextSibling.nodeValue.trim();
  return {
    name,
    imgurl,
    publishDate,
    author,
  };
}

async function fetchAll() {
  const links = await getBookLinks();
  const books = links.map(async (link) => {
    return await getBookDetail(link);
  });
  return Promise.all(books);
}
async function saveToDB() {
  const books = await fetchAll();
  await Book.bulkCreate(books);
  console.log("抓取数据成功");
}

saveToDB();
