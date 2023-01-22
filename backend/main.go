package main

import (
	"heewon-blog/src/database"
	"heewon-blog/src/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	// DB
	database.Connect()
	database.AutoMigrate()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "*",
		AllowCredentials: true,
		// TODO: 좀더 조사
		// cookie의 정보를 허용된 origin에서는 취득할 수 있게끔 설정? 응답헤더에 담아서 보내는건데 프론트에서 이 쿠키를 취득할 수 있게끔 한다?
		// 근데 httpOnly 쿠키인데도 프론트에서 취득할 수 있나? 취득이라기 보다는 request 헤더에 담을 수 있게끔 하는 설정인가?
		// httpOnly는 javascript로 쿠키로 접근 못하게끔 하는 설정이다. 프론트에서 쿠키를 취득할 액션을 취할 필요는 없고 자동으로 취득하게 된다.
		// request를 보낼때 서버에서 쿠키를 받아 브라우저에서 저장중이라면 자동으로 header에 실려서 날라간다.
	}))
	routes.Setup(app)

	app.Listen(":5000")
}
