const args = process.argv;

if (args.length > 2) {
  for (let i = 2; i < args.length; i++) {
    if (args[i] >= 0 && !isNaN(args[i])) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, args[i] * 1000);
    }
  }
}