
// Store all benchmarks in a map grouped by their group name
const benchmarkGroups = new Map<string, Deno.BenchDefinition[]>();

// Register a benchmark function
export function registerBenchmark(options: Deno.BenchDefinition) {
  const group = options.group;

  if (!group) return;

  if (!benchmarkGroups.has(group)) {
    console.log('registered: ', group)
    benchmarkGroups.set(group, []);
  }

  benchmarkGroups.get(group)!.push(options);
}

export function runBenchmarks() {
  console.log(benchmarkGroups)
  // for (const [group, benchmarks] of benchmarkGroups) {
  //   console.log(`\nRunning benchmark group: ${group}`);

  //   // Create a combined benchmark for this group
  //   // Deno.bench({
  //   //   group,
  //   //   only: true, // Only run benchmarks from this group
  //   //   fn() {
  //   //     for (const benchmark of benchmarks) {
  //   //       Deno.bench({
  //   //         name: benchmark.name,
  //   //         group: benchmark.group,
  //   //         fn: benchmark.fn,
  //   //       });
  //   //     }
  //   //   },
  //   // });
  // }
}