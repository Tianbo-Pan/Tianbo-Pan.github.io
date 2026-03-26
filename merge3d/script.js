const copyButton = document.getElementById("copy-bibtex");
const bibtexBlock = document.getElementById("bibtex-block");

if (copyButton && bibtexBlock) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent);
      const original = copyButton.textContent;
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = original;
      }, 1400);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1400);
    }
  });
}
