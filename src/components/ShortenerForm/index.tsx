"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "../Form";
import { Button } from "../Button";

import { ShortenerFormStatus } from "../ShortenerFormStatus";
import { CreateShortLinkValues, createShortLinkSchema } from "@/utils/validators/createShortLink";

type FormStatus = { url: string; errorMessage: string };
const initialFormStatus = { url: "", errorMessage: "" };

export const ShortenerForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>(initialFormStatus);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateShortLinkValues>({
    resolver: zodResolver(createShortLinkSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setFormStatus(initialFormStatus);
    try {
      const response = await fetch("/api/shortener", { method: "POST", body: JSON.stringify(data) });
      const responseData = await response.json();

      if (response.status !== 201) throw new Error(responseData.message);

      setFormStatus((prev) => ({ ...prev, url: responseData.url }));

      reset({ nickname: "", url: "" });
    } catch (err) {
      if (err instanceof Error) return setFormStatus({ ...formStatus, errorMessage: err.message });

      setFormStatus((prev) => ({ ...prev, errorMessage: "Algum erro ocorreu na criação do Link" }));
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Controller
          control={control}
          name="nickname"
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Form.Label htmlFor="nickname">Apelido</Form.Label>
              <Form.Input type="text" id="nickname" {...field} error={!!errors.nickname} />
              {errors.nickname?.message ? <Form.ErrorWarning message={errors.nickname.message} /> : null}
            </div>
          )}
        />

        <Controller
          control={control}
          name="url"
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Form.Label htmlFor="url">Url</Form.Label>
              <Form.Input id="url" {...field} error={!!errors.url} />
              {errors.url?.message ? <Form.ErrorWarning message={errors.url.message} /> : null}
            </div>
          )}
        />
      </div>

      <Button type="submit">Encurtar</Button>

      <ShortenerFormStatus errorMessage={formStatus.errorMessage} url={formStatus.url} />
    </form>
  );
};
