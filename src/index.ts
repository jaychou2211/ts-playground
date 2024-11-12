function calculateTotal(books: string): number {
  let bookList = books.split('');
  // 書名 對應 計數的 map
  let counter: Record<string, number> = {};
  bookList.forEach(book => (counter[book] = (counter[book] ?? 0) + 1));

  // 相異本數 對應 折扣的 map
  let discount = {
    2: 0.9,
    3: 0.85,
    4: 0.8,
    5: 0.7
  }

  let total = 0;
  while (true) {
    // 這一輪的相異本數
    let count = 0;
    // 這一輪的書名列表
    let bookSet = [];
    for (const book in counter) {
      if (counter[book] > 0) {
        counter[book]--;
        count++;
        bookSet.push(book);
      }
      if (count === 5) break;
    }
    if (count === 0) break;
    const discountRate = discount[count as keyof typeof discount] ?? 1;
    const fee = count * 100 * discountRate;
    console.dir({ count, bookSet: bookSet.join(''), discountRate, fee });
    total += fee;
  }
  return total;
}


// test cases
const testCases = [
  'AAB',
  'ABAB',
  'ABABACDEF',
  'ABCDE',
  'AAAAA'
];
for (const testCase of testCases) {
  console.log(testCase);
  console.log(calculateTotal(testCase));
  console.log('--------------------------------');
}
