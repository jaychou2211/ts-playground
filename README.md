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