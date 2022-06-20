import React from 'react';

import { AuthUser } from './AuthContext';

const AppUser: React.FC = ({ children }: any) => (
  AuthUser({ children })
);

export default AppUser;