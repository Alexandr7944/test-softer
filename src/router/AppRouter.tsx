import { Routes, Route } from 'react-router-dom'
import { routes } from './routes';
import { Outh } from '../pages/Outh';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="test-softer">
        {
          routes.map((route) => 
            <Route
              key={route.path}
              path={route.path}
              element={<route.element/>}
            />
          )
        }
      </Route>
      <Route  path='/*' element={<Outh />} />
    </Routes>
  )
}
