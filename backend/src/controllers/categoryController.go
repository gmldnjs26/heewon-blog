package controllers

import (
	"heewon-blog/src/database"
	"heewon-blog/src/models"

	"github.com/gofiber/fiber/v2"
)

func GetCategories(c *fiber.Ctx) error {
	var categories []models.Category

	database.DB.Find(&categories)

	return c.JSON(categories)
}

func CreateCategory(c *fiber.Ctx) error {
	return fiber.NewError(404, "test")
}

func UpdateCategory(c *fiber.Ctx) error {
	return fiber.NewError(404, "test")
}

func DeleteCategory(c *fiber.Ctx) error {
	return fiber.NewError(404, "test")
}
