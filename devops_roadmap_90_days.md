# 🚀 90-Day DevOps Learning Roadmap

> A structured, hands-on curriculum to take you from beginner to job-ready DevOps Engineer in 90 days.

---

## 📋 Overview

| Phase | Days | Topics |
|-------|------|--------|
| 1 | 1–15 | Linux, Bash, Networking, Git |
| 2 | 16–25 | Python for DevOps & Automation |
| 3 | 26–40 | Docker & Containerization |
| 4 | 41–55 | Kubernetes & Orchestration |
| 5 | 56–70 | Terraform & Ansible (IaC) |
| 6 | 71–80 | CI/CD Pipelines |
| 7 | 81–90 | Cloud (AWS), Monitoring & GitOps |

---

## 🐧 Phase 1: Foundations (Days 1–15)

### Day 1 — Linux Essentials
**Goal:** Navigate and operate Linux confidently.

**Topics:**
- Linux distributions overview (Ubuntu, CentOS, Alpine)
- Filesystem Hierarchy Standard (FHS)
- Essential commands: `ls`, `cd`, `pwd`, `mkdir`, `rm`, `cp`, `mv`, `find`, `locate`
- File permissions: `chmod`, `chown`, `chgrp`
- Users & groups: `useradd`, `usermod`, `passwd`, `groups`

**Hands-on:**
```bash
# Create a user and set permissions
sudo useradd -m devops_user
sudo passwd devops_user
mkdir -p ~/devops/projects
chmod 755 ~/devops/projects
```

