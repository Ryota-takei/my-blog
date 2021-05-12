import { Flex } from "@chakra-ui/layout";
import React, { memo } from "react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { SecondaryButton } from "../atoms/SecondaryButton";

type Props = {
  handleSubmit: () => void;
  status: string;
  display?: string;
  onChangePhoto?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FootButtonLayout: React.VFC<Props> = memo((props) => {
  const { handleSubmit, status, display, onChangePhoto } = props;
  return (
    <Flex bg="gray.50" h="50px" pt="2" justifyContent="flex-end">
      <SecondaryButton
        color="gray.500"
        onChangePhoto={onChangePhoto}
        status="画像投稿"
        display={display}
        type="file"
      />
      <PrimaryButton color="green.400" submit={handleSubmit} status={status} />
    </Flex>
  );
});
