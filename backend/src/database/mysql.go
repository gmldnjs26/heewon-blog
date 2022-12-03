package database

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	var err error
	dsn := "root:root@tcp(db:3306)/hwblog"

	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		panic("DB Connection Error")
	} else {
		panic("DB Connection Success")
	}
}
