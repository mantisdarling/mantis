output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}

output "cluster_security_group_id" {
  description = "Security group ids attached to the cluster control plane"
  value       = module.eks.cluster_security_group_id
}

output "db_endpoint" {
  description = "RDS Database Endpoint"
  value       = aws_db_instance.mantis_db.endpoint
}

output "ecr_web_repository_url" {
  description = "ECR URL for Web app"
  value       = aws_ecr_repository.mantis_web.repository_url
}

output "ecr_api_repository_url" {
  description = "ECR URL for API app"
  value       = aws_ecr_repository.mantis_api.repository_url
}
