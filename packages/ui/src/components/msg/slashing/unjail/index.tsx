import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgUnjail } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Unjail: FC<{ message: MsgUnjail }> = (props) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnjailContent"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />]}
      />
    </Typography>
  );
};

export default Unjail;
