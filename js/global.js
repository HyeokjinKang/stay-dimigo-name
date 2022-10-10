const alphabet = "ABCDEFGHIJKLMN";
for (let i = 0; i < alphabet.length; i++) {
  let letter = alphabet[i];
  for (let j = 1; j <= 18; j++) {
    console.log(`${letter}, ${j}`);
    let num = document.getElementById(`Z${letter}${j}`).innerText;
    if (/^\d{4}$/.test(num)) {
      document.getElementById(`Z${letter}${j}`).innerText = students[num];
    }
  }
}
