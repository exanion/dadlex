import { SaveOutlined } from "@ant-design/icons";
import { useAuth } from "@components/AuthContext";
import { LoadingCard } from "@components/LoadingCard";
import { useWindowIsSm } from "@components/ResponsiveContext";
import { UPDATE_NAME } from "@operations/mutations/UpdateName";
import {
  UpdateName,
  UpdateNameVariables
} from "@operations/mutations/__generated__/UpdateName";
import { useStyledMutation } from "@util/mutationWrapper";
import { Button, Card, Descriptions, Input, Tooltip, Typography } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Profile: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const isSm = useWindowIsSm();

  const [name, setName] = useState(user?.name ?? "");
  const [nameIsEdited, setNameIsEdited] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const updateName = useStyledMutation<UpdateName, UpdateNameVariables>(
    UPDATE_NAME,
    {
      statusCallbackFunction: setIsSaving,
      onSuccess: () => setNameIsEdited(false),
      successMessage: "Name aktualisiert!",
    }
  );

  if (!user) {
    if (router.isReady) router.push("");
    return <LoadingCard />;
  }

  return (
    <>
      <Head>
        <title>Mein Profil | DadleX</title>
      </Head>
      <Card title="Profilinformationen">
        <Typography.Title level={3}>{`Howdy, ${user.name}!`}</Typography.Title>
        <Descriptions column={isSm ? 1 : 3}>
          <Descriptions.Item
            label="Anmeldedienst"
            style={{ textTransform: "capitalize" }}
          >
            {user.provider}
          </Descriptions.Item>
          <Descriptions.Item label="Name beim Anmeldedienst">
            <Tooltip
              title={`Eindeutige ID beim Anmeldedienst: ${user.idAtProvider}`}
            >
              {user.nameAtProvider}
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item label="Email">{user.mail}</Descriptions.Item>
          <Descriptions.Item label="Anzeigename">
            <Input.Group>
              <Input
                value={name}
                style={{ width: "calc(100% - 32px)" }}
                onChange={(e) => {
                  if (!nameIsEdited) setNameIsEdited(true);
                  setName(e.target.value);
                }}
                onPressEnter={() => {
                  if (nameIsEdited) updateName({ name });
                }}
              />
              {nameIsEdited ? (
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  loading={isSaving}
                  onClick={() =>
                    updateName({
                      name,
                    })
                  }
                />
              ) : null}
            </Input.Group>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
};

export default Profile;