**Resources:**
- [Linux Journey](https://linuxjourney.com/)
- `man` command for any built-in help

---

### Day 2 — Linux File System & Text Manipulation
**Goal:** Manage files and parse text efficiently.

**Topics:**
- Text editors: `vim`, `nano`
- Text tools: `cat`, `grep`, `awk`, `sed`, `cut`, `sort`, `uniq`, `wc`, `head`, `tail`
- Redirection & pipes: `>`, `>>`, `|`, `2>&1`
- `find` with advanced filters

**Hands-on:**
```bash
# Find all .log files and count unique error lines
find /var/log -name "*.log" | xargs grep "ERROR" | sort | uniq -c | sort -rn | head -20
```

---

### Day 3 — Process Management & System Monitoring
**Goal:** Monitor and manage running processes.

**Topics:**
- Process commands: `ps`, `top`, `htop`, `kill`, `pkill`, `jobs`, `fg`, `bg`, `nohup`
- System info: `uname`, `df`, `du`, `free`, `uptime`, `lscpu`
- Cron jobs: `crontab -e`, cron syntax
- Systemd: `systemctl start/stop/enable/status`

**Hands-on:**
```bash
# Schedule a disk cleanup script every day at midnight
echo "0 0 * * * /usr/local/bin/cleanup.sh" | crontab -
systemctl status cron
```

---

### Day 4 — Bash Scripting Basics
**Goal:** Write reusable automation scripts.

**Topics:**
- Shebang, variables, `read`, `echo`
- Conditionals: `if`, `elif`, `else`, `case`
- Loops: `for`, `while`, `until`
- Functions and return values
- Exit codes & `$?`

**Hands-on:**
```bash
#!/bin/bash
# health_check.sh - Check if a service is running
SERVICE="nginx"
if systemctl is-active --quiet $SERVICE; then
    echo "✅ $SERVICE is running"
else
    echo "❌ $SERVICE is NOT running"
    systemctl start $SERVICE
fi
```

---

### Day 5 — Advanced Bash Scripting
**Goal:** Build robust production-grade scripts.

**Topics:**
- Arrays and associative arrays
- String manipulation: `${var#prefix}`, `${var%suffix}`, `${var/old/new}`
- Error handling: `set -e`, `set -u`, `trap`
- Script arguments: `$1`, `$@`, `$#`, `getopts`
- Debugging: `set -x`, `bash -n`

**Hands-on:**
```bash
#!/bin/bash
set -euo pipefail
trap 'echo "Error on line $LINENO"' ERR

backup_dir="/backup/$(date +%Y-%m-%d)"
mkdir -p "$backup_dir"
cp -r /etc/nginx "$backup_dir/"
echo "Backup completed to $backup_dir"
```

---

### Day 6 — Networking Fundamentals
**Goal:** Understand how networks and protocols work.

**Topics:**
- OSI & TCP/IP model layers
- IP Addressing, CIDR notation, Subnetting
- DNS, DHCP, NAT, Routing concepts
- Ports & protocols: HTTP(80), HTTPS(443), SSH(22), FTP(21)
- Firewalls: `iptables`, `ufw`

**Commands:**
```bash
ip addr show
ip route show
ss -tulnp                  # open ports
nslookup google.com        # DNS lookup
dig google.com +short
traceroute google.com
```

---

### Day 7 — Linux Networking Tools
**Goal:** Diagnose and troubleshoot network issues.

**Topics:**
- `curl`, `wget`, `nc` (netcat), `telnet`
- `tcpdump` for packet capture
- `ssh`, `scp`, `rsync`
- SSH key generation, config file (`~/.ssh/config`)
- VPN concepts (WireGuard overview)

**Hands-on:**
```bash
# Generate SSH key and copy to remote server
ssh-keygen -t ed25519 -C "devops@example.com"
ssh-copy-id user@remote-host
rsync -avz --progress ~/projects/ user@remote:/backup/projects/
```

---

### Day 8–9 — Git Version Control
**Goal:** Master Git for collaborative development.

**Topics:**
- `git init`, `clone`, `add`, `commit`, `push`, `pull`, `fetch`
- Branching: `git branch`, `checkout`, `switch`, `merge`
- Merge conflicts and resolution
- `git log`, `diff`, `stash`, `tag`
- `.gitignore` and `.gitattributes`

**Hands-on:**
```bash
git init my-devops-project
cd my-devops-project
git checkout -b feature/setup-scripts
# ... make changes ...
git add .
git commit -m "feat: add initial setup scripts"
git push origin feature/setup-scripts
```

---

### Day 10 — Git Workflows & Best Practices
**Goal:** Use Git professionally in a team environment.

**Topics:**
- GitFlow, GitHub Flow, Trunk-Based Development
- Pull Requests / Merge Requests
- Rebasing vs. Merging: `git rebase -i`
- `git cherry-pick`, `git bisect`
- Commit message conventions (Conventional Commits)
- Pre-commit hooks

**Resources:**
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

---

### Day 11–13 — Linux Security Hardening
**Goal:** Secure a Linux server from common threats.

**Topics:**
- SSH hardening: disable root login, change port, key-only auth
- `fail2ban` configuration
- `sudoers` file and `sudo` best practices
- File integrity: `aide`, `tripwire`
- `AppArmor` / `SELinux` basics
- Audit logging with `auditd`
- CIS Benchmark overview

**Hands-on:**
```bash
# /etc/ssh/sshd_config hardening
PermitRootLogin no
PasswordAuthentication no
MaxAuthTries 3
AllowUsers devops_user
```

---

### Day 14–15 — Review & Mini-Project
**Goal:** Consolidate Phase 1 knowledge.

**Project: Server Automation Script**
- Create a bash script that:
  - Provisions a new user with sudo rights
  - Hardens SSH configuration
  - Installs essential tools (curl, git, vim, htop)
  - Sets up a daily backup cron job
  - Outputs a health report

```bash
#!/bin/bash
# server_provision.sh
set -euo pipefail

NEW_USER="${1:-devops}"
echo "🚀 Provisioning server for user: $NEW_USER"

useradd -m -G sudo "$NEW_USER"
# ... rest of automation
echo "✅ Server provisioning complete!"
```

---

## 🐍 Phase 2: Python for DevOps (Days 16–25)

### Day 16–17 — Python Basics for DevOps
**Goal:** Write Python scripts to automate infrastructure tasks.

**Topics:**
- Python data types, control flow, functions
- File I/O: reading/writing files, JSON, YAML (`PyYAML`)
- `os`, `sys`, `pathlib`, `shutil` modules
- `subprocess` module for running shell commands
- Exception handling

**Hands-on:**
```python
import subprocess
import json

def run_command(cmd: list[str]) -> dict:
    result = subprocess.run(cmd, capture_output=True, text=True)
    return {
        "returncode": result.returncode,
        "stdout": result.stdout.strip(),
        "stderr": result.stderr.strip()
    }

disk_info = run_command(["df", "-h", "/"])
print(json.dumps(disk_info, indent=2))
```

---

### Day 18–19 — Python Libraries for Automation
**Goal:** Use Python to interact with APIs and cloud services.

**Topics:**
- `requests` library for HTTP APIs
- REST API concepts: GET, POST, PUT, DELETE, headers, auth
- JSON parsing and manipulation
- `argparse` for CLI tools
- `logging` module

**Hands-on:**
```python
import requests
import argparse

def get_github_repos(username: str) -> list:
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    response.raise_for_status()
    return [repo["name"] for repo in response.json()]

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="List GitHub repos")
    parser.add_argument("username")
    args = parser.parse_args()
    repos = get_github_repos(args.username)
    for repo in repos:
        print(f"  📁 {repo}")
```

---

### Day 20–21 — YAML & Configuration Management with Python
**Goal:** Parse and generate YAML/JSON configs programmatically.

**Topics:**
- YAML syntax and gotchas
- `PyYAML` vs `ruamel.yaml`
- JSON Schema validation with `jsonschema`
- Jinja2 templating for config generation
- Environment variables with `python-dotenv`

---

### Day 22–23 — Python Testing & Code Quality
**Goal:** Write testable, maintainable DevOps tooling.

**Topics:**
- `pytest` framework
- Mocking with `unittest.mock`
- Code style: `black`, `flake8`, `isort`
- Type hints and `mypy`
- Virtual environments: `venv`, `pip`, `requirements.txt`

---

### Day 24–25 — Build a DevOps CLI Tool
**Goal:** Apply Python skills to build a real CLI utility.

**Project: `devtool` CLI**
- Commands: `health`, `deploy`, `backup`, `monitor`
- Uses `rich` library for beautiful terminal output
- Reads config from `~/.devtool.yaml`
- Outputs structured JSON logs

---

## 🐳 Phase 3: Docker & Containerization (Days 26–40)

### Day 26–27 — Docker Fundamentals
**Goal:** Understand containers and Docker architecture.

**Topics:**
- Containers vs VMs: namespaces, cgroups
- Docker Engine, daemon, CLI
- Images, containers, layers, and the Union File System
- Docker Hub and registries

**Essential Commands:**
```bash
docker pull ubuntu:22.04
docker run -it ubuntu:22.04 bash
docker ps -a
docker images
docker stop <container_id>
docker rm <container_id>
docker rmi <image_id>
```

---

### Day 28–29 — Writing Dockerfiles
**Goal:** Build optimized, secure Docker images.

**Topics:**
- `FROM`, `RUN`, `COPY`, `ADD`, `WORKDIR`, `ENV`, `EXPOSE`, `CMD`, `ENTRYPOINT`
- Layer caching and build optimization
- Multi-stage builds
- `.dockerignore`
- Non-root users in containers

**Example Multi-stage Dockerfile:**
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:20-alpine AS production
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]
```

---

### Day 30–31 — Docker Networking & Volumes
**Goal:** Connect containers and persist data.

**Topics:**
- Network types: bridge, host, none, overlay
- Container-to-container communication
- DNS in Docker networks
- Volumes vs bind mounts vs tmpfs
- Named volumes and volume drivers

```bash
docker network create my-network
docker run -d --name db --network my-network postgres:15
docker run -d --name app --network my-network -e DB_HOST=db myapp:latest
docker volume create app-data
docker run -v app-data:/data myapp
```

---

### Day 32–33 — Docker Compose
**Goal:** Orchestrate multi-container applications locally.

**Topics:**
- `docker-compose.yml` syntax
- Services, networks, volumes in Compose
- Environment variables and `.env` files
- Health checks and dependencies
- `docker compose up/down/logs/exec`

**Example `docker-compose.yml`:**
```yaml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "8080:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      db:
        condition: service_healthy
    networks:
      - app-network

  db:
    image: postgres:15-alpine
    volumes:
      - pg-data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U appuser"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

