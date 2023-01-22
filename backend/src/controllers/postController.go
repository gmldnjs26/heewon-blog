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

func GetPosts(c *fiber.Ctx) error {
	var posts []models.Post
	database.DB.Find(&posts)
	return c.JSON(posts)
}

func CreatePost(c *fiber.Ctx) error {
	payload := struct {
		CategoryId      int    `json:"category_id"`
		Title           string `json:"title"`
		Contents        string `json:"contents"`
		PreviewContents string `json:"preview_contents"`
		Password        string `json:"password"`
		Status          int    `json:"status"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return err
	}
	post := models.Post{
		CategoryId:      payload.CategoryId,
		Title:           payload.Title,
		Contents:        payload.Contents,
		PreviewContents: payload.PreviewContents,
		Password:        payload.Password,
		Status:          payload.Status,
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
