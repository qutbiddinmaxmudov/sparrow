const tetris: HTMLImageElement | null = document.querySelector(".tetris");

function startTetris() {
  const header = document.querySelector(".header");
  const headerTetrisBlock = document.createElement("div");
  headerTetrisBlock.classList.add("header__tetris-block");
  header.append(headerTetrisBlock);

  const createBlock = () => {
    const blockType = "images/tetris/" + random(10, 0) + ".webp";
    const blockPosition = random(100, 0);
    const block = document.createElement("img");
    block.classList.add("tetris__block");
    block.setAttribute("src", blockType);
    block.style.left = blockPosition + "%";
    header.append(block);
    setTimeout(() => (block.style.bottom = "-150px"), 1000);
    setTimeout(() => block.remove(), 15000);
    setTimeout(() => createBlock(), 5000);
  };

  createBlock();
}

try {
  if (tetris) startTetris();
} catch (error) {
  console.dir(error);
}
