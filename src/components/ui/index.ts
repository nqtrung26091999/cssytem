export { default as Button } from './Button'
export { default as Input } from './Input'
export { default as Card } from './Card'
export { default as Label } from './Label'
export { default as Spinner } from './Spinner'


// 🚀 Cách dùng
// import {
//   Button,
//   Card,
//   Input,
//   Label,
// } from '@/components/ui'

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md space-y-5">
//         <h1 className="text-3xl font-bold text-white">
//           Login
//         </h1>

//         <div className="space-y-2">
//           <Label>Email</Label>
//           <Input placeholder="Enter email" />
//         </div>

//         <div className="space-y-2">
//           <Label>Password</Label>
//           <Input
//             type="password"
//             placeholder="Enter password"
//           />
//         </div>

//         <Button fullWidth>
//           Sign In
//         </Button>
//       </Card>
//     </div>
//   )
// }