package routes

import (
	"github.com/gin-gonic/gin"
)

// RegisterRoutes sets up API endpoints
func RegisterRoutes(router *gin.Engine) {
	router.GET("/character/:name", handlers.GetCharacterByName)
}
