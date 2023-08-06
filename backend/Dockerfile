FROM golang:1.18 as dev

WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

FROM golang:1.18 as prod

WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
CMD ["go", "run", "main.go"]