volumes:
  pg-data:

networks:
  app-network:
```

---

### Day 34–35 — Docker Registry & Image Management
**Goal:** Push and pull images from private registries.

**Topics:**
- Docker Hub, GHCR, ECR, GCR, Harbor
- `docker tag`, `docker push`, `docker pull`
- Image signing with Docker Content Trust
- Image scanning: `trivy`, `grype`, `docker scan`

```bash
# Tag and push to GHCR
docker tag myapp:latest ghcr.io/username/myapp:v1.0.0
echo $GHCR_TOKEN | docker login ghcr.io -u username --password-stdin
docker push ghcr.io/username/myapp:v1.0.0

# Scan image for vulnerabilities
trivy image ghcr.io/username/myapp:v1.0.0
```

---

### Day 36–38 — Container Security
**Goal:** Harden containers for production use.

**Topics:**
- Docker security best practices
- Read-only filesystems: `--read-only`
- Resource limits: `--memory`, `--cpus`
- Capabilities: `--cap-drop ALL --cap-add NET_BIND_SERVICE`
- Secrets management (Docker Secrets vs env vars)
- AppArmor and seccomp profiles

---

### Day 39–40 — Containerization Mini-Project
**Goal:** Containerize a real application end-to-end.

**Project:**
- Containerize a 3-tier app (frontend, API, database)
- Write optimized multi-stage Dockerfiles
- Configure Docker Compose for local dev
- Scan images with Trivy
- Push to GHCR

---

## ☸️ Phase 4: Kubernetes (Days 41–55)

### Day 41–42 — Kubernetes Architecture
**Goal:** Understand how K8s works internally.

**Topics:**
- Control Plane: API Server, etcd, Controller Manager, Scheduler
- Worker Nodes: kubelet, kube-proxy, container runtime
- kubectl setup and context management
- `minikube` and `kind` for local clusters

```bash
# Install kubectl and setup minikube
minikube start --driver=docker
kubectl cluster-info
kubectl get nodes
kubectl get all --all-namespaces
```

---

### Day 43–44 — Core K8s Objects: Pods & Deployments
**Goal:** Deploy and manage containerized applications.

**Topics:**
- Pods: spec, containers, init containers
- ReplicaSets and Deployments
- Rolling updates and rollbacks
- Labels, selectors, and annotations

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: web
          image: nginx:1.25
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "64Mi"
              cpu: "250m"
            limits:
              memory: "128Mi"
              cpu: "500m"
```

