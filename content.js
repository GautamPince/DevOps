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
  },
  26: {
    title: "Docker Fundamentals",
    sections: [
      {
        title: "🐳 What is a Container?",
        content: `
          <p>Before containers, we ran apps on physical servers or Virtual Machines (VMs). VMs are heavy because each one runs a full Operating System (Guest OS) on top of a Hypervisor.</p>
          <p><strong>Containers are different.</strong> They share the Host OS kernel but isolate the application processes. This makes them incredibly lightweight, starting in milliseconds and using far less memory.</p>
          <div class="lesson-callout info">
            <strong>💡 Real-World Analogy:</strong> A VM is like buying a whole house for each person (duplicate kitchens, bathrooms, plumbing). A container is like an apartment building—everyone gets their own private living space, but they share the building's plumbing and electricity (the kernel).
          </div>
        `
      },
      {
        title: "🧩 The Docker Architecture",
        content: `
          <p>Docker is a client-server application consisting of:</p>
          <ul>
            <li><strong>Docker Daemon (dockerd):</strong> The background server process that manages images, containers, networks, and volumes.</li>
            <li><strong>Docker CLI:</strong> The command-line tool you use to talk to the daemon (e.g., when you type <code>docker run</code>).</li>
            <li><strong>Docker Registry:</strong> A remote storage location for Docker images (like Docker Hub).</li>
          </ul>
        `
      },
      {
        title: "📦 Images vs. Containers",
        content: `
          <p>It's crucial to understand the difference between an Image and a Container:</p>
          <ul>
            <li><strong>Image:</strong> A read-only template containing the application code, runtime, libraries, and environment variables. It's like a blueprint or a recipe.</li>
            <li><strong>Container:</strong> A runnable instance of an Image. It's the actual running application. You can launch multiple identical containers from a single image.</li>
          </ul>
        `
      },
      {
        title: "🛡️ Namespaces & Cgroups (Under the Hood)",
        content: `
          <p>Docker isn't magic; it relies on two core Linux kernel features:</p>
          <ul>
            <li><strong>Namespaces:</strong> Provide isolation. They trick the container into thinking it has its own dedicated filesystem, network, and process tree (PID 1).</li>
            <li><strong>Control Groups (cgroups):</strong> Provide resource limitation. They ensure a container can only use a specific amount of CPU and RAM, preventing it from crashing the host.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d26_t1", text: "Install Docker Engine on your local machine or a Linux VM following the official Docker documentation." },
      { id: "d26_t2", text: "Run <code>docker version</code> and <code>docker info</code> to verify the Client and Server (Daemon) are both running." },
      { id: "d26_t3", text: "Run your first container: <code>docker run hello-world</code> and read the output explaining what Docker just did." },
      { id: "d26_t4", text: "Run an interactive Ubuntu container: <code>docker run -it ubuntu bash</code>. Type <code>exit</code> when done." }
    ]
  },
  27: {
    title: "Docker CLI Mastery",
    sections: [
      {
        title: "🚀 Running & Managing Containers",
        content: `
          <p>The <code>docker run</code> command is your primary tool. It creates and starts a container in one step.</p>
          <pre class="lesson-code"><code># Run Nginx in the background (-d), naming it "web", exposing port 8080 to host port 80
docker run -d --name web -p 8080:80 nginx

# List running containers
docker ps

# List ALL containers (including stopped ones)
docker ps -a</code></pre>
        `
      },
      {
        title: "🛑 Stopping, Starting, and Removing",
        content: `
          <p>Managing the lifecycle of containers:</p>
          <ul>
            <li><code>docker stop &lt;container_id&gt;</code>: Gracefully stops the container (sends SIGTERM).</li>
            <li><code>docker kill &lt;container_id&gt;</code>: Forcefully stops it immediately (sends SIGKILL).</li>
            <li><code>docker start &lt;container_id&gt;</code>: Restarts a stopped container.</li>
            <li><code>docker rm &lt;container_id&gt;</code>: Deletes a stopped container. (Use <code>-f</code> to force delete a running one).</li>
          </ul>
        `
      },
      {
        title: "🔍 Inspecting & Troubleshooting",
        content: `
          <p>When things go wrong, you need to peek inside:</p>
          <ul>
            <li><code>docker logs web</code>: Prints the stdout/stderr of the container. Use <code>-f</code> to stream logs live.</li>
            <li><code>docker inspect web</code>: Returns a massive JSON object detailing the container's IP address, mounts, and config.</li>
            <li><code>docker exec -it web bash</code>: Opens an interactive terminal <em>inside</em> an already running container. Crucial for debugging!</li>
            <li><code>docker cp index.html web:/usr/share/nginx/html/</code>: Copies files between the host and the container.</li>
          </ul>
        `
      },
      {
        title: "🧹 System Cleanup",
        content: `
          <p>Docker can eat up your hard drive fast with unused images and stopped containers.</p>
          <pre class="lesson-code"><code># Remove all stopped containers, unused networks, and dangling images
docker system prune

# (Danger) Add -a to also delete unused images that aren't currently tied to a container
docker system prune -a</code></pre>
        `
      }
    ],
    practice: [
      { id: "d27_t1", text: "Run an Nginx container in detached mode, mapped to port 8080 on your host machine." },
      { id: "d27_t2", text: "Use <code>docker exec -it &lt;name&gt; bash</code> to enter the Nginx container, and run <code>ls /usr/share/nginx/html</code>." },
      { id: "d27_t3", text: "View the container's logs using <code>docker logs</code>. Then stop and remove the container using <code>docker stop</code> and <code>docker rm</code>." },
      { id: "d27_t4", text: "Run <code>docker system prune</code> to clean up any leftover dangling resources." }
    ]
  },
  28: {
    title: "Writing Dockerfiles",
    sections: [
      {
        title: "📜 What is a Dockerfile?",
        content: `
          <p>A <code>Dockerfile</code> is a text document containing all the commands a user could call on the command line to assemble an image. It is the IaC (Infrastructure as Code) equivalent for your application environment.</p>
          <pre class="lesson-code"><code>FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]</code></pre>
        `
      },
      {
        title: "🧱 Layers & Caching",
        content: `
          <p>Every instruction in a Dockerfile (like <code>FROM</code>, <code>RUN</code>, <code>COPY</code>) creates a read-only <strong>Layer</strong>. Docker caches these layers to speed up future builds.</p>
          <div class="lesson-callout warning">
            <strong>⚠️ Critical Optimization:</strong> Order matters! Always copy your dependency file (e.g., <code>package.json</code> or <code>requirements.txt</code>) and install dependencies BEFORE copying the rest of your source code. If you change a source file, Docker will use the cached dependency layer instead of reinstalling everything!
          </div>
        `
      },
      {
        title: "🏃 RUN vs. CMD vs. ENTRYPOINT",
        content: `
          <p>These three instructions confuse many beginners:</p>
          <ul>
            <li><code>RUN</code>: Executes commands <em>during the build process</em> (e.g., <code>RUN apt-get install curl</code>). It creates a new layer.</li>
            <li><code>CMD</code>: The default command executed <em>when the container starts</em>. It can be overridden at runtime (e.g., <code>docker run my-app bash</code> overrides the CMD).</li>
            <li><code>ENTRYPOINT</code>: Configures the container to run as a strict executable. It is harder to override. Often combined with CMD to pass default arguments.</li>
          </ul>
        `
      },
      {
        title: "🚫 The .dockerignore File",
        content: `
          <p>Similar to <code>.gitignore</code>, you must create a <code>.dockerignore</code> file to prevent sending unnecessary or sensitive files to the Docker daemon during a build (like <code>node_modules/</code>, <code>.git/</code>, or <code>.env</code>). This speeds up builds and reduces image sizes.</p>
        `
      }
    ],
    practice: [
      { id: "d28_t1", text: "Write a simple Python script (e.g., <code>print('Hello Docker')</code>) and a <code>Dockerfile</code> to package it." },
      { id: "d28_t2", text: "Build the image using <code>docker build -t my-python-app .</code> (don't forget the dot!)." },
      { id: "d28_t3", text: "Create a <code>.dockerignore</code> file and verify that unnecessary files are excluded." },
      { id: "d28_t4", text: "Run your newly built image to see the script execute." }
    ]
  },
  29: {
    title: "Multi-Stage Builds",
    sections: [
      {
        title: "📉 The Problem: Bloated Images",
        content: `
          <p>When you build a Go or Node.js app, you need compilers and build tools (like the Go SDK or npm). But once the app is compiled into a binary, you <em>don't</em> need those tools to run it in production.</p>
          <p>If you include build tools in your final image, it becomes massive (e.g., 1GB) and increases the attack surface for hackers.</p>
        `
      },
      {
        title: "🎭 Multi-Stage to the Rescue",
        content: `
          <p>Multi-stage builds allow you to use multiple <code>FROM</code> statements in a single Dockerfile. You build the app in a "builder" stage, and then copy ONLY the compiled artifact into a tiny, clean final stage.</p>
          <pre class="lesson-code"><code># STAGE 1: Builder
FROM golang:1.20 AS builder
WORKDIR /app
COPY . .
# Compile the Go binary
RUN go build -o myapp main.go

# STAGE 2: Final Production Image
FROM alpine:latest
WORKDIR /app
# Copy ONLY the binary from the builder stage
COPY --from=builder /app/myapp .
CMD ["./myapp"]</code></pre>
        `
      },
      {
        title: "🪶 Distroless & Alpine Images",
        content: `
          <p>For the final stage, you should use the smallest possible base image:</p>
          <ul>
            <li><strong>Alpine Linux:</strong> Very popular, tiny Linux distribution (~5MB). Uses <code>apk</code> for packages.</li>
            <li><strong>Distroless:</strong> Created by Google. Contains ONLY your application and its runtime dependencies. It doesn't even have a shell (<code>bash</code> or <code>sh</code>), making it extremely secure.</li>
            <li><strong>Scratch:</strong> An explicitly empty image (0 bytes). Perfect for static binaries like Go or Rust.</li>
          </ul>
        `
      },
      {
        title: "👤 Security: Non-Root User",
        content: `
          <p>By default, Docker runs processes inside the container as the <code>root</code> user. This is a massive security risk. If a hacker escapes the container, they are root on the host system!</p>
          <p>Always create and switch to a non-root user in your Dockerfile before the <code>CMD</code>.</p>
          <pre class="lesson-code"><code>RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
CMD ["node", "app.js"]</code></pre>
        `
      }
    ],
    practice: [
      { id: "d29_t1", text: "Find a simple Go or Node.js 'Hello World' app and write a single-stage Dockerfile for it. Note its image size." },
      { id: "d29_t2", text: "Refactor the Dockerfile to use a Multi-Stage build (using a builder stage and an Alpine/Distroless final stage)." },
      { id: "d29_t3", text: "Build the multi-stage image and compare its size to the single-stage image using <code>docker images</code>." },
      { id: "d29_t4", text: "Add a <code>USER</code> directive to run the final application as a non-root user." }
    ]
  },
  30: {
    title: "Docker Networking",
    sections: [
      {
        title: "🕸️ The Bridge Network",
        content: `
          <p>By default, Docker attaches all new containers to the default <code>bridge</code> network. Containers on this network can talk to each other via IP address, but <strong>not</strong> by container name.</p>
          <p>The default bridge is not recommended for production. Instead, you should create <strong>User-Defined Bridge Networks</strong>, which provide automatic DNS resolution (containers can ping each other using their container names as hostnames).</p>
        `
      },
      {
        title: "🛠️ Managing Networks",
        content: `
          <pre class="lesson-code"><code># Create a custom bridge network
docker network create my-app-net

# Run a database container on the network
docker run -d --name db --network my-app-net redis

# Run an API container on the same network
# The API can now connect to the database using the hostname "db"
docker run -d --name api --network my-app-net my-api</code></pre>
        `
      },
      {
        title: "🚪 Host & None Networks",
        content: `
          <p>Besides bridge, there are other network drivers:</p>
          <ul>
            <li><strong>Host:</strong> (<code>--network host</code>) Removes network isolation. The container uses the host machine's networking directly. If the container binds to port 80, it binds directly to port 80 on the host machine. (Linux only).</li>
            <li><strong>None:</strong> (<code>--network none</code>) Disables networking entirely for the container. Useful for highly secure, isolated processing jobs.</li>
          </ul>
        `
      },
      {
        title: "🌍 Port Publishing (-p)",
        content: `
          <p>Containers on a bridge network cannot be accessed from the outside world (your host machine or the internet) unless you publish ports.</p>
          <p><code>-p &lt;host_port&gt;:&lt;container_port&gt;</code></p>
          <p>For example, <code>-p 8080:80</code> maps port 8080 on your laptop to port 80 inside the container.</p>
        `
      }
    ],
    practice: [
      { id: "d30_t1", text: "Create a custom Docker network named <code>webnet</code> using <code>docker network create</code>." },
      { id: "d30_t2", text: "Run an Alpine container named <code>alpine1</code> on <code>webnet</code> running <code>sleep 3600</code>." },
      { id: "d30_t3", text: "Run a second Alpine container named <code>alpine2</code> on <code>webnet</code>, exec into it, and successfully <code>ping alpine1</code>." },
      { id: "d30_t4", text: "Inspect the network using <code>docker network inspect webnet</code> to see the connected containers and their IPs." }
    ]
  },
  31: {
    title: "Docker Volumes & Data Persistence",
    sections: [
      {
        title: "💾 The Ephemeral Nature of Containers",
        content: `
          <p>By default, all files created inside a container are stored on a writable container layer. When the container is deleted, <strong>all that data is destroyed permanently</strong>.</p>
          <p>If you run a database (like PostgreSQL) in a container without volumes, destroying the container deletes your entire database! To solve this, we use Volumes.</p>
        `
      },
      {
        title: "📁 Named Volumes",
        content: `
          <p>Named Volumes are managed by Docker (usually stored in <code>/var/lib/docker/volumes/</code>). They are the best and most secure way to persist data.</p>
          <pre class="lesson-code"><code># Create a volume
docker volume create pgdata

# Mount the volume to the container
docker run -d --name db -v pgdata:/var/lib/postgresql/data postgres</code></pre>
          <p>Even if you delete the <code>db</code> container, the <code>pgdata</code> volume remains safely on disk.</p>
        `
      },
      {
        title: "🔗 Bind Mounts",
        content: `
          <p>Bind mounts map a specific directory on your host machine to a directory inside the container. They are highly dependent on the host machine's directory structure and permissions.</p>
          <p><strong>Primary Use Case:</strong> Local development! You bind your local source code folder into the container, so when you hit "save" in VS Code, the code inside the container updates instantly.</p>
          <pre class="lesson-code"><code># Mount local ./src folder to /app/src in container
docker run -v $(pwd)/src:/app/src my-node-app</code></pre>
        `
      },
      {
        title: "🧹 Managing Volumes",
        content: `
          <ul>
            <li><code>docker volume ls</code>: List all volumes.</li>
            <li><code>docker volume rm &lt;vol_name&gt;</code>: Delete a specific volume.</li>
            <li><code>docker volume prune</code>: Delete all unused volumes (Warning: Data loss!).</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d31_t1", text: "Create a named volume called <code>my-data</code>." },
      { id: "d31_t2", text: "Run an Ubuntu container mounting <code>my-data</code> to <code>/data</code>, and create a text file inside <code>/data/hello.txt</code>." },
      { id: "d31_t3", text: "Stop and remove the container. Start a brand new container mounting the same volume and verify <code>hello.txt</code> still exists." },
      { id: "d31_t4", text: "Run an Nginx container using a bind mount (<code>-v</code>) to serve a local HTML file from your host machine." }
    ]
  },
  32: {
    title: "Docker Compose — Basics",
    sections: [
      {
        title: "🎼 What is Docker Compose?",
        content: `
          <p>Modern applications aren't just one container; they consist of a frontend, a backend API, a database, and maybe a Redis cache. Starting all of these with individual <code>docker run</code> commands is tedious and error-prone.</p>
          <p><strong>Docker Compose</strong> is a tool for defining and running multi-container Docker applications using a single YAML file (<code>docker-compose.yml</code>).</p>
        `
      },
      {
        title: "📝 The docker-compose.yml File",
        content: `
          <p>A basic compose file defines <code>services</code> (containers):</p>
          <pre class="lesson-code"><code>version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
  
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: secretpassword
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:</code></pre>
        `
      },
      {
        title: "🪄 Magic Networking",
        content: `
          <p>When you run Docker Compose, it automatically creates a custom bridge network for your application and attaches all defined services to it. The <code>web</code> service can instantly communicate with the <code>db</code> service using the hostname <code>db</code>.</p>
        `
      },
      {
        title: "▶️ Compose Commands",
        content: `
          <ul>
            <li><code>docker compose up -d</code>: Creates and starts all containers, networks, and volumes in the background.</li>
            <li><code>docker compose down</code>: Stops and removes everything (except named volumes).</li>
            <li><code>docker compose logs -f</code>: Tails the aggregated logs of all services.</li>
            <li><code>docker compose ps</code>: Lists the status of the compose stack.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d32_t1", text: "Create a <code>docker-compose.yml</code> file with a WordPress and a MySQL service." },
      { id: "d32_t2", text: "Define environment variables in the YAML to connect WordPress to the MySQL database." },
      { id: "d32_t3", text: "Bring the stack up using <code>docker compose up -d</code> and access the WordPress install page on your browser." },
      { id: "d32_t4", text: "Tear the stack down cleanly using <code>docker compose down</code>." }
    ]
  },
  33: {
    title: "Docker Compose — Advanced",
    sections: [
      {
        title: "🔗 Startup Order: depends_on",
        content: `
          <p>If your backend API starts before your database is ready, it will crash. <code>depends_on</code> dictates the order in which services start.</p>
          <div class="lesson-callout warning">
            <strong>⚠️ Gotcha:</strong> <code>depends_on</code> only waits until the container is *running*, not until the database inside is actually ready to accept connections. For that, you need Healthchecks.
          </div>
        `
      },
      {
        title: "🩺 Healthchecks",
        content: `
          <p>You can tell Docker how to test if your app is actually healthy (e.g., by curling a <code>/healthz</code> endpoint). Combine this with <code>depends_on: condition: service_healthy</code>.</p>
          <pre class="lesson-code"><code>services:
  db:
    image: postgres
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      retries: 5

  api:
    image: my-api
    depends_on:
      db:
        condition: service_healthy</code></pre>
        `
      },
      {
        title: "📄 Environment Files (.env)",
        content: `
          <p>Hardcoding passwords in <code>docker-compose.yml</code> is a terrible security practice. Instead, use an <code>env_file</code> directive to load variables from a <code>.env</code> file (which you add to <code>.gitignore</code>!).</p>
          <pre class="lesson-code"><code>services:
  api:
    image: my-api
    env_file:
      - .env.production</code></pre>
        `
      },
      {
        title: "🏗️ Building Custom Images in Compose",
        content: `
          <p>Compose isn't just for pulling pre-built images. You can tell it to build your local Dockerfiles automatically using the <code>build</code> context.</p>
          <pre class="lesson-code"><code>services:
  webapp:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    ports:
      - "80:80"</code></pre>
        `
      }
    ],
    practice: [
      { id: "d33_t1", text: "Update your docker-compose file to build an image from a local directory using the <code>build:</code> context." },
      { id: "d33_t2", text: "Add a <code>healthcheck</code> to a database service to ensure it is fully initialized." },
      { id: "d33_t3", text: "Configure a dependent service using <code>depends_on</code> with <code>condition: service_healthy</code>." },
      { id: "d33_t4", text: "Move all hardcoded secrets into a <code>.env</code> file and inject them using the <code>env_file</code> property." }
    ]
  },
  34: {
    title: "Container Registries",
    sections: [
      {
        title: "🏭 What is a Container Registry?",
        content: `
          <p>A registry is a centralized repository for storing and distributing Docker images. When you run <code>docker pull ubuntu</code>, Docker reaches out to the default registry (Docker Hub) to download the image.</p>
          <p>In the enterprise, you rarely use public Docker Hub for proprietary code. Instead, you use private registries like:</p>
          <ul>
            <li><strong>AWS ECR:</strong> Elastic Container Registry</li>
            <li><strong>GHCR:</strong> GitHub Container Registry</li>
            <li><strong>Harbor:</strong> Self-hosted, open-source registry</li>
          </ul>
        `
      },
      {
        title: "🏷️ Tagging Images",
        content: `
          <p>Before pushing an image, you must tag it with the registry URL and a version (tag). If you don't provide a tag, it defaults to <code>latest</code>.</p>
          <p>Format: <code>&lt;registry_url&gt;/&lt;namespace&gt;/&lt;image_name&gt;:&lt;tag&gt;</code></p>
          <pre class="lesson-code"><code># Build an image
docker build -t my-app .

# Tag it for a specific registry (e.g., Docker Hub)
docker tag my-app:latest gautampince/my-app:v1.0.0</code></pre>
        `
      },
      {
        title: "🔑 Authentication & Pushing",
        content: `
          <p>To push to a private registry, you must first authenticate:</p>
          <pre class="lesson-code"><code># Log in to Docker Hub (prompts for username/password or token)
docker login

# Log in to GitHub Container Registry using a Personal Access Token
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin

# Push the tagged image
docker push gautampince/my-app:v1.0.0</code></pre>
        `
      },
      {
        title: "⚠️ The Danger of the 'latest' Tag",
        content: `
          <p>In DevOps, deploying the <code>latest</code> tag to production is an anti-pattern. <code>latest</code> is a mutable tag—it changes every time a new version is built. This makes rollbacks impossible and causes inconsistencies between staging and production.</p>
          <p><strong>Best Practice:</strong> Always tag images with immutable identifiers, such as Semantic Versioning (<code>v1.2.3</code>) or the Git Commit SHA (<code>abc123f</code>).</p>
        `
      }
    ],
    practice: [
      { id: "d34_t1", text: "Create a free account on Docker Hub (if you don't have one)." },
      { id: "d34_t2", text: "Authenticate your local Docker CLI using <code>docker login</code> and an access token." },
      { id: "d34_t3", text: "Tag a local image with your Docker Hub username and a specific version (e.g., <code>yourusername/demo:v1.0</code>)." },
      { id: "d34_t4", text: "Push the image using <code>docker push</code> and verify it appears in your web dashboard." }
    ]
  },
  35: {
    title: "Image Scanning with Trivy",
    sections: [
      {
        title: "🦠 Vulnerabilities in Images",
        content: `
          <p>When you use <code>FROM node:18</code> or <code>FROM python:3.9</code>, you are inheriting an entire operating system file structure (usually Debian or Ubuntu). These base images contain hundreds of packages (curl, OpenSSL, bash).</p>
          <p>Every day, new CVEs (Common Vulnerabilities and Exposures) are discovered in these packages. If you push an image without scanning it, you might be deploying critical vulnerabilities to production.</p>
        `
      },
      {
        title: "🛡️ Introducing Trivy",
        content: `
          <p><strong>Trivy</strong> by Aqua Security is an industry-standard, open-source vulnerability scanner for containers, filesystems, and Git repositories.</p>
          <p>It scans your image's OS packages AND application dependencies (like <code>package-lock.json</code> or <code>requirements.txt</code>) for known CVEs.</p>
        `
      },
      {
        title: "🔎 Running a Trivy Scan",
        content: `
          <p>You can run Trivy directly via Docker without even installing it on your host:</p>
          <pre class="lesson-code"><code># Scan a public image
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image python:3.9

# Filter to show ONLY HIGH and CRITICAL vulnerabilities
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image --severity HIGH,CRITICAL python:3.9</code></pre>
        `
      },
      {
        title: "🔧 Remediating Vulnerabilities",
        content: `
          <p>How do you fix CVEs found in a scan?</p>
          <ol>
            <li><strong>Update your Base Image:</strong> Change <code>node:14</code> to <code>node:18</code>, or switch to leaner images like <code>alpine</code> or <code>distroless</code> which have fewer packages (and therefore fewer vulnerabilities).</li>
            <li><strong>Update Application Dependencies:</strong> Run <code>npm audit fix</code> or <code>pip install --upgrade</code> to patch vulnerable libraries.</li>
            <li><strong>Rebuild and Rescan.</strong></li>
          </ol>
        `
      }
    ],
    practice: [
      { id: "d35_t1", text: "Pull an older, known vulnerable image like <code>nginx:1.19</code>." },
      { id: "d35_t2", text: "Install Trivy or run it via Docker to scan the <code>nginx:1.19</code> image." },
      { id: "d35_t3", text: "Review the output and identify at least one CRITICAL vulnerability and the package that caused it." },
      { id: "d35_t4", text: "Scan a modern, minimal image like <code>nginx:alpine</code> and compare the vulnerability count." }
    ]
  },
  36: {
    title: "Container Security Best Practices",
    sections: [
      {
        title: "🛡️ The Principle of Least Privilege",
        content: `
          <p>Containers share the host kernel. If a container is compromised and has excessive privileges, the attacker can break out of the container and take over the host server (Container Breakout).</p>
          <p>We must apply defense-in-depth security principles to every container we run.</p>
        `
      },
      {
        title: "🚫 Read-Only Root Filesystem",
        content: `
          <p>Most applications only need to read their code, not overwrite it. By running a container with a read-only root filesystem, you prevent attackers from downloading malware or altering system binaries.</p>
          <pre class="lesson-code"><code># In docker run
docker run --read-only -v /tmp my-app

# In docker-compose.yml
services:
  webapp:
    image: my-app
    read_only: true
    tmpfs:
      - /tmp  # Allow writing only to memory-based /tmp</code></pre>
        `
      },
      {
        title: "✂️ Dropping Capabilities",
        content: `
          <p>By default, Docker grants containers a subset of Linux "Capabilities" (permissions to do things like change network configs or alter file ownership). Most web apps need ZERO capabilities.</p>
          <pre class="lesson-code"><code>services:
  webapp:
    image: my-app
    cap_drop:
      - ALL       # Drop everything
    cap_add:
      - NET_BIND_SERVICE # Only allow binding to ports < 1024 if needed</code></pre>
        `
      },
      {
        title: "🚫 Never Run as Root",
        content: `
          <p>As covered in Day 29, the most critical security step is running as a non-root user. You can enforce this at runtime:</p>
          <pre class="lesson-code"><code># In docker-compose.yml
services:
  webapp:
    image: my-app
    user: "1000:1000" # Run as a specific UID/GID</code></pre>
        `
      }
    ],
    practice: [
      { id: "d36_t1", text: "Start a container with the <code>--read-only</code> flag and attempt to create a file in <code>/usr/</code>. Observe the error." },
      { id: "d36_t2", text: "Create a <code>docker-compose.yml</code> that drops <code>ALL</code> capabilities for a service." },
      { id: "d36_t3", text: "Force a container to run as user ID 1000 using the <code>user:</code> directive in Compose." },
      { id: "d36_t4", text: "Run an image using the <code>no-new-privileges</code> security opt to prevent privilege escalation." }
    ]
  },
  37: {
    title: "Secrets in Docker",
    sections: [
      {
        title: "🤫 The Secret Problem",
        content: `
          <p>APIs, databases, and third-party services require passwords, API keys, and TLS certificates. If you bake these into your Docker image, anyone who pulls the image can extract your secrets.</p>
          <p>If you pass them via standard environment variables (<code>-e PASSWORD=secret</code>), they are visible to anyone who runs <code>docker inspect</code> or views the host's process list.</p>
        `
      },
      {
        title: "🤐 Docker Secrets (Swarm/Compose)",
        content: `
          <p>Docker has a native secrets management system. It mounts secrets securely into an in-memory filesystem (tmpfs) inside the container, usually at <code>/run/secrets/</code>.</p>
          <pre class="lesson-code"><code>version: '3.8'
services:
  db:
    image: postgres
    environment:
      # Tell Postgres to read the password from a file
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password

secrets:
  db_password:
    file: ./my_secret.txt # Kept out of version control!</code></pre>
        `
      },
      {
        title: "🏦 External Vaults (HashiCorp Vault)",
        content: `
          <p>In enterprise environments, local files aren't scalable. DevOps teams use centralized Secret Management tools like <strong>HashiCorp Vault</strong> or AWS Secrets Manager.</p>
          <p>Instead of passing the secret directly to the container, the application authenticates with the Vault at startup and fetches the secrets dynamically over the network.</p>
        `
      }
    ],
    practice: [
      { id: "d37_t1", text: "Create a <code>db_password.txt</code> file and ensure it is in your <code>.gitignore</code>." },
      { id: "d37_t2", text: "Configure a <code>docker-compose.yml</code> to use the <code>secrets:</code> top-level element mapped to that file." },
      { id: "d37_t3", text: "Assign the secret to a service and use the <code>*_FILE</code> environment variable convention (e.g., MYSQL_ROOT_PASSWORD_FILE)." },
      { id: "d37_t4", text: "Exec into the running container and verify the secret exists safely at <code>/run/secrets/</code>." }
    ]
  },
  38: {
    title: "Docker in Production Patterns",
    sections: [
      {
        title: "🔄 Restart Policies",
        content: `
          <p>In production, applications crash. Servers reboot. Your containers must recover automatically.</p>
          <ul>
            <li><code>no</code>: Default. Do not restart.</li>
            <li><code>on-failure</code>: Restart only if the container exits with a non-zero status code (crash).</li>
            <li><code>always</code>: Restart regardless of the exit status. Also restarts on daemon startup.</li>
            <li><code>unless-stopped</code>: Like <code>always</code>, but if you manually stop the container, it won't restart on daemon reboot. (<strong>Recommended for most services</strong>).</li>
          </ul>
        `
      },
      {
        title: "⚖️ Resource Limits (CPU & RAM)",
        content: `
          <p>A single container with a memory leak can consume all the host's RAM, causing the Linux OOM (Out of Memory) Killer to crash the entire server.</p>
          <p>Always set limits in production!</p>
          <pre class="lesson-code"><code>services:
  webapp:
    image: my-app
    deploy:
      resources:
        limits:
          cpus: '0.50'     # Max half a CPU core
          memory: 512M     # Hard limit (killed if exceeded)
        reservations:
          cpus: '0.25'     # Guaranteed CPU
          memory: 256M     # Guaranteed RAM</code></pre>
        `
      },
      {
        title: "📝 Logging Drivers",
        content: `
          <p>By default, Docker saves logs in JSON format on the local disk. If left unchecked, logs will fill the hard drive and crash the server.</p>
          <p>Configure log rotation in <code>docker-compose.yml</code> or ship logs externally (e.g., to Splunk or ELK via Syslog/Fluentd).</p>
          <pre class="lesson-code"><code>services:
  webapp:
    image: my-app
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"</code></pre>
        `
      }
    ],
    practice: [
      { id: "d38_t1", text: "Add a <code>restart: unless-stopped</code> policy to a service in Docker Compose." },
      { id: "d38_t2", text: "Configure CPU and Memory limits using the <code>deploy.resources</code> block." },
      { id: "d38_t3", text: "Set up local log rotation (e.g., max 10MB per file, max 3 files) using the <code>logging</code> directive." },
      { id: "d38_t4", text: "Test the memory limit by running a container that attempts to allocate excessive RAM (e.g., using a stress-testing image) and verify it gets OOMKilled." }
    ]
  },
  39: {
    title: "Containerization Project — Build",
    sections: [
      {
        title: "🏗️ Architecture Overview",
        content: `
          <p>For your Phase 3 project, you will containerize a complete 3-tier web application.</p>
          <ul>
            <li><strong>Frontend:</strong> A React or Vue application (served via Nginx).</li>
            <li><strong>Backend API:</strong> A Python (FastAPI/Flask) or Node.js (Express) server.</li>
            <li><strong>Database:</strong> PostgreSQL or MongoDB.</li>
          </ul>
        `
      },
      {
        title: "📜 Writing the Dockerfiles",
        content: `
          <p>Your task today is to write optimized Dockerfiles for the Frontend and Backend.</p>
          <ul>
            <li><strong>Backend:</strong> Use a slim Python/Node base image. Set up a non-root user. Copy dependencies first to maximize caching.</li>
            <li><strong>Frontend:</strong> Use a Multi-Stage build. Stage 1 (Node) to run <code>npm run build</code>. Stage 2 (Nginx Alpine) to serve the static files.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d39_t1", text: "Locate or clone a simple 3-tier open-source application from GitHub." },
      { id: "d39_t2", text: "Write an optimized, non-root Dockerfile for the Backend API." },
      { id: "d39_t3", text: "Write a Multi-Stage Dockerfile for the Frontend, resulting in a lightweight Nginx image." },
      { id: "d39_t4", text: "Build both images locally and verify they compile without errors." }
    ]
  },
  40: {
    title: "Containerization Project — Finalize",
    sections: [
      {
        title: "🎼 Orchestrating with Compose",
        content: `
          <p>Today, you will wire your newly built images together using Docker Compose to create a production-ready stack.</p>
          <p>Your Compose file must include:</p>
          <ul>
            <li>A custom bridge network connecting all three tiers.</li>
            <li>A Named Volume for database persistence.</li>
            <li><code>depends_on</code> and Healthchecks ensuring the DB is ready before the API starts.</li>
            <li>Environment variables managed via a <code>.env</code> file.</li>
            <li>Resource limits and log rotation configured.</li>
          </ul>
        `
      },
      {
        title: "🔐 Security & Publishing",
        content: `
          <p>Once the stack is running locally, you must validate its security and push it to a registry.</p>
        `
      }
    ],
    practice: [
      { id: "d40_t1", text: "Write the complete <code>docker-compose.yml</code> tying your frontend, backend, and database together." },
      { id: "d40_t2", text: "Run <code>docker compose up -d</code> and verify the entire application functions correctly in the browser." },
      { id: "d40_t3", text: "Scan your newly built frontend and backend images using Trivy to ensure no critical vulnerabilities exist." },
      { id: "d40_t4", text: "Tag both images and push them to your Docker Hub or GitHub Container Registry." }
    ]
  },
  41: {
    title: "Kubernetes Architecture",
    sections: [
      {
        title: "🚢 Why Kubernetes?",
        content: `
          <p>Docker is great for running a few containers. But what happens when you need to run 1,000 containers across 50 servers? What if a server dies? How do they communicate?</p>
          <p><strong>Kubernetes (K8s)</strong> is a container orchestration engine. It automatically deploys, scales, and manages containerized applications across a cluster of machines.</p>
        `
      },
      {
        title: "🧠 The Control Plane (The Brain)",
        content: `
          <p>The Control Plane makes global decisions about the cluster (like scheduling pods) and detects/responds to cluster events. It consists of:</p>
          <ul>
            <li><strong>kube-apiserver:</strong> The front-end of the control plane. All communication (from you or worker nodes) goes through this API.</li>
            <li><strong>etcd:</strong> A highly-available key-value store. It is the absolute source of truth holding all cluster data and state.</li>
            <li><strong>kube-scheduler:</strong> Watches for newly created Pods that have no assigned node, and selects a node for them to run on based on resources.</li>
            <li><strong>kube-controller-manager:</strong> Runs controller processes (like noticing when a node goes down and spinning up replacement pods).</li>
          </ul>
        `
      },
      {
        title: "💪 The Worker Nodes (The Muscle)",
        content: `
          <p>Worker nodes are the actual servers that run your application containers.</p>
          <ul>
            <li><strong>kubelet:</strong> An agent that runs on each node. It ensures that containers are running and healthy inside Pods.</li>
            <li><strong>kube-proxy:</strong> Maintains network rules on nodes, allowing network communication to your Pods from inside or outside of your cluster.</li>
            <li><strong>Container Runtime:</strong> The software responsible for running containers (e.g., containerd, CRI-O).</li>
          </ul>
        `
      },
      {
        title: "📦 What is a Pod?",
        content: `
          <p>Kubernetes does not run containers directly. It wraps one or more containers into a higher-level structure called a <strong>Pod</strong>.</p>
          <p>Containers inside the same Pod share the same network IP, localhost, and storage volumes. They are always scheduled on the same node together.</p>
        `
      }
    ],
    practice: [
      { id: "d41_t1", text: "Install <code>minikube</code> or <code>kind</code> (Kubernetes IN Docker) on your local machine." },
      { id: "d41_t2", text: "Start your local cluster (e.g., <code>minikube start</code>)." },
      { id: "d41_t3", text: "Install the <code>kubectl</code> command-line tool." },
      { id: "d41_t4", text: "Run <code>kubectl get nodes</code> to verify your local cluster is up and running." }
    ]
  },
  42: {
    title: "kubectl Mastery",
    sections: [
      {
        title: "🕹️ The Kubernetes Remote Control",
        content: `
          <p><code>kubectl</code> (kube-control) is the CLI used to talk to the K8s API server. You will use this tool every single day.</p>
          <p>The basic syntax is: <code>kubectl [action] [resource] [resource_name]</code></p>
        `
      },
      {
        title: "🔍 Inspecting the Cluster",
        content: `
          <pre class="lesson-code"><code># List all namespaces
kubectl get namespaces

# List all pods in the current namespace
kubectl get pods

# List pods with more details (like IP and Node)
kubectl get pods -o wide

# Get everything in a namespace
kubectl get all -n kube-system</code></pre>
        `
      },
      {
        title: "📖 Describing & Debugging",
        content: `
          <p>When a pod isn't starting, these are the first three commands you run:</p>
          <ul>
            <li><code>kubectl describe pod &lt;pod_name&gt;</code>: Shows detailed state, labels, and the recent Events (like ImagePullBackOff errors).</li>
            <li><code>kubectl logs &lt;pod_name&gt;</code>: Prints the stdout of the container inside the pod. (Use <code>-f</code> to stream).</li>
            <li><code>kubectl exec -it &lt;pod_name&gt; -- sh</code>: Opens an interactive shell inside the running pod.</li>
          </ul>
        `
      },
      {
        title: "✏️ Declarative vs Imperative",
        content: `
          <p><strong>Imperative:</strong> Telling K8s exactly what to do using CLI commands. Good for quick tests.</p>
          <p><code>kubectl run my-nginx --image=nginx</code></p>
          <p><strong>Declarative:</strong> Writing a YAML file describing the <em>desired state</em>, and telling K8s to make it happen. Essential for DevOps and GitOps.</p>
          <p><code>kubectl apply -f deployment.yaml</code></p>
        `
      }
    ],
    practice: [
      { id: "d42_t1", text: "Imperatively launch a pod using <code>kubectl run test-pod --image=nginx</code>." },
      { id: "d42_t2", text: "Use <code>kubectl get pods -o wide</code> to find the internal IP address of your pod." },
      { id: "d42_t3", text: "Run <code>kubectl describe pod test-pod</code> and read the 'Events' section at the bottom." },
      { id: "d42_t4", text: "Delete the pod imperatively using <code>kubectl delete pod test-pod</code>." }
    ]
  },
  43: {
    title: "Pods & Deployments",
    sections: [
      {
        title: "☠️ The Problem with Naked Pods",
        content: `
          <p>If you create a Pod directly (a "naked pod") and the server it runs on crashes, the Pod dies and is <strong>never recreated</strong>. This is unacceptable for production.</p>
          <p>Instead, we use higher-level controllers like <strong>ReplicaSets</strong> and <strong>Deployments</strong> to manage Pods.</p>
        `
      },
      {
        title: "📋 What is a Deployment?",
        content: `
          <p>A Deployment is a controller that provides declarative updates for Pods. You tell the Deployment: "I want 3 copies (replicas) of this Nginx image running."</p>
          <p>If a node dies and takes down 1 pod, the Deployment immediately spins up a new one on another node to maintain the desired state of 3.</p>
        `
      },
      {
        title: "📄 Writing a Deployment YAML",
        content: `
          <pre class="lesson-code"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-deploy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template: # This is the Pod blueprint
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx:1.24
        ports:
        - containerPort: 80</code></pre>
        `
      },
      {
        title: "🔄 Rolling Updates",
        content: `
          <p>When you update the image version in a Deployment (e.g., from nginx 1.24 to 1.25), K8s performs a <strong>Rolling Update</strong>.</p>
          <p>It spins up a new 1.25 pod, waits for it to be healthy, and then terminates an old 1.24 pod. It repeats this until all pods are updated, resulting in <strong>zero downtime</strong>.</p>
        `
      }
    ],
    practice: [
      { id: "d43_t1", text: "Write a <code>deployment.yaml</code> file for an Nginx application with 3 replicas." },
      { id: "d43_t2", text: "Apply the file using <code>kubectl apply -f deployment.yaml</code> and verify 3 pods are running." },
      { id: "d43_t3", text: "Simulate a node failure by deleting one of the pods manually. Watch how K8s instantly recreates it." },
      { id: "d43_t4", text: "Change the image version in your YAML to an invalid image name, apply it, and observe the <code>ImagePullBackOff</code> error. Then fix it." }
    ]
  },
  44: {
    title: "Labels, Selectors & Annotations",
    sections: [
      {
        title: "🏷️ The Power of Labels",
        content: `
          <p>Labels are key/value pairs attached to K8s objects (like Pods). They are used to organize and identify objects.</p>
          <p>Labels are the glue of Kubernetes. They are how Deployments know which Pods they own, and how Services know which Pods to send traffic to.</p>
          <pre class="lesson-code"><code>metadata:
  labels:
    app: frontend
    env: production
    tier: ui</code></pre>
        `
      },
      {
        title: "🧲 Selectors",
        content: `
          <p>Selectors are used by controllers to find objects by their labels.</p>
          <pre class="lesson-code"><code># Find all pods labeled with env=production
kubectl get pods -l env=production

# Find pods matching multiple labels
kubectl get pods -l 'env=production,app=frontend'</code></pre>
        `
      },
      {
        title: "📝 Annotations",
        content: `
          <p>While Labels are used by K8s for <em>selection</em>, Annotations are used to attach non-identifying metadata to objects.</p>
          <p>They are often used by third-party tools (like Prometheus or Ingress controllers) to store configuration data.</p>
          <pre class="lesson-code"><code>metadata:
  annotations:
    prometheus.io/scrape: "true"
    nginx.ingress.kubernetes.io/rewrite-target: /</code></pre>
        `
      },
      {
        title: "🎨 Recommended Labels",
        content: `
          <p>The K8s community recommends standard labels for all deployments:</p>
          <ul>
            <li><code>app.kubernetes.io/name</code>: The name of the app (e.g., mysql).</li>
            <li><code>app.kubernetes.io/instance</code>: A unique instance name (e.g., mysql-abcxzy).</li>
            <li><code>app.kubernetes.io/version</code>: The current version (e.g., 5.7.21).</li>
            <li><code>app.kubernetes.io/component</code>: Component within architecture (e.g., database).</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d44_t1", text: "Update your previous Deployment YAML to include standard <code>app.kubernetes.io</code> labels." },
      { id: "d44_t2", text: "Apply the changes and use <code>kubectl get pods --show-labels</code> to verify them." },
      { id: "d44_t3", text: "Use a label selector (<code>kubectl get pods -l &lt;key&gt;=&lt;val&gt;</code>) to query only your new pods." },
      { id: "d44_t4", text: "Add a custom annotation imperatively using <code>kubectl annotate pod &lt;pod_name&gt; owner=yourname</code>." }
    ]
  },
  45: {
    title: "Services & Service Discovery",
    sections: [
      {
        title: "🕸️ The Networking Problem",
        content: `
          <p>Pods are mortal. They die, get recreated, and are assigned completely <strong>new IP addresses</strong> every time. If your frontend app hardcodes the backend pod's IP, it will break immediately.</p>
          <p>We solve this using a <strong>Service</strong>. A Service provides a stable, permanent IP address and DNS name that load-balances traffic across a set of Pods.</p>
        `
      },
      {
        title: "🏢 ClusterIP (Default)",
        content: `
          <p>The default Service type. It exposes the Service on an internal IP in the cluster. This makes the Service reachable <strong>only from within the cluster</strong>.</p>
          <pre class="lesson-code"><code>apiVersion: v1
kind: Service
metadata:
  name: backend-svc
spec:
  selector:
    app: backend  # Routes traffic to pods with this label
  ports:
    - port: 80       # Port the Service listens on
      targetPort: 8080 # Port the Container listens on</code></pre>
          <p>Inside the cluster, other apps can now hit <code>http://backend-svc</code>.</p>
        `
      },
      {
        title: "🚪 NodePort",
        content: `
          <p>Exposes the Service on a static port on <strong>every Worker Node's IP</strong> (usually between 30000-32767). You can access the app from outside the cluster by hitting <code>&lt;NodeIP&gt;:&lt;NodePort&gt;</code>.</p>
          <p>Mostly used for local testing, rarely used in cloud production.</p>
        `
      },
      {
        title: "⚖️ LoadBalancer",
        content: `
          <p>When running in a cloud provider (AWS, GCP, Azure), this type automatically provisions a physical Cloud Load Balancer (like an AWS ALB) and gives you a public internet IP that routes into your cluster.</p>
        `
      }
    ],
    practice: [
      { id: "d45_t1", text: "Write a <code>service.yaml</code> of type <code>ClusterIP</code> that targets your Nginx deployment." },
      { id: "d45_t2", text: "Apply the service and run <code>kubectl get svc</code> to see its permanent Cluster IP." },
      { id: "d45_t3", text: "Create a temporary busybox pod (<code>kubectl run -it --rm debug --image=busybox -- sh</code>) and <code>wget -qO- http://&lt;service-name&gt;</code>." },
      { id: "d45_t4", text: "Change the Service type to <code>NodePort</code>, apply it, and access the application via your local browser using the assigned high port." }
    ]
  },
  46: {
    title: "Ingress & TLS Termination",
    sections: [
      {
        title: "🚏 What is an Ingress?",
        content: `
          <p>A LoadBalancer service costs money (e.g., $15/mo on AWS). If you have 10 microservices, you don't want to pay for 10 LoadBalancers.</p>
          <p>An <strong>Ingress</strong> is a smart router that sits behind a <em>single</em> LoadBalancer. It reads incoming HTTP/HTTPS traffic and routes it to different internal ClusterIP services based on the URL path or hostname.</p>
          <ul>
            <li><code>api.example.com</code> ➡️ Backend Service</li>
            <li><code>example.com/blog</code> ➡️ WordPress Service</li>
          </ul>
        `
      },
      {
        title: "🚦 The Ingress Controller",
        content: `
          <p>An Ingress YAML file is just a set of rules. For it to work, you must install an <strong>Ingress Controller</strong> in your cluster (usually NGINX or Traefik). The controller is a pod that reads your rules and dynamically configures a reverse proxy.</p>
        `
      },
      {
        title: "📜 Writing an Ingress Resource",
        content: `
          <pre class="lesson-code"><code>apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: main-ingress
spec:
  rules:
  - host: myapp.local
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: backend-svc
            port: 
              number: 80</code></pre>
        `
      },
      {
        title: "🔒 TLS and cert-manager",
        content: `
          <p>Ingress controllers handle TLS termination (decrypting HTTPS traffic). In modern clusters, we use a tool called <strong>cert-manager</strong> to automatically request and renew free SSL certificates from Let's Encrypt.</p>
        `
      }
    ],
    practice: [
      { id: "d46_t1", text: "Enable the NGINX Ingress controller in your local cluster (e.g., <code>minikube addons enable ingress</code>)." },
      { id: "d46_t2", text: "Write an <code>ingress.yaml</code> that routes the host <code>test.local</code> to your Nginx service." },
      { id: "d46_t3", text: "Add an entry to your computer's <code>/etc/hosts</code> file mapping <code>127.0.0.1</code> (or your minikube IP) to <code>test.local</code>." },
      { id: "d46_t4", text: "Visit <code>http://test.local</code> in your browser and verify it routes correctly to your pod." }
    ]
  },
  47: {
    title: "ConfigMaps & Secrets",
    sections: [
      {
        title: "⚙️ Decoupling Configuration",
        content: `
          <p>A core principle of containerization is keeping the image environment-agnostic. The exact same image should run in Dev, Staging, and Prod. We inject the environment-specific configurations at runtime using ConfigMaps.</p>
        `
      },
      {
        title: "🗺️ ConfigMaps",
        content: `
          <p>ConfigMaps store non-confidential data (like log levels, Nginx config files, or external URLs).</p>
          <p>They can be injected into a Pod as <strong>Environment Variables</strong> or mounted as <strong>Files in a Volume</strong>.</p>
          <pre class="lesson-code"><code>apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  LOG_LEVEL: "debug"
  API_URL: "https://api.prod.com"</code></pre>
        `
      },
      {
        title: "🤫 Kubernetes Secrets",
        content: `
          <p>Secrets store confidential data (passwords, TLS certs, SSH keys). They work exactly like ConfigMaps, but the data must be base64 encoded in the YAML.</p>
          <div class="lesson-callout warning">
            <strong>⚠️ Warning:</strong> Base64 is NOT encryption! Anyone with read access to the K8s API can decode it. In production, K8s Secrets should be encrypted at rest using KMS, or managed by tools like External Secrets Operator syncing from AWS/HashiCorp Vault.
          </div>
        `
      },
      {
        title: "💉 Injecting into Pods",
        content: `
          <pre class="lesson-code"><code># Inside a Deployment spec.template.spec.containers:
envFrom:
  - configMapRef:
      name: app-config
  - secretRef:
      name: db-credentials</code></pre>
        `
      }
    ],
    practice: [
      { id: "d47_t1", text: "Create a ConfigMap YAML containing a <code>MESSAGE</code> key." },
      { id: "d47_t2", text: "Create a Secret YAML containing a base64-encoded password." },
      { id: "d47_t3", text: "Update your Deployment YAML to inject both the ConfigMap and Secret as environment variables using <code>envFrom</code>." },
      { id: "d47_t4", text: "Exec into the running pod and run <code>env</code> to verify the variables were injected correctly." }
    ]
  },
  48: {
    title: "Persistent Storage in K8s",
    sections: [
      {
        title: "💾 The Storage Abstraction",
        content: `
          <p>Kubernetes abstracts storage so developers don't need to know if the cluster is running on AWS (EBS), Azure (Disk), or on-prem (NFS).</p>
          <p>This is achieved using three resources: <strong>StorageClasses</strong>, <strong>PersistentVolumes (PV)</strong>, and <strong>PersistentVolumeClaims (PVC)</strong>.</p>
        `
      },
      {
        title: "🎫 PVCs: The Ticket System",
        content: `
          <p>When a developer deploys a database, they create a <strong>PVC</strong>. Think of a PVC as a ticket asking the cluster: "I need 10GB of fast SSD storage."</p>
          <p>The cluster looks at its <strong>StorageClasses</strong> (configured by the DevOps admin) and dynamically provisions an AWS EBS volume, wrapping it in a <strong>PV</strong>, and binds it to the PVC.</p>
          <pre class="lesson-code"><code>apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce # Mounted by a single node
  resources:
    requests:
      storage: 10Gi</code></pre>
        `
      },
      {
        title: "🔗 Mounting the PVC",
        content: `
          <p>Inside your Deployment/Pod YAML, you reference the PVC name to mount it to the container's filesystem.</p>
          <pre class="lesson-code"><code>volumes:
  - name: db-data
    persistentVolumeClaim:
      claimName: postgres-pvc
containers:
  - name: postgres
    volumeMounts:
      - mountPath: /var/lib/postgresql/data
        name: db-data</code></pre>
        `
      },
      {
        title: "🏛️ StatefulSets",
        content: `
          <p>While Deployments are for stateless apps (like web servers), <strong>StatefulSets</strong> are for stateful apps (like databases). They guarantee ordered deployment and give each Pod a sticky identity (e.g., <code>db-0</code>, <code>db-1</code>) and its own dedicated PVC.</p>
        `
      }
    ],
    practice: [
      { id: "d48_t1", text: "Check available storage classes in your cluster: <code>kubectl get sc</code>." },
      { id: "d48_t2", text: "Create a PVC YAML requesting 1Gi of storage and apply it." },
      { id: "d48_t3", text: "Verify the PVC is 'Bound' to a dynamically created PV using <code>kubectl get pvc,pv</code>." },
      { id: "d48_t4", text: "Deploy a Pod that mounts this PVC to <code>/data</code> and write a test file into it." }
    ]
  },
  49: {
    title: "Helm Package Manager",
    sections: [
      {
        title: "📦 What is Helm?",
        content: `
          <p>Deploying a complex app (like Prometheus or GitLab) requires dozens of K8s YAML files (Deployments, Services, ConfigMaps, RBAC). Managing these manually is a nightmare.</p>
          <p><strong>Helm</strong> is the package manager for Kubernetes (like apt or brew). It packages all these YAML files into a single bundle called a <strong>Chart</strong>.</p>
        `
      },
      {
        title: "⚙️ Helm Values",
        content: `
          <p>A Helm chart contains templated YAML files. When you install a chart, you can pass a <code>values.yaml</code> file to customize the installation (e.g., changing the replica count or enabling ingress) without modifying the original code.</p>
        `
      },
      {
        title: "🚀 Basic Helm Commands",
        content: `
          <pre class="lesson-code"><code># Add a remote repository (like adding a PPA in Ubuntu)
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Search for a chart
helm search repo wordpress

# Install a chart (Creates a "Release")
helm install my-blog bitnami/wordpress

# Upgrade a release with custom values
helm upgrade my-blog bitnami/wordpress -f my-values.yaml

# List installed releases
helm ls</code></pre>
        `
      },
      {
        title: "↩️ Rollbacks",
        content: `
          <p>Helm tracks the history of your installations. If an upgrade breaks your application, rolling back is instant:</p>
          <pre class="lesson-code"><code>helm history my-blog
helm rollback my-blog 1</code></pre>
        `
      }
    ],
    practice: [
      { id: "d49_t1", text: "Install the Helm CLI on your local machine." },
      { id: "d49_t2", text: "Add the Bitnami helm repository and update." },
      { id: "d49_t3", text: "Install a simple application (like Redis or Nginx) using <code>helm install</code>." },
      { id: "d49_t4", text: "Use <code>kubectl get all</code> to inspect all the resources Helm automatically generated for you." }
    ]
  },
  50: {
    title: "Writing Custom Helm Charts",
    sections: [
      {
        title: "🏗️ Chart Structure",
        content: `
          <p>When you run <code>helm create my-app</code>, Helm generates a standard folder structure:</p>
          <ul>
            <li><code>Chart.yaml</code>: Metadata about the chart (name, version).</li>
            <li><code>values.yaml</code>: The default configuration values.</li>
            <li><code>templates/</code>: The directory containing your K8s YAML files injected with Go Template syntax.</li>
          </ul>
        `
      },
      {
        title: "🧬 Go Templating",
        content: `
          <p>Helm uses Go templates (<code>{{ }}</code>) to inject variables from <code>values.yaml</code> into the Kubernetes manifests.</p>
          <pre class="lesson-code"><code># In values.yaml
replicaCount: 3
image:
  repository: nginx
  tag: "1.24"

# In templates/deployment.yaml
spec:
  replicas: {{ .Values.replicaCount }}
  containers:
    - name: {{ .Chart.Name }}
      image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"</code></pre>
        `
      },
      {
        title: "🔀 Conditionals & Loops",
        content: `
          <p>Templates allow logic. You can conditionally create resources (like an Ingress) only if the user enables it in <code>values.yaml</code>.</p>
          <pre class="lesson-code"><code>{{- if .Values.ingress.enabled -}}
apiVersion: networking.k8s.io/v1
kind: Ingress
...
{{- end -}}</code></pre>
        `
      },
      {
        title: "🧪 Debugging Templates",
        content: `
          <p>Before installing a custom chart, you should always render the templates locally to check for syntax errors:</p>
          <p><code>helm template my-release ./my-chart --debug</code></p>
        `
      }
    ],
    practice: [
      { id: "d50_t1", text: "Run <code>helm create demo-api</code> to generate a boilerplate chart." },
      { id: "d50_t2", text: "Modify the <code>values.yaml</code> to point to a custom Docker image you built previously." },
      { id: "d50_t3", text: "Run <code>helm template test ./demo-api</code> and inspect the generated raw YAML." },
      { id: "d50_t4", text: "Install your custom chart into the cluster and verify the pods are running." }
    ]
  },
  51: {
    title: "Horizontal Pod Autoscaler",
    sections: [
      {
        title: "📈 The Scaling Problem",
        content: `
          <p>If your application suddenly goes viral, a static Deployment with 3 replicas will crash under the load. You need the cluster to automatically add more pods when traffic spikes, and remove them when traffic subsides to save money.</p>
        `
      },
      {
        title: "🤖 Enter the HPA",
        content: `
          <p>The <strong>Horizontal Pod Autoscaler (HPA)</strong> constantly monitors the resource metrics (CPU and Memory) of your pods. If the average CPU usage exceeds a threshold (e.g., 70%), the HPA instructs the Deployment to increase the replica count.</p>
        `
      },
      {
        title: "📊 Metrics Server",
        content: `
          <p>For the HPA to work, your cluster <strong>must</strong> have a Metrics Server installed. This component aggregates CPU/RAM data from the kubelets on every node.</p>
          <p>You must also define <code>resources.requests</code> in your Pod spec, so the HPA has a baseline to calculate percentages from.</p>
        `
      },
      {
        title: "📄 HPA Configuration",
        content: `
          <pre class="lesson-code"><code>apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-deploy
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70</code></pre>
        `
      }
    ],
    practice: [
      { id: "d51_t1", text: "Ensure the Metrics Server is installed in your local cluster (e.g., <code>minikube addons enable metrics-server</code>)." },
      { id: "d51_t2", text: "Update your deployment YAML to include CPU resource requests (e.g., <code>100m</code>)." },
      { id: "d51_t3", text: "Create an HPA targeting your deployment using <code>kubectl autoscale deployment &lt;name&gt; --cpu-percent=50 --min=1 --max=5</code>." },
      { id: "d51_t4", text: "Generate load against your pod (using a busybox loop or Apache Bench) and watch the HPA scale up using <code>kubectl get hpa -w</code>." }
    ]
  },
  52: {
    title: "Resource Quotas & Limits",
    sections: [
      {
        title: "🛑 The 'Noisy Neighbor' Problem",
        content: `
          <p>In a shared cluster, one rogue application with a memory leak can consume all the node's resources, starving critical applications. We prevent this using Requests, Limits, and Quotas.</p>
        `
      },
      {
        title: "📏 Requests vs. Limits",
        content: `
          <p>Defined at the Container level:</p>
          <ul>
            <li><strong>Requests:</strong> The <em>guaranteed</em> baseline resource required. The Scheduler uses this to find a node with enough capacity. (e.g., <code>cpu: 200m</code>, <code>memory: 256Mi</code>)</li>
            <li><strong>Limits:</strong> The absolute maximum resource allowed. If a container exceeds its CPU limit, it gets throttled. If it exceeds its Memory limit, it gets OOMKilled (Out Of Memory Killed) immediately.</li>
          </ul>
        `
      },
      {
        title: "🗂️ ResourceQuotas (Namespace Level)",
        content: `
          <p>In enterprise clusters, different teams get different Namespaces. A <strong>ResourceQuota</strong> restricts the total amount of resources a specific namespace can consume.</p>
          <pre class="lesson-code"><code>apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-a-quota
  namespace: team-a
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    pods: "20"</code></pre>
        `
      },
      {
        title: "🛡️ LimitRanges",
        content: `
          <p>If developers forget to add Requests/Limits to their Pod YAMLs, a <strong>LimitRange</strong> automatically injects default limits into every new pod created in a namespace.</p>
        `
      }
    ],
    practice: [
      { id: "d52_t1", text: "Update a container spec to include both <code>requests</code> and <code>limits</code> for CPU and Memory." },
      { id: "d52_t2", text: "Create a new namespace called <code>limited-space</code>." },
      { id: "d52_t3", text: "Apply a <code>ResourceQuota</code> to that namespace restricting it to max 2 pods." },
      { id: "d52_t4", text: "Attempt to deploy 3 pods into <code>limited-space</code> and observe the API server reject the creation of the 3rd pod." }
    ]
  },
  53: {
    title: "Kubernetes RBAC",
    sections: [
      {
        title: "👮 Role-Based Access Control",
        content: `
          <p>RBAC determines who (or what) can perform specific actions on specific resources in the cluster. It is fundamentally secure: access is completely denied by default.</p>
        `
      },
      {
        title: "🔑 Subjects: Users vs. ServiceAccounts",
        content: `
          <ul>
            <li><strong>Users / Groups:</strong> Humans interacting with the cluster via <code>kubectl</code> (managed externally via IAM, OIDC, or certificates).</li>
            <li><strong>ServiceAccounts:</strong> Machine identities used by Pods running inside the cluster. If your Pod needs to talk to the K8s API (e.g., a CI/CD runner pod), it uses a ServiceAccount.</li>
          </ul>
        `
      },
      {
        title: "📜 Roles and ClusterRoles",
        content: `
          <p>A Role defines <em>what</em> can be done (the permissions).</p>
          <ul>
            <li><strong>Role:</strong> Permissions are restricted to a single Namespace.</li>
            <li><strong>ClusterRole:</strong> Permissions apply globally across all Namespaces (e.g., ability to list Nodes).</li>
          </ul>
          <pre class="lesson-code"><code>apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: dev
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods", "pods/log"]
  verbs: ["get", "watch", "list"]</code></pre>
        `
      },
      {
        title: "🔗 RoleBindings",
        content: `
          <p>A RoleBinding connects the Subject (User/ServiceAccount) to the Role.</p>
          <p>"Bind the <code>pod-reader</code> Role to the ServiceAccount <code>ci-bot</code> in the <code>dev</code> namespace."</p>
        `
      }
    ],
    practice: [
      { id: "d53_t1", text: "Create a <code>ServiceAccount</code> named <code>read-only-bot</code>." },
      { id: "d53_t2", text: "Create a <code>Role</code> that only allows <code>get</code> and <code>list</code> verbs on <code>pods</code>." },
      { id: "d53_t3", text: "Create a <code>RoleBinding</code> attaching the Role to the ServiceAccount." },
      { id: "d53_t4", text: "Test the permissions using: <code>kubectl auth can-i delete pods --as=system:serviceaccount:default:read-only-bot</code> (It should return 'no')." }
    ]
  },
  54: {
    title: "Network Policies",
    sections: [
      {
        title: "🔓 The Open Network Problem",
        content: `
          <p>By default, Kubernetes networking is completely flat. <strong>Any pod can talk to any other pod</strong>, even across different namespaces.</p>
          <p>If a hacker compromises a vulnerable frontend pod, they can easily ping and port-scan your backend payment database pod. This violates Zero Trust security.</p>
        `
      },
      {
        title: "🧱 Network Policies (The Internal Firewall)",
        content: `
          <p>A <strong>NetworkPolicy</strong> acts as a firewall between Pods. It controls traffic at the IP/Port level (OSI Layer 3/4) using Labels.</p>
          <p><em>Note: Your cluster must use a CNI (Container Network Interface) plugin that supports NetworkPolicies, such as Calico or Cilium.</em></p>
        `
      },
      {
        title: "🛡️ Default Deny All",
        content: `
          <p>The best practice is to deploy a "Default Deny" policy in every namespace. This drops all traffic. You then create specific policies to allow necessary traffic.</p>
          <pre class="lesson-code"><code>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
spec:
  podSelector: {} # Empty selector matches all pods
  policyTypes:
  - Ingress
  - Egress</code></pre>
        `
      },
      {
        title: "✅ Allowing Specific Traffic",
        content: `
          <p>Example: Allow traffic to the Database pods ONLY if it comes from pods labeled <code>app: backend</code> on port 5432.</p>
          <pre class="lesson-code"><code>spec:
  podSelector:
    matchLabels:
      app: database
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: backend
    ports:
    - protocol: TCP
      port: 5432</code></pre>
        `
      }
    ],
    practice: [
      { id: "d54_t1", text: "Ensure your cluster has a CNI that supports Network Policies (e.g., Calico)." },
      { id: "d54_t2", text: "Deploy a frontend and backend pod, and verify they can communicate (e.g., using <code>curl</code> from inside the pod)." },
      { id: "d54_t3", text: "Apply a 'Default Deny All' Ingress Network Policy to the namespace." },
      { id: "d54_t4", text: "Verify communication is now blocked, then write a specific policy to allow frontend to talk to backend." }
    ]
  },
  55: {
    title: "K8s Debugging & Troubleshooting",
    sections: [
      {
        title: "🕵️ The Troubleshooting Mindset",
        content: `
          <p>When an application fails in Kubernetes, don't panic. Follow a structured, bottom-up approach:</p>
          <ol>
            <li>Is the Pod running?</li>
            <li>Is the Container crashing?</li>
            <li>Is the Service routing correctly?</li>
            <li>Is the Ingress working?</li>
          </ol>
        `
      },
      {
        title: "❌ Pod States & Errors",
        content: `
          <ul>
            <li><strong>Pending:</strong> The pod hasn't been scheduled. Check for node resources (<code>kubectl describe pod</code>) or unbound PVCs.</li>
            <li><strong>ImagePullBackOff:</strong> K8s cannot pull the Docker image. Check typos in the image name, missing tags, or private registry credentials (imagePullSecrets).</li>
            <li><strong>CrashLoopBackOff:</strong> The container starts, immediately crashes, and K8s keeps trying to restart it. The app code is failing. Check <code>kubectl logs &lt;pod&gt; --previous</code>.</li>
            <li><strong>OOMKilled:</strong> The container exceeded its memory limit. Increase the limit or fix the memory leak in the app.</li>
          </ul>
        `
      },
      {
        title: "🔌 Networking Debugging",
        content: `
          <p>If the pod is <code>Running</code> but you can't reach it:</p>
          <ul>
            <li>Check the Service endpoints: <code>kubectl get endpoints &lt;service-name&gt;</code>. If this is empty, the Service's <code>selector</code> labels do not match the Pod's labels!</li>
            <li>Exec into a temporary busybox pod and try DNS resolution: <code>nslookup &lt;service-name&gt;</code>.</li>
            <li>Check Network Policies blocking traffic.</li>
          </ul>
        `
      },
      {
        title: "🩺 Cluster Health",
        content: `
          <p>Sometimes the issue is the cluster itself, not your app.</p>
          <ul>
            <li><code>kubectl get nodes</code>: Are any nodes <code>NotReady</code>?</li>
            <li><code>kubectl top nodes</code>: Are the nodes out of CPU/RAM?</li>
            <li><code>kubectl get events --sort-by='.metadata.creationTimestamp'</code>: Look at the cluster-wide event stream for underlying issues.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d55_t1", text: "Intentionally break a deployment (e.g., misspell the image name) and diagnose the resulting <code>ImagePullBackOff</code> error." },
      { id: "d55_t2", text: "Create a Service with a typo in the <code>selector</code>. Use <code>kubectl get endpoints</code> to prove it isn't routing to your pods." },
      { id: "d55_t3", text: "Deploy a script that rapidly consumes memory to trigger and observe an <code>OOMKilled</code> status." },
      { id: "d55_t4", text: "Review the global cluster events using <code>kubectl get events</code>." }
    ]
  },
  56: {
    title: "Terraform Fundamentals",
    sections: [
      {
        title: "🏗️ Infrastructure as Code (IaC)",
        content: `
          <p>Clicking around the AWS Console to create servers and databases is fine for learning, but terrible for production. It is slow, prone to human error, and completely undocumented.</p>
          <p><strong>Infrastructure as Code (IaC)</strong> means writing configuration files that define your infrastructure. <strong>Terraform</strong> (by HashiCorp) is the industry standard tool for this.</p>
        `
      },
      {
        title: "🧠 How Terraform Works",
        content: `
          <p>Terraform is <em>Declarative</em>. You don't write API scripts telling AWS <em>how</em> to create a server. You declare "I want a server of type t2.micro", and Terraform figures out the API calls required to achieve that state.</p>
          <p>It uses <strong>Providers</strong> (plugins) to talk to different APIs (AWS, Azure, Google Cloud, Kubernetes, GitHub, etc.).</p>
        `
      },
      {
        title: "📜 HashiCorp Configuration Language (HCL)",
        content: `
          <p>Terraform uses HCL, a human-readable language designed specifically for infrastructure.</p>
          <pre class="lesson-code"><code># main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# resource "provider_type" "name_in_terraform"
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  tags = {
    Name = "HelloWorld"
  }
}</code></pre>
        `
      },
      {
        title: "🔄 The Terraform Workflow",
        content: `
          <ol>
            <li><code>terraform init</code>: Initializes the directory, downloads the required providers.</li>
            <li><code>terraform plan</code>: Calculates the diff. Shows you <em>exactly</em> what will be created, modified, or destroyed.</li>
            <li><code>terraform apply</code>: Executes the plan against the cloud provider API.</li>
            <li><code>terraform destroy</code>: Deletes all resources tracked by this project.</li>
          </ol>
        `
      }
    ],
    practice: [
      { id: "d56_t1", text: "Install the Terraform CLI on your local machine." },
      { id: "d56_t2", text: "Write a <code>main.tf</code> file that uses the <code>local</code> provider to create a local text file resource." },
      { id: "d56_t3", text: "Run <code>terraform init</code> followed by <code>terraform plan</code>." },
      { id: "d56_t4", text: "Run <code>terraform apply</code> and verify the text file was created on your computer." }
    ]
  },
  57: {
    title: "Terraform Variables & Outputs",
    sections: [
      {
        title: "🔀 Parameterizing Infrastructure",
        content: `
          <p>Hardcoding values (like AMI IDs or instance types) in <code>main.tf</code> makes your code inflexible. You can't easily reuse it for different environments. We solve this with <strong>Input Variables</strong>.</p>
        `
      },
      {
        title: "📥 Input Variables (variables.tf)",
        content: `
          <pre class="lesson-code"><code># Define the variable
variable "instance_type" {
  description = "The EC2 instance type"
  type        = string
  default     = "t2.micro"
}

# Use it in main.tf
resource "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = var.instance_type
}</code></pre>
          <p>You can override defaults using a <code>terraform.tfvars</code> file, or by passing <code>-var="instance_type=t3.large"</code> via the CLI.</p>
        `
      },
      {
        title: "📍 Local Values",
        content: `
          <p><strong>Locals</strong> are useful for calculating values repeatedly within the same module (unlike variables, they cannot be overridden from the outside).</p>
          <pre class="lesson-code"><code>locals {
  common_tags = {
    Environment = var.env
    Project     = "ecommerce"
    ManagedBy   = "Terraform"
  }
}

resource "aws_instance" "web" {
  # ...
  tags = local.common_tags
}</code></pre>
        `
      },
      {
        title: "📤 Outputs (outputs.tf)",
        content: `
          <p>Outputs define values that should be printed to the console after a successful apply (e.g., the public IP of your newly created web server).</p>
          <pre class="lesson-code"><code>output "web_public_ip" {
  description = "The public IP of the web server"
  value       = aws_instance.web.public_ip
}</code></pre>
        `
      }
    ],
    practice: [
      { id: "d57_t1", text: "Refactor your previous Terraform code to use a <code>variable</code> for the file content." },
      { id: "d57_t2", text: "Create a <code>terraform.tfvars</code> file to override the default variable value." },
      { id: "d57_t3", text: "Define an <code>output</code> that returns the absolute path of the generated file." },
      { id: "d57_t4", text: "Run <code>terraform apply</code> and observe the output printed to the terminal." }
    ]
  },
  58: {
    title: "Terraform State & Backends",
    sections: [
      {
        title: "🗺️ The State File (terraform.tfstate)",
        content: `
          <p>How does Terraform know what resources it has already created? When you run <code>terraform apply</code>, it saves a mapping between the real-world cloud resources and your code inside a giant JSON file called the <strong>State file</strong>.</p>
          <p>By default, this is stored locally as <code>terraform.tfstate</code>.</p>
        `
      },
      {
        title: "🔥 The Team Problem",
        content: `
          <p>If you work on a team, a local state file is a disaster. If Bob runs <code>apply</code>, his laptop has the state. If Alice runs <code>apply</code>, her laptop doesn't have the state, so Terraform tries to recreate everything from scratch, causing conflicts.</p>
          <div class="lesson-callout warning">
            <strong>⚠️ Security Risk:</strong> The state file contains plain-text secrets (like database passwords generated by Terraform). NEVER commit <code>terraform.tfstate</code> to Git!
          </div>
        `
      },
      {
        title: "☁️ Remote Backends",
        content: `
          <p>To solve this, we configure a <strong>Remote Backend</strong>. This tells Terraform to store the state file in a central, secure location (like an AWS S3 bucket).</p>
          <pre class="lesson-code"><code>terraform {
  backend "s3" {
    bucket = "my-terraform-state-bucket"
    key    = "prod/network/terraform.tfstate"
    region = "us-east-1"
  }
}</code></pre>
        `
      },
      {
        title: "🔒 State Locking (DynamoDB)",
        content: `
          <p>What if Bob and Alice run <code>terraform apply</code> at the exact same millisecond? The state file would get corrupted.</p>
          <p>AWS S3 backends use a <strong>DynamoDB Table</strong> to enforce State Locking. When Bob runs apply, a lock is acquired. If Alice tries to run apply, Terraform prevents it and says "State is locked by Bob".</p>
        `
      }
    ],
    practice: [
      { id: "d58_t1", text: "Open your local <code>terraform.tfstate</code> file in a text editor and inspect its JSON structure." },
      { id: "d58_t2", text: "Ensure <code>*.tfstate</code> and <code>*.tfstate.backup</code> are added to your <code>.gitignore</code>." },
      { id: "d58_t3", text: "Write the HCL configuration block required to set up an AWS S3 remote backend." },
      { id: "d58_t4", text: "Read the Terraform documentation on how state locking is configured using DynamoDB." }
    ]
  },
  59: {
    title: "Terraform Modules",
    sections: [
      {
        title: "📦 Don't Repeat Yourself (DRY)",
        content: `
          <p>If you need to deploy an identical web server architecture for the Dev, Staging, and Prod environments, copying and pasting the <code>main.tf</code> code is terrible practice.</p>
          <p><strong>Modules</strong> allow you to package Terraform code into reusable components (like functions in programming).</p>
        `
      },
      {
        title: "🏗️ Writing a Local Module",
        content: `
          <p>A module is just a folder containing <code>.tf</code> files.</p>
          <pre class="lesson-code"><code># Directory structure
project/
├─ modules/
│  └─ vpc/
│     ├─ main.tf
│     ├─ variables.tf
│     └─ outputs.tf
└─ main.tf</code></pre>
        `
      },
      {
        title: "🔌 Calling a Module",
        content: `
          <p>From your root <code>main.tf</code>, you call the module and pass values to its variables.</p>
          <pre class="lesson-code"><code>module "my_vpc" {
  source = "./modules/vpc"  # Path to the module

  # Pass variables required by the module
  vpc_cidr_block = "10.0.0.0/16"
  environment    = "production"
}

# Accessing an output from the module
output "vpc_id" {
  value = module.my_vpc.vpc_id
}</code></pre>
        `
      },
      {
        title: "🌍 The Terraform Registry",
        content: `
          <p>You don't have to write everything from scratch. The <strong>Terraform Registry</strong> contains thousands of community-maintained modules (e.g., standard, secure VPCs or EKS clusters) verified by HashiCorp.</p>
          <pre class="lesson-code"><code>module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"
  # ... inputs
}</code></pre>
        `
      }
    ],
    practice: [
      { id: "d59_t1", text: "Create a <code>modules/file-generator</code> folder containing your local file creation code." },
      { id: "d59_t2", text: "Define input variables in the module for filename and content." },
      { id: "d59_t3", text: "In your root directory, call the module twice using two different <code>module {}</code> blocks to create two different files." },
      { id: "d59_t4", text: "Run <code>terraform init</code> (required when adding new modules) and <code>terraform apply</code>." }
    ]
  },
  60: {
    title: "Advanced Terraform Patterns",
    sections: [
      {
        title: "🔂 Iteration with count",
        content: `
          <p>If you need 3 identical EC2 instances, you shouldn't write 3 resource blocks. Use the <code>count</code> meta-argument.</p>
          <pre class="lesson-code"><code>resource "aws_instance" "web" {
  count         = 3
  instance_type = "t2.micro"
  ami           = "ami-12345"

  tags = {
    # count.index starts at 0
    Name = "web-server-\${count.index + 1}"
  }
}</code></pre>
        `
      },
      {
        title: "🔄 Iteration with for_each",
        content: `
          <p><code>count</code> is dangerous if you remove an item from the middle of a list (Terraform will shift the indexes and recreate resources). <code>for_each</code> is safer as it iterates over maps or sets using keys.</p>
          <pre class="lesson-code"><code>variable "users" {
  type    = set(string)
  default = ["alice", "bob", "charlie"]
}

resource "aws_iam_user" "team" {
  for_each = var.users
  name     = each.value
}</code></pre>
        `
      },
      {
        title: "🧩 Dynamic Blocks",
        content: `
          <p>Sometimes you need to generate nested blocks dynamically (like multiple ingress rules in a Security Group based on a variable list).</p>
          <pre class="lesson-code"><code>resource "aws_security_group" "web_sg" {
  # ...
  dynamic "ingress" {
    for_each = [80, 443]
    content {
      from_port   = ingress.value
      to_port     = ingress.value
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }
}</code></pre>
        `
      },
      {
        title: "🔍 Data Sources",
        content: `
          <p><code>data</code> blocks allow Terraform to query information from the cloud provider (e.g., finding the latest Amazon Linux AMI ID instead of hardcoding it).</p>
          <pre class="lesson-code"><code>data "aws_ami" "latest_ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}
# Reference it: data.aws_ami.latest_ubuntu.id</code></pre>
        `
      }
    ],
    practice: [
      { id: "d60_t1", text: "Use <code>count</code> to generate 5 text files named file-0.txt to file-4.txt." },
      { id: "d60_t2", text: "Refactor the code to use <code>for_each</code> iterating over a Set of names." },
      { id: "d60_t3", text: "Research and write a <code>data</code> block that fetches the ID of the default VPC in an AWS account." },
      { id: "d60_t4", text: "Output the value of that fetched data block." }
    ]
  },
  61: {
    title: "Terraform Workspaces & Environments",
    sections: [
      {
        title: "🌍 The Multi-Environment Problem",
        content: `
          <p>How do you deploy the same Terraform code to <code>dev</code>, <code>staging</code>, and <code>prod</code> without the states colliding?</p>
          <p>If you just change the variables and run apply, Terraform will overwrite your Dev infrastructure with Prod infrastructure because they share the same state file!</p>
        `
      },
      {
        title: "📂 Method 1: Directory Separation (Recommended)",
        content: `
          <p>The safest approach is to create separate directories for each environment, each configuring its own distinct remote backend state file. They all call the same shared modules.</p>
          <pre class="lesson-code"><code>environments/
├─ dev/
│  ├─ main.tf     # Configures S3 backend key "dev.tfstate"
│  └─ terraform.tfvars
└─ prod/
   ├─ main.tf     # Configures S3 backend key "prod.tfstate"
   └─ terraform.tfvars</code></pre>
        `
      },
      {
        title: "🗂️ Method 2: Terraform Workspaces",
        content: `
          <p>Workspaces allow you to use a single directory, but Terraform maintains multiple state files transparently based on the active workspace.</p>
          <pre class="lesson-code"><code># Create and switch to a prod workspace
terraform workspace new prod

# View current workspace
terraform workspace show</code></pre>
        `
      },
      {
        title: "🔀 Using terraform.workspace",
        content: `
          <p>You can dynamically alter your infrastructure based on the active workspace using the <code>terraform.workspace</code> variable.</p>
          <pre class="lesson-code"><code>resource "aws_instance" "web" {
  # If prod workspace, use large instance, else use micro
  instance_type = terraform.workspace == "prod" ? "t3.large" : "t2.micro"
  
  tags = {
    Environment = terraform.workspace
  }
}</code></pre>
        `
      }
    ],
    practice: [
      { id: "d61_t1", text: "Run <code>terraform workspace list</code> to see your current workspaces (default)." },
      { id: "d61_t2", text: "Create two new workspaces: <code>dev</code> and <code>prod</code>." },
      { id: "d61_t3", text: "Write HCL code that sets a variable to a different value depending on <code>terraform.workspace</code>." },
      { id: "d61_t4", text: "Run <code>terraform apply</code> in both workspaces and verify separate state files were created in a <code>terraform.tfstate.d</code> directory." }
    ]
  },
  62: {
    title: "Ansible Fundamentals",
    sections: [
      {
        title: "⚙️ Configuration Management",
        content: `
          <p>Terraform is great for <strong>Provisioning</strong> (creating the blank server). But who installs Nginx, configures the firewall, and copies the application code onto that server?</p>
          <p>You could use Bash scripts (User Data), but they are hard to maintain. Instead, we use <strong>Configuration Management</strong> tools like <strong>Ansible</strong>.</p>
        `
      },
      {
        title: "📡 Agentless Architecture",
        content: `
          <p>Unlike Chef or Puppet, Ansible is <strong>Agentless</strong>. You don't need to install any Ansible software on your target servers. Ansible connects to them over standard SSH using Python.</p>
          <div class="lesson-callout info">
            <strong>💡 Push Model:</strong> You run Ansible on your laptop (or a CI pipeline), and it "pushes" the configuration down to the remote servers.
          </div>
        `
      },
      {
        title: "📋 The Inventory File",
        content: `
          <p>Ansible needs to know which servers to target. This is defined in an Inventory file (usually <code>hosts.ini</code>).</p>
          <pre class="lesson-code"><code>[webservers]
192.168.1.10
192.168.1.11

[db]
192.168.1.20

# Variables for the webservers group
[webservers:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/mykey.pem</code></pre>
        `
      },
      {
        title: "🏃 Ad-Hoc Commands",
        content: `
          <p>For quick tasks, you can run single commands across your entire fleet instantly.</p>
          <pre class="lesson-code"><code># Ping all webservers to test SSH connectivity
ansible webservers -i hosts.ini -m ping

# Run an arbitrary shell command (e.g., check uptime)
ansible all -i hosts.ini -m command -a "uptime"</code></pre>
        `
      }
    ],
    practice: [
      { id: "d62_t1", text: "Install Ansible on your local machine." },
      { id: "d62_t2", text: "Create an <code>inventory.ini</code> file defining a <code>[local]</code> group pointing to <code>localhost</code> with <code>ansible_connection=local</code>." },
      { id: "d62_t3", text: "Run the Ansible <code>ping</code> module against your local group using an ad-hoc command." },
      { id: "d62_t4", text: "Run an ad-hoc command using the <code>command</code> module to execute <code>free -m</code> on the targets." }
    ]
  },
  63: {
    title: "Ansible Modules & Handlers",
    sections: [
      {
        title: "📖 What is a Playbook?",
        content: `
          <p>While ad-hoc commands are useful, true automation is written in <strong>Playbooks</strong> (YAML files). A Playbook maps a group of hosts to a series of Tasks.</p>
        `
      },
      {
        title: "🧩 Ansible Modules",
        content: `
          <p>Each Task uses a <strong>Module</strong> (a pre-written Python script that handles the heavy lifting). They ensure <strong>Idempotency</strong>—if the task is already in the desired state, Ansible does nothing.</p>
          <pre class="lesson-code"><code>- name: Configure Webservers
  hosts: webservers
  become: yes # Run as sudo
  tasks:
    - name: Ensure Nginx is installed
      apt:
        name: nginx
        state: present # Idempotent: only installs if missing

    - name: Start Nginx service
      service:
        name: nginx
        state: started
        enabled: yes</code></pre>
        `
      },
      {
        title: "🛎️ Handlers",
        content: `
          <p>If you update an Nginx configuration file, you need to restart the Nginx service. But you <em>only</em> want to restart it if the file actually changed. We use Handlers for this.</p>
          <pre class="lesson-code"><code>  tasks:
    - name: Copy Nginx config
      copy:
        src: ./nginx.conf
        dest: /etc/nginx/nginx.conf
      notify: Restart Nginx # Triggers the handler ONLY if a change occurs

  handlers:
    - name: Restart Nginx
      service:
        name: nginx
        state: restarted</code></pre>
        `
      },
      {
        title: "▶️ Running a Playbook",
        content: `
          <p><code>ansible-playbook -i inventory.ini site.yml</code></p>
        `
      }
    ],
    practice: [
      { id: "d63_t1", text: "Write a playbook <code>setup.yml</code> targeting <code>localhost</code>." },
      { id: "d63_t2", text: "Use the <code>file</code> module to create a directory idempotently." },
      { id: "d63_t3", text: "Use the <code>copy</code> module to copy a text file into that directory, and add a <code>notify</code> directive." },
      { id: "d63_t4", text: "Define a handler that uses the <code>debug</code> module to print a message, and run the playbook twice to observe idempotency." }
    ]
  },
  64: {
    title: "Ansible Roles & Galaxy",
    sections: [
      {
        title: "📂 Structuring with Roles",
        content: `
          <p>Putting 100 tasks in a single YAML file becomes unreadable. <strong>Roles</strong> allow you to break playbooks down into logical, reusable components (e.g., an <code>nginx</code> role, a <code>mysql</code> role).</p>
          <p>Roles expect a rigid directory structure:</p>
          <pre class="lesson-code"><code>roles/
  nginx/
    tasks/
      main.yml     # The tasks to run
    handlers/
      main.yml     # Handlers
    templates/     # Jinja2 templates for config files
    defaults/
      main.yml     # Default variables</code></pre>
        `
      },
      {
        title: "📝 Jinja2 Templates",
        content: `
          <p>Instead of copying static files, Ansible uses Jinja2 templates (<code>.j2</code> files) to dynamically generate config files based on variables.</p>
          <pre class="lesson-code"><code># In roles/nginx/templates/nginx.conf.j2
server {
    listen {{ http_port }};
    server_name {{ domain_name }};
}

# In tasks/main.yml
- name: Generate Config
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf</code></pre>
        `
      },
      {
        title: "🌌 Ansible Galaxy",
        content: `
          <p>You don't need to write a role to install Docker. The community already has. <strong>Ansible Galaxy</strong> is a repository of pre-written community roles (similar to Terraform Registry).</p>
          <pre class="lesson-code"><code># Install a community role
ansible-galaxy install geerlingguy.docker</code></pre>
        `
      },
      {
        title: "🎭 Using Roles in a Playbook",
        content: `
          <pre class="lesson-code"><code>- hosts: webservers
  roles:
    - common_security
    - geerlingguy.docker
    - custom_nginx_role</code></pre>
        `
      }
    ],
    practice: [
      { id: "d64_t1", text: "Use <code>ansible-galaxy init myrole</code> to generate a standard role directory structure." },
      { id: "d64_t2", text: "Move your previous file creation task into the <code>tasks/main.yml</code> of this new role." },
      { id: "d64_t3", text: "Create a Jinja2 template file (<code>.j2</code>) containing a variable." },
      { id: "d64_t4", text: "Write a master playbook that calls your role, passing the required variable." }
    ]
  },
  65: {
    title: "Ansible Vault & Secrets",
    sections: [
      {
        title: "🔒 The Plaintext Problem",
        content: `
          <p>Your Ansible playbooks will need database passwords, API keys, and TLS certificates. You must commit your playbooks to Git. Therefore, you cannot store these secrets in plaintext.</p>
        `
      },
      {
        title: "🔐 Introducing Ansible Vault",
        content: `
          <p><strong>Ansible Vault</strong> encrypts variables (or entire files) using AES256. You can safely commit the encrypted files to Git. When the playbook runs, you provide the decryption password.</p>
        `
      },
      {
        title: "🛠️ Vault Commands",
        content: `
          <pre class="lesson-code"><code># Create a new encrypted file (prompts for a password)
ansible-vault create secrets.yml

# Edit an existing encrypted file
ansible-vault edit secrets.yml

# Encrypt an existing plaintext file
ansible-vault encrypt my_keys.yml</code></pre>
        `
      },
      {
        title: "▶️ Running Playbooks with Vault",
        content: `
          <p>When running a playbook that includes vault-encrypted variables, you must tell Ansible how to decrypt them:</p>
          <pre class="lesson-code"><code># Prompt for password interactively
ansible-playbook site.yml --ask-vault-pass

# Pass password via a file (Better for CI/CD pipelines)
ansible-playbook site.yml --vault-password-file ~/.vault_pass.txt</code></pre>
        `
      }
    ],
    practice: [
      { id: "d65_t1", text: "Use <code>ansible-vault create secret.yml</code> to create a file containing a sensitive variable <code>db_pass: supersecret</code>." },
      { id: "d65_t2", text: "Include this file in your playbook using the <code>vars_files:</code> directive." },
      { id: "d65_t3", text: "Add a <code>debug</code> task to print the decrypted variable during execution." },
      { id: "d65_t4", text: "Run the playbook using the <code>--ask-vault-pass</code> flag." }
    ]
  },
  66: {
    title: "Testing Ansible Roles with Molecule",
    sections: [
      {
        title: "🧪 Why Test Infrastructure Code?",
        content: `
          <p>If you write an Ansible role that accidentally deletes a critical directory, applying it directly to staging or production is catastrophic. We need to test IaC just like application code.</p>
        `
      },
      {
        title: "🔬 What is Molecule?",
        content: `
          <p><strong>Molecule</strong> is the standard testing framework for Ansible roles. It automatically:</p>
          <ol>
            <li>Spins up a temporary container or VM (using Docker/Vagrant).</li>
            <li>Runs your Ansible role against that temporary instance.</li>
            <li>Runs a second time to guarantee Idempotency (verifies no tasks report "changed").</li>
            <li>Runs a testing suite (like Testinfra) to verify the server state.</li>
            <li>Destroys the temporary instance.</li>
          </ol>
        `
      },
      {
        title: "⚙️ Molecule Setup",
        content: `
          <p>You initialize Molecule inside an existing role:</p>
          <pre class="lesson-code"><code>cd roles/my_nginx_role
molecule init scenario -d docker</code></pre>
          <p>This creates a <code>molecule/default/</code> directory containing a <code>molecule.yml</code> (configures the Docker test image) and a <code>converge.yml</code> (the playbook that runs the test).</p>
        `
      },
      {
        title: "✅ Running Tests",
        content: `
          <p>To run the entire test suite, simply type:</p>
          <p><code>molecule test</code></p>
        `
      }
    ],
    practice: [
      { id: "d66_t1", text: "Install Molecule and the molecule-docker plugin via <code>pip</code>." },
      { id: "d66_t2", text: "Navigate to the role you created on Day 64 and run <code>molecule init scenario</code>." },
      { id: "d66_t3", text: "Inspect the generated <code>molecule/default/molecule.yml</code> file." },
      { id: "d66_t4", text: "Run <code>molecule test</code> and watch it spin up a Docker container, run your role, and destroy it." }
    ]
  },
  67: {
    title: "IaC Project — Terraform Infra",
    sections: [
      {
        title: "🏗️ Project Overview",
        content: `
          <p>For Phase 5, you will build a complete environment using both Terraform and Ansible.</p>
          <p><strong>Goal 1:</strong> Provision the cloud infrastructure using Terraform.</p>
        `
      },
      {
        title: "☁️ The AWS Architecture",
        content: `
          <p>Write Terraform code to provision the following (use a local hypervisor or mock provider like LocalStack if you don't have AWS):</p>
          <ul>
            <li>A custom VPC with a public subnet.</li>
            <li>An Internet Gateway and Route Table.</li>
            <li>A Security Group allowing port 22 (SSH) and 80 (HTTP).</li>
            <li>An EC2 Instance (Ubuntu) in the public subnet.</li>
            <li>Outputs for the EC2 instance's Public IP.</li>
          </ul>
        `
      },
      {
        title: "🔑 Dynamic SSH Keys",
        content: `
          <p>To allow Ansible to connect to the EC2 instance later, your Terraform code should generate an SSH key pair (<code>tls_private_key</code>), upload the public key to AWS (<code>aws_key_pair</code>), and save the private key locally (<code>local_file</code>).</p>
        `
      }
    ],
    practice: [
      { id: "d67_t1", text: "Write the Terraform modules for the VPC and Security Groups." },
      { id: "d67_t2", text: "Write the Terraform code to generate and store an SSH key pair." },
      { id: "d67_t3", text: "Provision the EC2 instance, attaching the security group and key pair." },
      { id: "d67_t4", text: "Run <code>terraform apply</code> and verify you can manually SSH into the created server." }
    ]
  },
  68: {
    title: "IaC Project — Ansible Config",
    sections: [
      {
        title: "⚙️ Configuration Goal",
        content: `
          <p>Now that Terraform has provisioned the raw server, you will use Ansible to configure it into a production-ready Docker host.</p>
        `
      },
      {
        title: "📜 The Playbook Requirements",
        content: `
          <p>Write an Ansible playbook containing roles to:</p>
          <ol>
            <li>Perform basic server hardening (disable root login, install UFW firewall).</li>
            <li>Install Docker Engine and Docker Compose.</li>
            <li>Add the <code>ubuntu</code> user to the <code>docker</code> group so it can run containers without sudo.</li>
            <li>Deploy a simple web application using <code>docker_compose</code> module (or copying a docker-compose.yml and running it).</li>
          </ol>
        `
      },
      {
        title: "🌍 Dynamic Inventory",
        content: `
          <p>Hardcoding IP addresses in <code>hosts.ini</code> is bad because Terraform generates new IPs every time. Instead, configure Ansible to use the AWS EC2 Dynamic Inventory plugin, which automatically queries the AWS API to find servers based on their Terraform tags.</p>
        `
      }
    ],
    practice: [
      { id: "d68_t1", text: "Write an Ansible role to install and configure Docker." },
      { id: "d68_t2", text: "Write a role to deploy a Docker Compose stack (e.g., Nginx + static HTML)." },
      { id: "d68_t3", text: "Set up the AWS Dynamic Inventory (or use a script to extract the IP from <code>terraform output</code>)." },
      { id: "d68_t4", text: "Run the playbook against your Terraform-provisioned server and verify the web app is live." }
    ]
  },
  69: {
    title: "IaC Project — Integration & State",
    sections: [
      {
        title: "🤝 Tying it Together",
        content: `
          <p>Currently, you have to run Terraform, wait for it to finish, get the IP, and then manually run Ansible. Let's automate the handoff.</p>
        `
      },
      {
        title: "🪝 Terraform Provisioners (The Anti-Pattern)",
        content: `
          <p>You <em>could</em> use a <code>local-exec</code> provisioner in Terraform to run the Ansible command automatically when the EC2 instance is created. However, HashiCorp considers this a last resort. It breaks the declarative model.</p>
        `
      },
      {
        title: "🤖 The CI/CD Approach",
        content: `
          <p>The modern DevOps approach is executing this via a CI/CD pipeline (like GitHub Actions). The pipeline runs Terraform, parses the JSON output for the IP address, and passes that dynamically to the Ansible step.</p>
          <p>For today, write a simple Bash script (<code>deploy.sh</code>) that runs Terraform, extracts the IP, and triggers the Ansible playbook automatically.</p>
        `
      },
      {
        title: "☁️ Securing the State",
        content: `
          <p>Migrate your project's local Terraform state to a remote S3 Backend with DynamoDB locking, simulating a team environment.</p>
        `
      }
    ],
    practice: [
      { id: "d69_t1", text: "Configure an S3 remote backend and DynamoDB lock table for your project." },
      { id: "d69_t2", text: "Run <code>terraform init</code> to migrate the local state to the cloud." },
      { id: "d69_t3", text: "Write a <code>deploy.sh</code> script that chains <code>terraform apply -auto-approve</code> and <code>ansible-playbook</code>." },
      { id: "d69_t4", text: "Test the wrapper script end-to-end." }
    ]
  },
  70: {
    title: "IaC Project — Review & Cleanup",
    sections: [
      {
        title: "🧹 The Power of Destroy",
        content: `
          <p>One of the greatest benefits of IaC is the ability to tear down an entire environment cleanly. If you built this manually, you might forget a Security Group or an Elastic IP, which would incur charges forever.</p>
        `
      },
      {
        title: "📝 Documentation",
        content: `
          <p>A DevOps project is incomplete without documentation. Write a professional <code>README.md</code> detailing:</p>
          <ul>
            <li>Architecture Diagram (text description or image).</li>
            <li>Prerequisites (Terraform, Ansible, AWS CLI).</li>
            <li>Variables required (and how to set them).</li>
            <li>Step-by-step usage instructions.</li>
          </ul>
        `
      },
      {
        title: "🔍 Code Review",
        content: `
          <p>Run linting tools to ensure your code meets industry standards:</p>
          <ul>
            <li><code>terraform fmt</code>: Formats HCL.</li>
            <li><code>tflint</code>: Checks for AWS best practices in Terraform.</li>
            <li><code>ansible-lint</code>: Checks playbooks for idempotency and syntax errors.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d70_t1", text: "Run <code>terraform fmt -recursive</code> to standardize your HCL formatting." },
      { id: "d70_t2", text: "Install and run <code>ansible-lint</code> against your playbooks to fix any warnings." },
      { id: "d70_t3", text: "Write the comprehensive <code>README.md</code> for the project repository." },
      { id: "d70_t4", text: "Run <code>terraform destroy</code> and verify all resources are completely removed from AWS." }
    ]
  },
  71: {
    title: "Monitoring Fundamentals",
    sections: [
      {
        title: "blind Driving Blind",
        content: `
          <p>Deploying an application without monitoring is like driving a car with a blacked-out dashboard. You won't know the engine is overheating until it explodes.</p>
          <p><strong>Observability</strong> is the measure of how well you can understand the internal state of a system based on its external outputs.</p>
        `
      },
      {
        title: "The Three Pillars (MEL)",
        content: `
          <p>Modern observability relies on three primary data types:</p>
          <ul>
            <li><strong>Metrics:</strong> Numerical data over time (e.g., CPU is at 80%, API receives 100 req/sec). Great for alerts.</li>
            <li><strong>Logs:</strong> Discrete events (e.g., User 123 logged in, Database Connection Failed). Great for debugging.</li>
            <li><strong>Traces:</strong> The journey of a single request across multiple microservices. Great for finding bottlenecks.</li>
          </ul>
        `
      },
      {
        title: "The USE Method (For Resources)",
        content: `
          <p>When monitoring infrastructure (servers, disks, network), track these three things:</p>
          <ul>
            <li><strong>Utilization:</strong> % of time the resource was busy doing work.</li>
            <li><strong>Saturation:</strong> The amount of extra work queued up waiting for the resource.</li>
            <li><strong>Errors:</strong> Count of error events.</li>
          </ul>
        `
      },
      {
        title: "The RED Method (For Applications)",
        content: `
          <p>When monitoring applications (APIs, web servers), track these three things:</p>
          <ul>
            <li><strong>Rate:</strong> Requests per second.</li>
            <li><strong>Errors:</strong> Number of failing requests.</li>
            <li><strong>Duration:</strong> How long requests take to process (latency).</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d71_t1", text: "Read the original blog posts by Brendan Gregg on the USE method and Tom Wilkie on the RED method." },
      { id: "d71_t2", text: "Write down what USE metrics you would track for an AWS RDS Database." },
      { id: "d71_t3", text: "Write down what RED metrics you would track for an Nginx reverse proxy." },
      { id: "d71_t4", text: "Review a recent outage you experienced (or read a post-mortem online) and identify which pillar of observability was used to fix it." }
    ]
  },
  72: {
    title: "Prometheus Architecture",
    sections: [
      {
        title: "🔥 What is Prometheus?",
        content: `
          <p>Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. It is the de-facto standard for monitoring in Kubernetes and Cloud Native environments.</p>
          <p>It is a <strong>Time Series Database (TSDB)</strong>, meaning it stores data uniquely indexed by a timestamp.</p>
        `
      },
      {
        title: "🎣 The Pull Model",
        content: `
          <p>Unlike traditional monitoring tools where servers <em>push</em> their data to a central server (e.g., StatsD), Prometheus <em>pulls</em> (scrapes) data from your servers over HTTP.</p>
          <p>Your application exposes a <code>/metrics</code> endpoint, and Prometheus hits that endpoint every 15 seconds to download the current numbers.</p>
        `
      },
      {
        title: "🔌 Exporters",
        content: `
          <p>If you didn't write the software (like Linux, MySQL, Nginx), how do you add a <code>/metrics</code> endpoint to it?</p>
          <p>You run an <strong>Exporter</strong> alongside it. The <strong>Node Exporter</strong> translates Linux kernel metrics (CPU/RAM/Disk) into the Prometheus format. The <strong>MySQL Exporter</strong> connects to the database, runs queries, and exposes the metrics.</p>
        `
      },
      {
        title: "🔎 PromQL (Prometheus Query Language)",
        content: `
          <p>Prometheus uses a functional query language to graph data.</p>
          <pre class="lesson-code"><code># Get current CPU usage
node_cpu_seconds_total

# Get the per-second rate of HTTP 500 errors over the last 5 minutes
rate(http_requests_total{status="500"}[5m])</code></pre>
        `
      }
    ],
    practice: [
      { id: "d72_t1", text: "Run Prometheus locally using Docker (<code>docker run -p 9090:9090 prom/prometheus</code>)." },
      { id: "d72_t2", text: "Run the Node Exporter locally on port 9100." },
      { id: "d72_t3", text: "Update the <code>prometheus.yml</code> config to scrape your local Node Exporter and restart Prometheus." },
      { id: "d72_t4", text: "Access the Prometheus UI (localhost:9090) and execute a PromQL query like <code>up</code> or <code>node_memory_MemFree_bytes</code>." }
    ]
  },
  73: {
    title: "Grafana Dashboards",
    sections: [
      {
        title: "📊 Visualizing Data",
        content: `
          <p>While Prometheus has a basic UI, it is not designed for building beautiful, permanent dashboards. We use <strong>Grafana</strong> for that.</p>
          <p>Grafana connects to Data Sources (like Prometheus, Elasticsearch, or CloudWatch) and visualizes the queries into graphs, gauges, and tables.</p>
        `
      },
      {
        title: "🔗 Adding the Data Source",
        content: `
          <p>The first step in Grafana is configuring Prometheus as a data source. You simply provide the URL (e.g., <code>http://prometheus:9090</code>) and Grafana handles the rest.</p>
        `
      },
      {
        title: "🎨 Panels & Dashboards",
        content: `
          <p>A Dashboard is a collection of Panels. Each Panel executes a specific PromQL query.</p>
          <p>You can create a "Time series" panel for CPU usage, a "Stat" panel for Uptime, and a "Gauge" panel for Disk Space.</p>
        `
      },
      {
        title: "📥 Importing Dashboards",
        content: `
          <p>You don't need to build dashboards from scratch! The open-source community has created thousands of them. You can browse <code>grafana.com/dashboards</code>, find an ID (e.g., <code>1860</code> for the standard Node Exporter Full dashboard), and import it instantly.</p>
        `
      }
    ],
    practice: [
      { id: "d73_t1", text: "Run Grafana locally using Docker (<code>docker run -p 3000:3000 grafana/grafana</code>)." },
      { id: "d73_t2", text: "Log in (admin/admin) and add your local Prometheus instance as a Data Source." },
      { id: "d73_t3", text: "Create a custom dashboard with a single panel tracking <code>node_cpu_seconds_total</code>." },
      { id: "d73_t4", text: "Import the popular Node Exporter Full dashboard (ID 1860) to see a professional layout." }
    ]
  },
  74: {
    title: "Alertmanager & Routing",
    sections: [
      {
        title: "🚨 Nobody Watches Dashboards",
        content: `
          <p>Dashboards are for investigating <em>after</em> an alert fires. If you expect humans to stare at dashboards 24/7 waiting for a line to turn red, your system will fail.</p>
          <p>We need automated alerting.</p>
        `
      },
      {
        title: "📝 Alerting Rules",
        content: `
          <p>Alerts are defined in Prometheus as PromQL queries that return true if a threshold is breached.</p>
          <pre class="lesson-code"><code>groups:
- name: example
  rules:
  - alert: HighCPUUsage
    expr: 100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High CPU on {{ $labels.instance }}"</code></pre>
        `
      },
      {
        title: "🔀 Alertmanager",
        content: `
          <p>When Prometheus detects an alert condition, it fires the alert to a separate service called <strong>Alertmanager</strong>.</p>
          <p>Alertmanager handles deduplication (if 50 servers fail, send 1 alert, not 50), grouping, and routing.</p>
        `
      },
      {
        title: "📞 Receivers",
        content: `
          <p>Alertmanager routes alerts to different Receivers based on labels. For example:</p>
          <ul>
            <li><code>severity=warning</code> ➡️ Send a message to a Slack channel.</li>
            <li><code>severity=critical</code> ➡️ Trigger an automated phone call via PagerDuty to wake up the on-call engineer.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d74_t1", text: "Write an alerting rule file (<code>alerts.yml</code>) that triggers if a mock metric is > 0." },
      { id: "d74_t2", text: "Update your <code>prometheus.yml</code> to load this rules file." },
      { id: "d74_t3", text: "Run Alertmanager locally in Docker." },
      { id: "d74_t4", text: "Configure Alertmanager to route alerts to a free Slack or Discord webhook." }
    ]
  },
  75: {
    title: "Logging with ELK / EFK Stack",
    sections: [
      {
        title: "📜 The Distributed Log Problem",
        content: `
          <p>If you have 50 microservices running across 10 servers, and a user reports an error, you cannot SSH into 10 different servers and run <code>grep</code> on 50 different <code>/var/log</code> files.</p>
          <p>You need a centralized logging solution.</p>
        `
      },
      {
        title: "🪵 The ELK / EFK Stack",
        content: `
          <p>The most popular open-source logging stack consists of three components:</p>
          <ul>
            <li><strong>E (Elasticsearch):</strong> The search engine database that stores the logs and allows rapid text searching.</li>
            <li><strong>F (Fluentd / Fluent Bit) or L (Logstash):</strong> The log shipper. An agent that runs on every server, tails the log files, formats them, and pushes them to Elasticsearch.</li>
            <li><strong>K (Kibana):</strong> The UI dashboard (similar to Grafana but for logs) used to query and visualize the Elasticsearch data.</li>
          </ul>
        `
      },
      {
        title: "🐳 Container Logging",
        content: `
          <p>In Docker and Kubernetes, applications should NOT write logs to a file (like <code>/var/log/app.log</code>). They should write logs to <code>stdout</code> and <code>stderr</code>.</p>
          <p>The container engine intercepts stdout and handles it. The log shipper (Fluentd) then mounts the container engine's log directory and ships it automatically.</p>
        `
      },
      {
        title: "🔄 Log Rotation",
        content: `
          <p>Logs consume massive amounts of disk space. Elasticsearch uses <strong>Index Lifecycle Management (ILM)</strong> to automatically delete logs older than X days, or move them to cheaper, slower storage (like AWS S3).</p>
        `
      }
    ],
    practice: [
      { id: "d75_t1", text: "Write a <code>docker-compose.yml</code> file containing Elasticsearch and Kibana." },
      { id: "d75_t2", text: "Access the Kibana UI and verify it connects to Elasticsearch." },
      { id: "d75_t3", text: "Write a small python or bash script that prints a log line to stdout every 2 seconds." },
      { id: "d75_t4", text: "Configure a Fluent Bit container to read that script's logs and ship them to Elasticsearch." }
    ]
  },
  76: {
    title: "Log Parsing & Grok",
    sections: [
      {
        title: "📝 Unstructured vs Structured Logs",
        content: `
          <p>Unstructured Log (Text):</p>
          <pre class="lesson-code"><code>192.168.1.1 - - [10/Oct/2023:13:55:36 -0700] "GET /api/users HTTP/1.1" 200 2326</code></pre>
          <p>Structured Log (JSON):</p>
          <pre class="lesson-code"><code>{"ip": "192.168.1.1", "path": "/api/users", "status": 200, "bytes": 2326}</code></pre>
          <p>Elasticsearch is vastly more powerful when logs are structured. You can build a graph of "Top 10 IP Addresses" or filter by "status == 500".</p>
        `
      },
      {
        title: "🛠️ The Goal: Log in JSON",
        content: `
          <p>The absolute best practice is configuring your application code (Python, Node, Java) to output logs natively in JSON format. This completely bypasses the need for complex parsing.</p>
        `
      },
      {
        title: "🧩 Parsing with Grok",
        content: `
          <p>If you cannot change the application output (e.g., standard Nginx or Apache logs), your log shipper (Fluentd/Logstash) must parse the raw text into JSON before sending it to Elasticsearch.</p>
          <p><strong>Grok</strong> is a pattern-matching language based on Regular Expressions used specifically for parsing logs.</p>
        `
      },
      {
        title: "📖 Grok Patterns",
        content: `
          <p>Grok works by mapping predefined regex patterns to field names: <code>%{PATTERN:field_name}</code></p>
          <pre class="lesson-code"><code># Parsing an IP address
%{IPORHOST:client_ip} - - \[%{HTTPDATE:timestamp}\] "%{WORD:http_method} %{URIPATH:request} HTTP/%{NUMBER:http_version}" %{NUMBER:response_code}</code></pre>
        `
      }
    ],
    practice: [
      { id: "d76_t1", text: "Find a sample Nginx <code>access.log</code> file online." },
      { id: "d76_t2", text: "Use the online Grok Debugger (grokdebug.herokuapp.com) to test standard Grok patterns against a log line." },
      { id: "d76_t3", text: "Configure a Fluent Bit parser block using Regex/Grok to parse the Nginx logs." },
      { id: "d76_t4", text: "Verify the logs appear as structured, searchable fields inside Kibana." }
    ]
  },
  77: {
    title: "Distributed Tracing (Jaeger)",
    sections: [
      {
        title: "🕵️ The Microservice Mystery",
        content: `
          <p>In a monolith, if a request takes 5 seconds, you can easily profile the code to see why. In microservices, the Frontend calls the User-API, which calls the Auth-API and the Database. If the request takes 5 seconds... whose fault is it?</p>
        `
      },
      {
        title: "🧵 Distributed Tracing",
        content: `
          <p>Tracing solves this by generating a unique <strong>Trace ID</strong> the moment a request hits the system. This ID is passed in the HTTP Headers to every subsequent downstream service.</p>
          <p>Each service generates a <strong>Span</strong> (timing data for its specific chunk of work) tagged with the Trace ID.</p>
        `
      },
      {
        title: "📊 Jaeger & OpenTelemetry",
        content: `
          <p><strong>Jaeger</strong> is a popular open-source UI for visualizing these traces. It displays a waterfall chart (like the Chrome Network tab) showing exactly how long each microservice took to respond.</p>
          <p><strong>OpenTelemetry</strong> is the modern standard SDK used by developers to instrument their code to generate these Spans and send them to Jaeger.</p>
        `
      },
      {
        title: "💉 Auto-Instrumentation",
        content: `
          <p>Adding tracing code manually to every function is tedious. Many languages (like Java, Python, Node) support <em>Auto-Instrumentation</em>, where an agent wraps your HTTP and Database libraries automatically to generate spans without changing your code.</p>
        `
      }
    ],
    practice: [
      { id: "d77_t1", text: "Run Jaeger locally using the 'all-in-one' Docker image." },
      { id: "d77_t2", text: "Access the Jaeger UI on port 16686." },
      { id: "d77_t3", text: "Write a small Node.js or Python app and install the OpenTelemetry SDK." },
      { id: "d77_t4", text: "Configure the SDK to send traces to Jaeger and visualize a request in the UI." }
    ]
  },
  78: {
    title: "Prometheus Operator in K8s",
    sections: [
      {
        title: "⚙️ The K8s Monitoring Problem",
        content: `
          <p>Configuring Prometheus manually with <code>prometheus.yml</code> is fine for static EC2 instances. But in Kubernetes, pods are constantly dying, changing IPs, and scaling. Prometheus needs to dynamically discover targets.</p>
        `
      },
      {
        title: "🤖 The Operator Pattern",
        content: `
          <p>An <strong>Operator</strong> is a Kubernetes controller that manages complex applications. Instead of managing Prometheus configuration files directly, you deploy the Prometheus Operator.</p>
        `
      },
      {
        title: "🎛️ Custom Resource Definitions (CRDs)",
        content: `
          <p>The Operator installs new custom object types into K8s. You can now write a <code>ServiceMonitor</code> YAML file, which tells the Operator: "Find any pods labeled 'app=frontend' and instruct Prometheus to scrape them."</p>
          <pre class="lesson-code"><code>apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: frontend-monitor
spec:
  selector:
    matchLabels:
      app: frontend
  endpoints:
  - port: web</code></pre>
        `
      },
      {
        title: "📦 kube-prometheus-stack",
        content: `
          <p>The industry standard way to deploy this is the <code>kube-prometheus-stack</code> Helm chart. With one command, it installs Prometheus, the Operator, Alertmanager, Grafana, Node Exporters, and dozens of pre-configured dashboards for K8s health.</p>
        `
      }
    ],
    practice: [
      { id: "d78_t1", text: "Start your local <code>minikube</code> or <code>kind</code> cluster." },
      { id: "d78_t2", text: "Install the <code>kube-prometheus-stack</code> using Helm." },
      { id: "d78_t3", text: "Port-forward the Grafana service and log in. Review the pre-installed Kubernetes dashboards." },
      { id: "d78_t4", text: "Deploy an Nginx pod with a Service, and write a <code>ServiceMonitor</code> to scrape it automatically." }
    ]
  },
  79: {
    title: "Custom Metrics API",
    sections: [
      {
        title: "📐 Beyond CPU and Memory",
        content: `
          <p>CPU usage tells you the server is busy, but it doesn't tell you <em>why</em>. You need <strong>Custom Application Metrics</strong>.</p>
          <p>Examples: <code>orders_processed_total</code>, <code>active_websocket_connections</code>, <code>payment_gateway_latency_seconds</code>.</p>
        `
      },
      {
        title: "🛠️ Instrumenting Your Code",
        content: `
          <p>Developers use Prometheus client libraries (available in Go, Python, Node, Java) to expose these metrics at the <code>/metrics</code> endpoint.</p>
          <pre class="lesson-code"><code>// Node.js Example using prom-client
const prom = require('prom-client');
const counter = new prom.Counter({
  name: 'items_sold_total',
  help: 'Total number of items sold'
});

app.post('/buy', (req, res) => {
  counter.inc(); // Increment the metric
  res.send('Purchased!');
});</code></pre>
        `
      },
      {
        title: "📏 Metric Types",
        content: `
          <ul>
            <li><strong>Counter:</strong> A number that only goes up (e.g., total HTTP requests). Good for calculating <code>rate()</code>.</li>
            <li><strong>Gauge:</strong> A number that can go up or down (e.g., current active users, queue length).</li>
            <li><strong>Histogram:</strong> Samples observations and puts them into buckets (e.g., request latency). Used to calculate percentiles like P99.</li>
          </ul>
        `
      }
    ],
    practice: [
      { id: "d79_t1", text: "Create a simple Express/Flask/Go web server." },
      { id: "d79_t2", text: "Import a Prometheus client library and expose a <code>/metrics</code> endpoint." },
      { id: "d79_t3", text: "Add a Counter metric that increments every time a specific route is hit." },
      { id: "d79_t4", text: "Scrape this application with your local Prometheus and visualize the custom metric in Grafana." }
    ]
  },
  80: {
    title: "Monitoring Project",
    sections: [
      {
        title: "🏗️ Project Overview",
        content: `
          <p>For Phase 6, you will integrate a complete Observability stack into the environment you built in Phase 5 (Terraform/Ansible) or Phase 4 (Kubernetes).</p>
        `
      },
      {
        title: "📈 The Metrics Requirement",
        content: `
          <p>Deploy Prometheus and Grafana. Ensure that Node Exporter (or kube-state-metrics) is running and reporting the host-level CPU and memory.</p>
          <p>Build a Grafana dashboard that shows the RED metrics (Rate, Errors, Duration) for your application, and the USE metrics for your host/cluster.</p>
        `
      },
      {
        title: "🚨 The Alerting Requirement",
        content: `
          <p>Configure Alertmanager with a routing rule that sends a message to a free Slack or Discord channel. Write an alerting rule that triggers when the host CPU exceeds 80% for 1 minute. Trigger the alert using a load testing tool or a stress script.</p>
        `
      },
      {
        title: "🪵 The Logging Requirement",
        content: `
          <p>Deploy a lightweight logging stack (like Loki + Promtail, or EFK). Ensure the application logs from your containers are visible and searchable in Grafana (Loki) or Kibana.</p>
        `
      }
    ],
    practice: [
      { id: "d80_t1", text: "Update your IaC to provision the monitoring stack alongside your application." },
      { id: "d80_t2", text: "Build the custom Grafana Dashboard and export the JSON to store in your Git repository." },
      { id: "d80_t3", text: "Test the Slack/Discord alerting pipeline by intentionally triggering a failure." },
      { id: "d80_t4", text: "Document the monitoring architecture, dashboard access URLs, and alert routing logic in your README." }
    ]
  },
  81: {
    title: "DevSecOps & Shift Left",
    sections: [
      {
        title: "🛡️ What is DevSecOps?",
        content: `
          <p>Historically, security was an afterthought. The app was built, deployed, and <em>then</em> a security team ran penetration tests. If a vulnerability was found, the app was sent back to developers, causing massive delays.</p>
          <p><strong>DevSecOps</strong> integrates security practices directly into the DevOps pipeline. We "Shift Left"—moving security testing to the earliest possible stages of the software development lifecycle (SDLC).</p>
        `
      },
      {
        title: "🔍 SAST (Static Application Security Testing)",
        content: `
          <p>SAST analyzes the raw source code for vulnerabilities (like SQL injection or hardcoded passwords) <strong>without running the app</strong>. It runs on every pull request.</p>
          <p>Tools: SonarQube, GitHub Advanced Security, Bandit (Python).</p>
        `
      },
      {
        title: "🦠 DAST (Dynamic Application Security Testing)",
        content: `
          <p>DAST tests a running application from the outside. It attempts to hack the app (e.g., sending malicious payloads to APIs) to find vulnerabilities that only appear at runtime.</p>
          <p>Tools: OWASP ZAP, Burp Suite.</p>
        `
      },
      {
        title: "📦 SCA (Software Composition Analysis)",
        content: `
          <p>90% of modern applications are open-source libraries. SCA scans your <code>package.json</code> or <code>requirements.txt</code> against databases of known CVEs (Common Vulnerabilities and Exposures).</p>
          <p>Tools: Trivy, Snyk, Dependabot.</p>
        `
      }
    ],
    practice: [
      { id: "d81_t1", text: "Integrate a free SAST tool (like SonarCloud or GitHub CodeQL) into an existing GitHub repository." },
      { id: "d81_t2", text: "Run Trivy against one of your custom Docker images to generate an SCA vulnerability report." },
      { id: "d81_t3", text: "Intentionally hardcode a fake AWS access key in your code and verify your SAST tool blocks the commit/PR." },
      { id: "d81_t4", text: "Download OWASP ZAP and run an automated scan against a local web application." }
    ]
  },
  82: {
    title: "Secrets Management (Vault)",
    sections: [
      {
        title: "🛑 The Hardcoding Problem",
        content: `
          <p>Putting passwords in code is terrible. Putting them in plain text config files is slightly better. Injecting them as environment variables (12-Factor App) is good, but where do the variables come from? Often, they are still stored in a CI/CD system or Terraform state file.</p>
        `
      },
      {
        title: "🏦 HashiCorp Vault",
        content: `
          <p><strong>Vault</strong> is the industry standard for managing secrets. It is a highly secure, centralized server that stores and controls access to tokens, passwords, certificates, and encryption keys.</p>
        `
      },
      {
        title: "🔑 Dynamic Secrets",
        content: `
          <p>Vault's superpower is Dynamic Secrets. Instead of giving your application a permanent database password, the app requests a password from Vault. Vault dynamically creates a temporary database user with a 1-hour expiration, gives the password to the app, and automatically deletes the user an hour later.</p>
          <p>If the password is leaked, it is useless shortly after.</p>
        `
      },
      {
        title: "🤝 Authentication Methods",
        content: `
          <p>How does the application prove to Vault who it is? Vault supports many auth methods, including Kubernetes ServiceAccounts, AWS IAM roles, and GitHub tokens.</p>
        `
      }
    ],
    practice: [
      { id: "d82_t1", text: "Run HashiCorp Vault locally in 'dev mode' using Docker." },
      { id: "d82_t2", text: "Use the Vault CLI to write a static secret (e.g., <code>vault kv put secret/myapp db_pass=1234</code>)." },
      { id: "d82_t3", text: "Read the secret back using the CLI or a simple Python script." },
      { id: "d82_t4", text: "Research how the Vault Kubernetes injector automatically populates secrets into Pods via sidecar containers." }
    ]
  },
  83: {
    title: "Service Mesh (Istio/Linkerd)",
    sections: [
      {
        title: "🕸️ Beyond Kubernetes Networking",
        content: `
          <p>Kubernetes Services handle basic load balancing. But in an architecture with 100 microservices, you face new problems:</p>
          <ul>
            <li>How do we encrypt traffic <em>between</em> pods (mTLS)?</li>
            <li>How do we automatically retry failed requests?</li>
            <li>How do we route 10% of traffic to a new "v2" pod (Canary Release)?</li>
          </ul>
        `
      },
      {
        title: "🦸 The Sidecar Proxy",
        content: `
          <p>A <strong>Service Mesh</strong> solves this without changing your application code. It automatically injects a lightweight proxy (like Envoy) into every single Pod as a "sidecar" container.</p>
          <p>Your application container thinks it's talking to the network, but it's actually talking to the Envoy proxy. The proxy handles the encryption, retries, and routing.</p>
        `
      },
      {
        title: "🔒 Mutual TLS (mTLS)",
        content: `
          <p>The mesh automatically provisions SSL certificates for every pod. When Pod A talks to Pod B, the Envoy proxies establish an encrypted mTLS tunnel. The application code remains completely unaware.</p>
        `
      },
      {
        title: "🚦 Traffic Splitting (Canary)",
        content: `
          <p>Using a VirtualService (Istio), you can easily implement advanced deployment strategies. "Send 90% of traffic to v1, and 10% to v2."</p>
        `
      }
    ],
    practice: [
      { id: "d83_t1", text: "Install a lightweight Service Mesh (like Linkerd or Istio) onto a local Kubernetes cluster." },
      { id: "d83_t2", text: "Deploy two basic microservices and 'mesh' them (inject the sidecar proxies)." },
      { id: "d83_t3", text: "Use the mesh's dashboard (e.g., Kiali for Istio) to visualize the traffic graph between your pods." },
      { id: "d83_t4", text: "Configure a traffic split rule routing 50% of traffic to a new version of one of the services." }
    ]
  },
  84: {
    title: "GitOps with ArgoCD",
    sections: [
      {
        title: "🚫 The CI/CD Push Problem",
        content: `
          <p>In traditional CI/CD, your pipeline builds a Docker image, changes the Kubernetes YAML, and runs <code>kubectl apply</code> (Push approach). This means your CI server needs cluster admin credentials, which is a massive security risk.</p>
        `
      },
      {
        title: "🔄 The GitOps Pull Model",
        content: `
          <p><strong>GitOps</strong> reverses this. You store your entire Kubernetes desired state (YAML/Helm) in a Git repository. A software agent runs <em>inside</em> your Kubernetes cluster and continuously monitors that Git repository.</p>
          <p>When you merge a PR changing the replica count from 3 to 5, the agent (e.g., ArgoCD) detects the change in Git and <em>pulls</em> the configuration into the cluster automatically.</p>
        `
      },
      {
        title: "🐙 ArgoCD",
        content: `
          <p>ArgoCD is the most popular GitOps tool for Kubernetes. It provides a visual dashboard showing the sync status between your Git repo (the source of truth) and your live cluster.</p>
        `
      },
      {
        title: "🛡️ Drift Reconciliation",
        content: `
          <p>If a developer manually runs <code>kubectl delete deployment</code> (causing configuration drift), ArgoCD notices the cluster no longer matches Git. It instantly recreates the deployment to restore the desired state.</p>
        `
      }
    ],
    practice: [
      { id: "d84_t1", text: "Install ArgoCD on your local Kubernetes cluster." },
      { id: "d84_t2", text: "Create a new Git repository containing a simple Kubernetes Deployment YAML." },
      { id: "d84_t3", text: "Configure an ArgoCD Application to point to that repository and sync it." },
      { id: "d84_t4", text: "Manually delete a pod using <code>kubectl</code> and watch ArgoCD immediately recreate it to maintain the Git state." }
    ]
  },
  85: {
    title: "Serverless Functions",
    sections: [
      {
        title: "☁️ No Servers to Manage",
        content: `
          <p>Kubernetes is powerful, but you still have to manage the cluster. <strong>Serverless</strong> computing (FaaS - Functions as a Service) abstracts away the infrastructure entirely.</p>
          <p>You write a snippet of code (a function), upload it, and the cloud provider (AWS Lambda, Google Cloud Functions) runs it on demand.</p>
        `
      },
      {
        title: "⚡ Event-Driven Architecture",
        content: `
          <p>Serverless functions are inherently event-driven. They sleep (costing $0) until an event wakes them up.</p>
          <p>Examples: An HTTP request hits an API Gateway, a file is uploaded to an S3 bucket, or a message arrives in an SQS queue.</p>
        `
      },
      {
        title: "💰 The Economics of Serverless",
        content: `
          <p>You pay strictly for the compute time consumed (measured in milliseconds) and memory used. This is incredibly cost-effective for spiky, unpredictable workloads, but can be expensive for consistent 24/7 high-traffic apps.</p>
        `
      },
      {
        title: "🧊 Cold Starts",
        content: `
          <p>When a function hasn't been called in a while, the cloud provider spins down the container. The next request must wait for the container to boot up and the language runtime to load. This delay (hundreds of milliseconds) is called a <strong>Cold Start</strong>.</p>
        `
      }
    ],
    practice: [
      { id: "d85_t1", text: "Write a simple 'Hello World' Python or Node.js function." },
      { id: "d85_t2", text: "Deploy it to AWS Lambda (or use a local framework like OpenFaaS or LocalStack)." },
      { id: "d85_t3", text: "Configure an API Gateway trigger so you can execute the function via a public HTTP endpoint." },
      { id: "d85_t4", text: "Review the CloudWatch logs to see the execution duration and memory consumption of your function." }
    ]
  },
  86: {
    title: "Capstone Project — Design",
    sections: [
      {
        title: "🏆 The Final Challenge",
        content: `
          <p>Days 86-89 are dedicated to your Capstone Project. This is a comprehensive, resume-worthy project that integrates all the pillars of DevOps: Linux, Networking, Git, Containers, CI/CD, IaC, and Observability.</p>
        `
      },
      {
        title: "📐 The Architecture",
        content: `
          <p>You must architect a production-ready system for a sample multi-tier application (e.g., a React frontend, a Node/Python backend, and a PostgreSQL database or Redis cache).</p>
        `
      },
      {
        title: "📝 Requirements Gathering",
        content: `
          <p>Your design must include:</p>
          <ul>
            <li>High Availability (multi-AZ or multi-node).</li>
            <li>Security (Private subnets for databases, TLS termination).</li>
            <li>Scalability (Horizontal scaling for the stateless tiers).</li>
            <li>Automated deployments (CI/CD or GitOps).</li>
          </ul>
        `
      },
      {
        title: "🎨 Diagramming",
        content: `
          <p>Before writing a single line of code, you must draw the architecture. Use tools like Draw.io, Excalidraw, or Lucidchart to visualize the VPC, subnets, clusters, CI/CD flow, and monitoring stack.</p>
        `
      }
    ],
    practice: [
      { id: "d86_t1", text: "Select a sample microservices application (e.g., Google's Online Boutique or a custom app)." },
      { id: "d86_t2", text: "Write a technical design document outlining the infrastructure requirements." },
      { id: "d86_t3", text: "Create a detailed architecture diagram showing the network layout and traffic flow." },
      { id: "d86_t4", text: "Create a CI/CD workflow diagram showing the path from a Git commit to production." }
    ]
  },
  87: {
    title: "Capstone Project — IaC & Config",
    sections: [
      {
        title: "🏗️ Provisioning the Foundation",
        content: `
          <p>Translate your architecture diagram into Terraform code. Build the networking infrastructure (VPC, Subnets, Gateways) and the compute platform (EKS/AKS/GKE cluster or EC2 Auto Scaling Groups).</p>
        `
      },
      {
        title: "⚙️ Configuration Management",
        content: `
          <p>If you are using VMs, write Ansible playbooks to configure the golden images. If you are using Kubernetes, prepare the Helm charts or Kustomize manifests required to deploy the application stack.</p>
        `
      },
      {
        title: "🔒 Security Implementation",
        content: `
          <p>Ensure your Terraform code adheres to the principle of least privilege. Implement strict Security Groups (or Network Policies) and IAM roles.</p>
        `
      }
    ],
    practice: [
      { id: "d87_t1", text: "Write the Terraform modules for the core network." },
      { id: "d87_t2", text: "Write the Terraform code to provision the Kubernetes cluster (or VM cluster)." },
      { id: "d87_t3", text: "Configure a remote backend (S3/DynamoDB) for your Terraform state." },
      { id: "d87_t4", text: "Apply the Terraform code and verify the infrastructure is created successfully." }
    ]
  },
  88: {
    title: "Capstone Project — CI/CD Pipeline",
    sections: [
      {
        title: "🤖 Automating the Build",
        content: `
          <p>Create a GitHub Actions workflow (or GitLab CI pipeline) for the application source code.</p>
          <p>The pipeline should: Lint the code, run unit tests, build a Docker image, run a SAST/SCA scan (e.g., Trivy), and push the image to a container registry.</p>
        `
      },
      {
        title: "🚀 Automating the Deployment",
        content: `
          <p>Choose your deployment strategy. You can either add a CD step to your pipeline to run <code>kubectl apply</code> or <code>helm upgrade</code> (Push), OR set up ArgoCD in your cluster to monitor the repository (Pull/GitOps).</p>
        `
      },
      {
        title: "🔑 Managing Secrets",
        content: `
          <p>Ensure no secrets are hardcoded in the pipeline. Use GitHub Secrets (or integrate with Vault) to securely pass registry credentials and database passwords to the deployment environment.</p>
        `
      }
    ],
    practice: [
      { id: "d88_t1", text: "Write the CI pipeline YAML to build, test, and scan the Docker image." },
      { id: "d88_t2", text: "Configure the deployment mechanism (CD pipeline or ArgoCD)." },
      { id: "d88_t3", text: "Commit a small code change to the application and watch the pipeline automatically deploy it." },
      { id: "d88_t4", text: "Verify the new version is live and serving traffic correctly." }
    ]
  },
  89: {
    title: "Capstone Project — Observability",
    sections: [
      {
        title: "👁️ Lighting up the Dashboard",
        content: `
          <p>A system isn't production-ready until you can monitor it. Deploy your observability stack (Prometheus, Grafana, and an EFK/Loki stack) into the new environment.</p>
        `
      },
      {
        title: "📊 Creating the Single Pane of Glass",
        content: `
          <p>Build a unified Grafana dashboard for the capstone project. It should display infrastructure health (CPU/Memory), application RED metrics, and a panel showing recent error logs.</p>
        `
      },
      {
        title: "🚨 Alerting Configuration",
        content: `
          <p>Configure Alertmanager to fire a critical alert to a chat channel if the application goes down (e.g., Blackbox exporter probing the URL, or HTTP 5xx errors spiking).</p>
        `
      }
    ],
    practice: [
      { id: "d89_t1", text: "Deploy the Prometheus/Grafana stack into your capstone environment." },
      { id: "d89_t2", text: "Build and document your comprehensive custom dashboard." },
      { id: "d89_t3", text: "Intentionally break the application (e.g., scale deployment to 0 or block database port)." },
      { id: "d89_t4", text: "Verify the alert fires to your configured notification channel, then fix the issue." }
    ]
  },
  90: {
    title: "The DevOps Interview",
    sections: [
      {
        title: "🎉 You Made It!",
        content: `
          <p>Congratulations! You have completed the 90 Days of DevOps curriculum. You now have a solid understanding of Linux, Networking, Git, CI/CD, Containers, IaC, and Observability.</p>
          <p>The final step is translating this knowledge into a career.</p>
        `
      },
      {
        title: "📄 The DevOps Resume",
        content: `
          <p>Your resume should focus on <strong>impact</strong> and <strong>toolchains</strong>. Don't just list "Used Terraform." Write: "Architected highly available AWS infrastructure using Terraform, reducing deployment time by 40%."</p>
          <p>Highlight your Capstone Project prominently. A link to a well-documented GitHub repo is worth more than a certification.</p>
        `
      },
      {
        title: "🗣️ Behavioral & Scenario Questions",
        content: `
          <p>DevOps interviews heavily feature troubleshooting scenarios. (e.g., "A developer complains the website is slow. Walk me through your debugging process.")</p>
          <p>Always start from the bottom up (Network -> OS -> App) or top down (DNS -> Load Balancer -> Pod). Ask clarifying questions before jumping to conclusions.</p>
        `
      },
      {
        title: "📚 Continuous Learning",
        content: `
          <p>DevOps is not a destination, it is a continuous journey. The tools will change (Docker might be replaced, Kubernetes might evolve), but the core principles of automation, collaboration, and observability will remain.</p>
        `
      }
    ],
    practice: [
      { id: "d90_t1", text: "Update your resume/LinkedIn with the tools and concepts learned in this course." },
      { id: "d90_t2", text: "Ensure your Capstone Project repository is public, clean, and has an excellent README." },
      { id: "d90_t3", text: "Practice answering standard DevOps interview questions (e.g., What happens when you type google.com in your browser?)." },
      { id: "d90_t4", text: "Celebrate your achievement! Take a break, and then start applying for roles." }
    ]
  }
};
