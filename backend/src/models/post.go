package models

type Post struct {
	Model
	CategoryId      int    `json:"categoryId" gorm:"foreignKey:CategoryId"`
	Title           string `json:"title"`
	Contents        string `json:"contents"`
	PreviewContents string `json:"previewContents"`
	Password        string `json:"password"`
	Status          int    `json:"status"`
}