---

### Day 45–46 — Services, Ingress & Networking
**Goal:** Expose applications within and outside the cluster.

**Topics:**
- Service types: ClusterIP, NodePort, LoadBalancer, ExternalName
- Ingress controllers (NGINX Ingress)
- Ingress rules and TLS termination
- Network Policies
- DNS in Kubernetes (`CoreDNS`)

---

### Day 47–48 — ConfigMaps, Secrets & Storage
**Goal:** Manage configuration and data persistence.

**Topics:**
- ConfigMaps: env vars and volume mounts
- Secrets: Opaque, TLS, docker-registry
- PersistentVolumes (PV) and PersistentVolumeClaims (PVC)
- StorageClasses and dynamic provisioning
- StatefulSets for stateful apps

```bash
kubectl create configmap app-config --from-file=config.yaml
kubectl create secret generic db-secret \
  --from-literal=password=mysecretpassword
kubectl get secret db-secret -o jsonpath='{.data.password}' | base64 -d
```

---

### Day 49–50 — Helm Package Manager
**Goal:** Deploy complex applications with Helm charts.

**Topics:**
- Helm architecture: charts, releases, repositories
- `helm install`, `upgrade`, `rollback`, `uninstall`
- Creating custom Helm charts
- `values.yaml` and templating with Go templates
- Artifact Hub for public charts

```bash
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm install my-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx --create-namespace
helm upgrade --install my-app ./my-chart \
  --set image.tag=v2.0.0 --values prod-values.yaml
```

---

### Day 51–52 — K8s Autoscaling & Resource Management
**Goal:** Scale applications dynamically and efficiently.

**Topics:**
- Horizontal Pod Autoscaler (HPA)
- Vertical Pod Autoscaler (VPA)
- Cluster Autoscaler
- Resource Quotas and LimitRanges
- Pod Disruption Budgets (PDB)
- Quality of Service (QoS) classes

---

### Day 53–55 — K8s Security & Debugging
**Goal:** Secure clusters and troubleshoot workloads.

**Topics:**
- RBAC: Roles, ClusterRoles, RoleBindings
- ServiceAccounts and Pod identity
- Network Policies for traffic control
- Pod Security Standards (Restricted/Baseline)
- Debugging: `kubectl logs`, `exec`, `describe`, `events`
- `kubectl top` and metrics-server

**Debugging Checklist:**
```bash
kubectl describe pod <pod-name>         # events and status
kubectl logs <pod-name> --previous      # crashed container logs
kubectl exec -it <pod-name> -- /bin/sh  # shell into container
kubectl get events --sort-by='.metadata.creationTimestamp'
```

---

## 🏗️ Phase 5: IaC & Configuration Management (Days 56–70)

### Day 56–58 — Terraform Fundamentals
**Goal:** Provision infrastructure declaratively with Terraform.

