import { useState } from 'react'

export default function TodoForm({ onSubmit }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onSubmit(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  )
}