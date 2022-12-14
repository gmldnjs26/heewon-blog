package controllers

import (
	"heewon-blog/src/database"
	"heewon-blog/src/models"

	"github.com/gofiber/fiber/v2"
)

func Posts(c *fiber.Ctx) error {
	var posts []models.Post
	database.DB.Find(&posts)
	return c.JSON(posts)
}
