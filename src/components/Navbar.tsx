import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass glass-hover backdrop-blur-md shadow-lg border-b border-primary/10 py-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-end items-center space-x-4">
          <Link to="/" className="px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10">
            Home
          </Link>
          <Link to="/Luyện sâu" className="px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10">
            Practice
          </Link>
          <Link to="/Kiểm tra" className="px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10">
            Exams
          </Link>
          <Link to="/Xếp hạng" className="px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10">
            Leaderboard
          </Link>
          <Link to="/Đăng nhập" className="px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};