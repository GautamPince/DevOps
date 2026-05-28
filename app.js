/* ============================================================
   APP.JS — DevOps 90-Day Roadmap Tracker
   ============================================================ */

// ============================================================
// DATA: 90-DAY CURRICULUM
// ============================================================
const PHASES = [
  {
    id: 1,
    emoji: '🐧',
    name: 'Linux, Bash & Git',
    days: '1–15',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff, #0080ff)',
  },
  {
    id: 2,
    emoji: '🐍',
    name: 'Python for DevOps',
    days: '16–25',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 3,
    emoji: '🐳',
    name: 'Docker & Containers',
    days: '26–40',
    color: '#2496ed',
    gradient: 'linear-gradient(135deg, #2496ed, #0072ce)',
  },
  {
    id: 4,
    emoji: '☸️',
    name: 'Kubernetes',
    days: '41–55',
    color: '#326de6',
    gradient: 'linear-gradient(135deg, #326de6, #8b5cf6)',
  },
  {
    id: 5,
    emoji: '🏗️',
    name: 'Terraform & Ansible',
    days: '56–70',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    id: 6,
    emoji: '⚙️',
    name: 'CI/CD Pipelines',
    days: '71–80',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    id: 7,
    emoji: '☁️',
    name: 'Cloud, Monitoring & GitOps',
    days: '81–90',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
  },
];

