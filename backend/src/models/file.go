package models

type File struct {
	Model
	PostId   int    `json:"post_id"`
	Url      string `json:"url"`
	FileType string `json:"file_type"`
}
