'use client'
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages]=useState([
    {
      role: 'assistant',
      content: `Hi! I am the SAAFE virtual assistant. How can I help you today?`
    }
  ])
  const [message, setMessage]=useState('')

  return <Box></Box>
}
