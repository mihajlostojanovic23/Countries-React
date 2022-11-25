import { Routes as Switch, Route } from 'react-router-dom';
// Pages
import NotFound from './Home/NotFound/NotFound';
import Home from './Home/Home';
import Country from './Country/Country';

export default function Routes() {
  return (
    <Switch>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Country />} />
    </Switch>
  );
}
