import SideBar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/TransactionContent';

export default function Transactions() {
  return (
    <section className='transactions overflow-auto'>
      <SideBar activeMenu='transactions' />
      <TransactionContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  // console.log("token: ", token);

  // const jwtToken = Buffer.from(token, "base64").toString("ascii");
  // // console.log("jwtToken: ", jwtToken);
  // const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  // // console.log("payload: ", payload);
  // const userFromPayload: UserTypes = payload.player;
  // const IMG = process.env.NEXT_PUBLIC_IMG;
  // userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  return {
    props: {},
  };
}
