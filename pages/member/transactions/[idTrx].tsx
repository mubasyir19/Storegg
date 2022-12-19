import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TransactionsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TransactionsDetailProps) {
  const { transactionDetail } = props;
  // console.log('detail: ', transactionDetail);
  return (
    <section className='transactions-detail overflow-auto'>
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  // console.log("params: ", params);
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  // console.log("token: ", token);

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  // console.log("jwtToken: ", jwtToken);
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  // console.log("payload: ", payload);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);
  // console.log("data: ", response);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
