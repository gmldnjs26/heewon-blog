package controllers

import (
	"strconv"

	"heewon-blog/src/database"
	"heewon-blog/src/models"

	"github.com/gofiber/fiber/v2"
)

func GetPost(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	var post models.Post

	post.Id = uint(id)

	database.DB.Find(&post)

	return c.JSON(post)
}

func Posts(c *fiber.Ctx) error {
	var posts []models.Post
	database.DB.Find(&posts)
	return c.JSON(posts)
}

func CreatePost(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	categorId, err := strconv.Atoi(data["category_id"])
	if err != nil {
		panic(err)
	}
	status, err := strconv.Atoi(data["status"])
	if err != nil {
		panic(err)
	}

	post := models.Post{
		CategoryId:      categorId,
		Title:           data["title"],
		Contents:        data["contents"],
		PreviewContents: data["preview_contents"],
		Password:        data["password"],
		Status:          status,
	}

	database.DB.Create(&post)

	return c.JSON(post)
}

func UpdatePost(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "message",
	})
}

func DeletePost(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "message",
	})
}
