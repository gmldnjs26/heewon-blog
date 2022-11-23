export type Post = {
  id: number;
  title: string;
  contents: string;
  categoryId: number;
  categoryName: string;
  createdAt: string;
  comments: {
    writer: string;
    contents: string;
  }[];
};
