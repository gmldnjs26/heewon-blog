package main

import (
	"math/rand"

	"heewon-blog/src/database"
	"heewon-blog/src/models"

	"github.com/bxcodec/faker/v3"
)

func main() {
	database.Connect()

	for i := 0; i < 30; i++ {
		product := models.Post{
			CategoryId:      int16(rand.Int()),
			Title:           faker.Username(),
			Contents:        faker.Username(),
			PreviewContents: faker.Username(),
			Password:        faker.Username(),
			Status:          1,
		}

		database.DB.Create(&product)
	}
}
