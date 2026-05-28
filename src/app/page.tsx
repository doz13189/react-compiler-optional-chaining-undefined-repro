"use client";

import { useEffect, useState } from "react";

function assert(value: unknown): asserts value {
  if (!value) {
    throw new Error("Assertion failed");
  }
}

function validateCreateDate(createDate: string) {
  if (createDate.trim() === "") {
    return undefined;
  }

  return {
    createDate,
  };
}

export default function Home() {
  const [createDate, setCreateDate] = useState("2026-05-26");
  const data = validateCreateDate(createDate);

  const onClickSubmit = () => {
    assert(data);
    console.log(data.createDate);
  };

  useEffect(() => {
    if (!data?.createDate) {
      return;
    }
  }, [data?.createDate]);

  return (
    <>
      <input onChange={(event) => setCreateDate(event.target.value)} value={createDate} />
      <button type="button" onClick={onClickSubmit}>
        Upload
      </button>
    </>
  );
}
