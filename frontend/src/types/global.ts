export interface Category {
  id: number;
  parentId: number; // 0는 자기가 제일 상위 카테고리일때
  name: string;
  children?: Category[];
}

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
  categoryId: number;
  previewContents: string;
  password: string;
  status: number;
}
export interface PostInput extends PostInputStep1, PostInputStep2 {}
