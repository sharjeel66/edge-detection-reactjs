"use client";
import { useEffect, useState } from "react";
import { loadOpenCV } from "@opencvjs/web";

export function useOpenCV() {
  const [cv, setCv] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOpenCV()
      .then((cv) => {
        setCv(cv);
      })
      .finally(() => setLoading(false));
  }, []);

  return { cv, loading };
}
