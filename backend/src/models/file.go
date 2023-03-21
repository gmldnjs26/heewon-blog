package models

type File struct {
	Model
	PostId   int    `json:"postId"`
	Url      string `json:"url"`
	FileType string `json:"fileType"`
}
