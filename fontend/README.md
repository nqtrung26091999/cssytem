# React + TypeScript + Vite Project Structure 🚀

Dự án được xây dựng theo kiến trúc **scalable**, dễ mở rộng, dễ maintain và phù hợp cho cả cá nhân lẫn team.

---

# 📁 Cấu trúc thư mục

```bash
my-app/
│── public/
│── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── constants/
│   ├── styles/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
│── .env
│── package.json
│── tsconfig.json
│── vite.config.ts
📌 Chi tiết từng thư mục
/public

Chứa file public tĩnh.

Ví dụ:

favicon.ico
robots.txt
images/
/src/app

Cấu hình toàn ứng dụng.

app/
├── router.tsx
├── store.ts
└── providers.tsx
router.tsx

Quản lý route:

/login
/dashboard
/products
store.ts

State global (Redux / Zustand)

providers.tsx

Bọc App:

<AuthProvider>
<ThemeProvider>
<QueryClientProvider>
/src/assets

Tài nguyên tĩnh.

assets/
├── images/
├── icons/
└── fonts/
/src/components

Component dùng chung toàn app.

components/
├── ui/
├── layout/
└── common/
ui/

Component cơ bản:

Button.tsx
Input.tsx
Card.tsx
Modal.tsx
layout/

Khung giao diện:

Header.tsx
Sidebar.tsx
Footer.tsx
DashboardLayout.tsx
common/

Component tiện ích:

Loader.tsx
Pagination.tsx
EmptyState.tsx
/src/features

Thư mục quan trọng nhất.

Chia theo nghiệp vụ.

features/
├── auth/
├── users/
├── products/
└── dashboard/

Ví dụ:

features/auth/
├── components/
├── pages/
├── hooks.ts
├── services.ts
└── types.ts

👉 Toàn bộ login/auth nằm chung 1 nơi.

/src/hooks

Custom hooks global.

hooks/
├── useDebounce.ts
├── useToggle.ts
└── useLocalStorage.ts
/src/lib

Config thư viện ngoài.

lib/
├── axios.ts
├── queryClient.ts
└── dayjs.ts
/src/services

API dùng global.

services/
├── auth.api.ts
├── user.api.ts
└── product.api.ts
/src/types

TypeScript types dùng nhiều nơi.

types/
├── user.ts
├── api.ts
└── common.ts
/src/utils

Hàm tiện ích.

utils/
├── formatDate.ts
├── currency.ts
└── slugify.ts
/src/constants

Biến cố định.

constants/
├── routes.ts
├── roles.ts
└── config.ts
/src/styles

CSS global.

styles/
├── index.css
└── theme.css
/src/pages

Page đơn giản.

pages/
├── Home.tsx
└── NotFound.tsx

Nếu project lớn nên chuyển vào features.

📌 Root Files
main.tsx

Điểm khởi động app.

ReactDOM.createRoot(...)
App.tsx

Render Router / Layout / Providers.

🚀 Alias Import
import Button from '@/components/ui/Button'
import LoginPage from '@/features/auth/pages/LoginPage'
⚙️ tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
✅ Ưu điểm kiến trúc này
Dễ tìm file
Dễ mở rộng module mới
Team làm việc tốt
Code sạch
Tái sử dụng cao
Chuẩn enterprise
🔥 Gợi ý stack nên dùng
React
TypeScript
TailwindCSS
React Router
Axios
React Query
Zustand / Redux Toolkit
📌 Khi thêm module mới

Ví dụ:

features/order/
features/report/
features/chat/

Không ảnh hưởng code cũ.

🧠 Quy tắc quan trọng
Component dùng chung ➜ components
Riêng nghiệp vụ ➜ features
API chung ➜ services
Helper ➜ utils
Types ➜ types