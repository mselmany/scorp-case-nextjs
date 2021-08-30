import React, { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes, Radius, Shadows } from '../styles/system';
import { Button, Icon, Input, Spacer } from '../styles/shared';
import Modal from '../components/Modal';
import useTranslation from '../hooks/useTranslations';
import useUser from '../hooks/useUser';
import validators from '../helpers/validators';
import useFormData from '../hooks/useFormData';
import PickerWithSearch from '../components/PickerWithSearch';

ContactUs.title = "CONTACT_US";

export default function ContactUs() {
  const translations = useTranslation();

  const { user } = useUser();

  const { data, isValid, onChange } = useFormData({
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: "",
    country: "",
    text: "",
  });

  const onSubmit = useCallback(async () => {
    console.log({ data });
  }, [data]);

  const countryList = useRef([
    {
      label: "COUNTRY.TR",
      id: "TR",
      selected: true
    },
    {
      label: "COUNTRY.US",
      id: "US"
    },
    {
      label: "COUNTRY.GB",
      id: "GB"
    },
    {
      label: "COUNTRY.DE",
      id: "DE"
    },
    {
      label: "COUNTRY.SE",
      id: "SE"
    },
    {
      label: "COUNTRY.KE",
      id: "KE"
    },
    {
      label: "COUNTRY.BR",
      id: "BR"
    },
    {
      label: "COUNTRY.ZW",
      id: "ZW"
    }
  ]);

  const onCountrySelect = useCallback((option) => {
    onChange("country")(option.id, true);
  }, [onChange]);

  return <Center>
    <Modal preventClose title={translations.CONTACT_US}>
      <Input validator={validators.name} placeholder={translations.NAME} value={data.name} onChange={onChange("name")} />
      <Spacer column size={Spacing.xxsmall} />
      <Input type="email" validator={validators.email} placeholder={translations.EMAIL} value={data.email} onChange={onChange("email")} />
      <Spacer column size={Spacing.xxsmall} />
      <Input type="number" validator={validators.phone} placeholder={translations.PHONE} value={data.phone} onChange={onChange("phone")} />
      <Spacer column size={Spacing.xxsmall} />
      <PickerWithSearch list={countryList.current} onSelect={onCountrySelect} />
      <Spacer column size={Spacing.xxsmall} />
      <Input type="textarea" validator={validators.text} placeholder={translations.TEXTAREA} value={data.text} onChange={onChange("text")} />
      <Spacer column size={Spacing.xxsmall} />
      <Submit onClick={onSubmit} disabled={!isValid}>
        {translations.SUBMIT}
        <Icon icon={icons.black.ArrowNext}></Icon>
      </Submit>
    </Modal>
  </Center>;
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Submit = styled(Button)`
  justify-content: center;
  color: ${Colors.color};
  font-weight: bold;
`;
