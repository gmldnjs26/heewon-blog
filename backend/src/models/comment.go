package models

type CommentStatus int

const (
	Public CommentStatus = iota
	OwnerOnly
	Private
)

type Comment struct {
	Model
	PostId   int           `json:"postId" gorm:"foreignKey:PostId"`
	UserId   int           `json:"userId"`
	Contents string        `json:"contents"`
	Status   CommentStatus `json:"status" gorm:"type:int"`
}

func (e CommentStatus) String() string {
	switch e {
	case Public:
		return "공개"
	case OwnerOnly:
		return "글쓴이에게만"
	case Private:
		return "비공개"
	default:
		return "알 수 없는 상태"
	}
}
