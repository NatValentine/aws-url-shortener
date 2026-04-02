# Serverless URL Shortener (AWS)

This project is a simple serverless URL shortener built using AWS services.

## 🚀 Tech Stack

- AWS Lambda
- API Gateway
- DynamoDB
- Node.js (ES Modules)

## 📌 Features

- Generate short URLs from long URLs
- Redirect using HTTP 302 responses
- Persistent storage using DynamoDB

## 🧠 Architecture

Client → API Gateway → Lambda → DynamoDB

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

- Building serverless applications with AWS
- Using AWS SDK v3
- Working with DynamoDB
- Handling HTTP responses in Lambda

## 🔥 Future improvements

- URL validation
- Custom aliases
- Expiration for links
