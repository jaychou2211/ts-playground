## `for...of` 和 `for...in` 的主要區別：

### for...of
- 主要用於遍歷**可迭代對象**（Iterable objects）
- 適用對象：
  - Array（數組）
  - String（字符串）
  - Map
  - Set
  - TypedArray
  - arguments 對象
  - NodeList 等
- 返回的是**值**本身

例如：
```javascript
const arr = ['a', 'b', 'c'];
for (const value of arr) {
    console.log(value); // 輸出: 'a', 'b', 'c'
}
```

### for...in
- 主要用於遍歷對象的**可枚舉屬性**
- 適用對象：
  - Object（對象）
  - Array（數組，但不推薦）
- 返回的是**鍵名**（key）或索引
- 會遍歷原型鏈上的屬性

例如：
```javascript
const obj = {name: '張三', age: 25};
for (const key in obj) {
    console.log(key); // 輸出: 'name', 'age'
    console.log(obj[key]); // 輸出: '張三', 25
}
```

### 使用建議
1. 遍歷數組時：
   - 優先使用 `for...of`
   - 避免使用 `for...in`（因為可能會遍歷到額外的屬性）

2. 遍歷對象時：
   - 使用 `for...in`
   - 如果需要遍歷對象的值，可以使用：
     - `Object.keys()`
     - `Object.values()`
     - `Object.entries()`

3. 需要索引時：
   - 數組可以使用 `Array.prototype.forEach()` 或普通的 `for` 循環
   - 或使用 `for...of` 配合 `entries()`：
```javascript
const arr = ['a', 'b', 'c'];
for (const [index, value] of arr.entries()) {
    console.log(index, value); // 輸出: 0 'a', 1 'b', 2 'c'
}
```
# TypeScript 專案設置流程 (使用 tsx)

## 1. 建立專案資料夾
```bash
mkdir my-ts-project
cd my-ts-project
```

## 2. 初始化 npm 專案
```bash
npm init -y
```

## 3. 安裝必要依賴
```bash
npm install -D typescript tsx @types/node
```

## 4. 初始化 TypeScript 配置
```bash
npx tsc --init
```

## 5. 修改 tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 6. 建立專案結構
```bash
mkdir src
touch src/index.ts
```

## 7. 在 package.json 添加腳本
```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "start": "tsx src/index.ts",
    "build": "tsc"
  }
}
```

## 8. 建立測試檔案
在 src/index.ts 中加入：
```typescript
console.log("Hello, TypeScript with tsx!");
```

## 9. 執行專案
開發模式（支援熱重載）：
```bash
npm run dev
```

直接執行：
```bash
npm start
```

構建專案：
```bash
npm run build
```