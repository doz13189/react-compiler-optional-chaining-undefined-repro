"use client";

import { useEffect, useState } from "react";

const historyData = [{ createDate: "2026-05-20" }, { createDate: "2026-05-26" }];

async function mutate(_createDate: string) { }

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
  const [alert, setAlert] = useState(false);
  const data = validateCreateDate(createDate);

  const onClickSubmit = async () => {
    assert(data);
    await mutate(data.createDate);
  };

  useEffect(() => {
    if (!data?.createDate) {
      setAlert(false);
      return;
    }

    setAlert(
      historyData[historyData.length - 1].createDate === data?.createDate,
    );
  }, [data?.createDate]);

  return (
    <>
      <input onChange={(event) => setCreateDate(event.target.value)} value={createDate} />
      <button type="button" disabled={!data || alert} onClick={onClickSubmit}>
        Upload
      </button>
    </>
  );
}
