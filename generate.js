const { glob } = require("glob");

async function generate() {
  const mdFiles = await glob("docs/javascript/**/*.md", {
    ignore: "node_modules/**",
  });

  const res = mdFiles
    .map((f) => {
      const fileName = f.split("/").at(-1);
      const newFileName = fileName.replaceAll("_", " ");
      const item = `- [${newFileName}](${f})`;
      return item.replaceAll("docs/", "").replaceAll(".md]", "]");
    })
    .sort();

  console.log(res);
}

generate();
