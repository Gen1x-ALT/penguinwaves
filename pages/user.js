// pages/user.js
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { user } = getSession(ctx.req, ctx.res);
    return { props: { user } };
  }
});

const User = ({ user }) => {
  return (
    <pre>
      {JSON.stringify(user, null, 2)}
    </pre>
  );
};

export default User;