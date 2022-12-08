package database

import (
	"fmt"
	"log"
	"os"
	"time"

	"heewon-blog/src/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect() {
	dsn := "root:root@tcp(db:3306)/hwblog"

	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second, // Slow SQL threshold
			LogLevel:                  logger.Info, // Log level slient 1 ~ info 4
			IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound error for logger
			Colorful:                  true,        // Disable color
		},
	)
	var err error

	// populate log pre-fields here before set to
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: newLogger,
	})

	if err != nil {
		fmt.Println(err)
		panic("DB Connection Error")
	}
}

func AutoMigrate() {
	DB.AutoMigrate(models.Post{})
}
