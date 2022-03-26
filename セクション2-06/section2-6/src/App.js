import logo from './logo.svg';
import './App.css';
import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <Router />;
    </UserProvider>
  );
}
