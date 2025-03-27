import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CommentList from "./commentList";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CommentList />
  </StrictMode>,
)
