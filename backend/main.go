package main

import (
	"heewon-blog/src/database"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// DB
	database.Connect()

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("This is heewon blog")
	})

	app.Listen(":5000")
}
