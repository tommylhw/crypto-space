// 'use client'
// import React from 'react'
// import dynamic from "next/dynamic";
// import { useMediaQuery } from 'react-responsive'

// // Components
// import MyDatePicker from '@components/MyDatePicker';

// const DynamicDatepicker = dynamic(() => import("@components/MyDatePicker"), { ssr: false });

// const TestingPage = () => {

//   const isMobile = useMediaQuery({ query: '(max-width: 520px)' });

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <MyDatePicker />
//       <DynamicDatepicker />

//       {isMobile ? <h1>Mobile</h1> : <h1>Desktop</h1>}
//     </main>
//   )
// }

// export default TestingPage;