package controllers

import (
	"strconv"

	"heewon-blog/src/database"
	"heewon-blog/src/models"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
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
	conditions := make(map[string]interface{})
	var joins string
	// 이 문제는 database.DB 객체가 전역적으로 공유되고 있는데, 이 객체의 상태가 요청 사이에서 유지되고 있기 때문에 발생하는 것 같습니다.
	// database.DB 객체에 Where 조건을 추가하면, 그 조건은 해당 객체의 생명주기 동안 유지되므로, 다음 요청에서도 그 조건이 적용됩니다.
	// FIXME: lastPostId > ? 이 부분의 문법에 의해서 conditions에 넣는게 불가능했기 때문에 별로도 where절을 셋팅, 별도의 셋팅으로 인해 직접적으로
	// 전역의 db 인스턴스를 건들이고 있기 때문에 이 검색 메소드에서만 별로도 세션을 나누어서 검색을 하게끔 하고 있다. 더 개선할 여지가 많이 있어보인다.
	db := database.DB.Session(&gorm.Session{NewDB: true})

	lastPostId := c.Query("last_post_id", "")
	if lastPostId != "" {
		db = db.Where("id > ?", lastPostId)
	}

	categoryName := c.Query("category_name", "")
	if categoryName != "" {
		joins = "left join categories on posts.category_id = categories.id"
		conditions["categories.name"] = categoryName
	}

	for key, value := range conditions {
		db = db.Where(key, value)
	}

	db.Joins(joins).Limit(10).Find(&posts)
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
	postId, _ := strconv.Atoi(c.Params("post_id"))

	post := models.Post{}
	post.Id = uint(postId)

	database.DB.Delete(&post)

	return nil
}
