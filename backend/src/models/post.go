package models

type Post struct {
	Model
	CategoryId      int    `json:"category_id" gorm:"foreignKey:CategoryId"`
	Title           string `json:"title"`
	Contents        string `json:"contents"`
	PreviewContents string `json:"preview_contents"`
	Password        string `json:"password"`
	Status          int    `json:"status"`
}
