import { Routes as Switch, Route } from 'react-router-dom';

// Pages
import Home from './Home';
import Country from './Country';
import NotFound from '../components/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Country />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
