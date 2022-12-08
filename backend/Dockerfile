FROM golang:1.18

WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .

RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# 배포시에는 일반 커맨드로?
# CMD ["go", "run", "main.go"]
CMD ["air"]