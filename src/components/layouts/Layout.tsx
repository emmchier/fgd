import { FCC } from '../../types';

export const Layout: FCC = ({ children }) => {
  return (
    <main>
      <div>HEADER</div>
      {children}
      <div>NAVBAR</div>
    </main>
  );
};
