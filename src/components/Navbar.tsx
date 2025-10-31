import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass glass-hover backdrop-blur-md border-b border-primary/10 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Luyện Thi Toán 12
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/practice" className="text-muted-foreground hover:text-primary transition-colors">
              Practice
            </Link>
            <Link to="/exams" className="text-muted-foreground hover:text-primary transition-colors">
              Exams
            </Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">
              Leaderboard
            </Link>
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
              Login
            </Link>
          </div>
          {/* Mobile menu button - Add hamburger icon and menu if needed */}
        </div>
      </div>
    </nav>
  );
};