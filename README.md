# Serverless URL Shortener (AWS)

This project is a simple serverless URL shortener built using AWS services.

<img width="453" height="357" alt="imagen" src="https://github.com/user-attachments/assets/c049fbdd-3c0c-4729-b1e9-47e2b1ba5c04" />

Note: Technically, given the length of the API Gateway URL, this might currently behave more like a URL *lengthener* than a shortener 😅

## 🚀 Tech Stack

- AWS S3 (static frontend hosting)
- AWS Lambda (serverless compute)
- API Gateway (HTTP API)
- DynamoDB (NoSQL database)
- Node.js (ES Modules)

## 📌 Features

- Generate short URLs from long URLs
- Instant redirection using HTTP 302 responses
- Persistent storage with DynamoDB
- Lightweight frontend hosted on S3

## 🧠 Architecture

Frontend (S3) → API Gateway → Lambda → DynamoDB

## 📂 Endpoints

### POST /shorten
Creates a short URL

Body:
`{
  "url": "https://example.com"
}`

<img width="648" height="320" alt="imagen" src="https://github.com/user-attachments/assets/a76d44a7-764c-4d89-a715-fc5220253cf0" />


### GET /{id}
Redirects to the original URL

## ⚙️ How it works

- A short ID is generated for each URL
- The mapping is stored in DynamoDB
- When accessing the short URL, the service retrieves the original URL and redirects the user

<img width="525" height="123" alt="imagen" src="https://github.com/user-attachments/assets/6f92a945-fc0e-4582-a1ce-3951b63af8df" />


## 📈 What I learned

- Designing and deploying serverless applications in AWS
- Using AWS SDK v3 with modern JavaScript (ES Modules)
- Working with DynamoDB for simple key-value storage
- Handling HTTP responses and redirects in Lambda
- Dealing with real-world issues like CORS and service integration

## 🔥 Future improvements

- URL validation
- Custom aliases
- Expiration for links
- Custom domain for (actually) shorter URLs
