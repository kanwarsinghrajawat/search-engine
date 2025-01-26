<!-- Project Name: Ricky and Morty Search Engine -->

<!-- Overview -->

<!-- This project is a search engine built using a Go backend,
 a  frontend built with React (Vite),
  and infrastructure managed with Terraform. -->



<!-- Features:
Backend: API server implemented in Go.

Frontend: Interactive user interface built with React and Vite, styled with TailwindCSS.

Infrastructure: Managed and deployed using Terraform. -->



<!-- Project Structure
Backend:
Path: backend
Components:
main.go: Entry point for the Go application.
routes/: API routes for the backend.
models/: Data models used in the application.
handlers/: Logic for handling API requests.
config/: Configuration files.
.env: Environment variables for backend configuration. -->

<!-- Frontend:
Path: frontend
Components:
src/components: Reusable React components
src/types: TypeScript type definitions.
App.tsx: Main application entry point.
tailwind.config.js: TailwindCSS configuration.
 -->


<!-- Terraform:
Path: terraform
Components:
main.tf: Main Terraform configuration.
outputs.tf: Output definitions.
backup.tf: Backup-related Terraform configuration.
.terraform/: Terraform state files. -->




<!-- Prerequisites:

Go
Node.js with pnpm
Terraform -->





<!-- Installation and Setup

Backend Setup:
Navigate to the backend directory: --!>

cd backend

<!-- Install dependencies: -->
go mod tidy

<!-- Create a .env file with required environment variables

<!-- Run the backend: -->
go run main.go



<!-- Frontend Setup:
Navigate to the frontend directory: -->

cd frontend

<!-- Install dependencies: -->
pnpm install

<!-- Start the development server: -->
pnpm dev




<!-- Terraform Setup: -->
<!-- Navigate to the terraform directory: -->
cd terraform
<!-- Initialize Terraform: -->
terraform init

terraform apply or terraform apply -auto-approve

 
