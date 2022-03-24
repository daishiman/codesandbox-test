import logo from './logo.svg';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJs } from './components/StyledJs';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

export default function App() {
  return (
    <div className='App'>
      <InlineStyle />
      <CssModules />
      <StyledJs />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