**Topics:**
- HCL syntax: providers, resources, data sources
- Terraform workflow: `init`, `plan`, `apply`, `destroy`
- State file management and remote state (S3 backend)
- Variables, outputs, and locals
- Resource dependencies and `depends_on`

```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "my-tf-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  tags = {
    Name        = "${var.project}-vpc"
    Environment = var.environment
  }
}
```

---

### Day 59–61 — Terraform Modules & Advanced Patterns
**Goal:** Write reusable, scalable Terraform code.

**Topics:**
- Module structure and best practices
- Public registry modules (Terraform Registry)
- Workspaces for environment management
- `count`, `for_each`, and `dynamic` blocks
- `terraform_remote_state` data source
- `moved` block for refactoring
- Terragrunt overview

---

### Day 62–63 — Ansible Fundamentals
**Goal:** Automate server configuration with Ansible.

**Topics:**
- Ansible architecture: control node, managed nodes, inventory
- Ad-hoc commands
- Playbook structure: plays, tasks, handlers
- Core modules: `apt`, `yum`, `copy`, `template`, `service`, `user`, `file`
- Variables and `vars_files`
- Jinja2 templates in Ansible

```yaml
# playbooks/setup_webserver.yml
---
- name: Configure Web Server
  hosts: webservers
  become: true
  vars:
    nginx_port: 80
    server_name: "{{ ansible_hostname }}"

  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: true

    - name: Deploy Nginx Config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
        mode: "0644"
      notify: Restart Nginx

  handlers:
    - name: Restart Nginx
      service:
        name: nginx
        state: restarted
```

---

### Day 64–66 — Ansible Roles & Galaxy
**Goal:** Structure Ansible code for enterprise use.

**Topics:**
- Ansible Roles directory structure
- `ansible-galaxy` for role management
- Role dependencies
- Ansible Vault for secrets
- Molecule for testing roles

---

### Day 67–70 — IaC Mini-Project
**Goal:** Provision a complete cloud infrastructure stack.

**Project:**
- Terraform: Provision VPC, subnets, EC2 instances, security groups, RDS
- Ansible: Configure EC2 instances (install Docker, nginx, monitoring agents)
- Use remote state in S3 with DynamoDB locking
- Parameterize everything via variables

---

## ⚙️ Phase 6: CI/CD Pipelines (Days 71–80)

### Day 71–72 — CI/CD Concepts
**Goal:** Understand the CI/CD philosophy and tooling landscape.

**Topics:**
- Continuous Integration (CI) vs. Continuous Delivery vs. Continuous Deployment
- CI/CD pipeline stages: Build → Test → Scan → Package → Deploy
- Popular tools: GitHub Actions, GitLab CI, Jenkins, CircleCI, ArgoCD
- Artifact management: Nexus, Artifactory, GHCR
- Semantic versioning and changelog

---

### Day 73–75 — GitHub Actions
**Goal:** Build production-grade CI/CD with GitHub Actions.

**Topics:**
- Workflow syntax: triggers, jobs, steps, runners
- Actions marketplace
- Secrets and environment management
- Matrix builds for multi-version testing
- Caching dependencies
- Reusable workflows and composite actions

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: "pip"
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest --cov=src tests/

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}:${{ github.sha }}
```

---

### Day 76–77 — GitLab CI/CD
**Goal:** Build pipelines in GitLab's native CI system.

**Topics:**
- `.gitlab-ci.yml` structure
- Stages, jobs, artifacts, and caches
- GitLab Runners (shared vs. self-hosted)
- Environments and deployments
- GitLab Container Registry

---

### Day 78–80 — Advanced CI/CD Patterns
**Goal:** Implement enterprise CI/CD best practices.

**Topics:**
- Branch protection and code review gates
- DAST/SAST integration (Snyk, SonarQube, Trivy)
- Release management and changelog automation
- Rollback strategies: Blue/Green, Canary deployments
- Feature flags with LaunchDarkly / Flipt
- Pipeline notifications (Slack, PagerDuty)

---

## ☁️ Phase 7: Cloud, Monitoring & GitOps (Days 81–90)

### Day 81–83 — AWS Core Services
**Goal:** Provision and manage AWS infrastructure.

**Topics:**
- IAM: Users, Roles, Policies, least privilege
- VPC: Subnets, Route Tables, NAT Gateway, Security Groups
- EC2: AMIs, instance types, user data, Auto Scaling Groups
- S3: Buckets, policies, versioning, lifecycle rules
- RDS: PostgreSQL, read replicas, automated backups
- EKS: Managed Kubernetes on AWS

**Resources:**
- [AWS Free Tier](https://aws.amazon.com/free/)
- [AWS Skill Builder](https://skillbuilder.aws/)

---

### Day 84–85 — Monitoring with Prometheus & Grafana
**Goal:** Implement observability for applications and infrastructure.

**Topics:**
- The Three Pillars of Observability: Metrics, Logs, Traces
- Prometheus architecture: scraping, TSDB, PromQL
- Key metrics: RED (Rate, Errors, Duration), USE (Utilization, Saturation, Errors)
- Grafana dashboards and alerting
- `kube-prometheus-stack` Helm chart
- Alertmanager: routes and receivers

```yaml
# prometheus-values.yaml (kube-prometheus-stack)
grafana:
  adminPassword: "supersecret"
  ingress:
    enabled: true
    hosts:
      - grafana.example.com

