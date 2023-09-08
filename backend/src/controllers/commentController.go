package controllers

import (
	"heewon-blog/src/database"
	"heewon-blog/src/models"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetComments(c *fiber.Ctx) error {
	postId, _ := strconv.Atoi(c.Params("post_id"))
	var comments []models.Comment
	database.DB.Where("post_id = ?", postId).Find(&comments)
	return c.JSON(comments)
}

func CreateComment(c *fiber.Ctx) error {
	payload := struct {
		PostId   int    `json:"post_id"`
		UserId   int    `json:"user_id"`
		Contents string `json:"contents"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return err
	}

	comment := models.Comment{
		PostId:   payload.PostId,
		UserId:   payload.UserId,
		Contents: payload.Contents,
	}

	database.DB.Create(&comment)

	return c.JSON(comment)
}

func UpdateComment(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "message",
	})
}

func DeleteComment(c *fiber.Ctx) error {
	commentId, _ := strconv.Atoi(c.Params("comment_id"))

	comment := models.Comment{}
	comment.Id = uint(commentId)

	database.DB.Delete(&comment)

	return nil
}
