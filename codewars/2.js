function order(words) {
  // ...
  if (!words) {
    return "";
  }

  const dsdfsdf = words.split(" ");

  const ssdfse = dsdfsdf.map((d) => {
    arr = d.split("");

    let index = null;

    arr.forEach((i) => {
      if (Number(i)) {
        index = Number(i);
      }
    });

    return { index, arr };
  });

  ssdfse.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }

    if (a.index < b.index) {
      return -1;
    }

    return 0;
  });

  const sdfsdfwer = ssdfse.map((rofl) => {
    return rofl.arr.join("");
  });

  return sdfsdfwer.join(" ");
}

order("is2 Thi1s T4est 3a");
