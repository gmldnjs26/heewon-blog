export type PostDetail = {
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

export type PostInput = {
  categoryId: number;
  title: string;
  contents: string;
  previewContents: string;
  password: string;
  status: number;
};
