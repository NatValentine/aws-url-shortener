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
{
  "url": "https://example.com"
}

### GET /{id}
Redirects to the original URL

## ⚙️ How it works

- A short ID is generated for each URL
- The mapping is stored in DynamoDB
- When accessing the short URL, the service retrieves the original URL and redirects the user

## 📈 What I learned

- Building serverless applications with AWS
- Using AWS SDK v3
- Working with DynamoDB
- Handling HTTP responses in Lambda

## 🔥 Future improvements

- URL validation
- Custom aliases
- Expiration for links
