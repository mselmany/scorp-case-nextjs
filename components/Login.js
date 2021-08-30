import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Input, Spacer } from '../styles/shared';
import Modal from './Modal';
import useTranslation from '../hooks/useTranslations';
import Toggle from './Toggle';
import useLanguage from '../hooks/useLanguage';
import useUser from '../hooks/useUser';
import validators from '../helpers/validators';
import useFormData from '../hooks/useFormData';


export default function Login({ close }) {
  const translations = useTranslation();
  const { languages, onLanguageChange } = useLanguage([
    {
      label: "TR",
      code: "tr",
    },
    {
      label: "EN",
      code: "en",
    }
  ]);

  const { user, login } = useUser();

  const { data, isValid, onChange } = useFormData({
    name: user?.name ?? "",
    email: user?.email ?? "",
    password: user?.password ?? "",
  });

  const onSubmit = useCallback(async () => {
    const isOk = await login(data);
    console.log({ isOk });
    if (isOk) {
      close?.();
    }
  }, [login, close, data]);

  return <Modal title={translations.LOGIN} Actions={<Toggle {...{ options: languages, onToggle: onLanguageChange }} />}>
    <Input placeholder={translations.NAME} validator={validators.name} value={data.name} onChange={onChange("name")}></Input>
    <Spacer column size={Spacing.xxsmall} />
    <Input placeholder={translations.EMAIL} validator={validators.email} value={data.email} onChange={onChange("email")}></Input>
    <Spacer column size={Spacing.xxsmall} />
    <Input placeholder={translations.PASSWORD} type="password" validator={validators.password} value={data.password} onChange={onChange("password")}></Input>
    <Spacer column size={Spacing.xxsmall} />
    <Submit onClick={onSubmit} disabled={!isValid}>
      {translations.LOGIN}
      <Icon icon={icons.black.ArrowNext}></Icon>
    </Submit>
  </Modal>;
}

const Submit = styled(Button)`
  justify-content: center;
  color: ${Colors.color};
  font-weight: bold;
`;