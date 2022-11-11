package main

import (
	"fmt"
	"html/template"
	"os"
)

func main() {
	var t *template.Template
	var err error
	if t, err = template.New("site").Parse(`{{define "body"}}Hello {{.}}{{end}}`); err != nil {
		fmt.Println(err)
		return
	}
	if err := t.ExecuteTemplate(os.Stdout, "body", "<script>alert('Hello JS')</script>"); err != nil {
		fmt.Println(err)
	}
}
