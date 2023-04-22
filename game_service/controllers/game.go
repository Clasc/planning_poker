package controllers

import (
	"fmt"
	"net/http"
)

func Game(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello To my game! ")
}
