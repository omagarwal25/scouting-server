package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Schedule struct {
	Schedule []Game `json:"Schedule"`
}

type Game struct {
	Field           string `json:"field"`
	TournamentLevel string `json:"tournamentLevel"`
	Description     string `json:"description"`
	StartTime       string `json:"startTime"`
	MatchNumber     int    `json:"matchNumber"`
	Teams           []Team `json:"teams"`
}

type Team struct {
	TeamNumber int    `json:"teamNumber"`
	Station    string `json:"station"`
	Surrogate  bool   `json:"surrogate"`
}

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	fmt.Println("This message will show up in the CLI console.")

	res, err := http.Get("uwu")

	if err != nil {
		return nil, err
	}

	defer res.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(res.Body)

	bodyString := string(bodyBytes)
	fmt.Println("API Response: \n" + bodyString)

	var scheduleStruct Schedule
	json.Unmarshal(bodyBytes, &scheduleStruct)

	fmt.Println(scheduleStruct)

	body, err := json.Marshal(scheduleStruct.Schedule)

	if err != nil {
		return nil, err
	}

	// Headers:         map[string]string{"Content-Type": "text/plain"},
	return &events.APIGatewayProxyResponse{
		StatusCode:      200,
		Body:            string(body),
		IsBase64Encoded: false,
	}, nil
}

func main() {
	lambda.Start(handler)
}