const DAYS_DATA = [
  // ─── PHASE 1: Linux, Bash & Git ──────────────────────────
  { day: 1,  phase: 1, title: 'Linux Essentials & Navigation', goal: 'Navigate the Linux filesystem confidently and manage users, files, and permissions.', tags: ['Linux', 'CLI', 'Permissions'] },
  { day: 2,  phase: 1, title: 'File System & Text Manipulation', goal: 'Parse and manipulate text files using powerful CLI tools like grep, awk, and sed.', tags: ['grep', 'awk', 'sed', 'pipes'] },
  { day: 3,  phase: 1, title: 'Process Management & Cron', goal: 'Monitor running processes and schedule automated tasks with systemd and cron.', tags: ['systemd', 'cron', 'ps', 'htop'] },
  { day: 4,  phase: 1, title: 'Bash Scripting Basics', goal: 'Write functional automation scripts using variables, conditionals, and loops.', tags: ['Bash', 'Scripting', 'Automation'] },
  { day: 5,  phase: 1, title: 'Advanced Bash Scripting', goal: 'Build robust, error-handled scripts with arrays, traps, and argument parsing.', tags: ['Bash', 'Error Handling', 'getopts'] },
  { day: 6,  phase: 1, title: 'Networking Fundamentals', goal: 'Understand the TCP/IP stack, IP addressing, CIDR notation, and firewall basics.', tags: ['TCP/IP', 'DNS', 'CIDR', 'Firewall'] },
  { day: 7,  phase: 1, title: 'Linux Networking Tools', goal: 'Diagnose network issues with ssh, curl, rsync, netcat, and tcpdump.', tags: ['SSH', 'curl', 'rsync', 'tcpdump'] },
  { day: 8,  phase: 1, title: 'Git Version Control — Basics', goal: 'Master Git fundamentals: staging, committing, branching, and merging.', tags: ['Git', 'VCS', 'Branching'] },
  { day: 9,  phase: 1, title: 'Git — Collaboration & Remotes', goal: 'Work with remote repos, pull requests, merge conflicts, and .gitignore.', tags: ['Git', 'GitHub', 'PRs'] },
  { day: 10, phase: 1, title: 'Git Workflows & Best Practices', goal: 'Use GitFlow, Trunk-Based Development, and Conventional Commits professionally.', tags: ['GitFlow', 'Commits', 'Hooks'] },
  { day: 11, phase: 1, title: 'Linux Security Hardening', goal: 'Harden a Linux server: SSH config, fail2ban, sudoers, and audit logging.', tags: ['Security', 'SSH', 'fail2ban'] },
  { day: 12, phase: 1, title: 'AppArmor, SELinux & Audit', goal: 'Apply mandatory access controls and audit user activity with auditd.', tags: ['AppArmor', 'SELinux', 'auditd'] },
  { day: 13, phase: 1, title: 'CIS Benchmarks & File Integrity', goal: 'Review CIS hardening benchmarks and set up file integrity monitoring.', tags: ['CIS', 'AIDE', 'Hardening'] },
  { day: 14, phase: 1, title: 'Phase 1 Review & Mini-Project', goal: 'Build a server provisioning bash script with user creation, hardening, and cron.', tags: ['Project', 'Review', 'Bash'] },
  { day: 15, phase: 1, title: 'Server Automation Script Polish', goal: 'Refine your provisioning script with logging, error handling, and idempotency.', tags: ['Bash', 'Automation', 'Idempotency'] },

  // ─── PHASE 2: Python for DevOps ──────────────────────────
  { day: 16, phase: 2, title: 'Python Basics for DevOps', goal: 'Write Python scripts to run shell commands, manage files, and parse JSON/YAML.', tags: ['Python', 'subprocess', 'json'] },
  { day: 17, phase: 2, title: 'Python File I/O & YAML', goal: 'Read/write configuration files in JSON, YAML, and INI formats with Python.', tags: ['Python', 'PyYAML', 'Config'] },
  { day: 18, phase: 2, title: 'HTTP APIs with Python', goal: 'Interact with REST APIs using the requests library and handle auth and errors.', tags: ['Python', 'requests', 'REST', 'API'] },
  { day: 19, phase: 2, title: 'Python CLI Tools with argparse', goal: 'Build command-line tools with argument parsing and structured logging.', tags: ['argparse', 'logging', 'CLI'] },
  { day: 20, phase: 2, title: 'Jinja2 Templating & Config Gen', goal: 'Generate dynamic config files from templates using Jinja2 and Python.', tags: ['Jinja2', 'Templates', 'Python'] },
  { day: 21, phase: 2, title: 'Environment Management & Dotenv', goal: 'Manage environments with venv, pip, requirements.txt, and python-dotenv.', tags: ['venv', 'pip', 'dotenv'] },
  { day: 22, phase: 2, title: 'Python Testing with pytest', goal: 'Write unit tests and mocks for DevOps tooling using pytest and unittest.mock.', tags: ['pytest', 'Testing', 'Mocking'] },
  { day: 23, phase: 2, title: 'Code Quality & Type Hints', goal: 'Enforce code quality with black, flake8, isort, and mypy type checking.', tags: ['black', 'flake8', 'mypy'] },
  { day: 24, phase: 2, title: 'Python CLI Tool — Build Phase', goal: 'Build a multi-command DevOps CLI tool with health, deploy, and backup commands.', tags: ['Python', 'CLI', 'rich', 'Project'] },
  { day: 25, phase: 2, title: 'Python CLI Tool — Polish & Docs', goal: 'Finalize the CLI with YAML config, help docs, and unit tests.', tags: ['Python', 'Documentation', 'Tests'] },

  // ─── PHASE 3: Docker & Containers ────────────────────────
  { day: 26, phase: 3, title: 'Docker Fundamentals', goal: 'Run containers, understand Docker architecture, images, layers, and namespaces.', tags: ['Docker', 'Containers', 'Images'] },
  { day: 27, phase: 3, title: 'Docker CLI Mastery', goal: 'Master docker run, exec, logs, inspect, cp, and resource limits.', tags: ['Docker', 'CLI', 'Resources'] },
  { day: 28, phase: 3, title: 'Writing Dockerfiles', goal: 'Write efficient Dockerfiles with layer caching, .dockerignore, and non-root users.', tags: ['Dockerfile', 'Layers', 'Security'] },
  { day: 29, phase: 3, title: 'Multi-Stage Builds', goal: 'Dramatically reduce image sizes using multi-stage Docker builds.', tags: ['Docker', 'Multi-stage', 'Optimization'] },
  { day: 30, phase: 3, title: 'Docker Networking', goal: 'Connect containers using bridge, host, and custom networks with DNS resolution.', tags: ['Docker', 'Networking', 'DNS'] },
  { day: 31, phase: 3, title: 'Docker Volumes & Data Persistence', goal: 'Persist data using named volumes, bind mounts, and volume drivers.', tags: ['Docker', 'Volumes', 'Storage'] },
  { day: 32, phase: 3, title: 'Docker Compose — Basics', goal: 'Define and run multi-container applications with docker-compose.yml.', tags: ['Compose', 'YAML', 'Services'] },
  { day: 33, phase: 3, title: 'Docker Compose — Advanced', goal: 'Add health checks, env files, depends_on, and production-ready configs.', tags: ['Compose', 'Healthchecks', 'Env'] },
  { day: 34, phase: 3, title: 'Container Registries', goal: 'Push and pull images from Docker Hub, GHCR, ECR, and Harbor registries.', tags: ['Registry', 'GHCR', 'ECR'] },
  { day: 35, phase: 3, title: 'Image Scanning with Trivy', goal: 'Scan container images for CVEs using Trivy and integrate into CI pipelines.', tags: ['Trivy', 'Security', 'CVE'] },
  { day: 36, phase: 3, title: 'Container Security Best Practices', goal: 'Harden containers: read-only FS, capability dropping, seccomp profiles.', tags: ['Security', 'Seccomp', 'Capabilities'] },
  { day: 37, phase: 3, title: 'Secrets in Docker', goal: 'Manage secrets securely: Docker Secrets vs environment variables vs vault.', tags: ['Secrets', 'Security', 'Vault'] },
  { day: 38, phase: 3, title: 'Docker in Production Patterns', goal: 'Implement restart policies, resource limits, and logging drivers for production.', tags: ['Production', 'Logging', 'Limits'] },
  { day: 39, phase: 3, title: 'Containerization Project — Build', goal: 'Containerize a 3-tier app (frontend, API, database) with optimized Dockerfiles.', tags: ['Project', 'Docker', 'Compose'] },
  { day: 40, phase: 3, title: 'Containerization Project — Finalize', goal: 'Scan, push to registry, and document the containerized 3-tier application.', tags: ['Project', 'Registry', 'Trivy'] },

  // ─── PHASE 4: Kubernetes ─────────────────────────────────
  { day: 41, phase: 4, title: 'Kubernetes Architecture', goal: 'Understand the Control Plane, worker nodes, and set up minikube/kind locally.', tags: ['K8s', 'Architecture', 'minikube'] },
  { day: 42, phase: 4, title: 'kubectl Mastery', goal: 'Use kubectl to inspect, manage, and troubleshoot cluster resources.', tags: ['kubectl', 'K8s', 'CLI'] },
  { day: 43, phase: 4, title: 'Pods & Deployments', goal: 'Deploy applications with Deployments, manage replicas, and perform rolling updates.', tags: ['Pods', 'Deployments', 'Rolling'] },
  { day: 44, phase: 4, title: 'Labels, Selectors & Annotations', goal: 'Organize and query K8s objects effectively with labels and selectors.', tags: ['Labels', 'Selectors', 'K8s'] },
  { day: 45, phase: 4, title: 'Services & Service Discovery', goal: 'Expose applications with ClusterIP, NodePort, and LoadBalancer services.', tags: ['Services', 'ClusterIP', 'DNS'] },
  { day: 46, phase: 4, title: 'Ingress & TLS Termination', goal: 'Route external traffic with NGINX Ingress controller and manage TLS certs.', tags: ['Ingress', 'NGINX', 'TLS', 'cert-manager'] },
  { day: 47, phase: 4, title: 'ConfigMaps & Secrets', goal: 'Inject configuration and sensitive data into pods securely.', tags: ['ConfigMaps', 'Secrets', 'K8s'] },
  { day: 48, phase: 4, title: 'Persistent Storage in K8s', goal: 'Provision persistent storage with PVs, PVCs, StorageClasses, and StatefulSets.', tags: ['PV', 'PVC', 'StatefulSets'] },
  { day: 49, phase: 4, title: 'Helm Package Manager', goal: 'Deploy complex apps with Helm charts, customize values, and manage releases.', tags: ['Helm', 'Charts', 'Releases'] },
  { day: 50, phase: 4, title: 'Writing Custom Helm Charts', goal: 'Author reusable Helm charts with Go templates, helpers, and conditionals.', tags: ['Helm', 'Templates', 'Go'] },
  { day: 51, phase: 4, title: 'Horizontal Pod Autoscaler', goal: 'Automatically scale pods based on CPU/memory metrics with HPA.', tags: ['HPA', 'Autoscaling', 'Metrics'] },
  { day: 52, phase: 4, title: 'Resource Quotas & Limits', goal: 'Enforce resource governance with ResourceQuotas, LimitRanges, and QoS classes.', tags: ['Resources', 'Quotas', 'QoS'] },
  { day: 53, phase: 4, title: 'Kubernetes RBAC', goal: 'Secure cluster access with Roles, ClusterRoles, and RoleBindings.', tags: ['RBAC', 'Security', 'ServiceAccounts'] },
  { day: 54, phase: 4, title: 'Network Policies', goal: 'Restrict pod-to-pod traffic with Kubernetes Network Policies.', tags: ['NetworkPolicy', 'Security', 'K8s'] },
  { day: 55, phase: 4, title: 'K8s Debugging & Troubleshooting', goal: 'Diagnose pod failures using logs, events, exec, and describe commands.', tags: ['Debugging', 'Logs', 'kubectl'] },

  // ─── PHASE 5: Terraform & Ansible ────────────────────────
  { day: 56, phase: 5, title: 'Terraform Fundamentals', goal: 'Write HCL to provision cloud resources, manage state, and understand providers.', tags: ['Terraform', 'HCL', 'IaC'] },
  { day: 57, phase: 5, title: 'Terraform Variables & Outputs', goal: 'Parameterize configurations with variables, locals, and outputs.', tags: ['Terraform', 'Variables', 'Outputs'] },
  { day: 58, phase: 5, title: 'Terraform State & Backends', goal: 'Manage remote state in S3 with DynamoDB locking for team workflows.', tags: ['Terraform', 'State', 'S3', 'Backend'] },
  { day: 59, phase: 5, title: 'Terraform Modules', goal: 'Build reusable infrastructure modules and consume public registry modules.', tags: ['Terraform', 'Modules', 'Registry'] },
  { day: 60, phase: 5, title: 'Advanced Terraform Patterns', goal: 'Use count, for_each, dynamic blocks, and moved blocks for scalable configs.', tags: ['Terraform', 'for_each', 'Dynamic'] },
  { day: 61, phase: 5, title: 'Terraform Workspaces & Environments', goal: 'Manage multiple environments (dev/staging/prod) with Terraform workspaces.', tags: ['Terraform', 'Workspaces', 'Environments'] },
  { day: 62, phase: 5, title: 'Ansible Fundamentals', goal: 'Run ad-hoc commands and write playbooks to configure multiple servers.', tags: ['Ansible', 'Playbooks', 'Inventory'] },
  { day: 63, phase: 5, title: 'Ansible Modules & Handlers', goal: 'Use core modules (apt, copy, template, service) and handlers for idempotency.', tags: ['Ansible', 'Modules', 'Handlers'] },
  { day: 64, phase: 5, title: 'Ansible Roles & Galaxy', goal: 'Structure Ansible code with Roles and reuse community roles from Ansible Galaxy.', tags: ['Ansible', 'Roles', 'Galaxy'] },
  { day: 65, phase: 5, title: 'Ansible Vault & Secrets', goal: 'Encrypt sensitive vars with Ansible Vault and manage secrets securely.', tags: ['Ansible', 'Vault', 'Secrets'] },
  { day: 66, phase: 5, title: 'Testing Ansible Roles with Molecule', goal: 'Test Ansible roles locally with Molecule and Docker drivers.', tags: ['Ansible', 'Molecule', 'Testing'] },
  { day: 67, phase: 5, title: 'IaC Project — Terraform Infra', goal: 'Provision a VPC, subnets, EC2 instances, security groups, and RDS on AWS.', tags: ['Terraform', 'AWS', 'VPC', 'Project'] },
  { day: 68, phase: 5, title: 'IaC Project — Ansible Config', goal: 'Configure provisioned EC2 instances with Docker, nginx, and monitoring agents.', tags: ['Ansible', 'EC2', 'Docker', 'Project'] },
  { day: 69, phase: 5, title: 'IaC Project — Integration & State', goal: 'Wire up remote state, add DynamoDB locking, and parameterize all variables.', tags: ['Terraform', 'State', 'DynamoDB'] },
  { day: 70, phase: 5, title: 'IaC Project — Review & Cleanup', goal: 'Document, test idempotency, destroy resources cleanly, and write a README.', tags: ['IaC', 'Review', 'Project'] },

  // ─── PHASE 6: CI/CD ──────────────────────────────────────
  { day: 71, phase: 6, title: 'CI/CD Concepts & Tooling', goal: 'Understand CI/CD principles, pipeline stages, and the DevOps tooling landscape.', tags: ['CI/CD', 'Concepts', 'Pipelines'] },
  { day: 72, phase: 6, title: 'Semantic Versioning & Changelogs', goal: 'Automate versioning with semver, conventional commits, and release-please.', tags: ['SemVer', 'Releases', 'Changelog'] },
  { day: 73, phase: 6, title: 'GitHub Actions — Basics', goal: 'Build your first CI workflow: checkout, test, lint, and upload artifacts.', tags: ['GitHub Actions', 'CI', 'YAML'] },
  { day: 74, phase: 6, title: 'GitHub Actions — Docker Build & Push', goal: 'Build Docker images, scan with Trivy, and push to GHCR in a pipeline.', tags: ['GitHub Actions', 'Docker', 'GHCR'] },
  { day: 75, phase: 6, title: 'GitHub Actions — Advanced Patterns', goal: 'Use matrix builds, reusable workflows, caching, and environment gates.', tags: ['GitHub Actions', 'Matrix', 'Cache'] },
  { day: 76, phase: 6, title: 'GitLab CI/CD — Basics', goal: 'Write a .gitlab-ci.yml pipeline with stages, jobs, artifacts, and caching.', tags: ['GitLab CI', 'Pipelines', 'Stages'] },
  { day: 77, phase: 6, title: 'GitLab CI/CD — Environments & Deploy', goal: 'Configure GitLab environments, deployment strategies, and self-hosted runners.', tags: ['GitLab CI', 'Environments', 'Runners'] },
  { day: 78, phase: 6, title: 'Security in CI/CD (SAST/DAST)', goal: 'Integrate Snyk, SonarQube, and Trivy for automated security scanning in pipelines.', tags: ['SAST', 'DAST', 'Snyk', 'Security'] },
  { day: 79, phase: 6, title: 'Blue/Green & Canary Deployments', goal: 'Implement zero-downtime deployment strategies with feature flags and traffic splits.', tags: ['Blue/Green', 'Canary', 'Feature Flags'] },
  { day: 80, phase: 6, title: 'CI/CD Pipeline — Full Project', goal: 'Build a complete CI/CD pipeline: build → test → scan → push → deploy to K8s.', tags: ['CI/CD', 'Project', 'K8s', 'Complete'] },

  // ─── PHASE 7: Cloud, Monitoring & GitOps ─────────────────
  { day: 81, phase: 7, title: 'AWS IAM & Networking', goal: 'Configure IAM with least privilege, set up VPC, subnets, routing, and security groups.', tags: ['AWS', 'IAM', 'VPC', 'Security'] },
  { day: 82, phase: 7, title: 'AWS Compute — EC2 & Auto Scaling', goal: 'Launch EC2 instances, configure launch templates, and set up Auto Scaling Groups.', tags: ['AWS', 'EC2', 'Auto Scaling', 'AMI'] },
  { day: 83, phase: 7, title: 'AWS EKS & Managed Services', goal: 'Deploy a managed Kubernetes cluster on EKS and configure node groups.', tags: ['AWS', 'EKS', 'Kubernetes', 'RDS'] },
  { day: 84, phase: 7, title: 'Prometheus — Architecture & PromQL', goal: 'Set up Prometheus, understand scraping, TSDB, and write PromQL queries.', tags: ['Prometheus', 'PromQL', 'Monitoring'] },
  { day: 85, phase: 7, title: 'Grafana Dashboards & Alerting', goal: 'Build production dashboards with Grafana and configure Alertmanager routes.', tags: ['Grafana', 'Dashboards', 'Alerting'] },
  { day: 86, phase: 7, title: 'Centralized Logging with Loki', goal: 'Ship, store, and query logs using Grafana Loki and Promtail in Kubernetes.', tags: ['Loki', 'Promtail', 'Logging'] },
  { day: 87, phase: 7, title: 'Distributed Tracing with OpenTelemetry', goal: 'Instrument applications and collect traces with OpenTelemetry and Jaeger/Tempo.', tags: ['OpenTelemetry', 'Tracing', 'Jaeger'] },
  { day: 88, phase: 7, title: 'GitOps with ArgoCD — Setup', goal: 'Install ArgoCD and deploy your first application with Git as source of truth.', tags: ['ArgoCD', 'GitOps', 'K8s'] },
  { day: 89, phase: 7, title: 'ArgoCD — Advanced & Secrets', goal: 'Configure ApplicationSets, auto-sync, self-healing, and Sealed Secrets.', tags: ['ArgoCD', 'Secrets', 'Self-healing'] },
  { day: 90, phase: 7, title: '🎓 Capstone Project', goal: 'Build a full DevOps platform: Terraform infra → Docker → K8s → CI/CD → GitOps → Monitoring.', tags: ['Capstone', 'Project', 'Complete', 'Portfolio'] },
];

