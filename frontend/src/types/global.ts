export interface PostDetail {
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
}

export interface PostInputStep1 {
  title: string;
  contents: string;
  previewContents: string;
}
export interface PostInputStep2 {
  categoryId: number
  previewContents: string;
  password: string;
  status: number;
}
export interface PostInput extends PostInputStep1, PostInputStep2 {}