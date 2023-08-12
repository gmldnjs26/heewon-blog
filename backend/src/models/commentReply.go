package models

type CommentReply struct {
	Model
	CommentId int    `json:"commentId" gorm:"foreignKey:CommentId"`
	UserId    int    `json:"userId"`
	Contents  string `json:"contents"`
}
