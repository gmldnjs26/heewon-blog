package models

type Comment struct {
	Model
	PostId   int    `json:"postId" gorm:"foreignKey:PostId"`
	UserId   int    `json:"userId"`
	Contents string `json:"contents"`
}
