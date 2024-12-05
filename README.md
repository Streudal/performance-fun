# Performance Fun
Welcome to the thunderdome of performance! This repo will host all of our good, bad, and ugly code. The goal of this repo is to write the most performant code you can write all while learning eachothers mistakes... everyone will make them.

In all seriousness, this is all about learning Deno and having some fun with the new JS runtime. It has loads of things built in that Node doesn't (linter, benchmarking, test runners, supports TypeScript directly, Jupyter, etc.) and is backwards compatible with npm. So use the entire npm ecosystem to your advantage, if you think it will help 🙃. 

## Setup 
1. Install [Deno](https://docs.deno.com/runtime/).
2. Install the Deno extension by denoland (VSCode or Cursor IDEs).
3. Clone this repo (if you haven't already).
4. Go to your files and code away!


## Rules
1. Only TypeScript is allowed! (none of that Python and SQL nonsense)
2. Don't delete anyone elses code (edit your files only)!
3. Use any third-party package your ❤️ desires.
4. AI is allowed.
5. Have fun!!!


## Deno CLI 
Check out the deno cli [docs](https://docs.deno.com/runtime/reference/cli/) for all subcommands and information.

These are some common commands you will use:
- `deno`: Starts the runtime in terminal (equivalent of running `node` in the terminal).
- `deno add <package_name>`: Add a dependency. (equivalent to `npm install <package_name>`).
- `deno install`: Install dependencies or a script (equivalent to `npm install`).
- `deno uninstall <package_name>`: Uninstall dependencies or a script (equivalent to `npm uninstall <package_name>`).
- `deno task <task_name>`: Run a task from the **deno.json** file. (equivalent to running `npm run <script>` from a **package.json** file in node projects).
- `deno run <filename, script, or task_name>`: Bascially same as `deno task <task_name>` but more versatile.
- `deno bench`: Run benchmark tool against specified file; runs all defined Deno.bench methods.

### Differences compared to Node
- **Package Registries**: Deno has it's own package registry as well called [jsr](https://jsr.io/). Meant to be a replacement/alternative to [npm](https://www.npmjs.com/) that supports JavaScript/TypeScript directly.
- **Installing Packages**: When installing a package, you might need to prefix it with `npm:` or `jsr:` (i.e: `deno add npm:remeda`) so it knows which registry to get the package from. I think Deno still supports direct URLs to source code but I'm not sure.
