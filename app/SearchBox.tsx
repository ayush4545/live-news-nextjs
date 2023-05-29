'use client'
import { useRouter } from 'next/navigation'
import React, { useState,FormEvent } from 'react'

const SearchBox = () => {
     const [input , setInput]=useState('')
     const router=useRouter()
     const handleSearch=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!input) return
        router.push(`/search?term=${input}`)
     }
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center" onSubmit={handleSearch}>
     <input type="text" 
     className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
      placeholder="Search Keywords..."
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
     <button type="submit" disabled={!input} className="text-orange-400 disabled:text-gray-400">Submit</button>
    </form>
  )
}

export default SearchBox