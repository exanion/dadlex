import { useQuery } from "@apollo/client";
import { useAuth } from "@components/AuthContext";
import { ErrorPage } from "@components/ErrorPage";
import { LoadingCard } from "@components/LoadingCard";
import { PollResponses } from "@components/PollDetailPage/PollResponses";
import { PollLinkCard } from "@components/PollLinkCard";
import { GET_MY_POLLS } from "@operations/queries/GetMyPolls";
import { GetMyPolls } from "@operations/queries/__generated__/GetMyPolls";
import { Card, Empty, Popover, Typography } from "antd";
import moment from "moment";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";

const MyPolls: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const { loading, error, data } = useQuery<GetMyPolls>(GET_MY_POLLS, {
    skip: !user,
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
  });

  if (!user)
    return (
      <ErrorPage error="Um die Umfragen anzuzeigen, bei denen du mitgemacht hast, musst du angemeldet sein!" />
    );
  if (error) return <ErrorPage error={error} />;
  if (loading) return <LoadingCard />;

  const polls = data?.getMyPolls.map((p) => ({ ...p })) || [];

  return (
    <>
      <Head>
        <title>Meine Umfragen | DadleX</title>
      </Head>
      <Card title="Meine Umfragen">
        <Typography.Paragraph>
          Das sind alle Umfragen, bei denen du dich eingetragen hast.
        </Typography.Paragraph>
        {!polls?.length ? (
          <Empty description="Du hast bisher an keinen Umfragen teilgenommen" />
        ) : (
          polls
            .sort((b, a) => moment(a.updatedAt).diff(moment(b.updatedAt)))
            .map((p, idx) => (
              <Popover
                key={idx}
                placement="bottom"
                overlayStyle={{ maxWidth: "70%" }}
                autoAdjustOverflow={false}
                content={<PollResponses poll={p} readOnly />}
              >
                <PollLinkCard poll={p} router={router} />
              </Popover>
            ))
        )}
      </Card>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "mypolls"])),
    },
  };
}

export default MyPolls;
