package main

import (
	"heewon-blog/src/database"
	"heewon-blog/src/models"
)

func main() {
	database.Connect()
	categories := []models.Category{
		{
			Name:     "Vue",
			ParentId: 0,
			Depth:    0,
		},
		{
			Name:     "React",
			ParentId: 0,
			Depth:    0,
		},
		{
			Name:     "Diary",
			ParentId: 0,
			Depth:    0,
		},
		{
			Name:     "Go",
			ParentId: 0,
			Depth:    0,
		},
		{
			Name:     "Composition",
			ParentId: 1,
			Depth:    1,
		},
		{
			Name:     "Redux",
			ParentId: 2,
			Depth:    1,
		},
		{
			Name:     "ContextAPI",
			ParentId: 2,
			Depth:    1,
		},
		{
			Name:     "Mox",
			ParentId: 2,
			Depth:    1,
		},
		{
			Name:     "gorm",
			ParentId: 4,
			Depth:    1,
		},
	}

	for _, category := range categories {
		database.DB.Create(&category)
	}
}
