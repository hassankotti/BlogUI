interface ArticleType {
  [key: string]: any; // 👈️ variable keys
  title?: string;
  imgUrl?: string;
  body?: string;
  date?: Date;
  author?: string;
  href?: string;
}
export default ArticleType;
