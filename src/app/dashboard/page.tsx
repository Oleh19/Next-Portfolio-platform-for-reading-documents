import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { FC } from 'react';

const Page: FC = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');

  

  return <div className=''>{user.email}</div>;
};

export default Page;
