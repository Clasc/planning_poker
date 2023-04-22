package main

import (
	"net/http"

	"planning_poker.com/controllers"
	"planning_poker.com/middleware"
)

func main() {
	http.HandleFunc("/", middleware.Get(controllers.Greet))
	http.HandleFunc("/game", middleware.Get(controllers.Game))
	http.ListenAndServe(":8080", nil)
}