// ============================================================
// STATE MANAGEMENT
// ============================================================
const STATE_KEY = 'devops_roadmap_v2';

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return createDefaultState();
    const parsed = JSON.parse(raw);
    if (!parsed.practiceChecked) parsed.practiceChecked = {};
    return parsed;
  } catch {
    return createDefaultState();
  }
}

function createDefaultState() {
  return {
    completed: {},   // { dayNum: true }
    notes: {},       // { dayNum: "text" }
    globalNotes: '',
    theme: 'dark',
    lastSeen: null,
    practiceChecked: {}, // { "dayNum_taskId": true }
  };
}

function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function $(id) { return document.getElementById(id); }
function $$(sel) { return document.querySelectorAll(sel); }

function showToast(message, duration = 3000) {
  const toast = $('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function animateNumber(el, target, duration = 800) {
  const start = parseInt(el.textContent) || 0;
  const diff = target - start;
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + diff * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function getPhaseForDay(dayNum) {
  if (dayNum <= 15) return 1;
  if (dayNum <= 25) return 2;
  if (dayNum <= 40) return 3;
  if (dayNum <= 55) return 4;
  if (dayNum <= 70) return 5;
  if (dayNum <= 80) return 6;
  return 7;
}

function getPhaseCompletionData() {
  return PHASES.map(phase => {
    const phaseDays = DAYS_DATA.filter(d => d.phase === phase.id);
    const completedCount = phaseDays.filter(d => state.completed[d.day]).length;
    return { ...phase, total: phaseDays.length, completed: completedCount };
  });
}

function getTotalCompleted() {
  return Object.values(state.completed).filter(Boolean).length;
}

function getStreak() {
  // Calculate streak: consecutive days completed from highest completed day backward
  let streak = 0;
  for (let i = 90; i >= 1; i--) {
    if (state.completed[i]) streak++;
    else if (streak > 0) break;
  }
  // Forward streak from day 1
  let fStreak = 0;
  for (let i = 1; i <= 90; i++) {
    if (state.completed[i]) fStreak++;
    else break;
  }
  return Math.max(streak, fStreak);
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

// ─── SVG Gradient ─────────────────────────────────────────
function injectSVGDefs() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('svg-defs');
  svg.innerHTML = `
    <defs>
      <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00d4ff"/>
        <stop offset="100%" stop-color="#8b5cf6"/>
      </linearGradient>
    </defs>`;
  document.body.prepend(svg);
}

// ─── Dashboard Stats ──────────────────────────────────────
function updateDashboard() {
  const totalDone = getTotalCompleted();
  const percent = Math.round((totalDone / 90) * 100);
  const phasesDone = getPhaseCompletionData().filter(p => p.completed === p.total).length;
  const streak = getStreak();

  // Overall percent text
  $('overall-percent').textContent = `${percent}%`;
  $('overall-days-done').textContent = `${totalDone} of 90 days done`;

  // Progress ring
  const circumference = 2 * Math.PI * 50; // r=50
  const offset = circumference - (percent / 100) * circumference;
  const ringFill = $('ring-fill-main');
  ringFill.style.strokeDashoffset = offset;

  // Animated numbers
  animateNumber($('tasks-completed'), totalDone);
  animateNumber($('streak-count'), streak);
  animateNumber($('phases-completed'), phasesDone);

  // Milestone badges
  updateMilestoneBadges(totalDone);

  // Phase progress bars
  renderPhaseGrid();

  // Today's Focus
  renderTodaysFocus(totalDone);
}

function updateMilestoneBadges(totalDone) {
  const milestones = [
    { label: '🌱 Started', threshold: 1 },
    { label: '🔥 15 Days', threshold: 15 },
    { label: '⚡ 30 Days', threshold: 30 },
    { label: '🚀 60 Days', threshold: 60 },
    { label: '🏆 90 Days', threshold: 90 },
  ];
  const container = $('milestone-badges');
  container.innerHTML = milestones.map(m => {
    const earned = totalDone >= m.threshold;
    return `<span class="milestone-badge ${earned ? 'earned' : 'locked'}">${m.label}</span>`;
  }).join('');
}

function renderPhaseGrid() {
  const grid = $('phase-grid');
  const phaseData = getPhaseCompletionData();
  grid.innerHTML = phaseData.map(p => {
    const pct = Math.round((p.completed / p.total) * 100);
    return `
      <div class="phase-card" data-phase="${p.id}" role="button" tabindex="0">
        <div class="phase-card-header">
          <div class="phase-emoji">${p.emoji}</div>
          <div class="phase-info">
            <h4>${p.name}</h4>
            <span>Phase ${p.id} · Days ${p.days}</span>
          </div>
        </div>
        <div class="phase-progress-bar">
          <div class="phase-progress-fill" style="width:${pct}%; background:${p.gradient}"></div>
        </div>
        <div class="phase-progress-text">
          <span>${p.completed}/${p.total} days</span>
          <span>${pct}%</span>
        </div>
      </div>
    `;
  }).join('');

  // Phase card click → switch to roadmap tab filtered
  grid.querySelectorAll('.phase-card').forEach(card => {
    card.addEventListener('click', () => {
      switchTab('roadmap');
      const phaseId = card.dataset.phase;
      filterByPhase(phaseId);
    });
  });
}

function renderTodaysFocus(totalDone) {
  const container = $('todays-focus');
  // Next 3 incomplete days
  const incomplete = DAYS_DATA.filter(d => !state.completed[d.day]);
  const focus = incomplete.slice(0, 4);

  if (focus.length === 0) {
    container.innerHTML = `<div class="focus-item" style="justify-content:center;color:var(--accent-green)">
      🎉 All 90 days complete! You're a DevOps pro!
    </div>`;
    return;
  }

  container.innerHTML = focus.map(d => {
    const phase = PHASES.find(p => p.id === d.phase);
    return `
      <div class="focus-item" data-day="${d.day}" role="button" tabindex="0">
        <span class="focus-day-num">Day ${d.day}</span>
        <span>${d.title}</span>
        <span style="margin-left:auto;font-size:0.7rem;color:var(--text-muted)">${phase.emoji}</span>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.focus-item').forEach(item => {
    item.addEventListener('click', () => {
      const dayNum = parseInt(item.dataset.day);
      openDayModal(dayNum);
    });
  });
}

// ─── Roadmap Days ──────────────────────────────────────────
function renderRoadmap() {
  const container = $('days-container');
  container.innerHTML = '';

  PHASES.forEach(phase => {
    const phaseDays = DAYS_DATA.filter(d => d.phase === phase.id);

    const section = document.createElement('div');
    section.className = 'phase-section';
    section.dataset.phase = phase.id;

    const completedInPhase = phaseDays.filter(d => state.completed[d.day]).length;
    const allDone = completedInPhase === phaseDays.length;

    section.innerHTML = `
      <div class="phase-section-header">
        <div class="phase-section-emoji">${phase.emoji}</div>
        <div>
          <div class="phase-section-title">${phase.name}</div>
          <div class="phase-section-meta">Phase ${phase.id} · Days ${phase.days} · ${phaseDays.length} days · ${completedInPhase}/${phaseDays.length} done</div>
        </div>
        <span class="phase-complete-badge ${allDone ? 'visible' : ''}">✅ Phase Complete!</span>
      </div>
      <div class="day-cards-grid">
        ${phaseDays.map(d => renderDayCard(d)).join('')}
      </div>
    `;

    container.appendChild(section);
  });

  // Attach click handlers
  container.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => {
      const dayNum = parseInt(card.dataset.day);
      openDayModal(dayNum);
    });

    // Keyboard accessibility
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const dayNum = parseInt(card.dataset.day);
        openDayModal(dayNum);
      }
    });
  });
}

function renderDayCard(dayData) {
  const done = state.completed[dayData.day];
  const hasNote = state.notes[dayData.day] && state.notes[dayData.day].trim().length > 0;
  return `
    <div class="day-card ${done ? 'completed' : ''} ${hasNote ? 'has-notes' : ''}"
         data-day="${dayData.day}" data-phase="${dayData.phase}"
         role="button" tabindex="0" id="day-card-${dayData.day}">
      <div class="day-card-header">
        <span class="day-number">Day ${dayData.day}</span>
        <div class="day-check">${done ? '✓' : ''}</div>
      </div>
      <div class="day-title">${dayData.title}</div>
      <div class="day-goal">${dayData.goal}</div>
      <div class="day-tags">
        ${dayData.tags.map(t => `<span class="day-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

function refreshDayCard(dayNum) {
  const card = $(`day-card-${dayNum}`);
  if (!card) return;
  const dayData = DAYS_DATA.find(d => d.day === dayNum);
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = renderDayCard(dayData);
  const newCard = tempDiv.firstElementChild;

  // Transfer event listener
  newCard.addEventListener('click', () => openDayModal(dayNum));
  newCard.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDayModal(dayNum); }
  });

  card.replaceWith(newCard);

  // Apply hide-completed filter if active
  const hideCompleted = $('hide-completed').checked;
  if (hideCompleted && state.completed[dayNum]) {
    newCard.classList.add('hidden');
  }

  // Refresh phase complete badge
  const phase = PHASES.find(p => p.id === getPhaseForDay(dayNum));
  const phaseDays = DAYS_DATA.filter(d => d.phase === phase.id);
  const completedInPhase = phaseDays.filter(d => state.completed[d.day]).length;
  const phaseSection = document.querySelector(`.phase-section[data-phase="${phase.id}"]`);
  if (phaseSection) {
    const badge = phaseSection.querySelector('.phase-complete-badge');
    const meta = phaseSection.querySelector('.phase-section-meta');
    if (badge) badge.classList.toggle('visible', completedInPhase === phaseDays.length);
    if (meta) meta.textContent = `Phase ${phase.id} · Days ${phase.days} · ${phaseDays.length} days · ${completedInPhase}/${phaseDays.length} done`;
  }
}

// ─── Modal ─────────────────────────────────────────────────
let currentModalDay = null;

function openDayModal(dayNum) {
  const dayData = DAYS_DATA.find(d => d.day === dayNum);
  if (!dayData) return;

  currentModalDay = dayNum;
  const phase = PHASES.find(p => p.id === dayData.phase);
  const done = state.completed[dayNum];

  $('modal-day-badge').textContent = `Day ${dayNum} of 90`;
  $('modal-title').textContent = dayData.title;
  $('modal-phase-tag').innerHTML = `${phase.emoji} Phase ${phase.id}: ${phase.name}`;
  $('modal-goal').innerHTML = `<strong>🎯 Goal:</strong> ${dayData.goal}`;
  $('modal-topics').innerHTML = `
    <h4>Key Topics</h4>
    <ul>${dayData.tags.map(t => `<li>${t}</li>`).join('')}</ul>
  `;

  // Render Lesson Content and Practice Tasks
  renderLessonContent(dayNum);
  renderPracticeQuestions(dayNum);

  $('modal-notes').value = state.notes[dayNum] || '';

  const completeBtn = $('modal-complete-btn');
  completeBtn.textContent = done ? '✅ Mark as Incomplete' : 'Mark as Complete ✅';
  completeBtn.classList.toggle('completed-state', done);

  $('modal-overlay').classList.add('open');
  $('modal-overlay').setAttribute('aria-hidden', 'false');
  setTimeout(() => $('modal-notes').focus(), 300);
}

function closeModal() {
  $('modal-overlay').classList.remove('open');
  $('modal-overlay').setAttribute('aria-hidden', 'true');
  currentModalDay = null;
}

function toggleDayComplete(dayNum) {
  // Guard against completing when disabled (locked)
  const completeBtn = $('modal-complete-btn');
  if (completeBtn.classList.contains('disabled') && !state.completed[dayNum]) {
    return;
  }

  state.completed[dayNum] = !state.completed[dayNum];
  saveState(state);
  refreshDayCard(dayNum);
  updateDashboard();
  const msg = state.completed[dayNum] ? `🎉 Day ${dayNum} completed!` : `↩️ Day ${dayNum} marked incomplete`;
  showToast(msg);

  const done = state.completed[dayNum];
  completeBtn.textContent = done ? '✅ Mark as Incomplete' : 'Mark as Complete ✅';
  completeBtn.classList.toggle('completed-state', done);

  // Update button disabled state if practice tasks exist
  const contentData = typeof DAY_CONTENT !== 'undefined' ? DAY_CONTENT[dayNum] : null;
  if (contentData && contentData.practice && contentData.practice.length > 0) {
    updatePracticeProgress(dayNum, contentData.practice);
  }
}

// ─── Lesson & Practice Renders ─────────────────────────────
function renderLessonContent(dayNum) {
  const container = $('modal-lesson-content');
  if (!container) return;

  const contentData = typeof DAY_CONTENT !== 'undefined' ? DAY_CONTENT[dayNum] : null;
  if (!contentData || !contentData.sections) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'flex';
  container.innerHTML = `
    <div class="modal-lesson-content-wrapper">
      ${contentData.sections.map(section => `
        <div class="lesson-section">
          <h3>${section.title}</h3>
          <div>${section.content}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderPracticeQuestions(dayNum) {
  const container = $('modal-practice-section');
  const completeBtn = $('modal-complete-btn');
  if (!container) return;

  const contentData = typeof DAY_CONTENT !== 'undefined' ? DAY_CONTENT[dayNum] : null;
  if (!contentData || !contentData.practice || contentData.practice.length === 0) {
    container.style.display = 'none';
    completeBtn.classList.remove('disabled');
    completeBtn.removeAttribute('disabled');
    return;
  }

  container.style.display = 'block';
  container.innerHTML = `
    <div class="practice-title">
      <span>📋 Hands-on Practice Tasks</span>
      <span style="font-size:0.75rem;font-weight:normal;color:var(--text-muted);margin-left:auto;" id="practice-progress-text">0/0 done</span>
    </div>
    <div class="practice-list">
      ${contentData.practice.map(task => {
        const key = `${dayNum}_${task.id}`;
        const isChecked = !!state.practiceChecked[key];
        return `
          <div class="practice-item ${isChecked ? 'checked' : ''}" data-task-id="${task.id}">
            <div class="practice-checkbox-container">
              <input type="checkbox" class="practice-checkbox" id="chk-${task.id}" ${isChecked ? 'checked' : ''} />
            </div>
            <label class="practice-text" for="chk-${task.id}">${task.text}</label>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach click handlers to the cards
  const items = container.querySelectorAll('.practice-item');
  items.forEach(item => {
    const checkbox = item.querySelector('.practice-checkbox');
    const taskId = item.dataset.taskId;
    const key = `${dayNum}_${taskId}`;

    const toggle = (e) => {
      if (e.target !== checkbox) {
        e.preventDefault();
        checkbox.checked = !checkbox.checked;
      }
      state.practiceChecked[key] = checkbox.checked;
      item.classList.toggle('checked', checkbox.checked);
      saveState(state);
      updatePracticeProgress(dayNum, contentData.practice);
    };

    item.addEventListener('click', toggle);
  });

  updatePracticeProgress(dayNum, contentData.practice);
}

function updatePracticeProgress(dayNum, practiceTasks) {
  const completeBtn = $('modal-complete-btn');
  const doneCount = practiceTasks.filter(task => state.practiceChecked[`${dayNum}_${task.id}`]).length;
  const totalCount = practiceTasks.length;

  const progressText = $('practice-progress-text');
  if (progressText) {
    progressText.textContent = `${doneCount}/${totalCount} tasks completed`;
    progressText.style.color = doneCount === totalCount ? 'var(--accent-green)' : 'var(--text-secondary)';
  }

  const allDone = doneCount === totalCount;
  if (allDone || !!state.completed[dayNum]) {
    completeBtn.classList.remove('disabled');
    completeBtn.removeAttribute('disabled');
  } else {
    completeBtn.classList.add('disabled');
    completeBtn.setAttribute('disabled', 'true');
  }
}

function saveModalNotes(dayNum) {
  state.notes[dayNum] = $('modal-notes').value;
  saveState(state);
  refreshDayCard(dayNum);
  showToast('📝 Notes saved!');
}

// ─── Filters ───────────────────────────────────────────────
let activePhaseFilter = 'all';

function filterByPhase(phaseId) {
  activePhaseFilter = phaseId;

  // Update chip UI
  $$('#filter-chips .chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.phase === String(phaseId));
  });

  // Show/hide phase sections
  $$('.phase-section').forEach(section => {
    const show = phaseId === 'all' || section.dataset.phase === String(phaseId);
    section.style.display = show ? '' : 'none';
  });
}

function applyHideCompleted(hide) {
  $$('.day-card').forEach(card => {
    const dayNum = parseInt(card.dataset.day);
    if (hide && state.completed[dayNum]) {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }
  });
}

// ─── Search ────────────────────────────────────────────────
function handleSearch(query) {
  const resultsBox = $('search-results');
  const trimmed = query.trim().toLowerCase();

  if (!trimmed) {
    resultsBox.classList.remove('open');
    resultsBox.innerHTML = '';
    return;
  }

  const matches = DAYS_DATA.filter(d =>
    d.title.toLowerCase().includes(trimmed) ||
    d.goal.toLowerCase().includes(trimmed) ||
    d.tags.some(t => t.toLowerCase().includes(trimmed))
  ).slice(0, 8);

  if (matches.length === 0) {
    resultsBox.innerHTML = `<div class="search-result-item" style="color:var(--text-muted)">No results found</div>`;
    resultsBox.classList.add('open');
    return;
  }

  resultsBox.innerHTML = matches.map(d => {
    const phase = PHASES.find(p => p.id === d.phase);
    return `
      <div class="search-result-item" data-day="${d.day}" role="button" tabindex="0">
        <div class="search-result-day">${phase.emoji} Phase ${phase.id} · Day ${d.day}</div>
        <div>${d.title}</div>
      </div>
    `;
  }).join('');

  resultsBox.classList.add('open');

  resultsBox.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const dayNum = parseInt(item.dataset.day);
      resultsBox.classList.remove('open');
      $('global-search').value = '';
      openDayModal(dayNum);
    });
  });
}

// ─── Tab Switching ─────────────────────────────────────────
function switchTab(tabName) {
  // Update nav buttons
  $$('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Update panels
  $$('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabName}`);
  });
}

// ─── Theme ─────────────────────────────────────────────────
function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.body.classList.toggle('light-mode', theme === 'light');
  $('theme-toggle').querySelector('.theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(state.theme);
  saveState(state);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function initEventListeners() {
  // Nav tabs
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Theme toggle
  $('theme-toggle').addEventListener('click', toggleTheme);

  // Modal close
  $('modal-close').addEventListener('click', closeModal);
  $('modal-overlay').addEventListener('click', e => {
    if (e.target === $('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Modal actions
  $('modal-complete-btn').addEventListener('click', () => {
    if (currentModalDay) toggleDayComplete(currentModalDay);
  });

  $('modal-save-notes').addEventListener('click', () => {
    if (currentModalDay) saveModalNotes(currentModalDay);
  });

  // Auto-save notes on blur
  $('modal-notes').addEventListener('blur', () => {
    if (currentModalDay) {
      state.notes[currentModalDay] = $('modal-notes').value;
      saveState(state);
      refreshDayCard(currentModalDay);
    }
  });

  // Search
  const searchInput = $('global-search');
  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => handleSearch(searchInput.value), 200);
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) handleSearch(searchInput.value);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box')) {
      $('search-results').classList.remove('open');
    }
  });

  // Phase filter chips
  $('filter-chips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (chip) filterByPhase(chip.dataset.phase);
  });

  // Hide completed toggle
  $('hide-completed').addEventListener('change', e => {
    applyHideCompleted(e.target.checked);
  });

  // Global notes
  const globalNotes = $('global-notes');
  globalNotes.value = state.globalNotes || '';
  let notesTimeout;
  globalNotes.addEventListener('input', () => {
    clearTimeout(notesTimeout);
    notesTimeout = setTimeout(() => {
      state.globalNotes = globalNotes.value;
      saveState(state);
    }, 500);
  });

  // Clear notes button
  $('clear-notes-btn').addEventListener('click', () => {
    if (confirm('Clear global notes? This cannot be undone.')) {
      globalNotes.value = '';
      state.globalNotes = '';
      saveState(state);
      showToast('Notes cleared');
    }
  });
}

// ============================================================
// INIT
// ============================================================
function init() {
  injectSVGDefs();
  applyTheme(state.theme);
  initEventListeners();
  renderRoadmap();
  updateDashboard();

  // Update state last seen
  state.lastSeen = new Date().toISOString();
  saveState(state);

  // Welcome toast
  const totalDone = getTotalCompleted();
  if (totalDone === 0) {
    setTimeout(() => showToast('👋 Welcome! Click any day card to start your DevOps journey.'), 1000);
  } else {
    setTimeout(() => showToast(`Welcome back! ${totalDone}/90 days completed 🚀`), 1000);
  }
}

document.addEventListener('DOMContentLoaded', init);
