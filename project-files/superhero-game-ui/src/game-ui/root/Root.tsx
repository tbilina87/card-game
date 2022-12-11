import * as React from "react"
import { GameBoardPage } from "../game-board-page/game-board.page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { AdminPage } from "../admin-page/admin.page";
import { Header } from './header';
export const Root: React.FC = () => {
  return (
    <Router>
      <Header data-testid='header'>
        <li>
          <Link to="/">Game Board</Link>
        </li>
        <li>
          <Link to="/admin">Settings</Link>
        </li>
      </Header>
      <Routes>
        <Route path="/" element={<GameBoardPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  )
}
