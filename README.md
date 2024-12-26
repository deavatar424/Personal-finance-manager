# Personal Finance Manager API

A RESTful API for managing personal finances. This application allows users to create budgets, track transactions, manage financial goals, categorize expenses, and generate financial insights.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Guide](#setup-guide)
- [API Documentation](#api-documentation)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Personal Finance Manager API is designed to help users effectively manage their finances by providing features to track budgets and transactions. Users can also gain insights into their spending habits.

## Features

- User Registration and Login
- JWT-based Authentication
- Budget Management (Create, Read, Update, Delete)
- Transaction Management (Create, Read, Update, Delete)
- Financial Insights (Summaries and Monthly Breakdown)
- Optional: Entity Relationship Diagram (ERD), PDF/CSV reports, auto-categorization of transactions.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)
- dotenv (for environment variables)

## Setup Guide

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)
- Postman for API testing (optional)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/personal-finance-manager.git
   cd personal-finance-manager
