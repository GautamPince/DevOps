/* ============================================================
   CONTENT.JS — Rich Mentor-style Lesson Content & Practice Tasks
   ============================================================ */

const DAY_CONTENT = {
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
  }
};
