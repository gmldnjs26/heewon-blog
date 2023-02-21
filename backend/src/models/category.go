package models

type Category struct {
	Model
	Name      string `json:"name"`
	Depth     int    `json:"depth"`
	ParentId  int    `json:"parent_id"`
	PostCount int    `json:"post_count"`
	Priority  int    `json:"priority"`
	CreateAt  string `json:"create_at"`
	UpdateAt  string `json:"update_at"`
}
