package models

type Category struct {
	Model
	Name      string `json:"name"`
	Depth     int    `json:"depth"`
	ParentId  int    `json:"parentId"`
	PostCount int    `json:"postCount"`
	Priority  int    `json:"priority"`
	CreateAt  string `json:"create_at"`
	UpdateAt  string `json:"update_at"`
}
