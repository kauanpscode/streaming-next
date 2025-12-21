import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getAllSeries } from "@/src/data/series/get-all-series";
import { getSerieById } from "@/src/data/series/get-serie-by-id";
import { TvSeries } from "@/src/domain/types/types";
import { Cover } from "./styles";
import { Modal } from "@/src/components/Modal/Modal";
import { useState } from "react";

type PageProps = {
  serie: TvSeries;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const series = await getAllSeries();

  const paths = series.map((serie) => ({
    params: {
      id: serie.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const id = Number(context.params?.id);

  if (!id) {
    return { notFound: true };
  }

  const serie = await getSerieById(id);

  if (!serie) {
    return { notFound: true };
  }

  return {
    props: {
      serie,
    },
    revalidate: 60,
  };
};

export default function SeriePage({ serie }: PageProps) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <main>
      <div >
          <Cover src={serie.background.formats.medium.url} />
          <p>Clique na capa para ver detalhes (Modal)</p>
      </div>

      <h1>{serie.title}</h1>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ textAlign: 'center' }}>
            <img
              src={serie.background.formats.medium.url}
              alt={serie.title}
              style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }}
            />
            <h2>{serie.title}</h2>
            <p style={{ lineHeight: '1.6' }}>{serie.description}</p>
        </div>
      </Modal>
    </main>
  );
}
