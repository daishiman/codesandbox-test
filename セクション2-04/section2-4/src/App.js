import logo from './logo.svg';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJs } from './components/StyledJs';
import { StyledComponents } from './components/StyledComponents';

export default function App() {
  return (
    <div className='App'>
      <InlineStyle />
      <CssModules />
      <StyledJs />
    </div>
  );
}