prometheus:
  prometheusSpec:
    retention: 30d
    storageSpec:
      volumeClaimTemplate:
        spec:
          storageClassName: gp2
          resources:
            requests:
              storage: 50Gi
```

---

### Day 86–87 — Centralized Logging with ELK / Loki
**Goal:** Aggregate and analyze logs at scale.

**Topics:**
- ELK Stack: Elasticsearch, Logstash, Kibana
- Grafana Loki + Promtail (lightweight alternative)
- Log levels, structured logging (JSON)
- Log rotation and retention policies
- OpenTelemetry for unified observability

---

### Day 88–89 — GitOps with ArgoCD
**Goal:** Implement GitOps continuous delivery on Kubernetes.

**Topics:**
- GitOps principles: Git as single source of truth
- ArgoCD architecture and installation
- Applications, Projects, and Sync policies
- ApplicationSets for multi-cluster deployments
- Auto-sync and self-healing
- Secrets management in GitOps (Sealed Secrets, External Secrets)

```bash
# Install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Get initial admin password
kubectl -n argocd get secret argocd-initial-admin-secret \
  -o jsonpath="{.data.password}" | base64 -d

# Port forward and login
kubectl port-forward svc/argocd-server -n argocd 8080:443
argocd login localhost:8080
```

---

### Day 90 — Capstone Project & Career Prep
**Goal:** Integrate everything into a production-ready project.

**🎓 Capstone Project: Full DevOps Platform**

Build and deploy a complete platform demonstrating all skills:

1. **Infrastructure (Terraform):** AWS VPC, EKS cluster, RDS, S3, IAM roles
2. **Configuration (Ansible):** Configure bastion hosts, monitoring agents
3. **Containers (Docker):** Multi-stage Dockerfile for a sample microservice
4. **Orchestration (Kubernetes + Helm):** Deploy app with HPA, PDB, Network Policies
5. **CI/CD (GitHub Actions):** Build → Test → Scan → Push → Deploy pipeline
6. **GitOps (ArgoCD):** Auto-sync from a Git repository
7. **Observability:** Prometheus metrics, Grafana dashboards, Loki logging, Alertmanager
8. **Security:** RBAC, Secrets management, Image scanning, SAST in pipeline

**📚 Certifications to Pursue Next:**
- AWS Cloud Practitioner / Solutions Architect Associate
- Certified Kubernetes Administrator (CKA)
- HashiCorp Certified: Terraform Associate
- Docker Certified Associate (DCA)

---

## 📚 Essential Resources

### Books
- *The Phoenix Project* — Gene Kim
- *The DevOps Handbook* — Gene Kim, Jez Humble
- *Site Reliability Engineering* — Google
- *Kubernetes: Up and Running* — Burns, Hightower, Beda

### Platforms
- [Linux Journey](https://linuxjourney.com/)
- [KodeKloud](https://kodekloud.com/) — Hands-on labs
- [A Cloud Guru](https://acloudguru.com/)
- [Killercoda](https://killercoda.com/) — Free K8s playground
- [Play with Docker](https://labs.play-with-docker.com/)
- [Terraform Playground](https://developer.hashicorp.com/terraform/tutorials)

### YouTube Channels
- TechWorld with Nana
- NetworkChuck
- Fireship
- That DevOps Guy
- Anton Putra

### Communities
- [DevOps Subreddit](https://www.reddit.com/r/devops/)
- [CNCF Slack](https://slack.cncf.io/)
- [DevOps.com](https://devops.com/)

---

*Good luck on your DevOps journey! Remember: consistency over intensity. 1 hour daily beats 7 hours on weekends.* 🚀
