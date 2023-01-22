package routes

import (
	"heewon-blog/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/posts", controllers.GetPosts)
	app.Post("/posts", controllers.CreatePost)
	app.Get("/posts/:id", controllers.GetPost)
	app.Put("/posts/:id", controllers.UpdatePost)
}
