package main

import (
	"net/http"

	"planning_poker.com/controllers"
)

func main() {
	http.HandleFunc("/", controllers.Greet)
	http.ListenAndServe(":8080", nil)
}
