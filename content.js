/* ============================================================
   CONTENT.JS — Rich Mentor-style Lesson Content & Practice Tasks
   ============================================================ */

export const DAY_CONTENT = {
  1: {
    title: "Linux Essentials & Navigation",
    sections: [
      {
        title: "🧠 Why is Linux the Backbone of DevOps?",
        content: `
          <p>Imagine you're building a massive skyscraper. You wouldn't build it on sand—you'd build it on a solid concrete foundation. In the software world, <strong>Linux is that concrete foundation</strong>.</p>
          <p>Over 90% of the world's cloud servers, 100% of Docker containers, and almost every Kubernetes cluster run on Linux. As a DevOps Engineer, you won't be using a graphical user interface (GUI). Instead, you'll communicate with servers directly using the <strong>Command Line Interface (CLI)</strong> via a shell (usually Bash).</p>
          <div class="lesson-callout info">
            <strong>💡 Real-World Analogy:</strong> Think of the Windows/macOS GUI as a restaurant menu—you can only order what's listed. The Linux CLI is like being the chef in the kitchen—you can combine any ingredients in any way you want. That absolute control is why automation is built on Linux.
          </div>
        `
      },
      {
        title: "📁 The Filesystem Hierarchy Standard (FHS)",
        content: `
          <p>Unlike Windows, which uses drive letters like <code>C:\\</code> or <code>D:\\</code>, Linux organizes everything under a single root directory: <code>/</code>. Let's look at the essential folders you'll interact with daily:</p>
          <ul>
            <li><code>/etc</code>: <strong>The Settings App.</strong> Contains all configuration files for the system and apps.</li>
            <li><code>/var</code>: <strong>The Filing Cabinet.</strong> Contains variable data like system logs (<code>/var/log</code>) and database storage.</li>
            <li><code>/home</code>: <strong>The Bedrooms.</strong> Where individual user files are stored (e.g., <code>/home/john/</code>).</li>
            <li><code>/bin</code> & <code>/usr/bin</code>: <strong>The Tool Drawer.</strong> Where executable commands (like <code>ls</code>, <code>cd</code>, and <code>grep</code>) live.</li>
            <li><code>/tmp</code>: <strong>The Scratchpad.</strong> Temporary files that are cleared when the system reboots.</li>
            <li><code>/root</code>: The home folder for the system administrator (superuser).</li>
          </ul>
        `
      },
      {
        title: "🛠️ Essential Commands & Navigation",
        content: `
          <p>To navigate this filesystem, you need to memorize these command-line tools:</p>
          <ul>
            <li><code>pwd</code> (Print Working Directory): Tells you exactly where you are.</li>
            <li><code>ls</code> (List): Lists files. Use <code>ls -la</code> to show hidden files (starting with a dot) and detailed info (permissions, owner, size).</li>
            <li><code>cd</code> (Change Directory): Moves you around. <code>cd ..</code> moves up one level; <code>cd ~</code> moves to your home directory.</li>
            <li><code>mkdir -p</code> (Make Directory): Creates folders. The <code>-p</code> flag creates parent folders automatically (e.g., <code>mkdir -p project/src/tests</code>).</li>
            <li><code>rm -rf</code> (Remove): Deletes files/folders. <strong>Warning:</strong> The <code>-r</code> is recursive and <code>-f</code> is force. Be extremely careful!</li>
          </ul>
          <pre class="lesson-code"><code># Exercise: Create a directory and move inside it
mkdir -p ~/devops/day1
cd ~/devops/day1
pwd # should show /home/username/devops/day1</code></pre>
        `
      },
      {
        title: "🔑 Permissions & User Management",
        content: `
          <p>Linux is a multi-user OS, so security is baked into its core. Every file and directory has three tiers of permissions:</p>
          <ol>
            <li><strong>User (u)</strong>: The owner of the file.</li>
            <li><strong>Group (g)</strong>: A collection of users with shared access.</li>
            <li><strong>Others (o)</strong>: Anyone else on the system.</li>
          </ol>
          <p>Each tier can have three actions: <strong>Read (r=4)</strong>, <strong>Write (w=2)</strong>, and <strong>Execute (x=1)</strong>.</p>
          <p>We use <code>chmod</code> to change permissions using octal (numeric) shorthand:</p>
          <ul>
            <li><code>chmod 755 script.sh</code>: User gets full control (4+2+1=7), Group and Others can read & execute (4+1=5).</li>
            <li><code>chmod 600 private.key</code>: User can read & write (4+2=6), others get zero access (0). Essential for SSH keys!</li>
          </ul>
          <pre class="lesson-code"><code># Change file ownership to another user/group
sudo chown devops_user:devops_group myfile.txt</code></pre>
        `
      }
    ],
    practice: [
      { id: "d1_t1", text: "Open a terminal and verify your current directory using <code>pwd</code> and current user using <code>whoami</code>." },
      { id: "d1_t2", text: "Create a directory structure <code>~/devops/projects/day1</code> using a single command." },
      { id: "d1_t3", text: "Create an empty file inside it named <code>confidential.txt</code> using the <code>touch</code> command." },
      { id: "d1_t4", text: "Restrict the file permissions using <code>chmod</code> so that ONLY your user can read and write it (no group, no others), then verify it using <code>ls -lh</code>." }
    ]
  },
  2: {
    title: "File System & Text Manipulation",
    sections: [
      {
        title: "📝 Text Editors in the Terminal: Vim & Nano",
        content: `
          <p>Since servers don't have graphical interfaces, you cannot open VS Code on them. You must edit configurations using terminal text editors:</p>
          <ul>
            <li><strong>Nano:</strong> Simple, notepad-like. Commands are listed at the bottom (e.g., <code>Ctrl+O</code> to save, <code>Ctrl+X</code> to exit).</li>
            <li><strong>Vim:</strong> Extremely powerful but has a steep learning curve. It has modes:
              <ul>
                <li><em>Normal Mode</em> (Default): For navigating and running commands. Press <code>i</code> to switch to Insert Mode.</li>
                <li><em>Insert Mode:</em> For typing text. Press <code>Esc</code> to return to Normal Mode.</li>
                <li><em>Command Mode:</em> From Normal Mode, type <code>:wq</code> to save and quit, or <code>:q!</code> to quit without saving.</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        title: "🚰 Pipes (|) & Redirection (>, >>, 2>&1)",
        content: `
          <p>In DevOps, you'll constantly chain commands together. Linux treats input and output as streams:</p>
          <ul>
            <li><code>&gt;</code> (Redirect stdout): Overwrites a file with command output.</li>
            <li><code>&gt;&gt;</code> (Append stdout): Appends command output to the end of a file.</li>
            <li><code>2&gt;&amp;1</code>: Redirects Standard Error (stderr) to the same place as Standard Output (stdout).</li>
            <li><code>|</code> (Pipe): Takes the output of the left command and feeds it as input to the right command.</li>
          </ul>
          <pre class="lesson-code"><code># Example: List open ports and filter for "ssh"
ss -tulnp | grep ssh</code></pre>
        `
      },
      {
        title: "🔍 Searching Text with grep",
        content: `
          <p><code>grep</code> searches files for specific patterns. It is your best friend when debugging huge log files.</p>
          <ul>
            <li><code>grep "ERROR" server.log</code>: Finds all lines containing "ERROR".</li>
            <li><code>grep -i "error" server.log</code>: Case-insensitive search (matches Error, ERROR, error).</li>
            <li><code>grep -r "API_KEY" /etc/nginx/</code>: Recursively searches all files inside Nginx config directory.</li>
            <li><code>grep -v "DEBUG" app.log</code>: Inverted search—shows everything EXCEPT lines containing "DEBUG".</li>
          </ul>
        `
      },
      {
        title: "✂️ Processing Text: cut, sort, uniq, sed & awk",
        content: `
          <p>When log lines are messy, you need to extract specific parts:</p>
          <ul>
            <li><code>cut -d',' -f2 data.csv</code>: Splits lines by comma (<code>-d','</code>) and prints the second column (<code>-f2</code>).</li>
            <li><code>sort | uniq -c</code>: Sorts lines alphabetically and counts duplicate lines. <strong>Important:</strong> <code>uniq</code> only counts adjacent duplicates, so you must run <code>sort</code> first!</li>
            <li><code>sed 's/localhost/127.0.0.1/g' config.env</code>: Stream Editor. Replaces "localhost" with "127.0.0.1" globally.</li>
            <li><code>awk '{print $1, $9}' access.log</code>: Scripting language for text manipulation. Prints the 1st and 9th fields (usually Client IP and HTTP Status Code in web logs).</li>
          </ul>
          <pre class="lesson-code"><code># Find the top 5 IPs attacking your server from access.log
awk '{print $1}' access.log | sort | uniq -c | sort -rn | head -5</code></pre>
        `
      }
    ],
    practice: [
      { id: "d2_t1", text: "Create a text file <code>server.log</code> containing mock lines with INFO, WARNING, and ERROR prefixes." },
      { id: "d2_t2", text: "Use <code>grep</code> to extract all lines containing <code>ERROR</code> and append them to <code>errors.txt</code>." },
      { id: "d2_t3", text: "Write a command that counts the total number of lines in your <code>server.log</code> file using <code>wc</code>." },
      { id: "d2_t4", text: "Use <code>sed</code> to replace all occurrences of <code>WARNING</code> with <code>ALERT</code> in the terminal output without altering the original file." }
    ]
  },
  3: {
    title: "Process Management & Cron",
    sections: [
      {
        title: "⚙️ What is a Process?",
        content: `
          <p>Every program you run on Linux runs as a <strong>Process</strong>. Every process is assigned a unique number called a <strong>PID (Process ID)</strong>.</p>
          <ul>
            <li><code>ps aux</code>: Displays a snapshot of all running processes.</li>
            <li><code>top</code> / <code>htop</code>: Interactive real-time process monitoring. (<code>htop</code> is much cleaner, showing color-coded CPU/RAM usage).</li>
            <li><code>kill -9 &lt;PID&gt;</code>: Forcefully terminates a process. The <code>-9</code> sends the SIGKILL signal which cannot be ignored.</li>
            <li><code>nohup &lt;command&gt; &amp;</code>: Runs a command in the background and keeps it running even if you log out of the terminal.</li>
          </ul>
        `
      },
      {
        title: "🕰️ Scheduling Tasks with Cron",
        content: `
          <p>As a DevOps engineer, you'll need to automate daily backups, logs rotation, or cleanup scripts. We do this using <strong>Cron Jobs</strong>.</p>
          <p>Run <code>crontab -e</code> to edit your user's automated tasks. The cron syntax consists of 5 stars representing time intervals:</p>
          <pre class="lesson-code"><code># ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
# │ │ │ │ │
# * * * * *  /path/to/command.sh</code></pre>
          <div class="lesson-callout info">
            <strong>Examples:</strong><br>
            • <code>30 2 * * * backup.sh</code>: Runs every day at 2:30 AM.<br>
            • <code>0 0 * * 1 update.sh</code>: Runs every Monday at midnight.<br>
            • <code>*/15 * * * * sync.sh</code>: Runs every 15 minutes.
          </div>
        `
      },
      {
        title: "📦 Managing System Services with systemd",
        content: `
          <p>Modern Linux operating systems use <strong>systemd</strong> to manage services (daemons that run in the background, like Nginx, Docker, or databases). You control systemd using the <code>systemctl</code> command:</p>
          <ul>
            <li><code>systemctl status docker</code>: Checks if Docker is running.</li>
            <li><code>systemctl start nginx</code>: Starts Nginx.</li>
            <li><code>systemctl stop nginx</code>: Stops Nginx.</li>
            <li><code>systemctl restart nginx</code>: Restarts Nginx.</li>
            <li><code>systemctl enable nginx</code>: Configures Nginx to start automatically when the server boots up.</li>
            <li><code>systemctl disable nginx</code>: Stops Nginx from starting on boot.</li>
          </ul>
        `
      },
      {
        title: "📊 Checking System Resources",
        content: `
          <p>Before deploying applications, you must check if the server has enough resources:</p>
          <ul>
            <li><code>df -h</code>: Shows free and used disk space on all mounted filesystems (<code>-h</code> is for human-readable format).</li>
            <li><code>free -h</code>: Shows total, used, and available RAM.</li>
            <li><code>uptime</code>: Shows how long the server has been running, along with the 1, 5, and 15-minute <strong>Load Average</strong>.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d3_t1", text: "Run <code>sleep 300 &</code> in your terminal to start a background process." },
      { id: "d3_t2", text: "Find its PID using <code>ps aux | grep sleep</code> and terminate it using the <code>kill</code> command." },
      { id: "d3_t3", text: "Write a cron schedule expression that runs a script at 5:00 AM every Sunday." },
      { id: "d3_t4", text: "Use <code>df -h</code> and <code>free -h</code> to check your disk and memory availability, noting your root filesystem usage." }
    ]
  },
  4: {
    title: "Bash Scripting Basics",
    sections: [
      {
        title: "🚀 Writing Your First Bash Script",
        content: `
          <p>A Bash script is simply a text file containing a list of commands that the terminal runs in sequence. We use scripts to automate everything in DevOps.</p>
          <p>Create a file named <code>backup.sh</code>. The very first line of any Bash script must be the <strong>Shebang</strong>:</p>
          <pre class="lesson-code"><code>#!/bin/bash</code></pre>
          <p>This tells the OS to execute this script using the Bash shell interpreter located at <code>/bin/bash</code>.</p>
          <p>To run your script, you must grant it execute permissions:</p>
          <pre class="lesson-code"><code>chmod +x backup.sh
./backup.sh</code></pre>
        `
      },
      {
        title: "📦 Variables & Position Arguments",
        content: `
          <p>Variables store data. In Bash, <strong>do not put spaces around the <code>=</code> sign</strong>!</p>
          <pre class="lesson-code"><code># Correct:
NAME="John"
# Incorrect (will crash):
NAME = "John"</code></pre>
          <p>To use the variable, prefix it with a dollar sign: <code>echo "Hello $NAME"</code>.</p>
          <h4>Position Arguments</h4>
          <p>You can pass inputs to your script when running it. These are read inside the script using numbered variables:</p>
          <ul>
            <li><code>$0</code>: The name of the script itself.</li>
            <li><code>$1</code>: The first argument passed.</li>
            <li><code>$2</code>: The second argument passed.</li>
            <li><code>$#</code>: The total number of arguments passed.</li>
          </ul>
          <pre class="lesson-code"><code># Run command: ./deploy.sh webserver prod
# Inside deploy.sh:
echo "Deploying $1 to environment $2" # Prints "Deploying webserver to environment prod"</code></pre>
        `
      },
      {
        title: "🔀 Conditionals (if/else)",
        content: `
          <p>Conditionals let your script make decisions. Bash uses square brackets <code>[ ]</code> to evaluate conditions. Make sure there are spaces inside the brackets!</p>
          <pre class="lesson-code"><code>if [ "$1" == "prod" ]; then
    echo "⚠️ Warning! Deploying to Production!"
else
    echo "Standard deployment."
fi</code></pre>
          <h4>Useful File & Number Comparisons:</h4>
          <ul>
            <li><code>-d /path/to/folder</code>: True if directory exists.</li>
            <li><code>-f /path/to/file</code>: True if file exists.</li>
            <li><code>$num -eq 10</code>: Equal to 10 (use <code>-ne</code> for not equal, <code>-gt</code> for greater than, <code>-lt</code> for less than).</li>
          </ul>
        `
      },
      {
        title: "🔄 Loops (for/while)",
        content: `
          <p>Loops are useful for repeating actions, like checking the health of multiple servers or reading lines from a configuration file.</p>
          <h4>For Loop (Iterating over lists):</h4>
          <pre class="lesson-code"><code>for server in web1 web2 db1; do
    echo "Pinging server $server..."
    ping -c 1 $server
done</code></pre>
          <h4>While Loop (Repeating until a condition changes):</h4>
          <pre class="lesson-code"><code>COUNTER=0
while [ $COUNTER -lt 5 ]; do
    echo "Counter is $COUNTER"
    COUNTER=$((COUNTER + 1))
done</code></pre>
        `
      }
    ],
    practice: [
      { id: "d4_t1", text: "Write a script <code>hello.sh</code> that uses a variable to print 'Welcome to DevOps, [YourName]'." },
      { id: "d4_t2", text: "Modify the script to accept a name as the first command-line argument (<code>$1</code>) instead of hardcoding it." },
      { id: "d4_t3", text: "Create an <code>if/else</code> condition in your script that checks if a file path passed as <code>$2</code> exists on disk using <code>-f</code>." },
      { id: "d4_t4", text: "Make the script executable using <code>chmod +x</code> and execute it, verifying both code paths of the conditional." }
    ]
  },
  5: {
    title: "Advanced Bash Scripting",
    sections: [
      {
        title: "🛡️ Safety First: set -euo pipefail",
        content: `
          <p>By default, if a line in a Bash script fails, Bash will ignore it and keep executing the next lines. This can lead to catastrophic bugs (like trying to delete a directory variable that is empty, resulting in deleting root files).</p>
          <p>Always start your production scripts with these settings directly below the shebang:</p>
          <pre class="lesson-code"><code>#!/bin/bash
set -euo pipefail</code></pre>
          <ul>
            <li><code>set -e</code>: Exit immediately if any command exits with a non-zero status (fails).</li>
            <li><code>set -u</code>: Exit immediately if the script references an undefined variable.</li>
            <li><code>set -o pipefail</code>: Prevents errors in piped commands from being masked. If any command in a pipe fails, the entire pipeline fails.</li>
          </ul>
        `
      },
      {
        title: "🕸️ Arrays & Associative Arrays",
        content: `
          <p>Arrays allow you to store multiple items in a single variable:</p>
          <pre class="lesson-code"><code># Declare standard array
SERVERS=("web-01" "web-02" "db-01")

# Add an element
SERVERS+=("cache-01")

# Access specific element (0-indexed)
echo \${SERVERS[0]}

# Loop through all elements
for host in "\${SERVERS[@]}"; do
    echo "Rebooting $host..."
done</code></pre>
        `
      },
      {
        title: "🧹 Cleanup with trap",
        content: `
          <p>Often, your automation scripts create temporary files, lockfiles, or establish SSH tunnels. If the script crashes midway, these files are left behind, cluttering the host.</p>
          <p>The <code>trap</code> command allows you to specify commands that will run when the script exits, even if it crashes due to an error or is interrupted with <code>Ctrl+C</code>.</p>
          <pre class="lesson-code"><code># Create temporary directory
TEMP_DIR=$(mktemp -d)
echo "Created temp folder at $TEMP_DIR"

# Set trap to delete temp folder on exit
trap 'rm -rf "$TEMP_DIR"; echo "🧹 Cleaned up!"' EXIT</code></pre>
        `
      },
      {
        title: "⚙️ Parsing Options with getopts",
        content: `
          <p>To make professional CLI tools, you should support options like <code>-f file.txt</code> or <code>-v</code>. Bash provides <code>getopts</code> to parse arguments cleanly:</p>
          <pre class="lesson-code"><code>while getopts "f:v" opt; do
    case \${opt} in
        f)
            FILE_PATH=\${OPTARG}
            echo "Processing file: $FILE_PATH"
            ;;
        v)
            echo "Verbose mode enabled"
            ;;
        \\?)
            echo "Invalid option"
            exit 1
            ;;
    esac
done</code></pre>
        `
      }
    ],
    practice: [
      { id: "d5_t1", text: "Create a script with <code>set -euo pipefail</code> and try referencing an unassigned variable. Observe if the script exits immediately." },
      { id: "d5_t2", text: "Write a script that creates a temporary directory using <code>mktemp -d</code> and uses a <code>trap</code> command to automatically delete it when the script exits." },
      { id: "d5_t3", text: "Define an array of three package names (e.g., <code>curl</code>, <code>git</code>, <code>nginx</code>) and loop through them, printing a statement for each." },
      { id: "d5_t4", text: "Implement a script that accepts command-line arguments using <code>getopts</code> supporting a <code>-f &lt;filename&gt;</code> argument." }
    ]
  },
  6: {
    title: "Networking Fundamentals",
    sections: [
      {
        title: "✉️ The OSI & TCP/IP Models (Simplified)",
        content: `
          <p>DevOps is all about moving data. To understand how containers and servers talk, you must understand the network stack.</p>
          <p>While the theoretical <strong>OSI Model</strong> has 7 layers, the actual internet runs on the 4-layer <strong>TCP/IP Model</strong>:</p>
          <ol>
            <li><strong>Application Layer (HTTP, DNS, SSH)</strong>: The app you use (e.g., your browser requesting a page).</li>
            <li><strong>Transport Layer (TCP, UDP)</strong>: Determines *how* data is sent. TCP guarantees delivery (like registered mail); UDP is fast but has no delivery guarantees (like a postcard).</li>
            <li><strong>Network Layer (IP)</strong>: Routes packets across different networks using IP addresses.</li>
            <li><strong>Link / Physical Layer (Ethernet, Wi-Fi)</strong>: The actual cables or radio waves transferring raw bits.</li>
          </ol>
          <div class="lesson-callout info">
            <strong>💡 Real-World Analogy:</strong> Sending an email is like writing a letter. The Application layer is writing the letter. The Transport layer puts it in an envelope and adds a tracking code (TCP). The Network layer writes the destination address. The Physical layer is the mail truck carrying it.
          </div>
        `
      },
      {
        title: "🌐 IP Addressing, Subnets & CIDR Notation",
        content: `
          <p>Every server has an IP address (like <code>192.168.1.50</code>). To group and isolate networks, we use **subnets** defined by **CIDR (Classless Inter-Domain Routing)** notation.</p>
          <p>A CIDR address looks like <code>10.0.0.0/24</code>. The <code>/24</code> represents the subnet mask and tells us how many bits are locked for the network identity, leaving the remaining bits for host machines:</p>
          <ul>
            <li><code>/32</code>: Single IP address (e.g., <code>10.0.0.5/32</code>).</li>
            <li><code>/24</code>: Lock first 3 octets (e.g., <code>10.0.0.0</code> to <code>10.0.0.255</code>). Gives <strong>256 IP addresses</strong>. (Default for cloud VPC subnets).</li>
            <li><code>/16</code>: Lock first 2 octets (e.g., <code>10.0.0.0</code> to <code>10.0.255.255</code>). Gives <strong>65,536 IP addresses</strong>. (Default for whole cloud VPCs).</li>
          </ul>
        `
      },
      {
        title: "🧭 DNS, DHCP, NAT & Routing",
        content: `
          <p>For systems to coordinate, several helper protocols run in the background:</p>
          <ul>
            <li><strong>DNS (Domain Name System)</strong>: The phonebook of the internet. Translates human-readable names (<code>google.com</code>) to IPs (<code>142.250.190.46</code>).</li>
            <li><strong>DHCP (Dynamic Host Configuration Protocol)</strong>: Automatically assigns an IP address to a server when it connects to a network.</li>
            <li><strong>NAT (Network Address Translation)</strong>: Allows multiple servers inside a private network to share a single public IP to access the internet.</li>
            <li><strong>Routing</strong>: The process of determining the best path for data packets to travel from source to destination across networks.</li>
          </ul>
        `
      },
      {
        title: "🧱 Ports & Firewalls (UFW)",
        content: `
          <p>An IP address directs traffic to a server, but a <strong>Port</strong> directs traffic to the correct application on that server. Think of the server as an apartment building, and ports as individual apartment numbers.</p>
          <p>Common ports you must know:</p>
          <ul>
            <li><code>22</code>: SSH (Remote access)</li>
            <li><code>80</code>: HTTP (Unsecured web traffic)</li>
            <li><code>443</code>: HTTPS (Secured web traffic)</li>
            <li><code>53</code>: DNS</li>
          </ul>
          <p>We use <strong>UFW (Uncomplicated Firewall)</strong> to block unwanted ports on Linux servers:</p>
          <pre class="lesson-code"><code># Check UFW firewall status
sudo ufw status

# Set default policies (Block all incoming, allow all outgoing)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow specific ports
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw enable</code></pre>
        `
      }
    ],
    practice: [
      { id: "d6_t1", text: "Find your local IP address and default gateway using <code>ip addr show</code> or <code>ip route show</code>." },
      { id: "d6_t2", text: "Perform a DNS lookup for <code>github.com</code> using <code>nslookup</code> or <code>dig</code>, listing its IP addresses." },
      { id: "d6_t3", text: "Inspect all open ports listening on TCP protocols using <code>ss -tulnp</code>." },
      { id: "d6_t4", text: "Construct the exact UFW firewall commands to allow SSH (port 22) and HTTPS (port 443), then enable the firewall." }
    ]
  },
  7: {
    title: "Linux Networking Tools",
    sections: [
      {
        title: "📡 Web Clients: curl & wget",
        content: `
          <p>In DevOps, you often need to check if a service is healthy or download binaries from scripts. We use <code>curl</code> and <code>wget</code>:</p>
          <ul>
            <li><code>curl</code>: Prints the page content to stdout. Perfect for querying APIs or testing response codes.
              <ul>
                <li><code>curl -I https://google.com</code>: Fetch only HTTP headers (shows status codes like 200, 301, 404).</li>
                <li><code>curl -X POST -d '{"key":"val"}' https://api.com</code>: Sends a POST request with JSON payload.</li>
              </ul>
            </li>
            <li><code>wget</code>: Downloads files directly to disk.
              <ul>
                <li><code>wget https://example.com/installer.sh</code>: Saves the file in the current directory.</li>
              </ul>
            </li>
          </ul>
        `
      },
      {
        title: "🔌 Netcat (nc): The Networking Swiss Army Knife",
        content: `
          <p><code>nc</code> (netcat) reads and writes data across network connections. It is invaluable for testing connectivity and debugging networks.</p>
          <pre class="lesson-code"><code># 1. Test if a port is open on a remote server
nc -zv 192.168.1.100 80

# 2. Start a temporary listener on port 8080 (serves as a simple server)
nc -l 8080

# 3. Connect to that listener from another terminal or server
nc localhost 8080</code></pre>
        `
      },
      {
        title: "🕵️ Packet Sniffing with tcpdump",
        content: `
          <p>When services fail to communicate, you must look at the actual network packets flying back and forth. <code>tcpdump</code> intercepts and displays TCP/IP packets.</p>
          <pre class="lesson-code"><code># Capture packets on interface eth0
sudo tcpdump -i eth0

# Capture packets matching port 80 (HTTP)
sudo tcpdump -i any port 80

# Limit capture count to 5 packets and show in ASCII format
sudo tcpdump -c 5 -A -i any port 80</code></pre>
        `
      },
      {
        title: "🔑 Secure Connections: SSH, SCP & Rsync",
        content: `
          <p>To operate servers securely, we encrypt traffic:</p>
          <ul>
            <li><strong>SSH (Secure Shell)</strong>: Log into remote servers.
              <ul>
                <li><code>ssh-keygen -t ed25519</code>: Generates a modern secure SSH keypair (private key + public key).</li>
                <li><code>ssh-copy-id user@server-ip</code>: Copies public key to server's <code>authorized_keys</code> to enable passwordless login.</li>
              </ul>
            </li>
            <li><strong>SCP (Secure Copy)</strong>: Copy files over SSH.
              <ul>
                <li><code>scp file.txt user@server-ip:/tmp/</code></li>
              </ul>
            </li>
            <li><strong>Rsync</strong>: Synchronizes directories efficiently. It only copies files that changed (delta sync), whereas SCP copies everything.
              <ul>
                <li><code>rsync -avz --delete local/ user@server-ip:remote/</code> (<code>-a</code> preserves permissions, <code>-v</code> verbose, <code>-z</code> compresses, <code>--delete</code> deletes remote files that no longer exist locally).</li>
              </ul>
            </li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d7_t1", text: "Generate a new secure SSH keypair using <code>ssh-keygen -t ed25519</code> with a custom comment." },
      { id: "d7_t2", text: "Run <code>curl -I https://www.github.com</code> and find the HTTP status code and server header." },
      { id: "d7_t3", text: "Open two terminals: listen on port <code>9999</code> with <code>nc -l</code> in one, and send text to it from the second using <code>nc</code>." },
      { id: "d7_t4", text: "Construct an <code>rsync</code> command that copies a folder recursively, preserves attributes, enables compression, and deletes redundant remote files." }
    ]
  },
  8: {
    title: "Git Version Control — Basics",
    sections: [
      {
        title: "🕰️ What is Git & How Does it Work?",
        content: `
          <p>Git is a distributed version control system. It acts as a <strong>time machine</strong> for your code. As a DevOps Engineer, all infrastructure configurations (IaC) and pipeline files are written in code, meaning Git is essential for tracking updates and deploying systems.</p>
          <p>Git stores code in three distinct stages locally:</p>
          <ol>
            <li><strong>Working Directory</strong>: The files you are currently editing.</li>
            <li><strong>Staging Area (Index)</strong>: A staging ground where you prepare files for the next snapshot.</li>
            <li><strong>Local Repository</strong>: Git's database containing all finalized commits (snapshots).</li>
          </ol>
          <div class="lesson-callout info">
            <strong>💡 Real-World Analogy:</strong> Imagine you're taking a family photo. The family members choosing what to wear represents the Working Directory. Grouping them on the couch represents the Staging Area (<code>git add</code>). Snapping the camera shutter represents the Commit (<code>git commit</code>).
          </div>
        `
      },
      {
        title: "📦 Staging & Committing Changes",
        content: `
          <p>Let's create a local Git repository and save changes:</p>
          <pre class="lesson-code"><code># Initialize a new Git repository
git init my-project
cd my-project

# Check status of files
git status

# Stage a file
git add config.env

# Commit changes with a descriptive message
git commit -m "feat: configure environment variables"</code></pre>
        `
      },
      {
        title: "🌿 Branching: Parallel Realities",
        content: `
          <p>Branches allow you to work on new features, fix bugs, or experiment with pipeline configurations without breaking the stable production branch (usually <code>main</code> or <code>master</code>).</p>
          <pre class="lesson-code"><code># List local branches
git branch

# Create a new branch and switch to it instantly
git checkout -b feature/setup-cron
# OR (modern syntax)
git switch -c feature/setup-cron

# Switch back to the main branch
git checkout main</code></pre>
        `
      },
      {
        title: "🤝 Merging: Combining Branches",
        content: `
          <p>Once your feature is complete and tested on your branch, you want to merge it back into the main branch.</p>
          <pre class="lesson-code"><code># 1. Switch back to the receiving branch
git checkout main

# 2. Merge feature branch
git merge feature/setup-cron

# 3. Clean up the branch after a successful merge
git branch -d feature/setup-cron</code></pre>
        `
      }
    ],
    practice: [
      { id: "d8_t1", text: "Create a directory, initialize it as a Git repository using <code>git init</code>." },
      { id: "d8_t2", text: "Create a dummy file <code>app.py</code>, stage it, and commit it with a standard commit message." },
      { id: "d8_t3", text: "Create and switch to a branch named <code>feature/logging</code>, add logging code to the file, and commit it." },
      { id: "d8_t4", text: "Switch back to the main branch and merge the <code>feature/logging</code> branch, then delete the feature branch." }
    ]
  },
  9: {
    title: "Git — Collaboration & Remotes",
    sections: [
      {
        title: "☁️ Remote Repositories (GitHub/GitLab)",
        content: `
          <p>Git is distributed, meaning your local database is completely independent. To collaborate, you connect your local repo to a central server called a <strong>Remote</strong> (like GitHub or GitLab).</p>
          <pre class="lesson-code"><code># Add a remote named "origin" pointing to GitHub
git remote add origin https://github.com/username/repo.git

# Verify registered remote URLs
git remote -v

# Push local main branch to remote for the first time
git push -u origin main

# Fetch changes from remote without merging them
git fetch

# Pull remote changes and merge them directly into your branch
git pull origin main</code></pre>
        `
      },
      {
        title: "🔀 Dealing with Merge Conflicts",
        content: `
          <p>A merge conflict occurs when two developers modify the exact same line of a file in different ways and try to merge them. Git gets confused and asks you to choose which version to keep.</p>
          <p>When a conflict occurs, Git halts the merge and inserts markers into the affected files:</p>
          <pre class="lesson-code"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
DATABASE_URL="mongodb://localhost:27017"
=======
DATABASE_URL="postgresql://postgres:dbpass@localhost:5432"
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/postgres</code></pre>
          <p>To resolve it:</p>
          <ol>
            <li>Open the file and delete the markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>).</li>
            <li>Choose which line of code to keep (or combine both).</li>
            <li>Save the file, stage it (<code>git add</code>), and commit (<code>git commit</code>) to finalize the merge.</li>
          </ol>
        `
      },
      {
        title: "🚫 Ignoring Files with .gitignore",
        content: `
          <p>Never commit secret credentials, credentials/tokens, build files, database files, or dependencies (like <code>node_modules</code>) to your Git repository. It makes the repository huge and exposes confidential secrets.</p>
          <p>We solve this by creating a file named <code>.gitignore</code> at the root of the project. Each line tells Git which files or directories to ignore:</p>
          <pre class="lesson-code"><code># Ignore node dependencies
node_modules/

# Ignore local configuration containing secrets
.env
secret.key

# Ignore all log files
*.log</code></pre>
        `
      }
    ],
    practice: [
      { id: "d9_t1", text: "Create a <code>.gitignore</code> file that ignores <code>.env</code> and all <code>.tmp</code> files." },
      { id: "d9_t2", text: "Create a file named <code>env.tmp</code>, run <code>git status</code>, and verify that Git does not see it." },
      { id: "d9_t3", text: "Induce a merge conflict by editing the same line of <code>config.txt</code> on <code>main</code> and a feature branch, then trying to merge." },
      { id: "d9_t4", text: "Resolve the conflict manually by editing out the markers, staging the file, and running <code>git commit</code>." }
    ]
  },
  10: {
    title: "Git Workflows & Best Practices",
    sections: [
      {
        title: "🌳 Branching Workflows: GitFlow vs Trunk-Based",
        content: `
          <p>How do software teams merge code securely without causing chaos? They use workflows:</p>
          <ul>
            <li><strong>GitFlow</strong>: Uses multiple long-lived branches (<code>master</code> for production, <code>develop</code> for integration, plus short-lived <code>feature/*</code>, <code>hotfix/*</code>, and <code>release/*</code> branches). It is very structured but slower.</li>
            <li><strong>Tr trunk-Based Development</strong>: Developers merge small, frequent updates directly into a single central branch (usually <code>main</code>). Minimizes merge conflicts and enables Continuous Integration. Recommended for modern DevOps teams.</li>
          </ul>
        `
      },
      {
        title: "🧳 Rebasing vs Merging",
        content: `
          <p>There are two ways to integrate changes from one branch into another:</p>
          <ul>
            <li><strong>Merging</strong>: Combines branches by creating a special "merge commit" in the history. It preserves history chronologically but can make the history graph messy.</li>
            <li><strong>Rebasing (<code>git rebase</code>)</strong>: Moves the starting commit of your branch to the tip of the target branch. It rewrites history to create a clean, linear timeline.</li>
          </ul>
          <div class="lesson-callout warning">
            <strong>⚠️ Golden Rule of Rebasing:</strong> Never rebase a branch that is public or shared with other developers. It rewrites commit history, which will desynchronize everyone else's repositories.
          </div>
        `
      },
      {
        title: "💬 Conventional Commits",
        content: `
          <p>DevOps automation relies on structured commit messages. We use <strong>Conventional Commits</strong> to format messages, which allows scripts to automatically generate changelogs and determine semver version bumps.</p>
          <p>Format: <code>&lt;type&gt;(&lt;scope&gt;): &lt;description&gt;</code></p>
          <ul>
            <li><code>feat</code>: A new user feature (e.g., <code>feat(auth): add google sign-in</code>).</li>
            <li><code>fix</code>: A bug fix (e.g., <code>fix(db): resolve timeout on postgres</code>).</li>
            <li><code>docs</code>: Documentation changes (e.g., <code>docs(readme): add installation guide</code>).</li>
            <li><code>chore</code>: Build process, tools, or library changes (e.g., <code>chore: upgrade node version</code>).</li>
          </ul>
        `
      },
      {
        title: "🪝 Git Hooks & Pre-commit",
        content: `
          <p>Git hooks are scripts that run automatically when specific events occur in your repository (like before you commit, or after you push). They live in your local folder at <code>.git/hooks/</code>.</p>
          <p>We use <strong>pre-commit hooks</strong> to run linters, formatters, and secret scans automatically. If a script fails (e.g., you accidentally left an AWS API key in the file), Git cancels the commit, protecting the server.</p>
        `
      }
    ],
    practice: [
      { id: "d10_t1", text: "Create a dummy commit using the Conventional Commit syntax (e.g., <code>feat(api): add health endpoint</code>)." },
      { id: "d10_t2", text: "Use <code>git log --oneline --graph --all</code> to inspect the branching commit graph of your repository." },
      { id: "d10_t3", text: "Perform an interactive rebase (<code>git rebase -i HEAD~2</code>) to squash two local commits into a single commit." },
      { id: "d10_t4", text: "Navigate to the hidden directory <code>.git/hooks</code> inside your repo and inspect the sample files." }
    ]
  },
  11: {
    title: "Linux Security Hardening",
    sections: [
      {
        title: "🔒 Hardening the SSH Server",
        content: `
          <p>When you spin up a cloud server, attackers will instantly start trying brute-force attacks on port 22 (SSH). You must secure it immediately by editing the SSH configuration file at <code>/etc/ssh/sshd_config</code>.</p>
          <p>Add or modify the following settings to secure the daemon:</p>
          <pre class="lesson-code"><code># Disable root login (always log in as normal user, then sudo)
PermitRootLogin no

# Disable password authentication (forces SSH key auth only)
PasswordAuthentication no

# Change default port 22 to a random port (e.g., 2222)
Port 2222

# Limit max login attempts before dropping connection
MaxAuthTries 3</code></pre>
          <div class="lesson-callout warning">
            <strong>⚠️ Caution:</strong> Always test your SSH configuration changes in a separate terminal before logging out, or you risk locking yourself out of your server permanently!
          </div>
        `
      },
      {
        title: "🛡️ Dynamic Firewall: fail2ban",
        content: `
          <p><code>fail2ban</code> is a service that monitors system logs (like SSH auth logs) for brute-force attacks. If it detects multiple failed login attempts from an IP address within a short timeframe, it automatically updates firewall rules to block that IP.</p>
          <pre class="lesson-code"><code># Install fail2ban on Ubuntu
sudo apt update && sudo apt install fail2ban -y

# Check fail2ban status
sudo fail2ban-client status sshd</code></pre>
        `
      },
      {
        title: "👑 Privilege Management: visudo & sudoers",
        content: `
          <p>To avoid logging in as root, normal users use <code>sudo</code> (Superuser Do) to execute admin commands. The permissions for who can run sudo are stored in the file <code>/etc/sudoers</code>.</p>
          <p><strong>Never edit this file directly with a normal editor!</strong> If you make a syntax error, you will destroy sudo privileges for the system. Instead, always use <code>visudo</code>, which performs syntax validation before saving.</p>
          <pre class="lesson-code"><code># Edit the sudoers file safely
sudo visudo

# Line inside sudoers granting user 'john' passwordless sudo access (common in automation)
john ALL=(ALL) NOPASSWD: ALL</code></pre>
        `
      }
    ],
    practice: [
      { id: "d11_t1", text: "Locate the SSH server configuration file on your system (typically <code>/etc/ssh/sshd_config</code>)." },
      { id: "d11_t2", text: "Look up login attempt reports in your system authentication logs (<code>/var/log/auth.log</code> or <code>/var/log/secure</code>) using <code>grep</code>." },
      { id: "d11_t3", text: "Run <code>sudo -l</code> to inspect the exact commands your current user is authorized to run as root." },
      { id: "d11_t4", text: "Identify the visudo editor by running <code>sudo visudo -c</code> to run a check on the configuration file." }
    ]
  },
  12: {
    title: "AppArmor, SELinux & Audit",
    sections: [
      {
        title: "👮 Mandatory Access Control (MAC)",
        content: `
          <p>Standard Linux uses <strong>Discretionary Access Control (DAC)</strong>, where a file's owner decides its permissions. If an attacker hacks a web server running as user <code>www-data</code>, they inherit the privileges of that user and can read any files accessible to <code>www-data</code>.</p>
          <p><strong>Mandatory Access Control (MAC)</strong> restricts this. MAC systems define strict, system-wide policies. Even if a process is running as root, the system will prevent it from executing actions outside its predefined profile.</p>
        `
      },
      {
        title: "🐧 AppArmor (Ubuntu/Debian standard)",
        content: `
          <p>AppArmor binds security profiles to paths of executables. Profiles operate in two modes:</p>
          <ul>
            <li><strong>Complain Mode</strong>: AppArmor logs profile violations but does not block the actions. Used for testing.</li>
            <li><strong>Enforce Mode</strong>: AppArmor blocks violations and logs them. Used in production.</li>
          </ul>
          <pre class="lesson-code"><code># Check status of AppArmor profiles
sudo aa-status

# Set a profile to complain mode
sudo aa-complain /usr/sbin/nginx

# Set a profile to enforce mode
sudo aa-enforce /usr/sbin/nginx</code></pre>
        `
      },
      {
        title: "🔒 SELinux (CentOS/RedHat standard)",
        content: `
          <p>SELinux is more powerful and complex than AppArmor. It assigns a security context (label) to every process, file, and network port. It has three operating modes:</p>
          <ul>
            <li><strong>Enforcing</strong>: Block and log policy violations.</li>
            <li><strong>Permissive</strong>: Log violations but do not block.</li>
            <li><strong>Disabled</strong>: SELinux turned off completely.</li>
          </ul>
          <pre class="lesson-code"><code># Check SELinux status
sestatus

# Temporarily switch mode (1 = Enforcing, 0 = Permissive)
sudo setenforce 0</code></pre>
        `
      },
      {
        title: "🕵️ System Auditing with auditd",
        content: `
          <p>As a DevOps engineer, you need to track who altered system configuration files. <code>auditd</code> is the Linux Audit Daemon, which logs security-related events to disk.</p>
          <pre class="lesson-code"><code># Add a rule to watch modifications to /etc/passwd
sudo auditctl -w /etc/passwd -p wa -k passwd_changes

# Search audit logs for changes matching the key
sudo ausearch -k passwd_changes

# View reports of system failures
sudo aureport</code></pre>
        `
      }
    ],
    practice: [
      { id: "d12_t1", text: "Run <code>aa-status</code> (or <code>sestatus</code> depending on your distribution) and find out how many profiles are in enforce mode." },
      { id: "d12_t2", text: "Write an audit rule using <code>auditctl</code> to watch write accesses (<code>w</code>) and attribute changes (<code>a</code>) on the <code>/etc/hosts</code> file." },
      { id: "d12_t3", text: "Locate the log file where audit daemon messages are stored (usually <code>/var/log/audit/audit.log</code>)." },
      { id: "d12_t4", text: "Modify a dummy file watched by an audit rule, then query the logs using <code>ausearch</code> to confirm the event was logged." }
    ]
  },
  13: {
    title: "CIS Benchmarks & File Integrity",
    sections: [
      {
        title: "📋 What are CIS Benchmarks?",
        content: `
          <p>The <strong>Center for Internet Security (CIS)</strong> publishes security benchmarks—consensus-based, industry-recognized best practices for hardening operating systems, cloud environments, and container platforms.</p>
          <p>CIS hardening guides contain hundreds of rules, such as: "Ensure node-local directories have separate partitions" or "Ensure root login via SSH is disabled". DevOps teams use compliance scanners (like OpenSCAP or cloud audit scripts) to audit their systems against these benchmarks.</p>
        `
      },
      {
        title: "🔍 File Integrity Monitoring (FIM)",
        content: `
          <p>If an attacker gets inside your system, they may attempt to install a rootkit or modify system binaries (like replacing the <code>ls</code> command with a malicious script that hides their malware folder).</p>
          <p><strong>File Integrity Monitoring (FIM)</strong> works by taking a cryptographic hash (SHA-256) of critical system files when the server is clean, saving these hashes to a database, and comparing them regularly. If a binary is altered, the hashes will mismatch, trigger alerts, and signal an intrusion.</p>
        `
      },
      {
        title: "🛡️ AIDE: Advanced Intrusion Detection Environment",
        content: `
          <p><code>AIDE</code> is a free FIM tool for Linux. It creates a local database containing file hashes, permissions, and metadata.</p>
          <pre class="lesson-code"><code># Install AIDE
sudo apt update && sudo apt install aide -y

# Initialize AIDE database (creates /var/lib/aide/aide.db.new.gz)
sudo aideinit

# Move database to active path
sudo mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz

# Check system for alterations
sudo aide --check</code></pre>
        `
      },
      {
        title: "🕵️ Scanning for Rootkits",
        content: `
          <p>A rootkit is a collection of tools designed to hide an intruder's presence on a system. We run specialized scanning tools periodically to check for common signatures:</p>
          <pre class="lesson-code"><code># Install Rootkit Hunter
sudo apt install rkhunter -y

# Update database of signatures
sudo rkhunter --propupd

# Run system scanner check
sudo rkhunter --check --sk</code></pre>
        `
      }
    ],
    practice: [
      { id: "d13_t1", text: "Look at the AIDE configuration file located at <code>/etc/aide/aide.conf</code> to see what directories it monitors." },
      { id: "d13_t2", text: "Run commands to initialize the AIDE database (or mock initialize if database limits exist)." },
      { id: "d13_t3", text: "Install <code>rkhunter</code> (or equivalent scanner) and update its file properties database using <code>--propupd</code>." },
      { id: "d13_t4", text: "Construct a daily cron job schedule line that executes <code>aide --check</code> at 1:00 AM every night." }
    ]
  },
  14: {
    title: "Phase 1 Review & Mini-Project",
    sections: [
      {
        title: "🏗️ Project Overview: Automated Server Provisioning Script",
        content: `
          <p>Congratulations! You have completed Phase 1 foundations. Now, we consolidate all this knowledge into a single portfolio project: a **Server Provisioning Bash Script**.</p>
          <p>In DevOps, manually logging into servers to set them up is a major anti-pattern. We must automate everything so we can spin up identical, secure servers repeatably.</p>
        `
      },
      {
        title: "📋 Project Architecture & Requirements",
        content: `
          <p>Your script must accomplish the following steps cleanly and securely:</p>
          <ol>
            <li><strong>Safety Switches</strong>: Use <code>set -euo pipefail</code> to ensure the script stops if any step fails.</li>
            <li><strong>Privilege Check</strong>: Ensure the script is run with root/sudo rights, otherwise exit.</li>
            <li><strong>User Provisioning</strong>: Create a new developer user with a home directory and add them to the sudoers group.</li>
            <li><strong>System Update & Package Install</strong>: Install essential utilities: <code>curl</code>, <code>git</code>, <code>htop</code>, and <code>ufw</code>.</li>
            <li><strong>SSH Hardening</strong>: Edit the SSH config to block root login and restrict login attempts.</li>
            <li><strong>Firewall Setup</strong>: Turn on UFW and allow only ports 22 and 80.</li>
            <li><strong>Cron Backup Setup</strong>: Create a scheduled task to backup the home folder daily.</li>
          </ol>
        `
      },
      {
        title: "📝 Script Template Structure",
        content: `
          <p>Create a file named <code>provision.sh</code> and use this baseline skeleton:</p>
          <pre class="lesson-code"><code>#!/bin/bash
set -euo pipefail

# Check if run as root
if [ "\$EUID" -ne 0 ]; then
    echo "❌ Please run as root (sudo)"
    exit 1
fi

NEW_USER=\${1:-"devops_deploy"}
echo "🚀 Provisioning server for user: \$NEW_USER..."
# Next steps follow...</code></pre>
        `
      }
    ],
    practice: [
      { id: "d14_t1", text: "Create a file named <code>provision.sh</code> and write the script header, Shebang, safety switches, and privilege checks." },
      { id: "d14_t2", text: "Implement user-creation logic in the script that checks if the username exists using <code>id</code> before running <code>useradd</code>." },
      { id: "d14_t3", text: "Add code block inside the script to install <code>curl</code>, <code>git</code>, and <code>htop</code> packages non-interactively using <code>apt-get install -y</code>." },
      { id: "d14_t4", text: "Test execution of the script locally (using a test username) and make sure the syntax validation checks out." }
    ]
  },
  15: {
    title: "Server Automation Script Polish",
    sections: [
      {
        title: "🔄 Achieving Script Idempotency",
        content: `
          <p>An automation script is **Idempotent** if running it multiple times yields the same final system state without causing errors, crashes, or duplicate configurations.</p>
          <p>For example, if you run <code>mkdir folder</code> twice, the second run fails with an error. But if you write <code>mkdir -p folder</code>, it checks if the folder exists first, making it idempotent.</p>
          <p>Checklist for script idempotency:</p>
          <ul>
            <li>Check if a user exists before calling <code>useradd</code>.</li>
            <li>Use <code>mkdir -p</code> instead of <code>mkdir</code>.</li>
            <li>Before adding lines to configurations like <code>sshd_config</code>, use <code>grep</code> to check if the line already exists to avoid duplicates.</li>
          </ul>
        `
      },
      {
        title: "📝 Structured Logging & Debugging",
        content: `
          <p>In production pipelines, scripts run invisibly. If something fails, you need historical logs. Redirect output inside your script to write to a log file with timestamps.</p>
          <pre class="lesson-code"><code>LOG_FILE="/var/log/provision.log"

log_msg() {
    local TYPE=\$1
    local MSG=\$2
    echo -e "\$(date '+%Y-%m-%d %H:%M:%S') [\$TYPE] \$MSG" | tee -a "\$LOG_FILE"
}

# Usage:
log_msg "INFO" "Installing packages..."
log_msg "SUCCESS" "User created successfully."</code></pre>
        `
      },
      {
        title: "🧼 Cleanups and Traps",
        content: `
          <p>Ensure that if your script fails during execution, it cleans up all resources. Use <code>trap</code> to delete any temporary folders, disable locks, or restore configuration backups.</p>
          <pre class="lesson-code"><code># Create backup before editing configuration
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak

# If script exits on error, restore the backup configuration
trap 'mv /etc/ssh/sshd_config.bak /etc/ssh/sshd_config; log_msg "ERROR" "Failed. Configuration reverted."' ERR</code></pre>
        `
      }
    ],
    practice: [
      { id: "d15_t1", text: "Modify your provisioning script to check for existing configuration lines in <code>sshd_config</code> before appending, ensuring it runs cleanly twice." },
      { id: "d15_t2", text: "Implement the custom <code>log_msg</code> function to write logs with timestamps to <code>/var/log/provision.log</code>." },
      { id: "d15_t3", text: "Add a <code>trap</code> error handler block to restore config backups if editing commands fail." },
      { id: "d15_t4", text: "Run a test run, verify the system provisioning log at <code>/var/log/provision.log</code>, commit the script to git, and push." }
    ]
  },
  16: {
    title: "Python Basics for DevOps",
    sections: [
      {
        title: "🐍 Why Python for DevOps?",
        content: `
          <p>Bash is great for simple scripts (less than 100 lines), but for complex logic, error handling, interacting with APIs, and parsing JSON, Python is the industry standard.</p>
          <p>Python is pre-installed on most modern Linux distributions and is the language behind major DevOps tools like Ansible and AWS CLI.</p>
        `
      },
      {
        title: "⚙️ Running Shell Commands: subprocess",
        content: `
          <p>The first thing you must learn is how to execute standard Linux commands from within Python. We use the built-in <code>subprocess</code> module.</p>
          <pre class="lesson-code"><code>import subprocess

# Run a command and capture its output
result = subprocess.run(["ls", "-la", "/var/log"], capture_output=True, text=True)

# Check if the command succeeded (return code 0)
if result.returncode == 0:
    print("Success! Output:\\n", result.stdout)
else:
    print("Failed! Error:\\n", result.stderr)</code></pre>
          <p>Always pass commands as a list of arguments (e.g., <code>["df", "-h"]</code>) rather than a single string to prevent shell injection vulnerabilities.</p>
        `
      },
      {
        title: "🗂️ Navigating the System: os and pathlib",
        content: `
          <p>Python gives you cross-platform tools to manage files and directories without needing bash commands.</p>
          <ul>
            <li><code>os.environ.get("USER")</code>: Fetch environment variables securely.</li>
            <li><code>pathlib.Path</code>: The modern, object-oriented way to handle file paths.</li>
          </ul>
          <pre class="lesson-code"><code>from pathlib import Path
import os

# Create a directory if it doesn't exist (like mkdir -p)
backup_dir = Path("/tmp/backups/today")
backup_dir.mkdir(parents=True, exist_ok=True)

# Iterate over all .log files in a folder
log_dir = Path("/var/log")
for log_file in log_dir.glob("*.log"):
    print(f"Found log: {log_file.name}, Size: {log_file.stat().st_size} bytes")</code></pre>
        `
      },
      {
        title: "🛡️ Error Handling (try/except)",
        content: `
          <p>In DevOps, servers will be unreachable, files will be missing, and APIs will time out. You must anticipate and handle these errors gracefully instead of letting your script crash.</p>
          <pre class="lesson-code"><code>try:
    with open("/etc/shadow", "r") as f:
        data = f.read()
except PermissionError:
    print("❌ Error: You need root privileges to read this file!")
except FileNotFoundError:
    print("❌ Error: File does not exist.")
except Exception as e:
    print(f"❌ An unexpected error occurred: {e}")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d16_t1", text: "Write a Python script that runs <code>df -h</code> using <code>subprocess.run()</code> and prints the output." },
      { id: "d16_t2", text: "Use <code>pathlib.Path</code> to create a directory named <code>python_logs</code> in your home folder." },
      { id: "d16_t3", text: "Write a <code>try/except</code> block that attempts to read a non-existent file and gracefully prints a custom error message." },
      { id: "d16_t4", text: "Fetch the <code>HOME</code> and <code>USER</code> environment variables using <code>os.environ</code> and print them." }
    ]
  },
  17: {
    title: "Python File I/O & YAML",
    sections: [
      {
        title: "📄 Reading and Writing Files",
        content: `
          <p>In Python, the safest way to handle files is using the <code>with</code> context manager. It guarantees the file is closed automatically, even if your code crashes halfway through reading it.</p>
          <pre class="lesson-code"><code># Write lines to a file
servers = ["web1", "web2", "db1"]
with open("inventory.txt", "w") as f:
    for server in servers:
        f.write(f"{server}\\n")

# Read lines from a file
with open("inventory.txt", "r") as f:
    lines = f.readlines()
    print([line.strip() for line in lines])</code></pre>
        `
      },
      {
        title: "🧱 Parsing JSON",
        content: `
          <p>JSON (JavaScript Object Notation) is the language of modern APIs. Python's built-in <code>json</code> module converts JSON strings into Python dictionaries, and vice-versa.</p>
          <pre class="lesson-code"><code>import json

# Parsing a JSON string into a Python dictionary
json_data = '{"instance": "i-12345", "status": "running"}'
server = json.loads(json_data)
print(server["status"])  # Output: running

# Converting a Python dictionary to a formatted JSON string
config = {"port": 8080, "host": "0.0.0.0"}
print(json.dumps(config, indent=4))</code></pre>
        `
      },
      {
        title: "📜 Parsing YAML with PyYAML",
        content: `
          <p>YAML is the language of DevOps (Kubernetes, Ansible, Docker Compose). Python does not have a built-in YAML parser, so you must install and use the <code>PyYAML</code> library.</p>
          <p>You can install it via pip: <code>pip install PyYAML</code>.</p>
          <pre class="lesson-code"><code>import yaml

# Read a Kubernetes configuration file
with open("deployment.yaml", "r") as file:
    k8s_config = yaml.safe_load(file)

# Modify the replica count programmatically
k8s_config["spec"]["replicas"] = 5

# Write the changes back out to a new YAML file
with open("deployment_updated.yaml", "w") as file:
    yaml.dump(k8s_config, file, default_flow_style=False)</code></pre>
          <div class="lesson-callout warning">
            <strong>⚠️ Security Tip:</strong> Always use <code>yaml.safe_load()</code> instead of <code>yaml.load()</code> to prevent arbitrary code execution vulnerabilities!
          </div>
        `
      }
    ],
    practice: [
      { id: "d17_t1", text: "Create a dictionary containing fake server configuration data (IP, OS, RAM) and write it to a <code>config.json</code> file using <code>json.dump()</code>." },
      { id: "d17_t2", text: "Read the <code>config.json</code> file back into memory and print a specific value." },
      { id: "d17_t3", text: "Install the PyYAML module using <code>pip install PyYAML</code>." },
      { id: "d17_t4", text: "Write a small YAML file by hand, parse it using <code>yaml.safe_load()</code>, and print the resulting dictionary." }
    ]
  },
  18: {
    title: "HTTP APIs with Python",
    sections: [
      {
        title: "🌐 The Requests Library",
        content: `
          <p>As a DevOps engineer, you will constantly query APIs (AWS, GitHub, Slack, Datadog). While you can use the built-in <code>urllib</code>, the third-party <code>requests</code> library is the undisputed industry standard.</p>
          <p>Install it: <code>pip install requests</code>.</p>
        `
      },
      {
        title: "📥 GET Requests",
        content: `
          <p>A GET request fetches data. Always use <code>response.raise_for_status()</code> to trigger an exception if the API returns an error (like a 404 or 500 status code).</p>
          <pre class="lesson-code"><code>import requests

url = "https://api.github.com/users/octocat/repos"
response = requests.get(url)

# Will raise an HTTPError if the response was unsuccessful
response.raise_for_status()

# Automatically parses the JSON body into a Python list/dict
repos = response.json()
for repo in repos:
    print(f"Repo: {repo['name']}")</code></pre>
        `
      },
      {
        title: "📤 POST Requests & Headers",
        content: `
          <p>To create or update data, use a POST request. You must often pass Headers (for authentication) and a JSON body payload.</p>
          <pre class="lesson-code"><code>url = "https://api.example.com/v1/servers"
headers = {
    "Authorization": "Bearer YOUR_SECRET_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "name": "web-prod-1",
    "image": "ubuntu-22.04"
}

# The 'json=' parameter automatically encodes the dict to a JSON string
response = requests.post(url, headers=headers, json=payload)

if response.status_code == 201:
    print("Server created successfully!")
    print(response.json())
else:
    print(f"Failed to create: {response.status_code}")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d18_t1", text: "Install the <code>requests</code> library using pip." },
      { id: "d18_t2", text: "Write a script that performs a GET request to <code>https://pokeapi.co/api/v2/pokemon/ditto</code> and prints the pokemon's weight." },
      { id: "d18_t3", text: "Implement a <code>try/except</code> block that catches <code>requests.exceptions.HTTPError</code> by querying a fake/invalid URL." },
      { id: "d18_t4", text: "Make a POST request to <code>https://httpbin.org/post</code> sending a JSON payload, and print the response to verify it worked." }
    ]
  },
  19: {
    title: "Python CLI Tools with argparse",
    sections: [
      {
        title: "🛠️ Why argparse?",
        content: `
          <p>You can read command-line arguments using <code>sys.argv</code>, but it requires manual validation. The built-in <code>argparse</code> module automatically generates help menus (<code>-h</code>), enforces required flags, and validates data types.</p>
          <p>It's the foundation of writing professional CLI tools in Python.</p>
        `
      },
      {
        title: "🏗️ Building a Basic CLI",
        content: `
          <p>Let's build a mock deployment CLI that requires an environment name and accepts an optional verbose flag.</p>
          <pre class="lesson-code"><code>import argparse

# 1. Initialize parser
parser = argparse.ArgumentParser(
    prog="deployer",
    description="Deploys code to specified environment"
)

# 2. Define arguments
# Positional argument (required)
parser.add_argument("environment", choices=["dev", "staging", "prod"], help="Target environment")

# Optional boolean flag
parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose logging")

# Optional argument with a value
parser.add_argument("--version", type=str, default="latest", help="App version to deploy")

# 3. Parse arguments
args = parser.parse_args()

print(f"Deploying version '{args.version}' to '{args.environment}'...")
if args.verbose:
    print("[DEBUG] Verbose mode is activated. Fetching secrets...")</code></pre>
        `
      },
      {
        title: "📝 Structured Logging",
        content: `
          <p>Never use <code>print()</code> for logs in production scripts. Use Python's built-in <code>logging</code> module so you can output timestamps, log levels, and redirect output to files.</p>
          <pre class="lesson-code"><code>import logging

# Configure logger
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

# Usage
logging.info("Starting deployment process...")
logging.warning("Disk space is below 20%")
logging.error("Failed to connect to database!")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d19_t1", text: "Create a Python script that sets up <code>argparse</code> with a required positional argument (e.g., 'filename')." },
      { id: "d19_t2", text: "Add an optional boolean flag <code>--dry-run</code> using <code>action='store_true'</code>." },
      { id: "d19_t3", text: "Run the script with the <code>-h</code> flag in the terminal to view the automatically generated help menu." },
      { id: "d19_t4", text: "Set up the <code>logging</code> module to print INFO-level logs with a timestamp format." }
    ]
  },
  20: {
    title: "Jinja2 Templating & Config Gen",
    sections: [
      {
        title: "📝 What is Jinja2?",
        content: `
          <p>DevOps involves managing hundreds of configuration files. Instead of maintaining 50 static Nginx files for 50 websites, you maintain <strong>one template</strong> and dynamically inject variables into it.</p>
          <p><code>Jinja2</code> is the templating engine Python (and Ansible) uses to generate files.</p>
          <p>Install it: <code>pip install Jinja2</code>.</p>
        `
      },
      {
        title: "🧬 Creating a Template",
        content: `
          <p>Jinja templates use double curly braces <code>{{ var }}</code> to output variables, and <code>{% ... %}</code> for logic (like loops and if-statements).</p>
          <p>Create a template file named <code>nginx.conf.j2</code>:</p>
          <pre class="lesson-code"><code>server {
    listen 80;
    server_name {{ domain_name }};

    location / {
        proxy_pass http://localhost:{{ app_port }};
    }

    {% if enable_ssl %}
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/{{ domain_name }}/fullchain.pem;
    {% endif %}
}</code></pre>
        `
      },
      {
        title: "⚙️ Rendering the Template with Python",
        content: `
          <p>Now, write a Python script to load the template, inject variables, and output the final configuration file.</p>
          <pre class="lesson-code"><code>from jinja2 import Environment, FileSystemLoader

# 1. Set up the Jinja environment (point it to current directory)
env = Environment(loader=FileSystemLoader('.'))

# 2. Load the template file
template = env.get_template('nginx.conf.j2')

# 3. Define the variables to inject
data = {
    "domain_name": "api.myapp.com",
    "app_port": 3000,
    "enable_ssl": True
}

# 4. Render the template
output = template.render(data)

# 5. Save to disk
with open('api.myapp.com.conf', 'w') as f:
    f.write(output)
print("Configuration generated successfully!")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d20_t1", text: "Install the <code>Jinja2</code> package via pip." },
      { id: "d20_t2", text: "Create a simple template file <code>index.html.j2</code> containing variables for a title and an h1 tag." },
      { id: "d20_t3", text: "Write a Python script that loads the template using <code>FileSystemLoader</code> and renders it." },
      { id: "d20_t4", text: "Write the rendered output to a new file named <code>index.html</code>." }
    ]
  },
  21: {
    title: "Environment Management & Dotenv",
    sections: [
      {
        title: "📦 Why Virtual Environments?",
        content: `
          <p>If you install global Python packages using <code>pip install X</code>, you will eventually face "dependency hell". Script A might require Requests v1.0, while Script B requires Requests v2.0. They will break each other.</p>
          <p>A <strong>Virtual Environment (venv)</strong> is an isolated folder containing a specific Python version and its own independent set of installed packages.</p>
        `
      },
      {
        title: "🏗️ Creating & Using a venv",
        content: `
          <p>You should create a venv for every Python project.</p>
          <pre class="lesson-code"><code># 1. Create a virtual environment named "env"
python3 -m venv env

# 2. Activate the environment (Linux/Mac)
source env/bin/activate
# (On Windows PowerShell: .\\env\\Scripts\\Activate.ps1)

# Notice your terminal prompt changes! E.g. (env) $

# 3. Install packages (these stay inside the env folder)
pip install requests boto3

# 4. Freeze dependencies to a requirements file
pip freeze > requirements.txt

# 5. To leave the environment, simply type:
deactivate</code></pre>
          <div class="lesson-callout warning">
            <strong>⚠️ Git Rule:</strong> Always add <code>env/</code> to your <code>.gitignore</code>! You should never commit the virtual environment folder. You only commit the <code>requirements.txt</code> file.
          </div>
        `
      },
      {
        title: "🔐 Managing Secrets with python-dotenv",
        content: `
          <p>Hardcoding API keys in your Python code is a severe security risk. Instead, store them in a local <code>.env</code> file (which is git-ignored!) and load them dynamically.</p>
          <p>Create a <code>.env</code> file:</p>
          <pre class="lesson-code"><code>AWS_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE
DATABASE_URL=postgres://user:pass@localhost/db</code></pre>
          <p>Now, read it in Python using the <code>python-dotenv</code> library (<code>pip install python-dotenv</code>):</p>
          <pre class="lesson-code"><code>import os
from dotenv import load_dotenv

# Loads variables from .env into os.environ
load_dotenv()

# Safely fetch the secret
aws_key = os.getenv("AWS_ACCESS_KEY")
print(f"Loaded key starting with: {aws_key[:4]}...")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d21_t1", text: "Create a new virtual environment using <code>python -m venv venv</code> and activate it." },
      { id: "d21_t2", text: "Install <code>requests</code> and <code>python-dotenv</code> inside the activated venv." },
      { id: "d21_t3", text: "Generate a <code>requirements.txt</code> file using <code>pip freeze > requirements.txt</code>." },
      { id: "d21_t4", text: "Create a <code>.env</code> file, add a mock secret to it, and write a Python script that loads and prints the secret using <code>load_dotenv()</code>." }
    ]
  },
  22: {
    title: "Python Testing with pytest",
    sections: [
      {
        title: "🧪 Why Test Infrastructure Code?",
        content: `
          <p>If your script deploys databases, a typo could cause an outage. Writing unit tests ensures your Python code behaves exactly as expected before it runs in production.</p>
          <p><code>pytest</code> is the most popular testing framework in Python. Install it: <code>pip install pytest</code>.</p>
        `
      },
      {
        title: "✍️ Writing Your First Test",
        content: `
          <p>Pytest looks for files starting with <code>test_</code>. Inside those files, it executes any function starting with <code>test_</code>.</p>
          <p>Create a file named <code>math_utils.py</code>:</p>
          <pre class="lesson-code"><code>def add_servers(current, new):
    return current + new</code></pre>
          <p>Now create <code>test_math_utils.py</code>:</p>
          <pre class="lesson-code"><code>from math_utils import add_servers

def test_add_servers_normal():
    # Assert that 5 + 3 equals 8
    assert add_servers(5, 3) == 8

def test_add_servers_zero():
    assert add_servers(5, 0) == 5</code></pre>
          <p>Run the tests by simply typing <code>pytest</code> in your terminal!</p>
        `
      },
      {
        title: "🎭 Mocking External Systems",
        content: `
          <p>If your script makes an API call to AWS, you don't want your unit test to actually hit AWS (it would be slow, cost money, and require internet). You must <strong>Mock</strong> the call.</p>
          <pre class="lesson-code"><code>import requests
from unittest.mock import patch

def fetch_health_status():
    res = requests.get("http://api.myapp.com/health")
    return res.json()["status"]

# The @patch decorator intercepts the 'requests.get' function
@patch("requests.get")
def test_fetch_health_status(mock_get):
    # Set up the fake response
    mock_get.return_value.json.return_value = {"status": "healthy"}

    # Run the function (it will hit the mock, not the real internet)
    result = fetch_health_status()

    # Verify results
    assert result == "healthy"
    mock_get.assert_called_once_with("http://api.myapp.com/health")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d22_t1", text: "Install <code>pytest</code> using pip." },
      { id: "d22_t2", text: "Write a simple function in <code>logic.py</code> that takes a string and returns it capitalized." },
      { id: "d22_t3", text: "Create <code>test_logic.py</code> and write two tests using the <code>assert</code> keyword to verify the capitalization function." },
      { id: "d22_t4", text: "Run <code>pytest -v</code> in the terminal to execute the tests and observe the passing output." }
    ]
  },
  23: {
    title: "Code Quality & Type Hints",
    sections: [
      {
        title: "✨ Auto-formatting with Black",
        content: `
          <p>DevOps teams share code. Arguing over whether to use single quotes or double quotes, or where to put spaces, wastes time. <code>Black</code> is an uncompromising auto-formatter.</p>
          <p>Install: <code>pip install black</code>.</p>
          <p>Run it against your file: <code>black script.py</code>. It will automatically rewrite your file to meet strict PEP-8 standards.</p>
        `
      },
      {
        title: "🔍 Linting with Flake8",
        content: `
          <p>While Black handles formatting, a <strong>Linter</strong> analyzes your code for logical errors (e.g., importing a module but never using it, or referencing a variable before assignment).</p>
          <p>Install: <code>pip install flake8</code>.</p>
          <p>Run: <code>flake8 script.py</code>. It will print out warnings and errors. Fix them to keep your codebase pristine.</p>
        `
      },
      {
        title: "🏷️ Type Hints and Mypy",
        content: `
          <p>Python is dynamically typed. This is fast to write but leads to bugs (e.g., passing a string to a function expecting a list). Modern Python supports <strong>Type Hints</strong>.</p>
          <pre class="lesson-code"><code># Without type hints
def get_user(user_id):
    pass

# With type hints
def get_user(user_id: int) -> dict:
    pass</code></pre>
          <p>To enforce these hints, we use a static type checker called <code>mypy</code>.</p>
          <p>Install: <code>pip install mypy</code>.</p>
          <p>Run: <code>mypy script.py</code>. It will scan your code and throw an error if you pass the wrong data type to a function!</p>
        `
      }
    ],
    practice: [
      { id: "d23_t1", text: "Install <code>black</code>, <code>flake8</code>, and <code>mypy</code> via pip." },
      { id: "d23_t2", text: "Write a messy, unformatted Python file and run <code>black filename.py</code> to watch it instantly format." },
      { id: "d23_t3", text: "Run <code>flake8</code> on your Python files to detect any unused imports or variables." },
      { id: "d23_t4", text: "Add type hints (e.g., <code>: str</code>, <code>-&gt; bool</code>) to a function and run <code>mypy filename.py</code> to validate it." }
    ]
  },
  24: {
    title: "Python CLI Tool — Build Phase",
    sections: [
      {
        title: "🏗️ Project Overview: 'devtool'",
        content: `
          <p>It's time for the Phase 2 capstone project. We will build a multi-purpose DevOps CLI tool named <code>devtool</code> using everything we've learned.</p>
          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Built with <code>argparse</code> for subcommands (like \`git status\` vs \`git push\`).</li>
            <li>Uses <code>requests</code> to ping APIs.</li>
            <li>Uses <code>PyYAML</code> to parse a local config file.</li>
            <li>Outputs beautiful terminal text using the <code>rich</code> library.</li>
          </ul>
        `
      },
      {
        title: "🌈 Beautiful Terminal Output with Rich",
        content: `
          <p>The <code>rich</code> library makes CLI tools look professional by adding colors, tables, and progress bars.</p>
          <p>Install: <code>pip install rich</code></p>
          <pre class="lesson-code"><code>from rich.console import Console
from rich.table import Table

console = Console()
console.print("[bold green]Success![/bold green] Deployment finished.")

# Drawing a table
table = Table(title="Server Status")
table.add_column("Server", style="cyan")
table.add_column("Status", style="magenta")
table.add_row("web-01", "[green]Online[/green]")
table.add_row("db-01", "[red]Offline[/red]")
console.print(table)</code></pre>
        `
      },
      {
        title: "🔀 Argparse Subcommands",
        content: `
          <p>To support multiple commands (e.g., <code>devtool health</code> and <code>devtool deploy</code>), you use argparse subparsers.</p>
          <pre class="lesson-code"><code>import argparse

parser = argparse.ArgumentParser(prog="devtool")
subparsers = parser.add_subparsers(dest="command")

# Command 1: health
parser_health = subparsers.add_parser("health", help="Check system health")
parser_health.add_argument("--url", required=True)

# Command 2: deploy
parser_deploy = subparsers.add_parser("deploy", help="Deploy application")
parser_deploy.add_argument("--env", choices=["dev", "prod"])

args = parser.parse_args()

if args.command == "health":
    print(f"Checking health of {args.url}")
elif args.command == "deploy":
    print(f"Deploying to {args.env}")</code></pre>
        `
      }
    ],
    practice: [
      { id: "d24_t1", text: "Install the <code>rich</code> library and create a script that prints a formatted table to the terminal." },
      { id: "d24_t2", text: "Set up the skeleton for <code>devtool.py</code> using <code>argparse</code> with two subparsers: <code>health</code> and <code>deploy</code>." },
      { id: "d24_t3", text: "Implement the <code>health</code> command logic to make a GET request to a URL provided by the user." },
      { id: "d24_t4", text: "Wrap the request in a <code>try/except</code> block and use <code>rich</code> to print a green 'Online' or red 'Offline' message based on success." }
    ]
  },
  25: {
    title: "Python CLI Tool — Polish & Docs",
    sections: [
      {
        title: "⚙️ Loading Configurations",
        content: `
          <p>Hardcoding URLs in your CLI tool is bad practice. Let's make <code>devtool</code> load default settings from a <code>config.yaml</code> file.</p>
          <pre class="lesson-code"><code># config.yaml
default_env: dev
endpoints:
  dev: "http://dev.myapp.com/health"
  prod: "https://myapp.com/health"</code></pre>
          <p>In your Python code, use PyYAML to load this file on startup, falling back to safe defaults if the file is missing (using <code>FileNotFoundError</code>).</p>
        `
      },
      {
        title: "🧪 Writing Tests for the CLI",
        content: `
          <p>How do you test a CLI? You separate the core logic from the argparse wrapper.</p>
          <pre class="lesson-code"><code># logic.py
def check_health(url: str) -> bool:
    import requests
    try:
        res = requests.get(url, timeout=5)
        return res.status_code == 200
    except requests.RequestException:
        return False

# test_logic.py
from unittest.mock import patch
from logic import check_health

@patch('requests.get')
def test_check_health_success(mock_get):
    mock_get.return_value.status_code = 200
    assert check_health("http://fake.url") == True</code></pre>
        `
      },
      {
        title: "📚 Documentation (README)",
        content: `
          <p>A tool is useless if no one knows how to use it. A professional repository must have a <code>README.md</code> that includes:</p>
          <ul>
            <li><strong>Purpose</strong>: What does this tool do?</li>
            <li><strong>Prerequisites</strong>: Requires Python 3.9+, etc.</li>
            <li><strong>Installation</strong>: <code>pip install -r requirements.txt</code></li>
            <li><strong>Usage Examples</strong>: Code blocks showing exact commands (e.g., <code>python devtool.py health --env prod</code>).</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d25_t1", text: "Create a <code>config.yaml</code> file and implement PyYAML logic in your CLI to load default parameters from it." },
      { id: "d25_t2", text: "Refactor your CLI's core logic into separate functions (with type hints) so they can be imported and tested." },
      { id: "d25_t3", text: "Write at least two <code>pytest</code> unit tests (one success, one failure) for your health check function using <code>@patch</code>." },
      { id: "d25_t4", text: "Create a professional <code>README.md</code> for your CLI tool documenting its commands, flags, and setup instructions." }
    ]
  }
};
